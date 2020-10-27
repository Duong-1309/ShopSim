from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
import json
from rest_framework import authentication, permissions  #import authentication
from rest_framework import status, views, response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view
from rest_framework.generics import( ListCreateAPIView, RetrieveUpdateDestroyAPIView, 
                                    ListAPIView, GenericAPIView, ListAPIView, CreateAPIView)
from .serializers import (CategorySerializer, ProductSerializer, ProductListSerializer,
                        VariationSerializer, CustomerInformationSerializer,
                        ProductTypeSerializer)
from ShopSim.pagination import CustomPagination
from .models import Category, Product, Variation, ProductType
from django.core.mail import send_mail

# Create your views here.

#  ======================= API Category =========================
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
    
# ================ API Product Type =============

class ListProductType(ListCreateAPIView):
    model = ProductType
    serializer_class = ProductTypeSerializer

    def get_queryset(self):
        return ProductType.objects.all()

class DetailProductType(RetrieveUpdateDestroyAPIView):
    model = ProductType
    serializer_class = ProductTypeSerializer

    def get_queryset(self):
        idproduct = self.kwargs['pk']
        return ProductType.objects.filter(id=idproduct)


class ListProduct(ListCreateAPIView):
    model = Product
    serializer_class = ProductListSerializer
    pagination_class = CustomPagination
    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        return Product.objects.all()

class CreateProduct(CreateAPIView):
    model = Product
    serializer_class = ProductSerializer
    parser_classes = [MultiPartParser, FormParser]
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def post(self, request, *args, **kwargs):
        serializer = ProductSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(status=status.HTTP_400_BAD_REQUEST)
   
class DetailProduct(RetrieveUpdateDestroyAPIView):
    model = Product
    serializer_class = ProductSerializer
    parser_classes = (MultiPartParser, FormParser)
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        return Product.objects.all()

    def put(self, request, *args, **kwargs):
        product = get_object_or_404(Product, id=kwargs.get('pk'))
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
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

class SearchProduct(ListAPIView):
    model = Product
    serializer_class = ProductListSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        textsearch = self.kwargs['textsearch']
        if "*" in textsearch:
            a = textsearch.split("*")
            start = a[0]
            end = a[-1]
            if start == "":
                return Product.objects.filter(title__endswith=end)
            elif end == "":
                return Product.objects.filter(title__startswith=start)
            else:
                return Product.objects.filter(title__startswith=start, title__endswith=end) 
        else:
            return Product.objects.filter(title__icontains=textsearch)

# @api_view(['GET'])
# def SearchProduct(request, textsearch):
#     if "*" in textsearch:
#         a = textsearch.split("*")
#         start = a[0]
#         end = a[-1]
#         if start == "":
#             products = Product.objects.filter(title__endswith=end)
#             serializer = ProductSerializer(products, many=True)
#             return JsonResponse(serializer.data, safe=False)
#         elif end == "":
#             products = Product.objects.filter(title__startswith=start)
#             serializer = ProductSerializer(products, many=True)
#             return JsonResponse(serializer.data, safe=False)
#         else:
#             products = Product.objects.filter(title__startswith=start, title__endswith=end)
#             serializer = ProductSerializer(products, many=True)
#             return JsonResponse(serializer.data, safe=False) 
#     else:
#         products = Product.objects.filter(title__icontains=textsearch)
#         serializer = ProductSerializer(products, many=True)
#         return JsonResponse(serializer.data, safe=False)
        

# ========= Sort Product ===================

# @api_view(['GET'])
# def SortProduct(request, textsort):
#     text = textsort.split('&&')
#     text_cutted = text[-1]
#     if "-" in text_cutted: # list by price
#         a = text_cutted.split("-")
#         start = int(a[0])
#         end = int(a[-1])
#         products = Product.objects.filter(price__gte=start, price__lte=end)
#         serializer = ProductSerializer(products, many=True)
#         return JsonResponse(serializer.data, safe=False)

#     elif "=" in text_cutted: # list by mang
#         a = text_cutted.split("=")
#         id_type = int(a[-1])
#         type_product = ProductType.objects.get(id=id_type)
#         products = type_product.product_set.all()
#         serializer = ProductSerializer(products, many=True)
#         return JsonResponse(serializer.data, safe=False)
        
#     else: # List by categories
#         idCategory = int(text_cutted)
#         category = Category.objects.get(id=idCategory)
#         products = category.product_set.all()
#         serializer = ProductSerializer(products, many=True)
#         return JsonResponse(serializer.data, safe=False)
    

class SortProduct(ListAPIView):
    """
    Return list product sorted
    """
    model = Product
    serializer_class = ProductListSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        text = self.kwargs['textsort'].split('&&')
        text_cutted = text[-1]
        if "-" in text_cutted: # list by price
            a = text_cutted.split("-")
            start = int(a[0])
            end = int(a[-1])            
            return Product.objects.filter(price__gte=start, price__lte=end)

        elif "=" in text_cutted: # list by mang
            a = text_cutted.split("=")
            id_type = int(a[-1])
            type_product = ProductType.objects.get(id=id_type)
            return type_product.product_set.all()
            
        else: # List by categories
            idCategory = int(text_cutted)
            category = Category.objects.get(id=idCategory)
            return category.product_set.all()

    
# ==================Customer Information ========================

@api_view(['POST'])
def CusInfor(request):
    
    serializer = CustomerInformationSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        product = get_object_or_404(Product, id=serializer.data['product'])
        # send_mail('Customer Information', request.data, 'vanduongk1309@gmail.com', 
        #         ['duondg@gmail.com'], fail_silently=False)
        product.active = True
        product.save()
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    else:
        return JsonResponse({
            'message': 'create customer information Unsuccessful'
        }, status=status.HTTP_400_BAD_REQUEST)

    
        

