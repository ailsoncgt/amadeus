# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-12 21:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Nome')),
                ('slug', models.CharField(max_length=100, verbose_name='Identificador')),
            ],
            options={
                'verbose_name_plural': 'Categorias',
                'verbose_name': 'Categoria',
            },
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Nome')),
                ('slug', models.SlugField(max_length=100, verbose_name='Identificador')),
                ('descriptoin', models.TextField(blank=True, verbose_name='Descriçao')),
                ('is_approved', models.BooleanField(default=False, verbose_name='Aprovado')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cursos.Category', verbose_name='Categoria')),
            ],
            options={
                'verbose_name': 'Cursos',
            },
        ),
    ]
