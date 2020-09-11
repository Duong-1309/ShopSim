from rest_framework import serializers
from .models import CustomerUser

class CustomerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerUser
        fields = ('id','username', 'password', 'email', 'email', 'phone_number', 'address')