from django.urls import path
from .views import ListUser, DetailUser

urlpatterns = [
    path('user', ListUser.as_view(), name='user'), 
    path('user/<int:pk>', DetailUser.as_view(), name='detail_user'),
]
