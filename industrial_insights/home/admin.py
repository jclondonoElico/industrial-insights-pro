from django.contrib import admin
from .models import Measurement

# Register your models here.
class MeasurementAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Measurement._meta.fields]

admin.site.register(Measurement, MeasurementAdmin)