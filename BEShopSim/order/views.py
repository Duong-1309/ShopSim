from django.shortcuts import render, get_object_or_404
from  django.http import JsonResponse

from rest_framework import status
from rest_framework.generics import  ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Order
from .serializers import OrderSerializer


# Create your views here.

class ListOrder(ListCreateAPIView):
    model = Order
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Create new Order Successful'
            }, status=status.HTTP_201_CREATED)
        else:
            return  JsonResponse({
                'message': 'create Order Unsuccessful'
            },status=status.HTTP_400_BAD_REQUEST)

class DetailOrder(RetrieveUpdateDestroyAPIView):
    model = Order
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.all()

    def put(self, request, *args, **kwargs):
        order = get_object_or_404(Order, id=kwargs.get('pk'))
        serializer = OrderSerializer(order, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Update Order Successful'
            }, status=status.HTTP_200_OK)
        else:
            return  JsonResponse({
                'message': 'Update Order Unsuccessful'
            },status=status.HTTP_400_BAD_REQUEST)

        def delete(self, request, *args, **kwargs):
            order = get_object_or_404(Order, id=kwargs.get('pk'))
            order.delete()
            return JsonResponse({
                'message': 'Delete Order Successful'
            }, status=status.HTTP_200_OK)