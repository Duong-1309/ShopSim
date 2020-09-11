from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
import json
from rest_framework import filters
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .serializers import CategorySerializer, ProductSerializer, VariationSerializer
from .models import Category, Product, Variation
# Create your views here.

# API Category =========================
class ListCategory(ListCreateAPIView):
    model = Category
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'create new category successful'
            }, status=status.HTTP_201_CREATED)
        else: 
            return JsonResponse({
                'message': 'create new category unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

class DetailCategory(RetrieveUpdateDestroyAPIView):
    model = Category
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()

    def put(self, request, *args, **kwargs):
        category = get_object_or_404(Category, id=kwargs.get('pk'))
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'update category successful'
            }, status=status.HTTP_200_OK)
        else: 
            return JsonResponse({
                'message': 'update category unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, *args, **kwargs):
        category = get_object_or_404(Category, id=kwargs.get('pk'))
        category.delete()
        return JsonResponse({
                'message': 'delete category successful'
            }, status=status.HTTP_200_OK)
    
# =========== ============ API Product ============= ===============

class ListProduct(ListCreateAPIView):
    model = Product
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()
    
    def create(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'create new PRODUCT successful'
            }, status=status.HTTP_201_CREATED)
        else: 
            return JsonResponse({
                'message': 'create new PRODUCT unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

class DetailProduct(RetrieveUpdateDestroyAPIView):
    model = Product
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()

    def put(self, request, *args, **kwargs):
        product = get_object_or_404(Product, id=kwargs.get('pk'))
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'update PRODUCT successful'
            }, status=status.HTTP_200_OK)
        else:
            return JsonResponse({
              'message': 'update PRODUCT unsuccessful'  
            }, status=status.HTTP_400_BAD_REQUEST)

        def delete(self, request, *args, **kwargs):
            product = get_object_or_404(Product, id=kwargs.get('pk'))
            product.delete()
            return JsonResponse({
                'message': 'delete PRODUCT successful'
            }, status=status.HTTP_200_OK)

# ==================== API Variation ============

class ListVariation(ListCreateAPIView):
    model = Variation
    serializer_class = VariationSerializer
    

    def get_queryset(self):
        return Variation.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = VariationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'create new VARIATION successful'
            }, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({
                'message': 'create VARIATION Unsuccessful'
            }, status=status.HTTP_400_BAD_REQUEST)

class DetailVariation(RetrieveUpdateDestroyAPIView):
    model = Variation
    serializer_class = VariationSerializer

    def get_queryset(self):
        return Variation.objects.all()
    
    def put(self, request, *args, **kwargs):
        variation = get_object_or_404(Variation, id=kwargs.get('pk'))
        serializer = VariationSerializer(variation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'put VARIATION successful'
            }, status=status.HTTP_200_OK)
        else:
            return JsonResponse({
                'message': 'put VARIATION unsuccessful'
            })

    def delete(self, request, *args, **kwargs):
        variation = get_object_or_404(Variation, id=kwargs.get('pk'))
        variation.delete()
        return JsonResponse({
            'message': 'delete VARIATION successful'
        })

# # ============= Search Product ==============

@api_view(['GET'])
def SearchProduct(request, textsearch):
    if "*" in textsearch:
        a = textsearch.split("*")
        start = a[0]
        end = a[-1]
        if start == "":
            products = Product.objects.filter(title__endswith=end)
            serializer = ProductSerializer(products, many=True)
            return JsonResponse(serializer.data, safe=False)
        elif end == "":
            products = Product.objects.filter(title__startswith=start)
            serializer = ProductSerializer(products, many=True)
            return JsonResponse(serializer.data, safe=False)
        else:
            products = Product.objects.filter(title__startswith=start, title__endswith=end)
            serializer = ProductSerializer(products, many=True)
            return JsonResponse(serializer.data, safe=False) 
    else:
        products = Product.objects.filter(title__icontains=textsearch)
        serializer = ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)
        
# class SearchList(ListCreateAPIView):
#     search_fields = ['title']
#     filter_backends = (filters.SearchFilter,)
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

# ========= Sort Product ===================

@api_view(['GET'])
def SortProduct(request, textsort):
    if "-" in textsort:
        a = textsort.split("-")
        start = int(a[0])
        end = int(a[-1])
        products = Product.objects.filter(price__gte=start, price__lte=end)
        serializer = ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif textsort == "<500":
        products = Product.objects.filter(price__gte=1000000, price__lte=3000000)
        serializer = ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)
    



    
        

