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

file: populate/pop_rulesets.py

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

import json

"""This file is for populating the database with markup information
I empty it. Run as a standalone script!"""

from django.core.exceptions import ObjectDoesNotExist
from rulesets.models import Ruleset
from rules.models import Rule
from rules.models import RuleMapping
from rules.models import RuleCategoryRuleMapping
from rules.models import GuidelineRuleMapping
from rules.models import SuccessCriterionRuleMapping

from django.contrib.auth.models import User

json_data=open(os.path.join(path,'oaa_exported_rules.json'))

data = json.load(json_data)

json_data.close()

u = User.objects.all()[0]

RuleMapping.objects.all().delete()
RuleCategoryRuleMapping.objects.all().delete()
GuidelineRuleMapping.objects.all().delete()
SuccessCriterionRuleMapping.objects.all().delete()

def create_ruleset(ruleset_id, version, title, tooltip, desc, author, author_url, date, editor):

  # ignore test ruleset
  if ruleset_id.lower().find('test') > -1:
    return False

  try:
    ruleset = Ruleset.objects.get(ruleset_id=ruleset_id)
    print("  Updating Ruleset: " + ruleset_id)
    ruleset.version        = version
    ruleset.title          = title
    ruleset.tooltip        = tooltip
    ruleset.description    = desc
    ruleset.author         = author
    ruleset.author_url     = author_url
    ruleset.updated_date   = date
    ruleset.updated_editor = editor
  except ObjectDoesNotExist:
    print("  Creating Ruleset: " + title )
    ruleset = Ruleset(ruleset_id=ruleset_id, version=version, title=title, tooltip=tooltip, description=desc, author=author, author_url=author_url, updated_date=date)
  ruleset.save()
  return ruleset


def create_rule_mapping(ruleset, rule_id, required, enabled):
  try:
    rule = Rule.objects.get(rule_id=rule_id)
    print("  " + ruleset.ruleset_id + " " + rule.nls_rule_id + " " + str(required) + " " + str(enabled))

    try:
      rm = RuleMapping.objects.get(ruleset=ruleset, rule=rule)
      print("  Updating Rule Mapping for " + ruleset.ruleset_id + " and rule " + rule.nls_rule_id)
      rm.required = required
      rm.enabled  = enabled
    except ObjectDoesNotExist:
      print("  Creating Rule Mapping for " + ruleset.ruleset_id + " and rule " + rule.nls_rule_id)
      rm = RuleMapping(ruleset=ruleset, rule=rule, required=required, enabled=enabled)
    rm.save()

    # Update rule category mapping

    try:
      rcrm = RuleCategoryRuleMapping.objects.get(ruleset=ruleset, rule_category=rule.category)
    except ObjectDoesNotExist:
      rcrm = RuleCategoryRuleMapping(ruleset=ruleset, rule_category=rule.category)
      rcrm.save()
    rcrm.rule_mappings.add(rm)
    rcrm.save()

    try:
      grm = GuidelineRuleMapping.objects.get(ruleset=ruleset, guideline=rule.wcag_primary.guideline)
    except ObjectDoesNotExist:
      grm = GuidelineRuleMapping(ruleset=ruleset, guideline=rule.wcag_primary.guideline)
      grm.save()
    grm.rule_mappings.add(rm)
    grm.save()

    try:
      scrm = SuccessCriterionRuleMapping.objects.get(guideline_rule_mapping=grm, success_criterion=rule.wcag_primary)
    except ObjectDoesNotExist:
      scrm = SuccessCriterionRuleMapping(guideline_rule_mapping=grm, success_criterion=rule.wcag_primary)
      scrm.save()
    scrm.primary_mappings.add(rm)
    scrm.save()

    return rm
  except ObjectDoesNotExist:
    print("  Could not find rule with id: " + rule_id)
    return null

for rs in data['rulesets']:
   print("\nRuleset: " + rs['ruleset_id'])

   rs2 = create_ruleset(rs['ruleset_id'], rs['ruleset_version'], rs['ruleset_title'], rs['ruleset_tooltip'], rs['ruleset_description'], rs['ruleset_author_name'], rs['ruleset_author_url'], rs['ruleset_updated'], u)

   if rs2:
     for rm in rs['rule_mappings']:
       print("\n    " + rm)
       create_rule_mapping(rs2, rm, rs['rule_mappings'][rm]['required'], rs['rule_mappings'][rm]['enabled'])
