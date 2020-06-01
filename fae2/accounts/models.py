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

File: accounts/models.py

Author: Jon Gunderson

"""
from __future__ import absolute_import
from django.db import models
from django.contrib.auth.models import User
from django_registration.signals import user_registered
from timezone_field import TimeZoneField

from websiteResultGroups.models import WebsiteReportGroup
from reports.models import WebsiteReport
from stats.models import StatsUser
import markdown

import datetime
from django.conf import settings
from django.utils.timezone import make_aware

class AccountType(models.Model):
    id = models.AutoField(primary_key=True)

    type_id = models.IntegerField(default=0)

    title = models.CharField(max_length=64, default="no account type title")

    description = models.TextField(blank=True, default="")
    description_html = models.TextField(blank=True, default="")

    self_registration = models.BooleanField(default=False)
    shibboleth = models.BooleanField(default=False)
    self_hosted = models.BooleanField(default=False)
    sponsor = models.BooleanField(default=False)

    max_archive = models.IntegerField(default=10)
    max_permanent = models.IntegerField(default=5)
    max_depth = models.IntegerField(default=2)
    max_pages = models.IntegerField(default=25)

    advanced = models.BooleanField(default=False)
    protected = models.BooleanField(default=False)
    default = models.BooleanField(default=False)

    next_account_type = models.OneToOneField('AccountType', related_name="previous_account_type", blank=True, null=True,
                                             on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Account Type"
        verbose_name_plural = "Account Types"
        ordering = ['type_id']

    def __str__(self):
        return self.title

    def save(self):

        if self.description:
            self.description_html = markdown.markdown(self.description)
        else:
            self.description_html = ""

        super(AccountType, self).save()  # Call the "real" save() method.
