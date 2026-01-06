from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .services import is_email, is_phone , otp_generator
from .models import OTP

# Create your views here.


@api_view(["GET"])
def otp_sender(req):
    identifier = req.GET.get("identifier")


    otp = OTP.objects.create(identifier = identifier, code = otp_generator())

    if is_email(identifier):
        return Response({"data": {"sended_email": identifier, "code": otp.code}})

    elif is_phone(identifier):
        return Response({"data": {"sended_phone": identifier, "code": otp.code}})

    else:
        return Response({"err": "Please a correct value"},
                        status=status.HTTP_400_BAD_REQUEST)
