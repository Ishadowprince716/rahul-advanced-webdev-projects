from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    is_verified = models.BooleanField(default=False)

class AuthLog(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    action = models.CharField(max_length=64)
    timestamp = models.DateTimeField(auto_now_add=True)
