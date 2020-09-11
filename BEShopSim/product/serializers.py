from rest_framework import serializers
from .models import Category, Product, Variation

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'slug', 'description', 'active')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'description', 'product_img', 'price', 'active')

class VariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variation
        fields = ('id', 'product', 'title', 'price', 'sale_price', 'inventory', 'active')

