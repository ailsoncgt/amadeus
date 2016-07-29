"""amadeus URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


from amadeus_app import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^cursosss/', include('amadeus_app.urls'))
    url(r'^', include('core.urls', namespace='core')),
    url(r'^cursos/', include('cursos.urls', namespace='courses')),
    url(r'^contas/', include('accounts.urls', namespace='accounts')),

    url(r'^recuperar-senha/$', views.recuperar_senha),
    url(r'^tarefas-pendentes/$', views.tarefas_pendentes),
    url(r'^logado-admin/$', views.logado),
    url(r'^usuarios-online/$', views.usuarios_online),
    url(r'^criar-curso/$', views.criar_curso),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
