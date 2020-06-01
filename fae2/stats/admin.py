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

file: stats/admin.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.contrib import admin
# Register your models here.

from .models import StatsAll
from .models import StatsYear
from .models import StatsMonth
from .models import StatsDay
from .models import StatsRegisteredUsers
from .models import StatsUser
from .models import StatsRuleset

class StatsAllAdmin(admin.ModelAdmin):
    list_display = ('ws_report_group', )

admin.site.register(StatsAll, StatsAllAdmin)

class StatsYearAdmin(admin.ModelAdmin):
    list_display = ('year', 'ws_report_group')

admin.site.register(StatsYear, StatsYearAdmin)

class StatsMonthAdmin(admin.ModelAdmin):
    list_display = ('month', 'stats_year', 'ws_report_group')

admin.site.register(StatsMonth, StatsMonthAdmin)

class StatsDayAdmin(admin.ModelAdmin):
    list_display = ('date', 'stats_month', 'ws_report_group')

admin.site.register(StatsDay, StatsDayAdmin)

class StatsRegisteredUsersAdmin(admin.ModelAdmin):
    list_display = ('ws_report_group', )

admin.site.register(StatsRegisteredUsers, StatsRegisteredUsersAdmin)

class StatsUserAdmin(admin.ModelAdmin):
    list_display = ('user', 'ws_report_group' )

admin.site.register(StatsUser, StatsUserAdmin)

class StatsRulesetAdmin(admin.ModelAdmin):
    list_display = ('ruleset', 'ws_report_group' )

admin.site.register(StatsRuleset, StatsRulesetAdmin)
