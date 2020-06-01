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

file: userProfiles/models.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.db import models
from django.contrib.auth.models import User
from django_registration.signals import user_registered
from timezone_field import TimeZoneField

from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse
from django.template.loader import render_to_string

from django.db.models import Q

from django.contrib import messages

import markdown

from accounts.models import AccountType
from subscriptions.models import Payment
from websiteResultGroups.models import WebsiteReportGroup
from reports.models import WebsiteReport
from stats.models import StatsUser
from django.contrib.sites.models import Site

from contact.models import Announcement

from fae2.settings import DEFAULT_ACCOUNT_TYPE
from fae2.settings import SHIBBOLETH_ENABLED

from django.core.mail import send_mail
from fae2.settings import EMAIL_HOST_USER
from fae2.settings import ADMIN_EMAIL

from datetime import datetime

from datetime import date

from django.conf import settings
from django.utils.timezone import make_aware

def get_profile(user):
    try:
        profile = UserProfile.objects.get(user=user)
    except:
        atype = AccountType.objects.get(type_id=DEFAULT_ACCOUNT_TYPE)
        profile = UserProfile(user=user, account_type=atype)
        profile.save()

        profile.update_institutional_subscription()

    try:
        stats = StatsUser.objects.get(user=user)
    except ObjectDoesNotExist:
        wsrg = WebsiteReportGroup(title="Summary of results for " + str(user))
        wsrg.save()
        stats = StatsUser(user=user, ws_report_group=wsrg)
        stats.save()

    return profile

SUBSCRIPTION_STATUS_CHOICES = (
    ('FREE', 'Free'),
    ('CURRENT', 'Current'),
    ('EXPIRED', 'Expired'),
    ('SPECIAL', 'Special')
)

USER_ROLES = (
    ('STANDARD', 'Standard User'),
    ('ADMIN', 'Institutional Administrator')
)

class InstitutionalProfile(models.Model):
    id = models.AutoField(primary_key=True)

    title = models.CharField(max_length=64, blank=True, default="")
    contact1_name = models.CharField(max_length=32, blank=True, default="")
    contact1_title = models.CharField(max_length=32, blank=True, default="")
    contact1_email = models.EmailField(max_length=64, blank=True, default="")
    contact1_phone = models.CharField(max_length=16, blank=True, default="")

    contact2_name = models.CharField(max_length=32, blank=True, default="")
    contact2_title = models.CharField(max_length=32, blank=True, default="")
    contact2_email = models.EmailField(max_length=64, blank=True, default="")
    contact2_phone = models.CharField(max_length=16, blank=True, default="")

    account_type = models.ForeignKey(AccountType, related_name="institional_subscriptions", on_delete=models.CASCADE)
    top_level_domain = models.CharField(max_length=8, blank=True, default="")
    domain = models.CharField(max_length=64, blank=True, default="")
    alt_domain = models.CharField(max_length=64, blank=True, default="")
    authentication = models.CharField(max_length=64, blank=True, default="")

    subscription_status = models.CharField(max_length=8, choices=SUBSCRIPTION_STATUS_CHOICES, default="FREE")
    subscription_days = models.IntegerField(default=0)

    subscription_start = models.DateField(null=True, blank=True)
    subscription_end = models.DateField(null=True, blank=True)
    subscription_payment = models.IntegerField(default=0)  # in dollars
    last_payment = models.IntegerField(default=0)  # in dollars

    users = models.ManyToManyField(User, related_name="institional_subscriptions", blank=True, default=None)

    class Meta:
        verbose_name = "Institutional Profile"
        verbose_name_plural = "Institutional Profiles"
        ordering = ['account_type']

    def __str__(self):
        return self.domain + '.' + self.top_level_domain

    def update_subscription_status(self):

        if self.subscription_end:
            date1 = date(self.subscription_end.year, self.subscription_end.month, self.subscription_end.day)
            date2 = date.today()
            delta = date1 - date2

            self.subscription_days = delta.days

            if self.subscription_days >= 0:
                self.subscription_status = 'CURRENT'
            else:
                self.subscription_status = 'EXPIRED'
                self.subscription_payments = 0
                self.account_type = AccountType.objects.get(type_id=16)

        self.save()

    def check_for_email_subscription_notifications(self):

        topic = ""

        if self.subscription_status == 'CURRENT':
            if self.subscription_days == 7 or self.subscription_days == 14:
                topic = "FAE Institutional Subscription expires in " + str(self.subscription_days) + "days"
            elif self.subscription_days == 1:
                topic = "FAE Institutional Subscription expires in one day"
            elif self.subscription_days == 0:
                topic = "FAE Institutional Subscription expires today"

        if self.subscription_status == 'EXPIRED' and self.subscription_days == -1:
            topic = "FAE Institutional Subscription expired yesterday"

        if topic:
            emails = []
            if self.contact1_email:
                emails.append(self.contact1_email)
            if self.contact2_email:
                emails.append(self.contact2_email)

            site = Site.objects.get_current()
            message = render_to_string('accounts/email_institutional_message.txt', {'institutional_profile': self,
                                                                                    'subscription_url': str(
                                                                                        site) + reverse(
                                                                                        'contact_form')})
            send_mail(topic, message, EMAIL_HOST_USER, emails, fail_silently=False)

class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)

    account_type = models.ForeignKey(AccountType, related_name="user_profiles", on_delete=models.CASCADE)
    enable_any_account_types = models.BooleanField(default=False)

    subscription_start = models.DateField(null=True, blank=True)
    subscription_end = models.DateField(null=True, blank=True)
    subscription_payments = models.IntegerField(default=0)  # in dollars
    subscription_daily_rate = models.IntegerField(default=0)  # in cents
    subscription_status = models.CharField(max_length=8, choices=SUBSCRIPTION_STATUS_CHOICES, default="FREE")
    subscription_days = models.IntegerField(default=0)

    top_level_domain = models.CharField(max_length=8, null=True, blank=True)
    domain = models.CharField(max_length=64, null=True, blank=True)

    org = models.CharField(max_length=128, blank=True)
    dept = models.CharField(max_length=128, blank=True)
    email_announcements = models.BooleanField(default=True)
    role = models.CharField(max_length=8, choices=USER_ROLES, default="STANDARD")

    timezone = TimeZoneField(default='America/Chicago')

    def __unicode__(self):
        return self.user.username

    def set_domain_info(self):
        # If shibboleth headers did not find an e-mail address, populate with the username
        if not len(self.user.email):
            if self.user.username.find('@') > 0 and self.user.username.find('.') > 0:
                self.user.email = self.user.username
                self.user.save()

        email = self.user.email

        if email:
            email = email.strip()
            parts = email.split('.')
            l = len(parts)
            if l > 1:
                top = parts[l - 1]
                parts = parts[l - 2].split('@')
                if len(parts) > 1:
                    domain = parts[len(parts) - 1]
                else:
                    domain = parts[0]

                if len(top) < 8 and len(domain) < 64:
                    self.top_level_domain = top
                    self.domain = domain
                    self.save()

    def set_payments(self, amount):
        self.subscription_payments = amount
        self.update_daily_rate()

    def add_payment(self, amount):
        self.subscription_payments += amount
        self.update_daily_rate()

    def subtract_payment(self, amount):
        self.subscription_payments -= amount

        if self.subscription_payments < 0:
            self.subscription_payments = 0

        self.update_daily_rate()

    def update_subscription_status(self):
        self.enable_any_account_types = True

        if self.subscription_end:
            self.enable_any_account_types = False

            date1 = date(self.subscription_end.year, self.subscription_end.month, self.subscription_end.day)
            date2 = date.today()
            delta = date1 - date2

            self.subscription_days = delta.days

            if self.subscription_days >= 0:
                self.subscription_status = 'CURRENT'
            else:
                self.subscription_status = 'EXPIRED'
                self.subscription_payments = 0
                self.subscription_daily_rate = 0
                self.account_type = AccountType.objects.get(type_id=1)

            if self.subscription_days < 7:
                self.enable_any_account_types = True

        self.save()

        self.update_daily_rate()

        return self.subscription_status

    def update_institutional_subscription(self):

        if not self.domain:
            self.set_domain_info()

        if not SHIBBOLETH_ENABLED:
            return False

        try:
            ip = InstitutionalProfile.objects.get(top_level_domain=self.top_level_domain, domain=self.domain)
        except:
            try:
                ip = InstitutionalProfile.objects.get(top_level_domain=self.top_level_domain, alt_domain=self.domain)
            except:
                ip = False

        if ip:
            ip.users.add(self.user)
            ip.save()

            if ip.account_type.shibboleth:

                self.subscription_status = ip.subscription_status
                self.subscription_end = ip.subscription_end
                self.subscription_start = ip.subscription_start
                self.subscription_days = ip.subscription_days

                if ip.subscription_status == 'CURRENT':
                    self.account_type = ip.account_type

                if ip.subscription_status == 'EXPIRED':
                    self.account_type = ip_free

                self.save()

        return ip

    def get_last_subscription(self):
        try:
            payments = Payment.objects.filter(Q(status='PMT_APPROV') | Q(status='PMT_NOCOST'), user=self.user).latest(
                'reference_time')
        except:
            payments = False

        if payments:
            return payments

        return payments

    def check_for_subscription_messages(self, request):

        subscription_url = reverse('update_subscription')

        self.update_subscription_status()

        if self.subscription_status == 'CURRENT' and self.subscription_days < 8:
            messages.warning(request, render_to_string('accounts/subscription_current.txt',
                                                       {'url': subscription_url, 'days': self.subscription_days}))
        elif self.subscription_status == 'EXPIRED' and self.subscription_days == -1:
            messages.warning(request, render_to_string('accounts/subscription_expired.txt',
                                                       {'url': subscription_url, 'days': self.subscription_days}))

    def check_for_email_subscription_notifications(self):

        topic = ""

        if self.subscription_status == 'CURRENT':
            if self.subscription_days == 7:
                topic = "FAE subscription expires in " + str(self.subscription_days) + "days"
            elif self.subscription_days == 1:
                topic = "FAE subscription expires in one day"
            elif self.subscription_days == 0:
                topic = "FAE subscription expires today"

        if self.subscription_status == 'EXPIRED' and self.subscription_days == -1:
            topic = "FAE subscription expired yesterday"

        if topic:
            site = Site.objects.get_current()
            message = render_to_string('accounts/email_message.txt', {'user_profile': self,
                                                                      'subscription_url': str(site) + reverse(
                                                                          'update_subscription')})
            send_mail(topic, message, EMAIL_HOST_USER, [self.user.email], fail_silently=False)

        return

    def update_daily_rate(self):
        self.subscription_daily_rate = 0;

        if self.subscription_payments > 0 and self.subscription_end and self.subscription_start:
            date1 = date(self.subscription_end.year, self.subscription_end.month, self.subscription_end.day)
            date2 = date(self.subscription_start.year, self.subscription_start.month, self.subscription_start.day)
            delta = date1 - date2

            if delta.days > 0:
                self.subscription_daily_rate = (100 * self.subscription_payments) / delta.days

        self.save()

    def get_active_reports(self):

        user_reports = WebsiteReport.objects.filter(user=self.user).filter(status='C')
        reports = user_reports[0:self.account_type.max_archive]
        old_reports = user_reports[self.account_type.max_archive:]

        return [reports, old_reports]

    def is_inst_admin(self):
        return self.role == 'ADMIN'

    # creates new UserProfile when new user registers

def user_registered_callback(sender, user, request, **kwargs):
    profile = UserProfile(user=user)
    profile.account_type = AccountType.objects.get(type_id=DEFAULT_ACCOUNT_TYPE)
    profile.org = ''
    profile.save()

    # Update first and last name for user
    user.first_name = request.POST['first_name']
    user.last_name = request.POST['last_name']
    user.save()

    wsrg = WebsiteReportGroup(title="Summary of results for " + str(user))
    wsrg.save()
    user_stats = StatsUser(user=user, ws_report_group=wsrg)
    user_stats.save()

user_registered.connect(user_registered_callback)
