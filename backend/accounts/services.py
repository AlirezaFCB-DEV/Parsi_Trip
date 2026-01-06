import re
import random
from datetime import timedelta
from django.utils import timezone

from .models import OTP

def is_email (email) :
    # email pattern
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern , email) is not None

def is_phone(phone_number) :
    pattern = r"^\+?\d{10,15}$"
    return re.match(pattern , phone_number) is not None

def otp_generator() :
        otp = str(random.randint(100000 , 999999))
        return otp
    
def verify_otp(identifier , otp_code) :
        try :
            otp_record = OTP.objects.get(identifier=identifier)
            
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