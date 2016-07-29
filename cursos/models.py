# coding=utf-8
from django.db import models

class Category(models.Model):
	name = models.CharField('Nome', max_length=100)
	slug = models.CharField('Identificador', max_length=100)

	class Meta:
		verbose_name = 'Categoria'
		verbose_name_plural = 'Categorias'

	def __str__(self):
		return self.name

# Create your models here.
class Course(models.Model):
	name = models.CharField('Nome', max_length=100)
	slug = models.SlugField('Identificador', max_length=100)
	description = models.TextField('Descriçao', blank=True)
	image = models.ImageField('Imagem', upload_to='media', blank=True)
	is_approved = models.BooleanField(
		'Aprovado', default=False, blank=True)
	category = models.ForeignKey(
		Category, verbose_name='Categoria')
	start_date = models.DateField(
		'Inicio', blank=True, null=True)

	class Meta:
		verbose_name = 'Curso'
		verbose_name_plural = 'Cursos'

	def __str__(self):
		return self.name


