from django.db import models
from django.contrib.auth.models import AbstractBaseUser , PermissionsMixin

# Create your models here.

class User (AbstractBaseUser , PermissionsMixin) :
    email =  models.EmailField(unique=True)
    phone_number = models.CharField(max_length=11 ,  unique=True)
    user_fullname = models.CharField(max_length=150)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    
    USERNAME_FIELD = email
    
    REQUIRED_FIELDS = [email , phone_number]
    
    def __str__(self):
        return self.email
    

