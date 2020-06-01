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

file: contact/models.py

Author: Jon Gunderson

"""

# contact/models.py
from __future__ import absolute_import

import datetime
import sys
import os
import string

from django.db import models

from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.contrib import messages

from django.urls import reverse
from django.template.loader import render_to_string

import markdown
from datetime import date

from fae2.settings import EMAIL_HOST_USER
from fae2.settings import ADMIN_EMAIL

CONTACT_STATUS = (
    ('NR', 'No Response'),
    ('FB', 'Filed bug'),
    ('FFR', 'Filed feature enhancment'),
    ('R', 'Responded'),
)

# User Contact (associated with contact form)
class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, editable=True, related_name="contacts")
    topic = models.CharField(max_length=1024)
    message = models.TextField()
    status = models.CharField(max_length=128, choices=CONTACT_STATUS, default="NR")
    comments = models.TextField(blank=True, default="")

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        ordering = ['-date']

    def show_status(self):
        for shortp, longp in CONTACT_STATUS:
            if shortp == self.status:
                return longp

ANNOUNCEMENT_SCOPE = (
    ('All', 'All Users'),
    ('Sub', 'Users who have a paid subscription'),
    ('Free', 'Users who\'s current account type is Free'),
)

ANNOUNCEMENT_STATUS = (
    ('New', 'New Annoucement.'),
    ('Sending', 'Announcement is being sent through e-mail.'),
    ('Visible', 'Announcement is visible in web views.'),
    ('Arch', 'Announcement is only available in the archive.'),
)

class Announcement(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField(auto_now_add=True)
    topic = models.CharField(max_length=1024)
    scope = models.CharField(max_length=8, choices=ANNOUNCEMENT_SCOPE, default="All")
    status = models.CharField(max_length=8, choices=ANNOUNCEMENT_STATUS, default="New")
    email = models.BooleanField(verbose_name="E-mail to users", default=True)
    web = models.BooleanField(verbose_name="Show in web views", default=True)
    end_date = models.DateField(verbose_name="End date for showing in web views", null=True,
                                blank=True)  # Show as a message in selected views and login screen, if black does not show
    message_text = models.TextField(blank=True, default="")
    message_markdown = models.TextField(blank=True, default="")
    message_html = models.TextField(blank=True, default="")

    class Meta:
        verbose_name = "Announcement"
        verbose_name_plural = "Announcements"
        ordering = ['-date']

    def save(self):

        if self.message_markdown:
            self.message_html = markdown.markdown(self.message_markdown)
        else:
            if self.message_text:
                self.message_html = self.message_text
            else:
                self.message_html = ""

        if self.web and not self.end_date:
            self.end_date = datetime.datetime.now() + datetime.timedelta(days=3)

        super(Announcement, self).save()  # Call the "real" save() method.

    def send_announcement(self, profiles):

        self.status = "Sending"

        if self.email:
            for p in profiles:
                if p.email_announcements and p.user.email and p.user.email.find('@'):
                    send_mail(self.topic, self.message_text, EMAIL_HOST_USER, [p.user.email], fail_silently=False)

        if self.web:
            self.status = "Visible"
        else:
            self.status = "Arch"
        self.save()

    def check_to_show(self, profile, request):

        if (self.status != 'Arch') and self.end_date:
            now = datetime.datetime.now()
            end = datetime.datetime(self.end_date.year, self.end_date.month, self.end_date.day)

            if end < now:
                self.status = 'Arch'
                self.save()

        if self.web and (self.status != 'Arch') and profile and (
                self.scope == 'All' or (profile.account_type == 1 and self.scope == 'Free') or (
                profile.account_type > 1 and self.scope == 'Sub')):
            messages.info(request, render_to_string('contact/announcement.txt', {'announcement': self}))
        else:
            if not profile:
                messages.info(request, render_to_string('contact/announcement.txt', {'announcement': self}))
