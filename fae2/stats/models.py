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

file: stats/models.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from datetime import datetime, timedelta

from django.db import models

from django.urls import reverse
from django.contrib.auth.models import User

from websiteResultGroups.models import WebsiteReportGroup
from rulesets.models import Ruleset

from django.conf import settings
from django.utils.timezone import make_aware

# ---------------------------------------------------------------
#
# StatsAll
#
# ---------------------------------------------------------------

class StatsAll(models.Model):
    id = models.AutoField(primary_key=True)

    ws_report_group = models.OneToOneField(WebsiteReportGroup, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Stats All'
        verbose_name_plural = 'Stats All'

    def __str__(self):
        return "All Years"

# ---------------------------------------------------------------
#
# StatsYear
#
# ---------------------------------------------------------------

class StatsYear(models.Model):
    id = models.AutoField(primary_key=True)

    stats_all = models.ForeignKey(StatsAll, null=True, default=None, related_name='years', on_delete=models.CASCADE)
    year = models.IntegerField(default=2016)

    ws_report_group = models.OneToOneField(WebsiteReportGroup, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Stats Year'
        verbose_name_plural = 'Stats Years'
        ordering = ['-year']

    def __str__(self):
        return 'Year: ' + str(self.year)

    def get_previous_year(self):
        previous_year = StatsYear.objects.filter(year=(self.year - 1))

        if len(previous_year) == 1:
            return previous_year[0]
        else:
            return False

    def title(self):
        return self.year

# ---------------------------------------------------------------
#
# StatsMonth
#
# ---------------------------------------------------------------

class StatsMonth(models.Model):
    id = models.AutoField(primary_key=True)

    stats_year = models.ForeignKey(StatsYear, null=False, related_name='months', on_delete=models.CASCADE)
    month = models.IntegerField(default=1)

    ws_report_group = models.OneToOneField(WebsiteReportGroup, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Stats Month'
        verbose_name_plural = 'Stats Months'
        ordering = ['-stats_year__year', '-month']

    def __str__(self):
        return 'Month: %d-%02d' % (self.stats_year.year, self.month)

    def get_previous_month(self):
        if self.month > 1:
            previous_month = StatsMonth.objects.filter(stats_year=self.stats_year, month=(self.month - 1))
        else:
            previous_year = self.stats_year.get_previous_year()
            if previous_year:
                previous_month = StatsMonth.objects.filter(stats_year=previous_year, month=12)

        if len(previous_month) == 1:
            return previous_month[0]
        else:
            return False

    def title(self):
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        return months[self.month-1] + ' ' + str(self.stats_year.title())

# ---------------------------------------------------------------
#
# StatsDay
#
# ---------------------------------------------------------------

class StatsDay(models.Model):
    id = models.AutoField(primary_key=True)

    date = models.DateField(auto_now=True, editable=False)

    stats_month = models.ForeignKey(StatsMonth, null=False, related_name='days', on_delete=models.CASCADE)
    day = models.IntegerField(default=1)

    ws_report_group = models.OneToOneField(WebsiteReportGroup, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Stats Day'
        verbose_name_plural = 'Stats Day'
        ordering = ['-stats_month', '-day']

    def __str__(self):
        return 'Day: %d-%02d-%02d' % (self.stats_month.stats_year.year, self.stats_month.month, self.day)

    def get_previous_day(self):
        if self.day > 1:
            previous_day = StatsDay.objects.filter(stats_month=self.stats_month, day=(self.day - 1))
            if len(previous_day) == 1:
                previous_day = previous_day[0]
            else:
                previous_day = False
        else:
            previous_month = self.stats_month.get_previous_month()
            if previous_month:
                previous_day = StatsDay.objects.filter(stats_month=previous_month)

                if len(previous_day):
                    previous_day = previous_day[len(previous_day) - 1]
                else:
                    previous_day = False

        return previous_day

class UsageInfo:

    def __init__(self):
        self.num_reports = 0
        self.num_pages = 0;

# ---------------------------------------------------------------
#
# StatsUser
#
# ---------------------------------------------------------------

class StatsUser(models.Model):
    id = models.AutoField(primary_key=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="stats")

    ws_report_group = models.OneToOneField(WebsiteReportGroup, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Stats User'
        verbose_name_plural = 'Stats User'
        ordering = ['user']

    def __str__(self):
        return str(self.user)

    def get_last_30_days(self):
        usage = UsageInfo()

        last_month = datetime.today() - timedelta(days=30)
        wsrs = self.ws_report_group.ws_reports.filter(created__gte=last_month)

        for wsr in wsrs:
            usage.num_reports += 1
            usage.num_pages += wsr.page_count

        return usage

    def get_last_ten_reports(self):
        return self.ws_report_group.ws_reports.all()[:10]

    def get_last_ten_reports_stats(self):
        usage = UsageInfo()

        wsrs = self.ws_report_group.ws_reports.all()[:10]

        for wsr in wsrs:
            usage.num_reports += 1
            usage.num_pages += wsr.page_count

        return usage

    def get_name(self):
        name = (self.user.first_name + ' ' + self.user.last_name).strip()
        parts = self.user.email.split('@')
        if not len(name):
            if len(parts) > 1:
                name = parts[0]
            else:
                name = parts
        return name

# ---------------------------------------------------------------
#
# StatsRegisteredUsers
#
# ---------------------------------------------------------------

class StatsRegisteredUsers(models.Model):
    id = models.AutoField(primary_key=True)

    ws_report_group = models.OneToOneField(WebsiteReportGroup, on_delete=models.CASCADE)

    user_stats = models.ManyToManyField(StatsUser, blank=True, default=None, related_name="stats_registered_users")

    class Meta:
        verbose_name = 'Stats Registered Users'
        verbose_name_plural = 'Stats Registered Users'

    def __str__(self):
        return "Stats Registered Users"

# ---------------------------------------------------------------
#
# StatsRuleset
#
# ---------------------------------------------------------------

class StatsRuleset(models.Model):
    id = models.AutoField(primary_key=True)

    stats_all = models.ForeignKey(StatsAll, on_delete=models.SET_NULL, null=True, related_name='rulesets')

    ruleset = models.ForeignKey(Ruleset, on_delete=models.SET_NULL, null=True, related_name='stats')

    ws_report_group = models.OneToOneField(WebsiteReportGroup, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Stats Ruleset'
        verbose_name_plural = 'Stats Rulesets'
        ordering = ['ruleset']

    def __str__(self):
        return str(self.ruleset)
