from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, 'index.html')

def recuperar_senha(request):
	return render(request, 'recuperar-senha.html')

def tarefas_pendentes(request):
	return render(request, 'tarefas-pendentes-admin.html')

def logado(request):
	return render(request, 'logado-admin.html')

def usuarios_online(request):
	return render(request, 'usuarios-online-admin.html')

def criar_curso(request):
	return render(request, 'criar-curso.html')
