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

from ruleCategories.models      import RuleCategory
from websiteResultGroups.models import WebsiteRuleCategoryResultGroup
from websiteResults.models      import WebsiteRuleCategoryResult
from pageResults.models         import PageRuleCategoryResult


ws_rc_groups = WebsiteRuleCategoryResultGroup.objects.all()
for ws_rc_g in ws_rc_groups:
  ws_rc_g.slug = ws_rc_g.rule_category.slug
  ws_rc_g.save()

ws_rcs = WebsiteRuleCategoryResult.objects.all()
for ws_rc in ws_rcs:
  ws_rc.slug = ws_rc.rule_category.slug
  ws_rc.save()

page_rcs = PageRuleCategoryResult.objects.all()
for page_rc in page_rcs:
  page_rc.slug = page_rc.rule_category.slug
  page_rc.save()

