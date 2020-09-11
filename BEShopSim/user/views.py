from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse

from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .serializers import CustomerUserSerializer
from .models import CustomerUser

# Create your views here.

class ListUser(ListCreateAPIView):
    model = CustomerUser
    serializer_class = CustomerUserSerializer

    def get_queryset(self):
        return CustomerUser.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = CustomerUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'create new USER successful'
            }, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({
                'message': 'create USER unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

class DetailUser(RetrieveUpdateDestroyAPIView):
    model = CustomerUser
    serializer_class = CustomerUserSerializer

    def get_queryset(self):
        return CustomerUser.objects.all()

    def put(self, request, *args, **kwargs):
        user = get_object_or_404(CustomerUser, id=kwargs.get('pk'))
        serializer = CustomerUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Update  USER Successful'
            }, status=status.HTTP_200_OK)
        else:
            return JsonResponse({
                'message': 'Update USER Unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        user = get_object_or_404(CustomerUser, id=kwargs.get('pk'))
        user.delete()
        return JsonResponse({
            'message': 'Delete USER Successful'
        }, status=status.HTTP_200_OK)
