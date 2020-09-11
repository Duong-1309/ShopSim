from django.db import models
# Create your models here.

class CustomerUser(models.Model):
    username = models.CharField(default='', max_length=50)
    password = models.CharField(default='', max_length=20)
    email = models.EmailField(default='', max_length=50)
    phone_number = models.CharField(default='', max_length=15)
    address = models.CharField(default='', max_length=255)

    def __str__(self):
        return self.username

