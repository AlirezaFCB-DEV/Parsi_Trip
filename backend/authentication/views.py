from .models import OTP
from django.db.models import Q
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from accounts.serializers import UserSerializer
from rest_framework.exceptions import ValidationError
from config.services.otp_generator import otp_generator
from .serializers.login_serializer import LoginSerializer
from .serializers.identifier_serializer import IdentifierSerializer
from django.contrib.auth import authenticate, login , get_user_model


User = get_user_model()

# Create your views here.

class OTPSender(APIView) :
    def post(self , req : Request) :
        serializer = IdentifierSerializer(data=req.data)
        serializer.is_valid(raise_exception=True)
        
        identifier = (serializer.validated_data.get("email") or serializer.validated_data.get("phone_number"))
    
        otp = OTP.objects.create(identifier=identifier , code=otp_generator())
        
        return Response({"msg" : "OTP sended successfully" , "details" : {
            "sender_identifier" :identifier , "code" : otp.code
        }} , status=201)
        
# @api_view(["POST"])
# def login_view(req):
#     identifier = req.data.get("identifier")
#     otp = req.data.get("otp")
#     password = req.data.get("password")

#     if not identifier:
#         return Response({"error": "Identifier is required!"}, status=status.HTTP_400_BAD_REQUEST)

#     if not otp and not password:
#         return Response({"error": "Either OTP or password is required"}, status=status.HTTP_400_BAD_REQUEST)

#     if not (is_email(identifier) or is_phone(identifier)):
#         return Response({"error": "Identifier must be a valid email or phone."}, status=status.HTTP_400_BAD_REQUEST)

#     if otp:
#         auth_result = authenticate(req, identifier=identifier, otp=otp)
#         error_msg = "Invalid OTP"
#     else:
#         auth_result = authenticate(
#             req, identifier=identifier, password=password)
#         error_msg = "Invalid Password"

#     if auth_result:
#         login(req, auth_result)
#         serializer = UserSerializer(auth_result)
#         return Response({"msg": "user logged successfully", "user": serializer.data}, status=status.HTTP_200_OK)

#     return Response({"error": error_msg}, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView) :
    def post(self , req : Request) :
        
        login_serializer = LoginSerializer(data=req.data)
        
        login_serializer.is_valid(raise_exception=True)
        
        data = login_serializer.validated_data
        
        identifier = (data.get("phone_number") or data.get("email"))
        password = data.get("password")
        otp = data.get("otp")
        
        auth_result = authenticate(req , identifier = identifier , password=password , otp=otp)
        
        if not auth_result :
            return Response({"error" : "Invalid Credentials."} , status=status.HTTP_400_BAD_REQUEST)
        
        login(req , auth_result)
        user_serializer = UserSerializer(auth_result)
        return Response({"user" : "Logged successfully." , "details" : user_serializer.data})
            

# @api_view(["POST"])
# def signup_view(req):
#     email = req.data.get("email")
#     phone_number = req.data.get("phone_number")
#     user_fullname = req.data.get("user_fullname")
#     password = req.data.get("password")

#     if not email:
#         return Response({"error": "you must send email"}, status=status.HTTP_400_BAD_REQUEST)
#     elif not phone_number:
#         return Response({"error": "you must send phone number"}, status=status.HTTP_400_BAD_REQUEST)
#     elif not user_fullname:
#         return Response({"error": "you must send user fullname"}, status=status.HTTP_400_BAD_REQUEST)
#     elif not password:
#         return Response({"error": "you must send password"}, status=status.HTTP_400_BAD_REQUEST)

#     if not is_email(email):
#         return Response({"error": "you must send a valid email"}, status=status.HTTP_400_BAD_REQUEST)
#     elif not is_phone(phone_number):
#         return Response({"error": "you must send a valid phone"}, status=status.HTTP_400_BAD_REQUEST)
#     elif len(user_fullname) > 150:
#         return Response({"error": "user fullname must be lower than 150 characters"}, status=status.HTTP_400_BAD_REQUEST)
#     elif len(password) < 8:
#         return Response({"error": "password must be longer than 8 characters"}, status=status.HTTP_400_BAD_REQUEST)

#     user = User.objects.create_user(
#         email=email, phone_number=phone_number, user_fullname=user_fullname, password=password)

#     serializer = UserSerializer(user)

#     return Response({"msg": "user created successfully", "user": serializer.data}, status=status.HTTP_200_OK)