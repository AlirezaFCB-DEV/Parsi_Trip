import phonenumbers
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, style={"input_type": "password"})

    class Meta:
        model = User
        fields = ["email", "phone_number", "user_fullname", "password"]

    def validate_password(self, value):
        validate_password(value)
        return value

    def validate_phone_number(self, value):
        if not value.startswith("+"):
            raise serializers.ValidationError(
                "Phone number must be in international format (+).")

        try:
            phone_number = phonenumbers.parse(value)
        except phonenumbers.NumberParseException:
            raise serializers.ValidationError(
                "Phone number could be not parsed.")
        if not phonenumbers.is_possible_number(phone_number):
            raise serializers.ValidationError(
                "Phone Number structure is invalid.")
        if not phonenumbers.is_valid_number(phone_number):
            raise serializers.ValidationError("Phone number is not valid.")
        normalize_number = phonenumbers.format_number(
            phone_number, phonenumbers.PhoneNumberFormat.E164)
        return normalize_number

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)