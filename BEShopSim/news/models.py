from django.utils.translation import ugettext_lazy as _
from django.db import models
from django.utils.text import slugify
from datetime import date
from django.contrib.auth.models import User

# Create your models here.
class Categories(models.Model):
    name = models.CharField(max_length=254, verbose_name=_('name'))
    slug = models.SlugField(max_length=254, unique=True, blank=True, editable=True)
    status = models.BooleanField(default=0, verbose_name=_('Status'))

    def __str__(self):
        return self.name


    class Meta:
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')


class News(models.Model):
    categories = models.ForeignKey(Categories, null=True, verbose_name=_('Category'),
                                   on_delete=models.CASCADE)
    title = models.CharField(max_length=254, verbose_name=_('name'))
    slug = models.SlugField(max_length=254, unique=True, blank=True, editable=True)
    short_description = models.TextField(verbose_name=_('Short description'), max_length=150)
    description = models.TextField(verbose_name=_('Description'))
    author = models.ForeignKey(User, verbose_name=_('Author'), on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(verbose_name=_('Created at'), auto_now_add=True)
    publish_at = models.DateTimeField(verbose_name=_('Publish at'),)
    upload_to = 'img/news/{0}/{1}'.format(date.today().year, date.today().month)
    feature_img = models.ImageField(upload_to=upload_to, blank=True, null=True, max_length=254,
                                      verbose_name=_('Feature Image'))
    status = models.BooleanField(default=0, verbose_name=_('Status'))
    views_count = models.IntegerField(default=0, verbose_name=_('Views count'))

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(News, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _('News')
        verbose_name_plural = _('News')
        ordering = ['-publish_at']
        get_latest_by = 'created_at'
