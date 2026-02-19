from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient

from authentication.models import OTP
from authentication.serializers.identifier_serializer import IdentifierSerializer
from authentication.serializers.login_serializer import LoginSerializer
from authentication.serializers.signup_serializer import SignupSerializer

User = get_user_model()


class OTPModelTests(TestCase):
    def test_str_representation(self):
        otp = OTP.objects.create(identifier="+14155552671", code="123456")
        self.assertEqual(str(otp), "+14155552671 - 123456")

    def test_default_attempts_is_zero(self):
        otp = OTP.objects.create(identifier="+14155552671", code="123456")
        self.assertEqual(otp.attempts, 0)

    def test_created_at_is_set(self):
        otp = OTP.objects.create(identifier="+14155552671", code="123456")
        self.assertIsNotNone(otp.created_at)


class IdentifierSerializerTests(TestCase):
    def test_requires_email_or_phone(self):
        serializer = IdentifierSerializer(data={})
        self.assertFalse(serializer.is_valid())
        self.assertIn("non_field_errors", serializer.errors)

    def test_accepts_valid_email(self):
        serializer = IdentifierSerializer(data={"email": "user@example.com"})
        self.assertTrue(serializer.is_valid(), serializer.errors)

    def test_accepts_and_normalizes_valid_phone(self):
        serializer = IdentifierSerializer(data={"phone_number": "+14155552671"})
        self.assertTrue(serializer.is_valid(), serializer.errors)
        self.assertEqual(serializer.validated_data["phone_number"], "+14155552671")

    def test_rejects_phone_without_plus_prefix(self):
        serializer = IdentifierSerializer(data={"phone_number": "14155552671"})
        self.assertFalse(serializer.is_valid())
        self.assertIn("phone_number", serializer.errors)


class LoginSerializerTests(TestCase):
    def test_requires_email_or_phone(self):
        serializer = LoginSerializer(data={})
        self.assertFalse(serializer.is_valid())
        self.assertIn("non_field_errors", serializer.errors)

    def test_rejects_email_and_phone_together(self):
        serializer = LoginSerializer(
            data={
                "email": "user@example.com",
                "phone_number": "+14155552671",
                "password": "strongPass123!",
            }
        )
        self.assertFalse(serializer.is_valid())
        self.assertIn("non_field_errors", serializer.errors)

    def test_email_login_requires_password(self):
        serializer = LoginSerializer(data={"email": "user@example.com"})
        self.assertFalse(serializer.is_valid())
        self.assertIn("password", serializer.errors)

    def test_phone_login_requires_otp(self):
        serializer = LoginSerializer(data={"phone_number": "+14155552671"})
        self.assertFalse(serializer.is_valid())
        self.assertIn("otp", serializer.errors)

    def test_accepts_email_password_login_payload(self):
        serializer = LoginSerializer(
            data={"email": "user@example.com", "password": "strongPass123!"}
        )
        self.assertTrue(serializer.is_valid(), serializer.errors)

    def test_accepts_phone_otp_login_payload(self):
        serializer = LoginSerializer(data={"phone_number": "+14155552671", "otp": "123456"})
        self.assertTrue(serializer.is_valid(), serializer.errors)


class SignupSerializerTests(TestCase):
    def test_creates_user_with_hashed_password(self):
        serializer = SignupSerializer(
            data={
                "email": "newuser@example.com",
                "phone_number": "+14155552671",
                "user_fullname": "New User",
                "password": "StrongPass123!",
            }
        )
        self.assertTrue(serializer.is_valid(), serializer.errors)

        user = serializer.save()
        self.assertEqual(user.email, "newuser@example.com")
        self.assertNotEqual(user.password, "StrongPass123!")
        self.assertTrue(user.check_password("StrongPass123!"))

    def test_rejects_weak_password(self):
        serializer = SignupSerializer(
            data={
                "email": "newuser@example.com",
                "phone_number": "+14155552671",
                "user_fullname": "New User",
                "password": "123",
            }
        )
        self.assertFalse(serializer.is_valid())
        self.assertIn("password", serializer.errors)


class OTPSenderViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = "/auth/send-otp/"

    def test_send_otp_with_email_creates_record(self):
        payload = {"email": "user@example.com"}

        response = self.client.post(self.url, payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["details"]["sender_identifier"], payload["email"])
        self.assertTrue(OTP.objects.filter(identifier=payload["email"]).exists())

    def test_send_otp_without_identifier_returns_400(self):
        response = self.client.post(self.url, {}, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("non_field_errors", response.data)


class LoginViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = "/auth/login/"
        self.user = User.objects.create_user(
            email="login@example.com",
            phone_number="+14155552671",
            user_fullname="Login User",
            password="StrongPass123!",
        )

    def test_login_with_email_password_success(self):
        payload = {"email": "login@example.com", "password": "StrongPass123!"}

        response = self.client.post(self.url, payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["user"], "Logged successfully.")
        self.assertEqual(response.data["details"]["email"], self.user.email)

    def test_login_with_wrong_password_returns_invalid_credentials(self):
        payload = {"email": "login@example.com", "password": "WrongPass123!"}

        response = self.client.post(self.url, payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["error"], "Invalid Credentials.")

    def test_login_with_phone_and_valid_otp_success(self):
        OTP.objects.create(identifier="+14155552671", code="123456")
        payload = {"phone_number": "+14155552671", "otp": "123456"}

        response = self.client.post(self.url, payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["details"]["phone_number"], "+14155552671")

    def test_login_with_phone_and_invalid_otp_returns_invalid_credentials(self):
        OTP.objects.create(identifier="+14155552671", code="123456")
        payload = {"phone_number": "+14155552671", "otp": "000000"}

        response = self.client.post(self.url, payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data["error"], "Invalid Credentials.")
