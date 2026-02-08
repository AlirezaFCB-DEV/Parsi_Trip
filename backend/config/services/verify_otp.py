from datetime import timedelta
from django.utils import timezone

from ...accounts.models import OTP

def verify_otp(identifier , otp_code) :
        try :
            otp_record = OTP.objects.get(identifier=identifier)
            
            if otp_record.code == otp_code :
                
                if otp_record.created_at + timedelta(minutes=2) < timezone.now():
                    otp_record.delete()
                    return False
                
                otp_record.delete()
                return True     
            
            else :
                otp_record.attempts += 1
                otp_record.save()
                
                if otp_record.attempts >= 3:
                    otp_record.delete()
                
                return False
            
        except OTP.DoesNotExist :
                return False