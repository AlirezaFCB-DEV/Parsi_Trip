from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()


class Address(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="addresses")
    country = models.CharField(max_length=20)
    province = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    full_address = models.TextField()
    postal_code = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    is_default = models.BooleanField(default=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["owner"], condition=models.Q(
                is_default=True), name="unique_is_default_address_per_user")
        ]

    def save(self, **kwargs):
        if self.is_default:
            Address.objects.filter(owner=self.owner , is_default=True).exclude(
                pk=self.pk).update(is_default=False)

        super().save(**kwargs)

    def __str__(self):
        return f"{self.owner} - {self.country}-{self.province}-{self.city}"
