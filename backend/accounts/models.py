import random

from django.db import models
from django.contrib.auth.models import AbstractBaseUser , PermissionsMixin
from .managers import CustomUserManager

# Create your models here.

class User (AbstractBaseUser , PermissionsMixin) :
    email =  models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15 ,  unique=True)
    user_fullname = models.CharField(max_length=150)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = CustomUserManager()
    
    USERNAME_FIELD = "email"
    
    REQUIRED_FIELDS = ["phone_number" , "user_fullname"]
    
    def __str__(self):
        return self.email
    

class OTP (models.Model) :
    identifier = models.CharField(max_length=100)
    code = models.CharField(max_length=6)
    attempts = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.identifier} - {self.code}"
    
class Address(models.Model) :
    user = models.ForeignKey("User" , on_delete=models.CASCADE , related_name="addresses")
    country = models.CharField(max_length=20)
    province = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    full_address = models.TextField()
    postal_code = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=15 , null=True , blank=True)
    is_default = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user} - {self.country}-{self.province}-{self.city}"