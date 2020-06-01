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
file: populate/pop_institutional_profiles.py

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

from accounts.models      import AccountType
from userProfiles.models  import InstitutionalProfile
from userProfiles.models  import UserProfile

from django.contrib.auth.models import User

from fae2.settings import DEFAULT_ACCOUNT_TYPE
from fae2.settings import SHIBBOLETH_ENABLED

def create_institutional_profile(type_id, title, domain, alt_domain, auth, name1, email1, phone1, name2, email2, phone2, start, end):

  try:
    atype = AccountType.objects.get(type_id=type_id)
  except ObjectDoesNotExist:
    print("Account Type not found for: " + str(type_id))
    return

  try:
    ip = InstitutionalProfile.objects.get(domain=domain)
    print("  Updating Institutional Subscription: " + str(domain) + '.edu')

    ip.title            = title
    ip.account_type     = atype
    ip.top_level_domain = 'edu'
    ip.domain           = domain
    ip.alt_domain       = alt_domain
    ip.authentication   = auth
    ip.contact1_name    = name1
    ip.contact1_email   = email1
    ip.contact1_phone   = phone1
    ip.contact2_name    = name2
    ip.contact2_email   = email2
    ip.contact2_phone   = phone2
    ip.subscription_start  = start
    ip.subscription_end    = end

  except ObjectDoesNotExist:
    print("  Creating Institutional Subscription: " + str(domain) + '.edu')
    ip = InstitutionalProfile(account_type=atype,title=title,top_level_domain='edu',domain=domain,alt_domain=alt_domain,authentication=auth,contact1_name=name1,contact1_email=email1,contact1_phone=phone1,contact2_name=name2,contact2_email=email2,contact2_phone=phone2,subscription_start=start,subscription_end=end)

  ip.save()
  return ip

create_institutional_profile(22,'University of Illinois: Champaign/Urbana','illinois','uiuc', 'urn:mace:incommon:uiuc.edu', 'Jon Gunderson','jongund@illinois.edu','(217) 244-5870', '', '', '', '2016-10-01', '2099-01-01')
create_institutional_profile(22,'University of Illinois: Chicago','uic','', 'https://shibboleth.uic.edu/shibboleth', 'Kevin Shalla','kshalla@uic.edu','312-996-1231', 'Kevin Price', 'pricek@uic.edu', '312-413-0886', '2016-10-01', '2099-01-01')
create_institutional_profile(22,'University of Illinois: Administration','uillinois','', '', 'Tilakaratne, Dimuthu P','dpt@uillinois.edu','(217) 244-8567', 'Marla McKinney', 'mmckinne@uillinois.edu', '(217) 333-4058', '2016-10-01', '2099-01-01')
create_institutional_profile(22,'Penn State University','psu','', 'urn:mace:incommon:psu.edu', 'Christian Vinten-Johansen','v23@psu.edu','(814) 863-4574', 'Elizabeth Pyatt', 'ejp10@psu.edu', '(814) 865-0805', '2017-07-01', '2018-07-01')
create_institutional_profile(22,'University of Iowa','uiowa','', 'urn:mace:incommon:uiowa.edu', 'Todd Weissenberger','todd-weissenberger@uiowa.edu','(319) 384-3323', '', '', '', '2016-10-01', '2017-09-15')
create_institutional_profile(21,'University of Minnesota','umn','', 'urn:mace:incommon:umn.edu', 'Scott Marshall','marsh058@umn.edu','(612) 626-4954', 'Tonu Mikk', 'tmikk@umn.edu', '612 625-3307', '2016-10-01', '2017-09-15')
create_institutional_profile(21,'Northwestern University','northwestern','', 'urn:mace:incommon:northwestern.edu', 'Sherry L. Minton','sl-minton@northwestern.edu','(847) 491-3507', '', '', '', '2016-10-01', '2017-09-15')
create_institutional_profile(21,'University of Washington','washington', 'uw', 'urn:mace:incommon:washington.edu', 'Terrill Thompson','tft@uw.edu','(206) 221-4168', 'Anna Marie Golden', 'amgolden@uw.edu', '(206) 221-4164', '2017-03-01', '2017-09-15')
create_institutional_profile(21,'University of Northern Iowa','uni', '', 'https://shib.uni.edu/idp/shibboleth', 'Carolyn Dorr','carolyn.dorr@uni.edu','', '', '', '', '2016-11-10', '2017-09-15')
create_institutional_profile(21,'Iowa State University','iastate', '', 'https://idp.iastate.edu/shibboleth', 'Zayira Jordan','zjordan@iastate.edu','', '', '', '', '2016-11-10', '2017-09-15')
create_institutional_profile(22,'Southern Illinois University','siu', 'siue', 'https://shib-idp.siu.edu/idp/shibboleth', 'Elizabeth Hunter','lizhunter@siu.edu','', '', '', '', '2017-01-05', '2017-09-15')
create_institutional_profile(21,'Purdue University','purdue', '', 'https://idp.purdue.edu/idp/shibboleth', 'Dean Brusnighan','dabrus@purdue.edu','', '', '', '', '2017-01-05', '2017-09-15')
create_institutional_profile(22,'University of Montana','umt', 'umontana', 'https://login.umt.edu/idp/shibboleth', 'Ryan Snyder]','Ryan.Snyder@umontana.edu]','(406) 243-6321', '', '', '', '2017-01-05', '2018-02-01')
create_institutional_profile(21,'Temple','temple', '', 'https://fim.temple.edu/idp/shibboleth', 'Brent Whiting','bwhiting@temple.edu','267-468-8380', '', '', '', '2017-01-05', '2017-09-15')
create_institutional_profile(22,'Indiana University','iu', 'indiana', 'urn:mace:incommon:iu.edu', 'Kristy Muncy','marcgonz@iu.edu','317-274-7465', 'Brian Richwine', 'brichwin@iu.edu', '', '2017-02-08', '2017-09-15')
create_institutional_profile(22,'The Ohio State University','osu', '', 'urn:mace:incommon:osu.edu', 'Peter Bossley','bossley.5@osu.edu','614-292-1760', '', '', '', '2017-06-01', '2018-06-01')
create_institutional_profile(22,'Texas State','txstate', '', 'https://authentic.txstate.edu/idp/shibboleth', ', Milton C. Nielsen','mn11@txstate.edu','512-245-6858', '', '', '', '2017-10-12', '2018-10-11')
