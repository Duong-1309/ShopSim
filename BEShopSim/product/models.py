from django.db import models

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=255, default='')
    slug = models.CharField(max_length=100, default='')
    description = models.TextField(default='')
    active =  models.BooleanField(default=True)

    def __str__(self):
        return self.title

class ProductType(models.Model):
    title = models.CharField(max_length=50, default='')
    slug = models.CharField(max_length=100, default='')
    description = models.TextField(default='')
    active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=255, default='')
    description = models.TextField(default='')
    product_img = models.CharField(max_length=255, default='')
    price = models.IntegerField(default=0)
    category =  models.ForeignKey(Category, on_delete=models.CASCADE)
    product_type = models.ForeignKey(ProductType, on_delete=models.CASCADE, default='', null=True)
    active =  models.BooleanField(default=True)

    def __str__(self):
        return self.title



class Variation(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, default='')
    price = models.IntegerField(default=0)
    sale_price = models.IntegerField(default=0)
    inventory = models.IntegerField(default=0)
    active =  models.BooleanField(default=True)

    def __str__(self):
        return self.product.title

class CustomerInformation(models.Model):
    name = models.CharField(max_length=100, default='')
    phoneNumber = models.CharField(max_length=15, default='')
    address = models.CharField(max_length=200, default='')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.phoneNumber
    