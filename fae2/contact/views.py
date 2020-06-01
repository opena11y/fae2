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

file: contact/views.py

Author: Jon Gunderson

"""

# contact/views.py
from __future__ import absolute_import
from django.core.mail import send_mail
from django.urls import reverse_lazy, reverse

from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic import CreateView
from django.views.generic import UpdateView
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

from django.contrib.auth.models import User

from .models import Contact
from .models import Announcement

from reports.views import FAENavigationMixin

from fae2.settings import EMAIL_HOST_USER
from fae2.settings import ADMIN_EMAIL

# Create your views here.
class ContactFormView(LoginRequiredMixin, FAENavigationMixin, SuccessMessageMixin, CreateView):
    model = Contact
    fields = ['topic', 'message']
    template_name = 'contact/contact_form.html'

    success_url = reverse_lazy('contact_form')
    success_message = "Message on \"%(topic)s\" was sent successfully sent"

    login_url = reverse_lazy('login')
    redirect_field_name = "Login"
    permission_denied_message = "You must login to contact the administrator"

    def form_valid(self, form):
        user = self.request.user
        form.instance.user = user

        message = "The following message was submitted to the FAE contact system"
        message += "\n\nUser: " + user.first_name + " " + user.last_name
        message += "\nUsername: " + user.username
        message += "\nE-mail: " + user.email
        message += "\n\nTopic: " + form.instance.topic
        message += "\n\nMessage:\n" + form.instance.message

        contact_topic = "FAE: " + form.instance.topic

        send_mail(contact_topic, message, EMAIL_HOST_USER, [ADMIN_EMAIL], fail_silently=False)

        return super(ContactFormView, self).form_valid(form)

# Create your views here.
class ResponseFormView(LoginRequiredMixin, FAENavigationMixin, UpdateView):
    model = Contact
    fields = ['topic', 'message', 'status', 'comments']
    template_name = 'contact/response_form.html'

    login_url = reverse_lazy('run_anonymous_report')
    redirect_field_name = "Anonymous Report"

    def form_valid(self, form):
        contact = self.get_object()
        user = contact.user
        form.instance.user = user

        message = "The following message was submitted to the FAE contact system"
        message += "\n\nUser: " + user.first_name + " " + user.last_name
        message += "\nUsername: " + user.username
        message += "\nE-mail: " + user.email
        message += "\n\nTopic: " + form.instance.topic
        message += "\n\nStatus:\n" + form.instance.show_status()
        message += "\n\nMessage:\n" + form.instance.message
        message += "\n\nResponse:\n" + form.instance.comments

        contact_topic = "FAE: " + form.instance.topic

        send_mail(contact_topic, message, EMAIL_HOST_USER, [contact.user.email], fail_silently=False)

        return super(ResponseFormView, self).form_valid(form)

    def get_success_url(self):
        return reverse('responses', kwargs={})

    def get_context_data(self, **kwargs):
        context = super(ResponseFormView, self).get_context_data(**kwargs)
        context['action'] = reverse('response_form',
                                    kwargs={'pk': self.get_object().id})

        return context

class ResponsesView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'contact/responses.html'

    def get_context_data(self, **kwargs):
        context = super(ResponsesView, self).get_context_data(**kwargs)

        context['new_contacts'] = Contact.objects.filter(status='NR')
        context['old_contacts'] = Contact.objects.exclude(status='NR')

        return context

class AnnouncementFormView(LoginRequiredMixin, FAENavigationMixin, SuccessMessageMixin, CreateView):
    model = Announcement
    fields = ['topic', 'message_text', 'message_markdown', 'scope', 'email', 'web', 'end_date']
    template_name = 'contact/announcement_form.html'

    success_url = reverse_lazy('create_announcement')
    success_message = "Announcement on \"%(topic)s\" was sent succesfully created"

    login_url = reverse_lazy('run_anonymous_report')
    redirect_field_name = "Anonymous Report"

    def form_valid(self, form):
        return super(AnnouncementFormView, self).form_valid(form)

class AnnouncementsView(FAENavigationMixin, TemplateView):
    template_name = 'contact/announcements.html'

    def get_context_data(self, **kwargs):
        context = super(AnnouncementsView, self).get_context_data(**kwargs)

        context['current'] = Announcement.objects.exclude(status='Arch')
        context['archived'] = Announcement.objects.filter(status='Arch')

        return context
