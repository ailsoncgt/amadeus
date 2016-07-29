from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Category, Course
from .forms import CourseForm

# Create your views here.
@login_required
def list_courses(request):
	context={}

	courses = Course.objects.filter(is_approved=True)
	context['courses'] = courses

	return render(request, 'cursos/listar-cursos.html', context)

def create_course(request):
	context = {}
	form = CourseForm(request.POST or None)
	if form.is_valid():
		form.save()
		context['success'] = True
		form = CourseForm()
	context['form'] = form
	return render(request, 'cursos/novo-curso.html', context)
