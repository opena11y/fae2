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

file: subscriptions/views.py

Author: Jon Gunderson

"""

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import logout
from django.contrib import messages

from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse_lazy, reverse

from django.db.models import Q

from django.views.generic   import TemplateView
from reports.views          import FAENavigationMixin

from accounts.models        import AccountType

# Create your views here.

class SubscriptionOptionsView(FAENavigationMixin, TemplateView):
    template_name = 'subscriptions/options.html'

    def get_context_data(self, **kwargs):
        context = super(SubscriptionOptionsView, self).get_context_data(**kwargs)

        context['self_regs']   = AccountType.objects.filter(self_registration=True)
        context['shibboleths'] = AccountType.objects.filter(shibboleth=True)

        return context
