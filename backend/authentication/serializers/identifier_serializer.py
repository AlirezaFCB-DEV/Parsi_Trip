import phonenumbers
from rest_framework import serializers


class IdentifierSerializer(serializers.Serializer):
    phone_number = serializers.CharField(
        max_length=30, required=False, allow_blank=True)
    email = serializers.EmailField(required=False, allow_blank=True)

    def validate(self, attrs):
        phone = attrs.get("phone_number")
        email = attrs.get("email")

        if not email and not phone:
            raise serializers.ValidationError(
                "At least one field must be submitted (email, phone number).")

        return attrs

    def validate_phone_number(self, value: str):
        if not value.startswith("+"):
            raise serializers.ValidationError(
                "Phone number must be international format (+)")

        try:
            phone_number = phonenumbers.parse(value)
        except phonenumbers.NumberParseException:
            raise serializers.ValidationError(
                "Phone number could not be parsed")

        if not phonenumbers.is_possible_number(phone_number):
            raise serializers.ValidationError(
                "Phone number structure is invalid")

        if not phonenumbers.is_valid_number(phone_number):
            raise serializers.ValidationError("Phone number is not valid")

        normalize_number = phonenumbers.format_number(
            phone_number, num_format=phonenumbers.PhoneNumberFormat.E164)

        return normalize_number
