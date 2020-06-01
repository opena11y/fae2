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

file: populate/pop_rule_categories.py

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

"""This file is for updating and populating the database with Rule Categories and Rulesets"""

from ruleCategories.models import RuleCategory

import json
json_data=open(os.path.join(path,'oaa_exported_rules.json'))
data = json.load(json_data)
json_data.close()

def createRuleCategory(id, slug, nls, order, title, title_plural, code):

    try:
      rc = RuleCategory.objects.get(rule_category_code=code)
      print('Updating Rule Category: ' + title)
      rc.slug               = slug
      rc.rule_category_code = code
      rc.title              = title
      rc.title_plural       = title_plural
      rc.order              = order

    except ObjectDoesNotExist:

      print ("Creating Rule Category: " + title)
      rc = RuleCategory(category_id=id, slug=slug, rule_category_code=code, title=title, title_plural=title_plural, order=order)

    rc.save()

    return rc

rc_info = {
 "1"   : { "id"       : "ID_LANDMARKS",
           "singular" : "Landmarks",
           "slug"     : "landmarks",
           "order"    : 1
         },
 "2"   : { "id"       : "ID_HEADINGS",
           "singular" : "Headings",
           "slug"     : "headings",
           "order"    : 2
         },
 "4"   : { "id"       : "ID_STYLE",
           "singular" : "Styles/Content",
           "slug"     : "style",
           "order"    : 3
         },
 "8"   : { "id"       : "ID_IMAGES",
           "singular" : "Images",
           "slug"     : "images",
           "order"    : 4
         },
 "16"  : { "id"       : "ID_LINKS",
           "singular" : "Links",
           "slug"     : "links",
           "order"    : 5
         },
 "32"  : { "id"       : "ID_TABLES",
           "singular" : "Tables",
           "slug"     : "tables",
           "order"    : 6
         },
 "64"  : { "id"       : "ID_FORMS",
           "singular" : "Forms",
           "slug"     : "forms",
           "order"    : 7
         },
 "128" : { "id"       : "ID_WIDGETS",
           "singular" : "Widgets/Scripts",
           "slug"     : "widgets",
           "order"    : 8
         },
 "256" : { "id"       : "ID_AUDIO_VIDEO",
           "singular" : "Audio/Video",
           "slug"     : "av",
           "order"    : 9
         },
 "512" : { "id"       : "ID_KEYBOARD",
           "singular" : "Keyboard",
           "slug"     : "keyboard",
           "order"    : 10
         },
 "1024": { "id"       : "ID_TIMING",
           "singular" : "Timing",
           "slug"     : "timing",
           "order"    : 11
         },
 "2048": { "id"       : "ID_SITE_NAVIGATION",
           "singular" : "Site Navigation",
           "slug"     : "navigation",
           "order"    : 12
         }

 }

for rc_code in data['rule_categories']:
   title = data['rule_categories'][rc_code]['title']
   code = data['rule_categories'][rc_code]['id']
   desc  = data['rule_categories'][rc_code]['description']
   print("\nRule Category: " + title + " (" + str(code) + ")")

   if code < 4095:
     rc = createRuleCategory(rc_info[rc_code]['id'], rc_info[rc_code]['slug'], 'en',  rc_info[rc_code]['order'], rc_info[rc_code]['singular'],  title, code)
     rc.description = desc
     rc.save()
