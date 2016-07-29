#coding=utf-8

from django.contrib import admin

# Register your models here.

from .models import Category, Course

admin.site.register([Category, Course])