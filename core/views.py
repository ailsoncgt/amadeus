from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings

from .forms import ContactForm

# Create your views here.
def home(request):
	return render(request, 'index.html')

def contact(request):
	context = {}
	form = ContactForm(request.POST or None)
	if form.is_valid():
		subject = '[Amadeus - Contato]'
		message = 'E-mail: {}\n{}'.format(
			form.cleaned_data['email'], form.cleaned_data['message']
		)
		send_mail(
			subject, message, settings.DEFAULT_FROM_EMAIL, [settings.CONTACT_EMAIL]
		)
		context['success'] = True
		form = ContactForm()
	context['form'] = form
	return render(request, "contact.html", context)