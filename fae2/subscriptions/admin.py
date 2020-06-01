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

file: subscriptions/admin.py

Author: Jon Gunderson

"""

from django.contrib import admin

from subscriptions.models import SubscriptionRate
from subscriptions.models import Payment

class SubscriptionRateAdmin(admin.ModelAdmin):
    list_display = ('id', 'one_month', 'three_month', 'six_month', 'twelve_month')

admin.site.register(SubscriptionRate, SubscriptionRateAdmin)

class PaymentAdmin(admin.ModelAdmin):
    list_display = ('reference_id', 'reference_time', 'capture_time', 'subscription_cost', 'subscription_end', 'reconciliation', 'status')
    list_filter  = ('status', 'user')

admin.site.register(Payment, PaymentAdmin)
