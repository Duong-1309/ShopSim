from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse

from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .serializers import CartSerializer, CartItemSerializer
from .models import Cart, CartItem

# Create your views here.

# ======== API Cart ==================

class ListCart(ListCreateAPIView):
    model = Cart
    serializer_class = CartSerializer

    def get_queryset(self):
        return Cart.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'create new CART successful'
            }, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({
                'message': 'create new CART unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

class DetailCart(RetrieveUpdateDestroyAPIView):
    model = Cart
    serializer_class = CartSerializer
     
    def get_queryset(self):
        return Cart.objects.all()

    def put(self, request, *args, **kwargs):
        cart = get_object_or_404(Cart, id=kwargs.get('pk'))
        serializer = CartSerializer(cart, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'update CART successful'
            }, status=status.HTTP_200_OK)
        else:
            return JsonResponse({
                'message': 'update CART unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

        def delete(self, request, *args, **kwargs):
            cart = get_object_or_404(Cart, id=kwargs.get('pk'))
            cart.delete()
            return JsonResponse({
                'message': 'delete CART successful'
            }, status=status.HTTP_200_OK)

# ================  API CartItem ==============

class ListCartItem(ListCreateAPIView):
    model = CartItem
    serializer_class = CartItemSerializer

    def get_queryset(self):
        return CartItem.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = CartItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'create new CART ITEM successful'
            }, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({
                'message': 'create new CART ITEM unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

class DetailCartItem(RetrieveUpdateDestroyAPIView):
    model = CartItem
    serializer_class = CartItemSerializer
     
    def get_queryset(self):
        return CartItem.objects.all()

    def put(self, request, *args, **kwargs):
        cartItem = get_object_or_404(CartItem, id=kwargs.get('pk'))
        serializer = CartItemSerializer(cartItem, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'update CART ITEM successful'
            }, status=status.HTTP_200_OK)
        else:
            return JsonResponse({
                'message': 'update CART ITEM unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
            cartItem = get_object_or_404(CartItem, id=kwargs.get('pk'))
            cartItem.delete()
            return JsonResponse({
                'message': 'delete CART ITEM successful'
            }, status=status.HTTP_200_OK)