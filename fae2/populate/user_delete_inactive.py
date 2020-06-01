"""
Copyright 2014-2018 University of Illinois

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

file: populate/user_delete_inactive.py

Author: Jon Gunderson

"""

from __future__ import print_function
from __future__ import absolute_import
import sys
import os
import django
from django.core.exceptions import ObjectDoesNotExist
import datetime
import pytz

fp = os.path.realpath(__file__)
path, filename = os.path.split(fp)

fae2_path = path.split('/populate')[0]
sys.path.append(fae2_path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fae2.settings')
from django.conf import settings

django.setup()

"""This file is for populating the database with markup information
I empty it. Run as a standalone script!"""

from django.core.exceptions      import ObjectDoesNotExist
from django.core.exceptions      import ImproperlyConfigured
from django.contrib.sites.models import Site
from django.contrib.auth.models  import User
from accounts.models             import AccountType
from userProfiles.models         import UserProfile
from websiteResultGroups.models  import WebsiteReportGroup
from stats.models                import StatsUser
from stats.models                import StatsRegisteredUsers
from reports.models              import WebsiteReport

min_reports = 5

def delete_users(date):

  num_users_deleted = 0

  for u in User.objects.all():
    reports1 = WebsiteReport.objects.filter(user=u)
    count1 = reports1.count()
    reports2 = reports1.filter(created__gte=date)
    count2 = reports2.count()

    if count2 == 0 and count1 < min_reports:
      try:
        u.delete()
        num_users_deleted += 1
      except Exception as e:
        print('Error: ' + str(e) + ' deleting ' + u.username)

  print('Users deleted: ' + str(num_users_deleted))

users_total = User.objects.all().count()
d = datetime.datetime(2018, 1, 1, tzinfo=pytz.UTC)

print('Total Users: ' + str(users_total))
print('Deleting users with no new reports from ' + str(d.date()) + ' and less than a total of ' + str(min_reports) + ' for all time. ')

delete_users(d)

