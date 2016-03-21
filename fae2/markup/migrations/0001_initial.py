# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-03-21 14:48
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ElementDefinition',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('element', models.CharField(blank=True, default=b'', max_length=32)),
                ('attribute', models.CharField(blank=True, default=b'', max_length=32)),
                ('value', models.CharField(blank=True, default=b'', max_length=64)),
                ('description', models.TextField(blank=True, default=b'')),
                ('url', models.URLField(blank=True, default=b'')),
                ('type', models.CharField(choices=[(b'NONE', b'not any special type'), (b'ROLE', b'ARIA Role'), (b'PROP', b'ARIA Property'), (b'STAT', b'ARIA State'), (b'EVNT', b'Event'), (b'FONT', b'CSS Font'), (b'COLR', b'CSS Color'), (b'POS', b'CSS Position'), (b'HIGH', b'CSS Highlight'), (b'CONT', b'CSS Content')], default=b'NONE', max_length=4)),
            ],
            options={
                'ordering': ['element', 'attribute', 'value'],
                'verbose_name': 'Element Definition',
                'verbose_name_plural': 'Element Definitions',
            },
        ),
        migrations.CreateModel(
            name='LanguageSpec',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('abbr', models.CharField(max_length=32)),
                ('title', models.CharField(max_length=128)),
                ('element_based', models.BooleanField(default=True, verbose_name=b'Element based markup (otherwise property based, i.e. CSS)')),
                ('url', models.URLField(blank=True, null=True)),
                ('url_slug', models.SlugField(max_length=32)),
                ('link_text', models.CharField(max_length=64)),
            ],
            options={
                'ordering': ['title'],
                'verbose_name': 'Language Specification',
                'verbose_name_plural': 'Language Specifications',
            },
        ),
        migrations.AddField(
            model_name='elementdefinition',
            name='spec',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='definitions', to='markup.LanguageSpec'),
        ),
    ]
