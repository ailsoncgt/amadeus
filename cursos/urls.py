from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.list_courses, name='list_courses'),
	url(r'^criar-curso/', views.create_course, name='create_course'),
	
]
