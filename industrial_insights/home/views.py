from django.shortcuts import render

# Create your views here.
def home(request):

    return render(request,'home/wellcome.html')

def access(request):
    return render(request, "home/sign-out.html")

def cookie_plant(request):
    return render(request, "home/cookie-plant-charts.html")