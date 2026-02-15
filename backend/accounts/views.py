import phonenumbers
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated 

from .models import User
from .serializers import UserSerializer
from authentication.serializers.identifier_serializer import IdentifierSerializer
# Create your views here.

class UserViewSet(viewsets.ModelViewSet) :
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
     
    @action(["GET"] , detail=True )
    def addresses(self , req : Request , *args , **kwargs) :
        user = self.get_object()
        qs = user.addresses.all()
        
        serializer = AddressSerializer(qs , many=True)
        
        return Response({"addresses" : serializer.data})
    
    @action(methods=["POST"] , detail=False)
    def exists (self , req : Request) :
        serializer = self.get_serializer(data=req.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data.get("email")
        phone_number = serializer.validated_data.get("phone_number")
        
        query = Q()
        if email : 
            query |= Q(email=email)
            
        if phone_number :
            query |= Q(phone_number=phone_number)
            
        exists = User.objects.filter(query).exists()
        
        return Response({"exists" : exists})
        
             
    def get_serializer_class(self):
        if self.action == "exists" :
            return IdentifierSerializer
        
        return UserSerializer