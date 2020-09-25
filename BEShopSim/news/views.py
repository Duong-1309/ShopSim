from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Categories, News
from  .serializers import CategoriesSerializer, NewsSerializer

# Create your views here.

# =========== API list categories news ==============
class ListCategoriesNews(ListCreateAPIView):
    model = Categories
    serializer_class = CategoriesSerializer

    def get_queryset(self):
        return Categories.objects.all()

# =========== API list news =================
class ListNews(ListCreateAPIView):
    model = News
    serializer_class = NewsSerializer

    def get_queryset(self):
        return News.objects.all()

class DetailNews(RetrieveUpdateDestroyAPIView):
    model = News
    serializer_class = NewsSerializer

    def get_queryset(self):
        return News.objects.filter(id=self.kwargs['pk'])