"""
Copyright 2014-2016 University of Illinois

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,Payement
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

file: accounts/views.py

Author: Jon Gunderson

"""

# accounts/views.py
from __future__ import absolute_import
from django.http import HttpResponse
from django.contrib.auth import logout
from django.contrib import messages

from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse_lazy, reverse

from django.db.models import Q

from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic import TemplateView
from django.views.generic import FormView
from django.views.generic import CreateView
from django.views.generic import RedirectView
from django.contrib.auth.mixins import LoginRequiredMixin

from django.contrib.auth.models import User
from userProfiles.models import UserProfile
from userProfiles.models import InstitutionalProfile
from accounts.models import AccountType
from stats.models import StatsUser
from websiteResultGroups.models import WebsiteReportGroup

from fae2.settings import FAE_DISABLED_URL

from reports.views import get_default_url

from subscriptions.models import Payment

from django.forms.models import inlineformset_factory

from django import forms

from websiteResults.models import WebsiteReport

import datetime

from timezone_field import TimeZoneFormField

from reports.views import FAENavigationMixin

import requests
import hmac
import hashlib
import base64
import string
import random

from fae2.settings import PAYMENT_SITE_ID
from fae2.settings import PAYMENT_URL
from fae2.settings import PAYMENT_SEND_KEY
from fae2.settings import PAYMENT_RECEIVE_KEY
from fae2.settings import PAYMENT_ACCOUNT
from fae2.settings import DEFAULT_ACCOUNT_TYPE

from fae2.settings import SITE_URL
from fae2.settings import SHIB_URL
from fae2.settings import SHIBBOLETH_SUPERUSER

from fae2.settings import PROCESSING_THREADS

from userProfiles.models import UserProfile
from stats.models import StatsUser

from userProfiles.models import get_profile

from django.conf import settings
from django.utils.timezone import make_aware
from django.utils import timezone


def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def getExpirationDate(dt, months):
    if (not dt):
        dt = timezone.now()

    year = dt.year
    month = dt.month + months
    day = dt.day

    if day > 28:
        day = 1
        month += 1

    if month > 12:
        month = 1
        year += 1

    return


# Utilities

def parse_result(result):
    ro = {}

    lines = result.splitlines()

    count = 1

    for line in lines:
        if len(line):
            [name, value] = line.split('=')
            ro[name] = value

    return ro


def format_timestamp(ts):
    [date, time] = ts.split(' ')

    [month, day, year] = date.split('-')

    return year + '-' + month + '-' + day + ' ' + time


# Create your views here.


class HeaderInfo(LoginRequiredMixin, TemplateView):
    template_name = 'registration/header_info.html'


class ShibbolethLogout(RedirectView):

    def get_redirect_url(self, *args, **kwargs):
        logout(self.request)
        self.url = SITE_URL + '/Shibboleth.sso/Logout'
        return super(ShibbolethLogout, self).get_redirect_url(*args, **kwargs)


class ShibbolethLogin(RedirectView):

    def get_redirect_url(self, *args, **kwargs):

        user = self.request.user

        if user.username == SHIBBOLETH_SUPERUSER:
            user.is_staff = True
            user.is_superuser = True
            user.save()

        profile = get_profile(user)

        # Try to populate user information from shibboleth header information
        if user.first_name == '':
            try:
                user.first_name = self.request.META['givenName']
                user.save()
            except:
                pass

        if user.last_name == '':
            try:
                user.last_name = self.request.META['sn']
                user.save()
            except:
                pass

        if user.email == '':
            try:
                user.email = self.request.META['mail']
                user.save()
            except:
                try:
                    if user.username.find('@') > 0 and user.username.find('.'):
                        user.email = user.username
                        user.save()
                except:
                    pass

        profile.update_institutional_subscription()

        self.url = SITE_URL

        return super(ShibbolethLogin, self).get_redirect_url(*args, **kwargs)


class ShibbolethDiscovery(TemplateView):
    template_name = 'registration/shib_discovery.html'


class ShibbolethInstitution(RedirectView):
    def get_redirect_url(self, *args, **kwargs):

        self.url = SITE_URL

        try:
            ip = InstitutionalProfile.objects.get(domain=kwargs['domain'])
            self.url += '/Shibboleth.sso/Login?entityID=' + ip.authentication + '&target=' + SITE_URL
        except:
            try:
                ip = InstitutionalProfile.objects.get(alt_domain=kwargs['domain'])
                self.url += '/Shibboleth.sso/Login?entityID=' + ip.authentication + '&target=' + SITE_URL
            except:
                ip = None

        return super(ShibbolethInstitution, self).get_redirect_url(*args, **kwargs)


class Logout(FAENavigationMixin, TemplateView):
    template_name = 'registration/logout.html'

    def get(self, request, *args, **kwargs):
        logout(request)
        return super(Logout, self).get(request, *args, **kwargs)


class Login(FAENavigationMixin, TemplateView):
    template_name = 'registration/login.html'

    def get_context_data(self, **kwargs):
        context = super(Login, self).get_context_data(**kwargs)

        try:
            context['user'] = self.request.user
        except:
            context['user'] = 'none'

        return context


class MyAccountView(FAENavigationMixin, TemplateView):
    template_name = 'accounts/my_account.html'

    def get_context_data(self, **kwargs):
        context = super(MyAccountView, self).get_context_data(**kwargs)

        user_profile = UserProfile.objects.get(user=self.request.user)
        user_profile.update_subscription_status()
        user_profile.check_for_subscription_messages(self.request)
        payments = Payment.objects.filter(user=self.request.user, status='PMT_APPROV')

        context['user_stats'] = StatsUser.objects.get(user=self.request.user)
        context['user_profile'] = user_profile
        context['payments'] = payments

        return context


class UserProfileForm(forms.Form):
    first_name = forms.CharField(max_length=30)
    last_name = forms.CharField(max_length=30)
    email = forms.EmailField()
    org = forms.CharField(label="Organization", max_length=127, required=False)
    dept = forms.CharField(label="Department", max_length=127, required=False)
    email_announcements = forms.BooleanField(required=False)
    timezone = TimeZoneFormField()


class UpdateUserProfileView(LoginRequiredMixin, FAENavigationMixin, SuccessMessageMixin, FormView):
    template_name = 'accounts/update_profile.html'
    form_class = UserProfileForm

    success_url = reverse_lazy('my_account')
    success_message = "Updated %(first_name)s %(last_name)s Profile"

    login_url = reverse_lazy('run_anonymous_report')
    redirect_field_name = "Anonymous Report"

    updated = False
    errors = False

    def form_valid(self, form):
        user = self.request.user
        user.first_name = form.cleaned_data['first_name']
        user.last_name = form.cleaned_data['last_name']
        user.email = form.cleaned_data['email']
        user.save()

        profile = user.profile
        profile.org = form.cleaned_data['org']
        profile.dept = form.cleaned_data['dept']
        profile.timezone = form.cleaned_data['timezone']
        profile.email_announcements = form.cleaned_data['email_announcements']
        profile.save()

        return super(UpdateUserProfileView, self).form_valid(form)

    def get_initial(self):
        # Populate ticks in BooleanFields
        user = self.request.user

        initial = {}
        initial['first_name'] = user.first_name
        initial['last_name'] = user.last_name
        initial['email'] = user.email
        initial['org'] = user.profile.org
        initial['dept'] = user.profile.dept
        initial['timezone'] = user.profile.timezone
        initial['email_announcements'] = user.profile.email_announcements
        return initial

    def get_context_data(self, **kwargs):
        context = super(UpdateUserProfileView, self).get_context_data(**kwargs)

        user_profile = UserProfile.objects.get(user=self.request.user)
        user_profile.update_subscription_status()
        user_profile.check_for_subscription_messages(self.request)

        context['user_stats'] = StatsUser.objects.get(user=self.request.user)
        context['user_profile'] = user_profile

        return context


class UpdateSubscriptionView(LoginRequiredMixin, FAENavigationMixin, CreateView):
    model = Payment
    fields = ['account_type', 'subscription_duration', 'subscription_end', 'subscription_cost',
              'actual_subscription_cost']
    template_name = 'accounts/update_subscription.html'

    login_url = get_default_url()
    redirect_field_name = "Anonymous Report"

    def form_valid(self, form):

        user = self.request.user

        form.instance.user = user

        actual_subscription_cost = form.instance.actual_subscription_cost

        try:
            p = UserProfile.objects.get(user=user)
            form.instance.profile_subscription_end = p.subscription_end
        except:
            pass

        if actual_subscription_cost > 0:

            ro = self.register(str(actual_subscription_cost))

            form.instance.token = ro['TOKEN']
            form.instance.transaction_id = ro['TRANSACTIONID']
            form.instance.register_time = ro['TIMESTAMP']
            form.instance.register_response_code = ro['RESPONSECODE']
            form.instance.register_response_msg = ro['RESPONSEMESSAGE']
            form.instance.redirect_url = ro['REDIRECT']

            if form.instance.register_response_code == '0':
                form.instance.status = 'PMT_REGISTERED'
            else:
                form.instance.status = 'PMT_ERROR'
        else:

            form.instance.token = id_generator(40)
            form.instance.status = 'PMT_NOCOST'
            form.instance.redirect_url = reverse('payment')

        return super(UpdateSubscriptionView, self).form_valid(form)

    def form_invalid(self, form):

        return super(UpdateSubscriptionView, self).form_invalid(form)

    def get_initial(self):
        # Populate ticks in BooleanFields
        user = self.request.user

        initial = {}
        initial['account_type'] = user.profile.account_type.type_id + 1
        initial['profile_subscription_end'] = user.profile.subscription_end

        initial['subscription_duration'] = '1'
        initial['subscription_end'] = ''
        initial['subscription_cost'] = '0'
        initial['actual_subscription_cost'] = '0'

        return initial

    def get_context_data(self, **kwargs):
        context = super(UpdateSubscriptionView, self).get_context_data(**kwargs)

        user_profile = UserProfile.objects.get(user=self.request.user)
        user_profile.update_subscription_status()
        user_profile.check_for_subscription_messages(self.request)

        context['last_subscription'] = user_profile.get_last_subscription()
        context['user_stats'] = StatsUser.objects.get(user=self.request.user)
        context['user_profile'] = user_profile
        context['self_regs'] = AccountType.objects.filter(self_registration=True)
        context['shibboleths'] = AccountType.objects.filter(shibboleth=True)

        return context

    def get_success_url(self):
        return reverse('payment_register', args=[self.object.reference_id])

    def register(self, amount):

        try:
            p = bytearray()
            p.extend(map(ord, PAYMENT_SEND_KEY))

            now = timezone.now()
            ts = now.strftime("%m-%d-%Y %H:%M:%S")
            amount = amount + '.00'
            code = amount + '|' + str(PAYMENT_SITE_ID) + '|' + ts

            c = bytearray()
            c.extend(map(ord, code))

            certification_maker = hmac.new(p, c, hashlib.sha1)

            payload = {'action': 'registerccpayment',
                       'siteid': PAYMENT_SITE_ID,
                       'amount': amount,
                       'market': 'retail',
                       'referenceid1': 'test',
                       'timestamp': ts,
                       'certification': certification_maker.hexdigest()
                       }

            r = requests.post(PAYMENT_URL, data=payload)

            ro = parse_result(r.text)

            try:
                ro['TIMESTAMP'] = format_timestamp(ro['TIMESTAMP'])
            except:
                ro['TIMESTAMP'] = timezone.now()

            return ro
        except:
            return False


# ==============================================================
#
# Payment Views
#
# ==============================================================

class RegisterView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/payment_register.html'

    def get_context_data(self, **kwargs):
        context = super(RegisterView, self).get_context_data(**kwargs)

        context['payment'] = Payment.objects.get(reference_id=kwargs['reference_id'])

        return context


class PaymentView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/payment.html'

    def get_context_data(self, **kwargs):
        context = super(PaymentView, self).get_context_data(**kwargs)

        user = self.request.user

        try:
            profile = UserProfile.objects.get(user=user)
        except:
            profile = False

        try:
            token = self.request.GET['token']
        except:
            token = False

        try:
            reason = self.request.GET['reason']
        except:
            reason = False

        try:
            payment = Payment.objects.get(token=token)

            if payment.actual_subscription_cost > 0:

                ro = self.capture(payment)

                payment.capture_time = ro['TIMESTAMP']
                payment.capture_response_msg = ro['RESPONSEMESSAGE']
                payment.capture_response_code = ro['RESPONSECODE']
                payment.save()

                #            print("PROFILE: " + str(profile))
                #            print(" REASON: " + str(reason))
                #            print("   CODE: " + str(payment.capture_response_code))
                #            print("   COST: " + str(payment.subscription_cost))
                #            print("  START: " + str(payment.capture_time))
                #            print("    END: " + str(payment.subscription_end))
                #            print("    END: " + str(payment.profile_subscription_end))

                if profile:
                    if profile.subscription_end == payment.profile_subscription_end:
                        if not reason and payment.capture_response_code == '0':
                            payment.status = 'PMT_APPROV'
                        elif reason == 'canceled':
                            payment.status = 'PMT_CANCELLED'
                        elif reason == 'maxattempts':
                            payment.status = 'PMT_MAX_ATTEMPT'
                        elif reason == 'tokenexpired':
                            payment.status = 'PMT_EXPIRED'
                        else:
                            payment.status = 'PMT_ERROR'
                    else:
                        payment.status = 'PMT_SESSION'
                else:
                    payment.status = 'PMT_ERROR'

            payment.save()

            if profile:
                if payment.status == 'PMT_APPROV':

                    if profile.account_type == payment.account_type:
                        profile.subscription_end = payment.subscription_end
                        profile.add_payment(payment.subscription_cost)

                        if not profile.subscription_start:
                            profile.subscription_start = timezone.now()

                    else:
                        profile.account_type = payment.account_type
                        profile.subscription_start = timezone.now()
                        profile.subscription_end = payment.subscription_end
                        profile.set_payments(payment.subscription_cost)

                if payment.status == 'PMT_NOCOST':
                    profile.account_type = payment.account_type
                    profile.subscription_start = timezone.now()
                    profile.subscription_end = payment.subscription_end
                    profile.subtract_payment(payment.subscription_cost)

                profile.save()


        except:
            payment = False

        context['token'] = token
        context['reason'] = reason
        context['payment'] = payment

        return context

    def capture(self, payment):
        try:

            p = bytearray()
            p.extend(map(ord, PAYMENT_SEND_KEY))

            now = timezone.now()
            ts = now.strftime("%m-%d-%Y %H:%M:%S")
            amount = str(payment.actual_subscription_cost) + '.00'
            code = payment.token + '|' + amount + '|' + ts + '|1|' + PAYMENT_ACCOUNT + '|' + amount

            c = bytearray()
            c.extend(map(ord, code))

            certification_maker = hmac.new(p, c, hashlib.sha1)

            account = PAYMENT_ACCOUNT.split('|')

            payload = {'action': 'captureccpayment',
                       'token': payment.token,
                       'amount': amount,
                       'numaccounts': 1,
                       'chart1': account[0],
                       'fund1': account[1],
                       'org1': account[2],
                       'account1': account[3],
                       'program1': account[4],
                       'amount1': amount,
                       'timestamp': ts,
                       'certification': certification_maker.hexdigest()
                       }

            r = requests.post(PAYMENT_URL, data=payload)

            ro = parse_result(r.text)

            try:
                ro['TIMESTAMP'] = format_timestamp(ro['TIMESTAMP'])
            except:
                ro['TIMESTAMP'] = timezone.now()

            print(str(ro))

            return ro
        except:
            return False


# ==============================================================
#
# Donation Views
#
# ==============================================================

class DonateForm(forms.Form):
    donor_name = forms.CharField(max_length=40)
    donor_email = forms.EmailField(max_length=60)
    donation_amount = forms.IntegerField()
    show_donation = forms.BooleanField(required=False)


class DonateView(FAENavigationMixin, SuccessMessageMixin, FormView):
    template_name = 'accounts/donate.html'
    form_class = DonateForm

    success_url = reverse_lazy('donate_success')
    success_message = "Thank you for your support!"

    def form_valid(self, form):

        user = self.request.user

        if user.is_anonymous:
            user = User.objects.get(username='anonymous')

        name = form.cleaned_data['donor_name']
        email = form.cleaned_data['donor_email']
        amount = form.cleaned_data['donation_amount']
        show_donation = form.cleaned_data['show_donation']

        return super(DonateView, self).form_valid(form)

    def get_initial(self):
        # Populate ticks in BooleanFields
        initial = {}

        initial['donor_name'] = ''
        initial['donor_email'] = ''
        initial['show_donation'] = False

        if not self.request.user.is_anonymous:
            user = self.request.user
            initial['donor_name'] = user.first_name + ' ' + user.last_name
            initial['donor_email'] = user.email
            initial['show_donation'] = True

        return initial


class DonateSuccessView(FAENavigationMixin, TemplateView):
    template_name = 'accounts/donate_success.html'

    def get_context_data(self, **kwargs):
        context = super(DonateSuccessView, self).get_context_data(**kwargs)

        return context


class DonateFailView(FAENavigationMixin, TemplateView):
    template_name = 'accounts/donate_fail.html'

    def get_context_data(self, **kwargs):
        context = super(DonateFailView, self).get_context_data(**kwargs)

        return context


# ==============================================================
#
# Administrator Views
#
# ==============================================================

class StatusView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/status.html'

    def get_context_data(self, **kwargs):
        context = super(StatusView, self).get_context_data(**kwargs)

        reports = WebsiteReport.objects.all()

        context['created'] = reports.filter(status='-')
        context['initialized'] = reports.filter(status='I')
        context['processing'] = reports.filter(status='A')
        context['saving'] = reports.filter(status='S')
        context['errors'] = reports.filter(status='E')

        context['processing_threads'] = PROCESSING_THREADS

        return context


class AllUserInformationView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/all_user_information.html'

    def get_context_data(self, **kwargs):
        context = super(AllUserInformationView, self).get_context_data(**kwargs)

        user_profiles = UserProfile.objects.all()

        stats_users = StatsUser.objects.exclude(user__username="anonymous")

        ACTIVE_DAYS = 120

        active = 0
        subscribers = 0
        registered = 0
        for su in stats_users:
            u = su.get_activity(ACTIVE_DAYS)
            if u.num_reports > 0:
                active += 1

            if su.user.profile.account_type.type_id > 1:
                subscribers += 1

            registered += 1

        context['include_announcements'] = user_profiles.filter(email_announcements=True)
        context['exclude_announcements'] = user_profiles.filter(email_announcements=False)
        context['stats_users'] = stats_users

        context['registered'] = registered
        context['subscribers'] = subscribers
        context['active'] = active
        context['active_days'] = ACTIVE_DAYS

        return context


class UserInformationView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/user_information.html'

    def get_context_data(self, **kwargs):
        context = super(UserInformationView, self).get_context_data(**kwargs)

        user = User.objects.get(id=kwargs['user_id'])
        user_profile = UserProfile.objects.get(user=user)
        stats_user = StatsUser.objects.get(user=user)

        context['user_profile'] = user_profile
        context['stats_user'] = stats_user

        return context

class InstitutionalAdminView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/institutional_admin.html'

    def get_context_data(self, **kwargs):
        context = super(InstitutionalAdminView, self).get_context_data(**kwargs)

        user_stats = StatsUser.objects.filter(user__profile__domain=kwargs['domain'])
        context['user_stats'] = user_stats

        return context


class InstitutionalInformationView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/institutional_information.html'

    def get_context_data(self, **kwargs):
        context = super(InstitutionalInformationView, self).get_context_data(**kwargs)

        institutions = InstitutionalProfile.objects.all()

        context['institutions'] = institutions

        return context


class PaymentInformationView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/payment_information.html'

    def get_context_data(self, **kwargs):
        context = super(PaymentInformationView, self).get_context_data(**kwargs)

        approved_payments = Payment.objects.filter(status='PMT_APPROV')

        context['approved_payments'] = approved_payments

        return context


class InvoiceView(LoginRequiredMixin, FAENavigationMixin, TemplateView):
    template_name = 'accounts/invoice.html'

    def get_context_data(self, **kwargs):
        context = super(InvoiceView, self).get_context_data(**kwargs)

        payment = Payment.objects.get(reference_id=kwargs['reference_id'])

        context['payment'] = payment

        return context


class DisabledView(TemplateView):
    template_name = 'accounts/disabled.html'

    def get_context_data(self, **kwargs):
        context = super(DisabledView, self).get_context_data(**kwargs)

        context['fae_disabled_url'] = FAE_DISABLED_URL

        return context
