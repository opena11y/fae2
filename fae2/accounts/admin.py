"""
Copyright 2014-2016 University of Illinois

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

File: accounts/admin.py

Author: Jon Gunderson

"""

# accounts/admin.py
from __future__ import absolute_import
from django.contrib import admin

from accounts.models import AccountType

class AccountTypeAdmin(admin.ModelAdmin):
    list_display = ('title', 'type_id', 'self_registration', 'shibboleth', 'sponsor', 'default', 'max_archive', 'max_permanent', 'max_depth', 'max_pages', 'advanced')

admin.site.register(AccountType, AccountTypeAdmin)