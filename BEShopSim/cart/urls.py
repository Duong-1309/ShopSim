from django.urls import path
from . import views

urlpatterns = [
    path('cart', views.ListCart.as_view(), name='cart'),
    path('cart/<int:pk>', views.DetailCart.as_view(), name='detail_cart'),

    path('cart-item', views.ListCartItem.as_view(), name = 'cart_item'),
    path('cart-item/<int:pk>', views.DetailCartItem.as_view(), name='detail_cart_item')
]