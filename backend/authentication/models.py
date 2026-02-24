from django.db import models

# Create your models here.

class OTP (models.Model) :
    identifier = models.CharField(max_length=100)
    code = models.CharField(max_length=6)
    attempts = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.identifier} - {self.code}"
    