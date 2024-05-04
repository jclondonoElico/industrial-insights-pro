from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('access', views.access, name='access'),
    path('cookie-plant', views.cookie_plant, name='cookie-plant'),
]