from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import HttpResponse

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
    return render(request,'home/wellcome.html', context=user_info)

def access(request):
    if request.method == 'POST':
        message = '''
              <div class="text-center mb-6 mx-auto">
                <div class="mb-6">
                  <h2 class="text-body-highlight">¡Error de autenticación!</h2>
                  <p class="text-body-tertiary">Intente de nuevo <br class="d-lg-none" />O regrese al home.</p>
                </div>
                <div class="d-grid"><a class="btn btn-primary" href="{% url 'home' %}"><span class="fas fa-angle-left me-2"></span>Go to home</a></div>
              </div>
        '''
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(home)
        else:
            return render(request, 'home/sign-in.html', {'message':message})
    
    return render(request, 'home/sign-in.html', {'message':''})

def sign_out(request):
    return render(request, "home/sign-out.html")

def cookie_plant(request):
    return render(request, "home/cookie-plant-charts.html")

def users_info(request):
    #message = 'Hola mundo!!! '
    user = request.user
    is_authenticated = user.is_authenticated
    is_anonymous = user.is_anonymous
    is_active = user.is_active
    active = 'Activo' if is_active else 'No activo'
    status = 'Autenticado' if is_authenticated else 'No autenticado'
    message = f'''
    Usuario: {user.username} 
    Email: {user.email} 
    Estado: {status} 
    Activo: {active}
    Permiso: {[permiso.codename for permiso in user.user_permissions.all()]}
    '''
    return HttpResponse(message)