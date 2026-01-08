from django.contrib.auth import authenticate , login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q

from .services import is_email, is_phone, otp_generator
from .models import OTP, User
from .serializers import UserSerializer
# Create your views here.


@api_view(["GET"])
def otp_sender(req):
    identifier = req.GET.get("identifier")
    
    if not identifier :
        return Response({"error" : "you must send a query param : identifier:(email or phone)"} , status=status.HTTP_400_BAD_REQUEST)

    otp = OTP.objects.create(identifier=identifier, code=otp_generator())

    if is_email(identifier):
        return Response({"data": {"sender_email": identifier, "code": otp.code}})

    elif is_phone(identifier):
        return Response({"data": {"sender_phone": identifier, "code": otp.code}})

    else:
        return Response({"err": "identifier is incorrect!!"},
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def has_user(req):
    identifier = req.GET.get("identifier")

    if not identifier:
        return Response({"error": "you must send a query param : identifier=(email | phone)"}, status=status.HTTP_400_BAD_REQUEST)

    if is_email(identifier) or is_phone(identifier) :
        exists = User.objects.filter(Q(email=identifier) |
                               Q(phone_number=identifier)).exists()
    else :
        return Response({"error" : "identifier is incorrect!!"} , status=status.HTTP_400_BAD_REQUEST)

    return Response({"exists": True}, status=status.HTTP_200_OK) if exists else Response({"exists": False}, status=status.HTTP_404_NOT_FOUND)

@api_view(["POST"])
def login_view(req) :
    identifier = req.data.get("identifier")
    otp = req.data.get("otp")
    password= req.data.get("password")
    
    if not identifier :
        return Response({"error" : "Identifier is required!"} , status=status.HTTP_400_BAD_REQUEST)
    
    if not otp and not password :
        return Response({"error" : "Either OTP or password is required"} , status=status.HTTP_400_BAD_REQUEST)
    
    if not (is_email(identifier) or  is_phone(identifier)) :
        return Response({"error" : "Identifier must be a valid email or phone."} , status=status.HTTP_400_BAD_REQUEST)
    
    if otp:
        auth_result = authenticate(req , identifier=identifier , otp=otp )
        error_msg = "Invalid OTP"
    else :
        auth_result = authenticate(req , identifier=identifier , password=password )
        error_msg = "Invalid Password"
    
    
    if auth_result :
        login(req , auth_result)
        serializer = UserSerializer(auth_result)
        return Response({"msg" : "user logged successfully" , "user" : serializer.data} , status=status.HTTP_200_OK)
    
    return Response({"error" : error_msg} , status=status.HTTP_400_BAD_REQUEST)