from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='goem_home'),
    path('summary-view/manufacturing', views.summary_view_manufacturing, name='summary_view_manufacturing'),
    path('summary-view/electrical-energy-efficiency', views.summary_view_electrical_energy_efficiency, name='summary_view_electrical_energy_efficiency'),
    path('summary-view/gas-consumption-efficiency', views.summary_view_gas_consumption_efficiency, name='summary_view_gas_consumption_efficiency'),
]
