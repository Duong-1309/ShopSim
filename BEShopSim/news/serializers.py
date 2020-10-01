from rest_framework import serializers
from .models import Categories, News
from django.contrib.auth.models import User

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('id', 'name', 'slug', 'status')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)

class NewsSerializer(serializers.ModelSerializer):
    categories = CategoriesSerializer(read_only=True)
    author = UserSerializer(read_only=True)
    class Meta:
        model = News
        read_only_fields = ('id', 'author')
        fields = ('id', 'categories', 'title', 'slug', 
                'short_description', 'description', 'created_at', 
                'publish_at', 'author', 'upload_to', 'feature_img', 
                'status', 'views_count')

