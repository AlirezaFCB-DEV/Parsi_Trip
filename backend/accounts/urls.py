from django.urls import path 
from . import views

urlpatterns = [
    path("otp-sender/" , view=views.otp_sender , name="otp_sender"),
    path("has-user/" , views.has_user , name="has_user"),
    path("login/" , views.login_view , name="login_view")
]