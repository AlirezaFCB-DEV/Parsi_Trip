from django.urls import path 
from . import views

urlpatterns = [
    path("send-otp/" , views.OTPSender.as_view()),
    path("login/" , views.LoginView.as_view()),
]