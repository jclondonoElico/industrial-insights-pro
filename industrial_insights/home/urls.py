from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.home, name='home'),
    path('access', views.access, name='access'),
    path('sign-out', views.sign_out, name='sign_out'),
    path('cookie-plant', views.cookie_plant, name='cookie-plant'),
    path('logout/', auth_views.LogoutView.as_view(next_page='sign_out'), name='logout'),
]