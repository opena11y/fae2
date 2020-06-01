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

file: reports/admin.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.contrib import admin

from .models import ExcludedURL
from .models import ExcludedURLPageReference
from .models import WebsiteReport
from .models import ProcessedURL
from .models import UnprocessedURL
from .models import FilteredURL

class WebsiteReportAdmin(admin.ModelAdmin):
    list_display = ('url', 'user', 'title', 'status', 'slug', 'archive', 'ruleset', 'depth', 'created', 'rules_violation', 'rules_warning', 'rules_manual_check', 'rules_passed', 'implementation_score', 'implementation_status')
    list_filter  = ('status', 'user')

admin.site.register(WebsiteReport, WebsiteReportAdmin)

class ProcessedURLAdmin(admin.ModelAdmin):
    list_display = ('page_seq_num', 'url_requested', 'url_returned')
    list_filter  = ('ws_report',)

admin.site.register(ProcessedURL, ProcessedURLAdmin)

class UnprocessedURLAdmin(admin.ModelAdmin):
    list_display = ('url', 'url_referenced')
    list_filter  = ('ws_report',)

admin.site.register(UnprocessedURL, UnprocessedURLAdmin)

class FilteredURLAdmin(admin.ModelAdmin):
    list_display = ('url', 'url_referenced')
    list_filter  = ('ws_report',)

admin.site.register(FilteredURL, FilteredURLAdmin)

class ExcludedURLAdmin(admin.ModelAdmin):
    list_display = ('filename', 'file_type', 'url', 'ws_report')
    list_filter  = ('ws_report',)

admin.site.register(ExcludedURL, ExcludedURLAdmin)

class ExcludedURLPageReferenceAdmin(admin.ModelAdmin):
    list_display = ('url', 'ws_report')
    list_filter  = ('ws_report',)

admin.site.register(ExcludedURLPageReference, ExcludedURLPageReferenceAdmin)
