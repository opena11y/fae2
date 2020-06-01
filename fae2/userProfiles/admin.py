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

file: userProfiles/admin.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.contrib import admin

from userProfiles.models import UserProfile
from userProfiles.models import InstitutionalProfile

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'account_type', 'top_level_domain', 'domain', 'subscription_status')
    list_filter  = ('domain', 'role', 'account_type', 'subscription_status')

admin.site.register(UserProfile, UserProfileAdmin)

class InstitutionalProfileAdmin(admin.ModelAdmin):
    list_display = ('title', 'domain', 'top_level_domain', 'account_type', 'subscription_end', 'last_payment')

    list_filter  = ('account_type',)

admin.site.register(InstitutionalProfile, InstitutionalProfileAdmin)

