import phonenumbers
from rest_framework import serializers

from .models import Address

class AddressSerializer(serializers.ModelSerializer) :
    
    owner = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta :
        model = Address
        fields = "__all__"
                
    def create(self, validated_data):
        owner = self.context["request"].user
        
        validated_data["phone_number"] = owner.phone_number
        validated_data["owner"] = owner
        
        if validated_data.get("is_default" , False) :
            Address.objects.filter(owner=owner , is_default=True).update(is_default=False)
        
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        owner = self.context["request"].user
        
        if validated_data.get("is_default" , False) :
            Address.objects.filter(owner=owner , is_default=True).exclude(id=instance.id).update(is_default=False)
            
        return super().update(instance, validated_data)
    
    def validate_phone_number(self,  value : str) :
        if not value.startswith("+") :
            raise serializers.ValidationError("Phone number must be in international format (+)")
        
        try :
            phone_number = phonenumbers.parse(value)
        except phonenumbers.NumberParseException :
                raise serializers.ValidationError("Phone number could be not parsed")
            
        if not phonenumbers.is_possible_number(phone_number) :
            raise serializers.ValidationError("Phone Number structure is invalid")
        
        if not phonenumbers.is_valid_number(phone_number) :
            raise serializers.ValidationError("Phone number is not valid")
        
        normalize_number = phonenumbers.format_number(phone_number , phonenumbers.PhoneNumberFormat.E164)
        
        return normalize_number
    