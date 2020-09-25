from django.urls import path
from . import views

urlpatterns = [
    path('category-news', views.ListCategoriesNews.as_view()),
    path('news', views.ListNews.as_view()),
    path('news/<int:pk>', views.DetailNews.as_view()),
]