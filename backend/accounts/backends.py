from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from ..config.services.verify_otp import verify_otp

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
                return user if verify_otp(lookup_id , otp) else None
        
        except User.DoesNotExist :
            return None
    
    
            