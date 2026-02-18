from datetime import timedelta

from django.test import TestCase
from django.utils import timezone
from rest_framework.exceptions import ValidationError

from authentication.models import OTP
from authentication.serializers.identifier_serializer import IdentifierSerializer
from authentication.serializers.login_serializer import LoginSerializer
from config.services.otp_generator import otp_generator
from config.services.verify_otp import verify_otp


class OTPModelTests(TestCase):
    def test_str_representation(self):
        otp = OTP.objects.create(identifier="+14155552671", code="123456")
        self.assertEqual(str(otp), f"{otp.identifier} - {otp.code}")


class OTPGeneratorTests(TestCase):
    def test_generates_six_digit_string(self):
        code = otp_generator()
        self.assertEqual(len(code), 6)
        self.assertTrue(code.isdigit())


class VerifyOtpTests(TestCase):
    def test_returns_false_when_no_record(self):
        self.assertFalse(verify_otp("+14155552671", "123456"))

    def test_accepts_latest_otp_only(self):
        identifier = "+14155552671"
        old = OTP.objects.create(identifier=identifier, code="111111")
        old.created_at = timezone.now() - timedelta(minutes=1)
        old.save(update_fields=["created_at"])
        newest = OTP.objects.create(identifier=identifier, code="222222")

        self.assertTrue(verify_otp(identifier, "222222"))
        self.assertFalse(OTP.objects.filter(id=newest.id).exists())

    def test_rejects_expired_otp(self):
        identifier = "+14155552671"
        otp = OTP.objects.create(identifier=identifier, code="123456")
        otp.created_at = timezone.now() - timedelta(minutes=3)
        otp.save(update_fields=["created_at"])

        self.assertFalse(verify_otp(identifier, "123456"))
        self.assertFalse(OTP.objects.filter(id=otp.id).exists())

    def test_incorrect_code_increments_attempts(self):
        identifier = "+14155552671"
        otp = OTP.objects.create(identifier=identifier, code="123456")

        self.assertFalse(verify_otp(identifier, "000000"))
        otp.refresh_from_db()
        self.assertEqual(otp.attempts, 1)

    def test_deletes_after_three_attempts(self):
        identifier = "+14155552671"
        otp = OTP.objects.create(identifier=identifier, code="123456", attempts=2)

        self.assertFalse(verify_otp(identifier, "000000"))
        self.assertFalse(OTP.objects.filter(id=otp.id).exists())

    def test_correct_code_deletes_record(self):
        identifier = "+14155552671"
        otp = OTP.objects.create(identifier=identifier, code="123456")

        self.assertTrue(verify_otp(identifier, "123456"))
        self.assertFalse(OTP.objects.filter(id=otp.id).exists())


class IdentifierSerializerTests(TestCase):
    def test_requires_at_least_one_field(self):
        serializer = IdentifierSerializer(data={})
        self.assertFalse(serializer.is_valid())
        self.assertIn("non_field_errors", serializer.errors)

    def test_valid_email_only(self):
        serializer = IdentifierSerializer(data={"email": "test@example.com"})
        self.assertTrue(serializer.is_valid(), serializer.errors)

    def test_valid_phone_only_normalizes(self):
        serializer = IdentifierSerializer(data={"phone_number": "+14155552671"})
        self.assertTrue(serializer.is_valid(), serializer.errors)
        self.assertEqual(serializer.validated_data["phone_number"], "+14155552671")

    def test_invalid_phone_rejected(self):
        serializer = IdentifierSerializer(data={"phone_number": "123"})
        self.assertFalse(serializer.is_valid())
        self.assertIn("phone_number", serializer.errors)


class LoginSerializerTests(TestCase):
    def test_requires_email_or_phone(self):
        serializer = LoginSerializer(data={})
        self.assertFalse(serializer.is_valid())
        self.assertIn("non_field_errors", serializer.errors)

    def test_rejects_both_email_and_phone(self):
        serializer = LoginSerializer(data={
            "email": "test@example.com",
            "phone_number": "+14155552671",
        })
        self.assertFalse(serializer.is_valid())
        self.assertIn("non_field_errors", serializer.errors)

    def test_email_requires_password(self):
        serializer = LoginSerializer(data={"email": "test@example.com"})
        self.assertFalse(serializer.is_valid())
        self.assertIn("password", serializer.errors)

    def test_email_with_password_valid(self):
        serializer = LoginSerializer(data={
            "email": "test@example.com",
            "password": "pass1234",
        })
        self.assertTrue(serializer.is_valid(), serializer.errors)

    def test_phone_requires_otp(self):
        serializer = LoginSerializer(data={"phone_number": "+14155552671"})
        self.assertFalse(serializer.is_valid())
        self.assertIn("otp", serializer.errors)

    def test_phone_invalid_otp(self):
        identifier = "+14155552671"
        OTP.objects.create(identifier=identifier, code="123456")
        serializer = LoginSerializer(data={
            "phone_number": identifier,
            "otp": "000000",
        })
        self.assertFalse(serializer.is_valid())
        self.assertIn("non_field_errors", serializer.errors)

    def test_phone_valid_otp(self):
        identifier = "+14155552671"
        OTP.objects.create(identifier=identifier, code="123456")
        serializer = LoginSerializer(data={
            "phone_number": identifier,
            "otp": "123456",
        })
        self.assertTrue(serializer.is_valid(), serializer.errors)
