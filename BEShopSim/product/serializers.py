from rest_framework import serializers
from .models import Category, Product, Variation, CustomerInformation, ProductType
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'slug', 'description', 'active')

class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = ('id', 'title', 'description', 'active')

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    product_type = ProductTypeSerializer(read_only=True)
    class Meta:
        model = Product
        fields = ('id', 'title', 'description', 'category', 'product_type', 'product_img', 'price', 'active')

class VariationSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = Variation
        fields = ('id', 'product', 'title', 'price', 'sale_price', 'inventory', 'active')

class CustomerInformationSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = CustomerInformation
        fields = ('id', 'name', 'phoneNumber', 'address', 'product', 'active')