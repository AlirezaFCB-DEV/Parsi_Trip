from django.urls import path , include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register(r"users" , views.UserViewSet)

urlpatterns = [
    path("" , include(router.urls)),
    path("otp-sender/" , view=views.otp_sender , name="otp_sender"),
    path("has-user/" , views.has_user , name="has_user"),
    path("login/" , views.login_view , name="login_view"),
    path("signup/" , views.signup_view , name="signup_view"),
]