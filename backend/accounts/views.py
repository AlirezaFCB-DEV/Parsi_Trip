from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated 

from .models import User
from .serializers import UserSerializer
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
             