from django.db import models

# Create your models here.
class Measurement(models.Model):
    timestamp = models.DateTimeField(null=True, blank=True)
    pressure = models.FloatField(null=True, blank=True)
    temperature = models.FloatField(null=True, blank=True)
    box_units = models.PositiveIntegerField(null=True, blank=True)
    kwh = models.FloatField(null=True, blank=True)
    flow = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"{self.timestamp}, {self.pressure}, {self.temperature}, {self.box_units}, {self.kwh}, {self.flow}"