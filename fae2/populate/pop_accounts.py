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

file: populate/pop_accounts.py

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

django.setup()

"""This file is for populating the database with markup information
I empty it. Run as a standalone script!"""

from django.core.exceptions import ObjectDoesNotExist
from accounts.models        import AccountType
from subscriptions.models    import SubscriptionRate

from django.contrib.auth.models import User

def create_acount_type(type_id, self, shib, host, sponsor, title, permanent, archive, depth, pages, default, adv, protected ):

  try:
    atype = AccountType.objects.get(type_id=type_id)
    print("  Updating Account Type: " + title)

    atype.type   = type_id
    atype.title  = title

    atype.self_registration = self
    atype.shibboleth        = shib
    atype.self_hosted       = host
    atype.sponsor           = sponsor

    atype.max_archive   = archive
    atype.max_permanent = permanent
    atype.max_depth     = depth
    atype.max_pages     = pages

    atype.default       = default

    atype.advanced      = adv
    atype.protected     = protected

  except ObjectDoesNotExist:
    print("  Creating Account Type: " + title )
    atype = AccountType(type_id=type_id, self_registration=self, shibboleth=shib, self_hosted=host, sponsor=sponsor, title=title, max_archive=archive, max_permanent=permanent, max_depth=depth, max_pages=pages, default=default, advanced=adv, protected=protected)

  atype.save()
  return atype

def set_account_type_description(type_id, desc):
  try:
    atype = AccountType.objects.get(type_id=type_id)
    print("  Updating Account Type Description: " + atype.title)

    atype.description       = desc
    atype.save()

  except ObjectDoesNotExist:
    print("  Account type not found: " + acc_type )

def set_subscription_rate(type_id, desc, one, three, six, twelve):
  atype = AccountType.objects.get(type_id=type_id)

  try:
    sr = SubscriptionRate.objects.get(account_type=atype)
    print("  Updating Subscription Rate: " + atype.title)

    sr.description  = desc
    sr.one_month    = one
    sr.three_month  = three
    sr.six_month    = six
    sr.twelve_month = twelve

  except ObjectDoesNotExist:
    print("  Creating Subscription Rate: " +  atype.title)
    sr = SubscriptionRate(account_type=atype, description=desc, one_month=one, three_month=three, six_month=six, twelve_month=twelve)

  sr.save()
  return atype

at00 = create_acount_type(0, False, False, False, False,  'Anonymous',         1,  1, 1,    1, False,  False, False)

at01 = create_acount_type(1, True, False, False, False,   'Free',               5,  10, 3,   25, True,   False, False)
at00.next_account_type = at01
at00.save()

at02 = create_acount_type(2, True, False, False, False,   'Standard',       20, 40, 4,   100, False,  False, False)
at01.next_account_type = at02
at01.save()

at03 = create_acount_type(3, True, False, False, False,   'Advanced',        40, 80, 5,  400, False,   True, False)
at02.next_account_type = at03
at02.save()

at16 = create_acount_type(16, False, True, False, False, 'Institutional Free',  5, 10, 3,  100, False, False, False)
at17 = create_acount_type(17, False, True, False, False, 'Institutional I',    20, 40, 4,  400, False,  True, False)
at18 = create_acount_type(18, False, True, False, False, 'Institutional II',   20, 40, 4,  400, False,  True, False)
at19 = create_acount_type(19, False, True, False, False, 'Institutional III',  20, 40, 4,  400, False,  True, False)
at20 = create_acount_type(20, False, True, False, False, 'Institutional IV',   20, 40, 4,  400, False,  True, False)
at21 = create_acount_type(21, False, True, False, False, 'Institutional V',    20, 40, 4,  400, False,  True, False)
at22 = create_acount_type(22, False, True, False, False, 'Institutional Special',    40, 80, 6,  800, False,  True, False)

a32 = create_acount_type(32, False, False, True, False, 'Self-Hosted',    20, 40, 5,  400, False,   True, False)

a64 = create_acount_type(64, False, False, False, True, 'Special I',   40, 80, 4, 100, False, True, False)
a65 = create_acount_type(65, False, False, False, True, 'Special II',  40, 80, 4, 100, False, True, False)
a66 = create_acount_type(66, False, False, False, True, 'Special III', 40, 80, 4, 100, False, True, False)

set_account_type_description(1, """The Free version provides basic website evaluation for any user.  If you use FAE and/or AInspector Sidebar on a regular basis we ask that you help support the development and maintenance of the tools by purchasing a paid level subscriptions.""")
set_account_type_description(2, """The Standard subscription provides an inidividual, educational and/or other organization with more extensive website evaluation services including deeper spidering of pages in a website, higher maximum number of pages, more saved and permanent reports than the Free account type.""")
set_account_type_description(3, """The Advanced subscription provides an inidividual, educational and/or other organization with more extensive website evaluation services including deeper spidering of pages in a website, higher maximum number of pages, more saved and permanent reports than the Standard II subscription and also includes more advanced control over website spidering through the specification of include and exclude domain names.""")

set_account_type_description(16, """Free version for educational institutions.""")
set_account_type_description(17, """For educational institutions of less than 2,000 students.""")
set_account_type_description(18, """For educational institutions of 2,000-3,999 students.""")
set_account_type_description(19, """For educational institutions of 4,000-7,999 students.""")
set_account_type_description(20, """For educational institutions of 8,000-15,000 students.""")
set_account_type_description(21, """For educational institutions of more than 15,000 students.""")

set_subscription_rate(1, "",    0,    0,    0,    0)
set_subscription_rate(2, "",   30,   81,  153,  270)
set_subscription_rate(3, "",  120,  324,  612, 1080)

set_subscription_rate(16, "",    0,    0,    0,    0)
set_subscription_rate(17, "",    0,  540, 1020, 1800)
set_subscription_rate(18, "",    0,  810, 1530, 2700)
set_subscription_rate(19, "",    0, 1215, 2295, 4050)
set_subscription_rate(20, "",    0, 1890, 3570, 6300)
set_subscription_rate(21, "",    0, 2700, 5100, 9000)
