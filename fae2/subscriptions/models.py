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

file: subscriptions/models.py

Author: Jon Gunderson

"""

from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

import markdown
import datetime

import string
import random

from django.conf import settings
from django.utils.timezone import make_aware

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

from accounts.models import AccountType

# Create your models here.

class SubscriptionRate(models.Model):
    id = models.AutoField(primary_key=True)

    subscription_id = models.IntegerField(default=0)

    description = models.TextField(blank=True, default="")
    description_html = models.TextField(blank=True, default="")

    account_type = models.OneToOneField(AccountType, related_name="subscription_rate", on_delete=models.CASCADE)

    one_month = models.IntegerField(default=0)
    three_month = models.IntegerField(default=0)
    six_month = models.IntegerField(default=0)
    twelve_month = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Subscription Rate"
        verbose_name_plural = "Subscription Rates"
        ordering = ['account_type']

    def __str__(self):
        return 'Subscription Rate: ' + self.account_type.title

    def save(self):
        if self.description:
            self.description_html = markdown.markdown(self.description)

        super(SubscriptionRate, self).save()  # Call the "real" save() method.

PAYMENT_STATUS = (
    ('NEW', 'New un-initialized payment transaction'),
    ('PMT_REGISTERED', 'Payment registered'),
    ('PMT_APPROV', 'Payment approved'),
    ('PMT_CANCELLED', 'Payment cancelled by user'),
    ('PMT_MAX_ATTEMPT', 'Payment max attempts'),
    ('PMT_EXPIRED', 'Payment token expired'),
    ('PMT_SESSION', 'Payment session error'),
    ('PMT_ERROR', 'Payment error'),
    ('PMT_NOCOST', 'No cost change'),
)

PAYMENT_DURATION = (
    ('1', 'One month'),
    ('3', 'Three months'),
    ('6', 'Six months'),
    ('12', 'Twelve months'),
)

class Payment(models.Model):
    id = models.AutoField(primary_key=True)

    user = models.ForeignKey(User, related_name="payments", on_delete=models.CASCADE)

    status = models.CharField(max_length=16, choices=PAYMENT_STATUS, default='NEW')

    # used to verify that a payment has not been made in abother session
    subscription_balance = models.IntegerField(default=0)

    account_type = models.ForeignKey(AccountType, related_name="payments", null=True, blank=True,
                                     on_delete=models.CASCADE)

    profile_subscription_end = models.DateField(null=True, blank=True)
    subscription_end = models.DateField(null=True, blank=True)
    subscription_cost = models.IntegerField(default=0)
    actual_subscription_cost = models.IntegerField(default=0)
    subscription_duration = models.CharField(max_length=4, choices=PAYMENT_DURATION, default='1')

    reconciliation = models.IntegerField(default=-1)

    reference_id = models.CharField(max_length=50, blank=True)
    transaction_id = models.CharField(max_length=13, default="")
    token = models.CharField(max_length=48, default="")
    redirect_url = models.URLField(max_length=256, blank=True)

    reference_time = models.DateTimeField(auto_now_add=True, editable=False)

    register_time = models.DateTimeField(null=True, blank=True)
    register_response_code = models.IntegerField(default=-1)
    register_response_msg = models.CharField(max_length=2048, blank=True)

    capture_time = models.DateTimeField(null=True, blank=True)
    capture_response_code = models.IntegerField(default=-1)
    capture_response_msg = models.CharField(max_length=2048, blank=True)

    class Meta:
        verbose_name = "Payment"
        verbose_name_plural = "Payments"
        ordering = ['reference_time', 'capture_time']

    def __str__(self):
        return 'Payment: ' + str(self.user) + ' (' + str(self.reference_time)

    def save(self):
        if self.reference_id == '':
            self.reference_id = id_generator(50)

        super(Payment, self).save()  # Call the "real" save() method.

    def invoice_number(self):
        return "FAE-" + self.reference_time.strftime('%Y') + "-" + str(self.id)
