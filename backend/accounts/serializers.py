import phonenumbers
from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Address

class UserSerializer(serializers.ModelSerializer) :
    class Meta:
        model = get_user_model()
        fields = ["user_fullname" , "email" , "phone_number"]
        