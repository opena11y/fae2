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

file: populate/pop_rules.py

Author: Jon Gunderson

"""

from __future__ import print_function
from __future__ import absolute_import
import sys
import os
import django
from django.core.exceptions import ObjectDoesNotExist
import re

fp = os.path.realpath(__file__)
path, filename = os.path.split(fp)

fae2_path = path.split('/populate')[0]
sys.path.append(fae2_path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fae2.settings')
from django.conf import settings

django.setup()

import json

from rules.models           import Rule
from rules.models           import RuleScope
from rules.models           import RuleGroup
from rules.models           import NodeResultMessage
from ruleCategories.models  import RuleCategory
from wcag20.models          import SuccessCriterion
from markup.models          import ElementDefinition
from utilities        import OAAMarkupToHTML

from django.contrib.auth.models import User

json_data=open(os.path.join(path,'oaa_exported_rules.json'))

data = json.load(json_data)

json_data.close()

# Rule.objects.all().delete()

def addRuleResultMessage(rule, label, message, date):

  if label == 'MANUAL_CHECK_S':
    rule.rule_result_mc_s      = message
  elif label == 'MANUAL_CHECK_P':
    rule.rule_result_mc_p      = message
  elif label == 'FAIL_S':
    rule.rule_result_fail_s    = message
  elif label == 'FAIL_P':
    rule.rule_result_fail_p    = message
  elif label == 'HIDDEN_S':
    rule.rule_result_hidden_s  = message
  elif label == 'HIDDEN_P':
    rule.rule_result_hidden_p  = message
  elif label == 'NOT_APPLICABLE':
     rule.rule_result_na       = message

  try:
    rule.save()
  except:
    print("  *** Error saving Rule Result Message: " + label + " : " + message)

def addNodeResultMessage(rule, label, message, date):

  if label != "" and message != "":
    try:
      nrm = NodeResultMessage(rule=rule, label=label, message=message, updated_date=date)
      nrm.save()
    except:
      print("  *** Error saving Node Result Message: " + label + " : " + message)

# Populate Rule Scope

try:
  RuleScope.objects.get(rule_scope_code=1)
except ObjectDoesNotExist:
  rs = RuleScope(rule_scope_code=1, title='Element', slug="element", abbrev='E', description='Rules apply to the accessibility features of individual elements on a web page')
  rs.save()

try:
  RuleScope.objects.get(rule_scope_code=2)
except ObjectDoesNotExist:
  rs = RuleScope(rule_scope_code=2, title='Page',    slug="page", abbrev='P',   description='Rules apply to the accessibility of page layout, structure and identifying the content on the page')
  rs.save()

try:
  RuleScope.objects.get(rule_scope_code=3)
except ObjectDoesNotExist:
  rs = RuleScope(rule_scope_code=3, title='Website', slug="website", abbrev='W',   description='Rules apply to the consistency and ordering of content of the web pages within a website, website navigation features and titling that identifies the website and content of indivdiual pages')
  rs.save()

# Populate Rule Group

title = "Group 1"
desc = 'First set of rules that should be learned and implemented'
try:
  rg = RuleGroup.objects.get(rule_group_code=1)
  rg.title       = title
  rg.description = desc
except ObjectDoesNotExist:
  rg = RuleGroup(rule_group_code=1, title=title, description=desc)
rg.save()

title = "Group 2"
desc = 'Second set of rules that should be learned and implemented'
try:
  rg = RuleGroup.objects.get(rule_group_code=2)
  rg.title       = title
  rg.description = desc
except ObjectDoesNotExist:
  rg = RuleGroup(rule_group_code=2, title=title, description=desc)
rg.save()

title = "Group 3"
desc = 'Third (and last) set of rules that should be learned and implemented'
try:
  rg = RuleGroup.objects.get(rule_group_code=4)
  rg.title       = title
  rg.description = desc
except ObjectDoesNotExist:
  rg = RuleGroup(rule_group_code=4, title=title, description=desc)
rg.save()

for r in data['rules']:

   resource_properties = ""
   if r['resource_properties'] != "":
     resource_properties = ' '.join(r['resource_properties'])
#     print("  Resource Properties: " + resource_properties)

#   print("  Getting rule scope: " + str(r['rule_scope']))
   scope = RuleScope.objects.get(rule_scope_code=r['rule_scope'])

#   print("  Getting rule group: " + str(r['rule_group']))
   group = RuleGroup.objects.get(rule_group_code=r['rule_group'])

   try:
     print("  Updating Rule: " + r['nls_rule_id'])

     rule = Rule.objects.get(rule_id=r['rule_id'])
     rule.scope=scope
     rule.category = RuleCategory.objects.get(rule_category_code=r['rule_category'])
     rule.group=group
     rule.language_dependancy=r['language_dependency']
     rule.primary_property=r['primary_property']
     rule.resource_properties=resource_properties
     rule.validation=r['validate']
     rule.wcag_primary = SuccessCriterion.get_by_wcag_number(r['wcag_primary'])
     rule.updated_date=r['last_updated']

     NodeResultMessage.objects.filter(rule=rule).delete()

   except ObjectDoesNotExist:
     print("  Creating Rule: " + r['nls_rule_id'])
     resource_properties = ",".join(r['resource_properties'])
     rule = Rule(rule_id=r['rule_id'],scope=scope,group=group,language_dependancy=r['language_dependency'],primary_property=r['primary_property'],resource_properties=resource_properties,validation=r['validate'],updated_date=r['last_updated'])
     rule.wcag_primary = SuccessCriterion.get_by_wcag_number(r['wcag_primary'])
     rule.category = RuleCategory.objects.get(rule_category_code=r['rule_category'])

   rule.slug = r['rule_id'].lower().replace('_', '')
   rule.save()

   rule.wcag_related.clear();
   for related in r['wcag_related']:
      rule.wcag_related.add(SuccessCriterion.get_by_wcag_number(related))

   rule.target_resources.clear();
   for m in r['target_resources']:
     try:
       rule.target_resources.add(ElementDefinition.get_by_title(m))
     except:
       pass
#       print("  target resources exception for element definition: " + m  )

   rule.save()

   rule.nls_rule_id    = r['nls_rule_id']
   rule.definition     = r['definition']
   rule.summary        = r['summary']

   rule.target_resource_desc = r['target_resource_desc']

   rule.purpose = ""
   for p in r['purpose']:
     rule.purpose += '* ' + OAAMarkupToHTML(p) + '\n'

   rule.techniques = ""
   for t in r['techniques']:
     rule.techniques += '* ' + OAAMarkupToHTML(t) + '\n'

   rule.manual_checks = ""
   for mc in r['manual_checks']:
     rule.manual_checks += '* ' + OAAMarkupToHTML(mc) + '\n'

   rule.save()

   rule.informational_links = ""
   for info in r['informational_links']:
      rule.informational_links += '* [' + OAAMarkupToHTML(info['title']) + '](' + info['url'] + ')\n'

   for message in r['rule_result_messages']:
     addRuleResultMessage(rule, message, r['rule_result_messages'][message], r['last_updated'])

   for message in r['node_result_messages']:
     addNodeResultMessage(rule, message, r['node_result_messages'][message], r['last_updated'])

   try:
     rule.save()
   except:
     print("*** Error saving relationships for rule: " + r['nls_rule_id']  )
