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

file: stats/views.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.shortcuts import render

from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import redirect

import datetime

from django.views.generic import TemplateView
from django.core.exceptions import ObjectDoesNotExist

from django.contrib.auth.models import User

from .models import StatsYear
from .models import StatsMonth
from .models import StatsDay
from .models import StatsUser
from .models import StatsAll
from .models import StatsRuleset
from .models import StatsRegisteredUsers

from websiteResultGroups.models  import WebsiteReportGroup

from reports.views import FAENavigationMixin

# Create your views here.

class ShowUsageStatistics(FAENavigationMixin, TemplateView):
    template_name = 'stats/summary.html'

    def get_context_data(self, **kwargs):
        context = super(ShowUsageStatistics, self).get_context_data(**kwargs)

        try:
          stats_all = StatsAll.objects.all()[0]
        except:
          wsrg =  WebsiteReportGroup(title="Summary of all reports")
          wsrg.save()
          stats_all = StatsAll(ws_report_group=wsrg)
          stats_all.save()

        today= datetime.date.today()

        year   = StatsYear.objects.filter(year=today.year)
        if len(year) == 0:
            wsrg =  WebsiteReportGroup(title="Summary of results year: " + str(today.year))
            wsrg.save()
            year = StatsYear(year=today.year, ws_report_group=wsrg, stats_all=stats_all)
            year.save()
        else:
            year = year[0]

        years  = StatsYear.objects.all()

        month  = StatsMonth.objects.filter(stats_year=year, month=today.month)
        if len(month) == 0:
            wsrg =  WebsiteReportGroup(title="Summary of results month: " + str(today.year) + "-" + str(today.month))
            wsrg.save()
            month = StatsMonth(stats_year=year, month=today.month, ws_report_group=wsrg)
            month.save()
        else:
            month = month[0]

        months = StatsMonth.objects.all()

        day  = StatsDay.objects.filter(stats_month=month, day=today.day)
        if len(day) == 0:
            wsrg =  WebsiteReportGroup(title="Summary of results day: " + str(today.year) + "-" + str(today.month) + "-" + str(today.day))
            wsrg.save()
            day = StatsDay(stats_month=month, day=today.day, date=today, ws_report_group=wsrg)
            day.save()
        else:
            day = day[0]

        days = []
        days.append(day)
        d = day.get_previous_day()
        if d:
            days.append(d)
            d = d.get_previous_day()
            if d:
                days.append(d)
                d = d.get_previous_day()
                if d:
                    days.append(d)
                    d = d.get_previous_day()
                    if d:
                        days.append(d)
                        d = day.get_previous_day()
                        if d:
                            days.append(d)
                            d = d.get_previous_day()
                            if d:
                                days.append(d)

        seven_days =  WebsiteReportGroup(title="Summary of last seven days")

        for d in days:
            seven_days.num_total_reports += d.ws_report_group.num_total_reports
            seven_days.num_total_pages   += d.ws_report_group.num_total_pages

        stats_reg_users = StatsRegisteredUsers.objects.all()
        if len(stats_reg_users) > 0:
            stats_reg_users = stats_reg_users[0]
        else:
            wsrg =  WebsiteReportGroup(title="Summary of registered users")
            wsrg.save()
            stats_reg_users = StatsRegisteredUsers(ws_report_group=wsrg)
            stats_reg_users.save()

        stats_anonymous = StatsUser.objects.get(user__username='anonymous')

        stats_rulesets = StatsRuleset.objects.all()

        context['stats_all']        = stats_all
        context['stats_year']       = year
        context['stats_month']      = month
        context['stats_day']        = day
        context['stats_seven_days'] = seven_days
        context['stats_all_years']  = StatsYear.objects.all();
        context['stats_all_months']  = StatsMonth.objects.all();

        context['stats_reg_users'] = stats_reg_users
        context['stats_anonymous'] = stats_anonymous

        context['stats_rulesets'] = stats_rulesets

        return context

