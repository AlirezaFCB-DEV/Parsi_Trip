from django.urls import path 
from . import views

urlpatterns = [
    path("otp-sender/" , view=views.otp_sender , name="otp_sender")
]