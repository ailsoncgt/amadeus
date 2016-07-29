from django.conf.urls import url
from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
	url(r'^$', auth_views.login, {'template_name': 'index.html'}, name='index'),
	url(r'^home/$', views.home, name='home'),
	url(r'^logout/$', auth_views.logout, {'next_page': 'home'}, name='logout'),
	url(r'^contato$', views.contact, name='contact'),
	
]