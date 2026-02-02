import phonenumbers
from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Address

class UserSerializer(serializers.ModelSerializer) :
    
    class Meta:
        model = get_user_model()
        fields = ["user_fullname" , "email" , "phone_number"]
        
class AddressSerializer(serializers.ModelSerializer) :
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta :
        model = Address
        fields = "__all__"
        
    def create(self, validated_data):
        user = self.context["request"].user
        
        validated_data["phone_number"] = user.phone_number
        validated_data["user"] = user
        
        return super.create(validated_data)
    
    def validate_phone_number(self,  value : str) :
        if not value.startswith("+") :
            raise ValueError("Phone number must be in international format (+)")
        
        try :
            phone_number = phonenumbers.parse(value)
        except phonenumbers.NumberParseException :
                raise serializers.ValidationError("Phone number could be parsed")
            
        if not phonenumbers.is_possible_number(phone_number) :
            raise serializers.ValidationError("Phone Number structure is invalid")
        
        if not phonenumbers.is_valid_number(phone_number) :
            raise serializers.ValidationError("Phone number is not valid")
        
        normalize_number = phonenumbers.format_number(phone_number , phonenumbers.PhoneNumberFormat.E164)
        
        return normalize_number
        
        
            