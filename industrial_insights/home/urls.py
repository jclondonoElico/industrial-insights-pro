from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('access', views.access, name='access'),
    path('sign-out', views.sign_out, name='sign_out'),
    path('cookie-plant', views.cookie_plant, name='cookie-plant'),
]