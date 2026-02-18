from datetime import timedelta
from django.utils import timezone

from authentication.models import OTP


def verify_otp(identifier, otp_code):
    try:
        otp_record = OTP.objects.filter(
            identifier=identifier).latest("created_at")

    except OTP.DoesNotExist:
        return False

    if otp_record.created_at + timedelta(minutes=2) < timezone.now():
        otp_record.delete()
        return False

    if otp_record.code == otp_code:

        otp_record.delete()
        return True

    otp_record.attempts += 1
    otp_record.save()

    if otp_record.attempts >= 3:
        otp_record.delete()

    return False
