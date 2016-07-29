from .models import Category, Course
from django import forms

class CourseForm(forms.ModelForm):
	class Meta:
		model = Course
		fields = ['name', 'slug', 'description', 'is_approved', 'image', 'category', 'start_date']

class CategoryForm(forms.ModelForm):
	class Meta:
		model = Category
		fields = ['name', 'slug']