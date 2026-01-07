from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q

from .services import is_email, is_phone, otp_generator
from .models import OTP, User
# Create your views here.


@api_view(["GET"])
def otp_sender(req):
    identifier = req.GET.get("identifier")

    otp = OTP.objects.create(identifier=identifier, code=otp_generator())

    if is_email(identifier):
        return Response({"data": {"sender_email": identifier, "code": otp.code}})

    elif is_phone(identifier):
        return Response({"data": {"sender_phone": identifier, "code": otp.code}})

    else:
        return Response({"err": "Please a correct value"},
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def has_user(req):
    identifier = req.GET.get("identifier")

    if not identifier:
        return Response({"error": "you must send a query param : identifier=(email | phone)"}, status=status.HTTP_400_BAD_REQUEST)

    exists = User.objects.filter(Q(email=identifier) |
                               Q(phone_number=identifier)).exists()

    return Response({"exists": True}, status=status.HTTP_200_OK) if exists else Response({"exists": False}, status=status.HTTP_404_NOT_FOUND)
