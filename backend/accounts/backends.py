from django.contrib.auth.backends import ModelBackend
from datetime import timedelta
from django.utils import timezone
from django.db.models import Q

from .models import User , OTP

class EmailOrPhoneBackend(ModelBackend) :
    def authenticate(self, request, identifier = None , password = None, otp = None , **kwargs):
        
        username = kwargs.get("username")
        lookup_id = identifier or username
        
        if not lookup_id :
             return None
        
        try :
            user = User.objects.get(Q(email = lookup_id) | Q(phone_number= lookup_id))
            
            if password :
                return user if user.check_password(password) else None
            
            if otp :
                return user if self.verify_otp(user , otp) else None
        
        except User.DoesNotExist :
            return None
    
    def verify_otp(self , user_obj , otp_code) :
        try :
            otp_record = OTP.objects.get(user=user_obj)
            
            if otp_record.code == otp_code :
                
                if otp_record.created_at + timedelta(minutes=2) < timezone.now() or otp_record.attempts > 3:
                    otp_record.delete()
                    return False
                
                otp_record.delete()
                return True     
            
            else :
                otp_record.attempts += 1
                otp_record.save()
                
                return False
            
        except OTP.DoesNotExist :
                return False
            
        return False   