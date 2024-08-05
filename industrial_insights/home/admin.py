from django.contrib import admin
from .models import Measurement, Parameter

# Register your models here.
class MeasurementAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Measurement._meta.fields]

class ParameterAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Parameter._meta.fields]

admin.site.register(Measurement, MeasurementAdmin)
admin.site.register(Parameter, ParameterAdmin)