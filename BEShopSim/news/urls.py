from django.urls import path
from . import views

urlpatterns = [
    path('category-news', views.ListCategoriesNews.as_view()),
    path('list-new-by-category/<slug:slug>', views.ListNewsByCategory),
    path('news', views.ListNews.as_view()),
    path('news/<slug:slug>', views.DetailNews),
]