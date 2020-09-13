from django.contrib import admin #1
from django.db.models import Q #2
from django.utils.translation import ugettext_lazy as _
from .models import Categories, News #3

admin.site.register(Categories)
admin.site.register(News)
# @admin.register(Categories) #1
# class CategoriesAdmin(admin.ModelAdmin): #2
#     list_display = ('name', 'parent_category', 'status', 'sort_order') #3
#     search_fields = ['name', ] #4
#     none_type = type(None)

#     def get_form(self, request, obj=None, **kwargs):
#         request.obj = obj

#         if isinstance(obj, self.none_type) is True:
#             self.exclude = ("sort_order", )
#         else:
#             self.exclude = None

#         return super(CategoriesAdmin, self).get_form(request, obj, **kwargs)
