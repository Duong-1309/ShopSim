from django.urls import path
from .views import ListOrder, DetailOrder

urlpatterns = [
    path('order', ListOrder.as_view(), name='order'),
    path('order/<int:pk>', DetailOrder.as_view(), name='detail_order')
]