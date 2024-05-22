from django.shortcuts import render, redirect

def check_access_level(user):
   if user.groups.filter(name='goem').exists() or user.is_superuser or user.is_staff:
       return True
   else:
       return False
   
def get_user_info(user):
    user_groups = user.groups.all()
    if user.is_authenticated:
        user_info = {
            'full_name': user.get_full_name(),
            'username': user.username,
            'group': 'Administrators' if user.is_staff else user_groups.first(),
            'email': user.email
        }
    else:
        user_info = {
            'full_name': 'Usuario no autenticado',
            'username': '',
            'group': '',
            'email': ''
        }
    return user_info


# Create your views here.
def home(request):
    user = request.user
    user_info = get_user_info(user)
    if check_access_level(user):
        return render(request, "goem/home.html", context=user_info)
    else:
        return redirect("home")

def summary_view_manufacturing(request):
    user = request.user
    user_info = get_user_info(user)
    if check_access_level(user):
        return render(request, "goem/summary-view/manufacturing.html", context=user_info)
    else:
        return redirect("home")

def summary_view_electrical_energy_efficiency(request):
    user = request.user
    user_info = get_user_info(user)
    if check_access_level(user):
        return render(request, "goem/summary-view/electrical-energy-efficiency.html", context=user_info)
    else:
        return redirect("home")

def summary_view_gas_consumption_efficiency(request):
    user = request.user
    user_info = get_user_info(user)
    if check_access_level(user):
        return render(request, "goem/summary-view/gas-consumption-efficiency.html", context=user_info)
    else:
        return redirect("home")  