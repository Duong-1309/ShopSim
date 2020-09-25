from rest_framework import serializers
from .models import Categories, News

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('name', 'slug', 'status')

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('id', 'categories', 'title', 'slug', 
                'short_description', 'created_at', 
                'publish_at', 'upload_to', 'feature_img', 
                'status', 'views_count')

