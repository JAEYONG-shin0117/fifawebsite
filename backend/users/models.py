from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_groups',  # ✅ 충돌 방지
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_permissions',  # ✅ 충돌 방지
        blank=True
    )
