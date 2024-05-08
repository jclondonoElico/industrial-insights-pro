from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "goem/home.html")


def summary_view_manufacturing(request):
    return render(request, "goem/summary-view/manufacturing.html")

def summary_view_electrical_energy_efficiency(request):
    return render(request, "goem/summary-view/electrical-energy-efficiency.html")