from .models import OTP
from django.db.models import Q
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from accounts.serializers import UserSerializer
from rest_framework.generics import CreateAPIView
from config.services.otp_generator import otp_generator
from .serializers.login_serializer import LoginSerializer
from .serializers.signup_serializer import SignupSerializer
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

class SignupView(CreateAPIView) :
    serializer_class = SignupSerializer
    
    def perform_create(self, serializer):
        user = serializer.save()
        
        login(self.request , user , backend=".backends.email_or_phone.EmailOrPhoneBackend")
        