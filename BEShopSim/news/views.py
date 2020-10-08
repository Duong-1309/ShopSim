from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Categories, News
from  .serializers import CategoriesSerializer, NewsSerializer
from ShopSim.pagination import CustomPagination
# Create your views here.

# =========== API list categories news ==============
class ListCategoriesNews(ListCreateAPIView):
    model = Categories
    serializer_class = CategoriesSerializer

    def get_queryset(self):
        return Categories.objects.all()

# =========== API list news =======================
class ListNews(ListCreateAPIView):
    model = News
    serializer_class = NewsSerializer
    pagination_class = CustomPagination


    def get_queryset(self):
        return News.objects.all()

# class DetailNews(RetrieveUpdateDestroyAPIView):
#     model = News
#     serializer_class = NewsSerializer

#     def get_queryset(self):
#         return News.objects.get(slug=self.kwargs['pk'])
@api_view(['GET'])
def DetailNews(request, slug):
    news = get_object_or_404(News, slug=slug)
    serializer = NewsSerializer(news)
    return JsonResponse(serializer.data)

@api_view(['GET']) #list news by slug category
def ListNewsByCategory(request, slug):
    category = get_object_or_404(Categories, slug=slug)
    list_news = category.news_set.all()[:9]
    serializer = NewsSerializer(list_news, many=True)
    return JsonResponse(serializer.data, safe=False)