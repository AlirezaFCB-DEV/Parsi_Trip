from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Address
from .serializers import AddressSerializer

# Create your views here.
class AddressViewSet(viewsets.ModelViewSet):        
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Address.objects.filter(owner=self.request.user)
    
