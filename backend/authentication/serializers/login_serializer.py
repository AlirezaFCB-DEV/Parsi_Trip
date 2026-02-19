import phonenumbers
from rest_framework import serializers


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=False)
    phone_number = serializers.CharField(max_length=15, required=False)
    otp = serializers.RegexField(regex=r"^\d{6}$", required=False, error_messages={
                                 "invalid": "Enter a valid 6-digits verification code."})
    password = serializers.CharField(
        write_only=True, style={"input_type": "password"}, required=False)

    def validate(self, attrs):
        email = attrs.get("email")
        phone_number = attrs.get("phone_number")
        otp = attrs.get("otp")
        password = attrs.get("password")

        if not email and not phone_number:
            raise serializers.ValidationError(
                "Either email or phone_number must be provided.")

        if email and phone_number:
            raise serializers.ValidationError(
                "Provide either email or phone_number.")

        if email:
            if not password:
                raise serializers.ValidationError(
                    {"password": "Password is required for email login."})

        elif phone_number:
            if not otp:
                raise serializers.ValidationError(
                    {"otp": "OTP is required for phone number login."})

        return attrs

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
