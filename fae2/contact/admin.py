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

file: contact/admin.py

Author: Jon Gunderson

"""
# contact/admin.py
from __future__ import absolute_import
from django.contrib import admin

from contact.models import Contact
from contact.models import Announcement

class ContactAdmin(admin.ModelAdmin):
  list_display = ('user', 'topic', 'date','status' )
  list_filter = ('user', 'date', 'topic', 'status')

admin.site.register(Contact, ContactAdmin)

class AnnouncementAdmin(admin.ModelAdmin):
  list_display = ('topic', 'date', 'scope', 'end_date', 'status', 'email', 'web' )
  list_filter = ('topic', 'scope')

admin.site.register( Announcement,  AnnouncementAdmin)
