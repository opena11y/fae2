"""
Copyright 2014-2016 University of Illinois

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

File: abouts/models.py

Author: Jon Gunderson

"""

# abouts/models.py
from __future__ import absolute_import
from django.db import models
from django.contrib.auth.models import User
from django_registration.signals import user_registered
from timezone_field import TimeZoneField

import markdown

import datetime

class FAQ(models.Model):
    id = models.AutoField(primary_key=True)

    seq = models.IntegerField(default=0, unique=True)
    title = models.CharField(max_length=256)
    description = models.TextField(null=True, blank=True)
    description_html = models.TextField(null=True, blank=True)

    def save(self):
        if self.description:
            self.description_html = markdown.markdown(self.description)

        super(FAQ, self).save()  # Call the "real" save() method.
