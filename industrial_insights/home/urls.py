from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views
from .views import *
from rest_framework import routers

home_router = routers.DefaultRouter()
home_router.register(r'Data', DataViewSet, basename='data')

urlpatterns = [
    path('', views.home, name='home'),
    path('access', views.access, name='access'),
    path('sign-out', views.sign_out, name='sign_out'),
    path('cookie-plant', views.cookie_plant, name='cookie-plant'),
    path('logout/', auth_views.LogoutView.as_view(next_page='sign_out'), name='logout'),
    path('users_info', views.users_info, name='users_info'),
    path('api/', include(home_router.urls)),
    
]
