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

###file: populate/pop_subscriptions.py
file: populate/update_user_profiles.py

Author: Jon Gunderson

"""

from __future__ import print_function
from __future__ import absolute_import
import sys
import os
import django
from django.core.exceptions import ObjectDoesNotExist

fp = os.path.realpath(__file__)
path, filename = os.path.split(fp)

fae2_path = path.split('/populate')[0]
sys.path.append(fae2_path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fae2.settings')
from django.conf import settings

from fae2.settings import SHIBBOLETH_ENABLED

django.setup()

"""This file is for populating the database with markup information
I empty it. Run as a standalone script!"""

from django.core.exceptions import ObjectDoesNotExist

from accounts.models      import AccountType
from userProfiles.models  import UserProfile

from django.contrib.auth.models import User

from fae2.settings import DEFAULT_ACCOUNT_TYPE

def update_user_profiles():
  for u in User.objects.exclude(username='anonymous'):
    try:
      p = UserProfile.objects.get(user=u)
      print("  User '" + str(u) + "'' has a profile.")

      if SHIBBOLETH_ENABLED:
        if (not p.user.email or len(p.user.email) == 0) and (p.user.username.find('@') > 0):
          p.user.email = p.user.username
          p.user.save()

      if not p.top_level_domain and (p.user.email and len(p.user.email) > 0):
        p.set_domain_info()
        print("    Setting top level: " + p.top_level_domain)
        print("       Setting domain: " + p.domain + "\n")

    except:
      print("  Creating UserProfile for: " + u.username)

      p = UserProfile(user=u)

      if u.username == 'anonymous':
        p.account_type = AccountType.objects.get(type_id=0)
      else:
        p.account_type = AccountType.objects.get(type_id=DEFAULT_ACCOUNT_TYPE)
      p.save()

update_user_profiles()
