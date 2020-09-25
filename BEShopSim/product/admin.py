from django.contrib import admin
from .models import Product, Category, CustomerInformation, ProductType
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(CustomerInformation)
admin.site.register(ProductType)
