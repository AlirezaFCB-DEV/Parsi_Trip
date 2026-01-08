from django.contrib.auth.models import BaseUserManager

class CustomUserManager(BaseUserManager) :
    def create_user(self , email , phone_number , user_fullname  , password = None) :
        if not email or not phone_number :
            raise ValueError("You must send an email and a phone number")
        
        user = self.model(email = self.normalize_email(email) , phone_number=phone_number , user_fullname=user_fullname)
        
        user.set_password(password)
        
        user.save(using=self._db) 
        
        return user
    
    def create_superuser(self , email , phone_number , user_fullname , password=None) :
        
        user = self.create_user(email=email , phone_number=phone_number , user_fullname=user_fullname  , password=password)
        
        user.is_staff = True
        user.is_superuser = True
        
        user.save(using=self._db)
        
        return user