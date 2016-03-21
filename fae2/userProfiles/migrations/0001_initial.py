# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-03-21 14:49
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import timezone_field.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acct_type', models.IntegerField(choices=[(1, b'Standard'), (2, b'Level 2'), (3, b'Level 3'), (4, b'Level 4'), (5, b'Maximum')], default=1)),
                ('org', models.CharField(blank=True, max_length=128)),
                ('dept', models.CharField(blank=True, max_length=128)),
                ('email_announcements', models.BooleanField(default=True)),
                ('max_archive', models.IntegerField(default=10)),
                ('max_permanent', models.IntegerField(default=5)),
                ('timezone', timezone_field.fields.TimeZoneField(default=b'America/Chicago')),
                ('multiple_urls_enabled', models.BooleanField(default=False)),
                ('website_authorization_enabled', models.BooleanField(default=False)),
                ('advanced_enabled', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
