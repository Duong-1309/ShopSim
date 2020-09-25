from django.urls import path
from . import views
                   

urlpatterns = [
    path('category', views.ListCategory.as_view(), name='category'),
    path('category/<int:pk>', views.DetailCategory.as_view(), name='detail_category'),

    path('product-type', views.ListProductType.as_view(), name='list_product_type'),
    path('product-type/<int:pk>', views.DetailProductType.as_view(), name='detail_product_type'),

    path('product', views.ListProduct.as_view(), name='product'),
    path('product/<int:pk>', views.DetailProduct.as_view(), name='detail_product'),

    path('product/search/<str:textsearch>', views.SearchProduct, name='search_product'),
    path('product/sort/<str:textsort>', views.SortProduct, name='sort_product'),

    path('variation', views.ListVariation.as_view(), name='variation'),
    path('variation/<int:pk>', views.DetailVariation.as_view(), name='detail_variation'),

    path('customer-information/', views.CusInfor)
   
]