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

file: rules/models.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.db import models
from django.contrib.auth.models import User

import re
import const
from utilities import OAAMarkupToText, OAAMarkupToHTML
import markdown

from django.core.exceptions import ObjectDoesNotExist

from markup.models          import ElementDefinition
from ruleCategories.models  import RuleCategory
from wcag20.models          import Guideline
from wcag20.models          import SuccessCriterion
from rulesets.models        import Ruleset

## Rule
RULE_SCOPE = (
  (0, 'Unknown'),
  (1, 'Element'),
  (2, 'Page'),
  (3, 'Website'),
)

RULE_SCOPE_HTML_CODE = (
    (0, '<abbr title="Unknown">-</abbr>'),
    (1, '<abbr title="Element">E</abbr>'),
    (2, '<abbr title="Page">P</abbr>'),
    (3, '<abbr title="Website">WS</abbr>'),
)

class RuleScope(models.Model):
  id = models.AutoField(primary_key=True)

  rule_scope_code = models.IntegerField('Scope Code', default=0)
  slug            = models.SlugField(max_length=32, default="none", blank=True)
  title           = models.CharField('Scope Title',        max_length=128, default="none")
  abbrev          = models.CharField('Scope Abbreviation', max_length=32,  default="none")

  description  = models.CharField('Scope Description', max_length=2048, default="")

  class Meta:
    verbose_name        = "Rule Scope"
    verbose_name_plural = "Rule Scopes"
    ordering = ['rule_scope_code',]

  def __str__(self):
      return self.title

  def show_scope_html_code(self):
      for shortp, longp in RULE_SCOPE_HTML_CODE:
          if shortp == self.rule_scope_code:
              return longp

  def is_element(self):
    return  self.rule_scope_code == 1

  def is_page(self):
    return  self.rule_scope_code == 2

  def is_website(self):
    return  self.rule_scope_code == 3

RULE_GROUP = (
  (0, 'Unknown'),
  (1, 'Group 1'),
  (2, 'Group 2'),
  (4, 'Group 3'),
)

RULE_GROUP_HTML_CODE = (
  (0, '<abbr title="Unknown">-</abbr>'),
  (1, '<abbr title="Group 1">1</abbr>'),
  (2, '<abbr title="Group 2">2</abbr>'),
  (4, '<abbr title="Group 3">3</abbr>'),
)

class RuleGroup(models.Model):
  id = models.AutoField(primary_key=True)

  rule_group_code = models.IntegerField('Group Code', default=0)
  title           = models.CharField('Group Title',        max_length=32, default="none")
  description     = models.CharField('Group Description', max_length=2048, default="")

  class Meta:
    verbose_name        = "Rule Group"
    verbose_name_plural = "Rule Groups"
    ordering = ['rule_group_code',]

  def __str__(self):
      return self.title

  def show_group_html_code(self):
      for shortp, longp in RULE_GROUP_HTML_CODE:
          if shortp == self.rule_group_code:
              return longp

class Rule(models.Model):

  id             = models.AutoField(primary_key=True)
  updated_date   = models.DateTimeField(editable=False)

  rule_id        = models.CharField('Rule ID', max_length=32, unique=True)
  slug           = models.SlugField(max_length=32, default="none", blank=True)

  scope               = models.ForeignKey(RuleScope,        on_delete=models.SET_NULL, null=True, related_name='rules')
  group               = models.ForeignKey(RuleGroup,        on_delete=models.SET_NULL, null=True, related_name='rules')
  category            = models.ForeignKey(RuleCategory,     on_delete=models.SET_NULL, null=True, related_name='rules')
  wcag_primary        = models.ForeignKey(SuccessCriterion, on_delete=models.SET_NULL, null=True, related_name='rules')
  wcag_related        = models.ManyToManyField(SuccessCriterion, related_name='related_rules')
  target_resources    = models.ManyToManyField(ElementDefinition, related_name='rules')
  primary_property    = models.CharField('primary attribute or property used by the rule', max_length=64, default='')
  resource_properties = models.CharField('Comma separated list of cache properties and attributes used by the rule', max_length=250)
  language_dependancy = models.CharField('Language codes separated by commas', max_length=100, default='')
  validation          = models.TextField('Javascript code for validation function', null=True,blank=True)

  nls_rule_id     = models.CharField('Translated Rule ID', max_length=64)

  definition      = models.CharField('Rule Definition', max_length=512)
  definition_html = models.CharField(max_length=512, default="")

  summary         = models.CharField('Rule Summary (shorter version of definition)', max_length=128)
  summary_html    = models.CharField(max_length=256, default="")
  summary_text    = models.CharField(max_length=128, default="")

  target_resource_desc      = models.CharField('Summary of the types of element definitions this rule tests', max_length=512)
  target_resource_desc_html = models.CharField(max_length=512)

  purpose        = models.TextField('Purpose (i.e how does the rule help people with disabilites)', default="")
  purpose_html   = models.TextField(default="")

  techniques      = models.TextField('Techniques', default="")
  techniques_html = models.TextField(default="")

  manual_checks      = models.TextField('Manual Checks', default="")
  manual_checks_html = models.TextField(default="")

  informational_links       = models.TextField('Informational Links', default="")
  informational_links_html  = models.TextField(default="")

  rule_result_mc_s     = models.CharField('Rule Result Message: One manual check'            , null=True, blank=True, max_length=512)
  rule_result_mc_p     = models.CharField('Rule Result Message: More than one manual check'  , null=True, blank=True, max_length=512)
  rule_result_fail_s   = models.CharField('Rule Result Message: One failed element'          , null=True, blank=True, max_length=512)
  rule_result_fail_p   = models.CharField('Rule Result Message: More than one failed element', null=True, blank=True, max_length=512)
  rule_result_hidden_s = models.CharField('Rule Result Message: One hidden element'          , null=True, blank=True, max_length=512)
  rule_result_hidden_p = models.CharField('Rule Result Message: More than one hidden element', null=True, blank=True, max_length=512)
  rule_result_na       = models.CharField('Rule Result Message: Not Applicable Message'      , null=True, blank=True, max_length=512)

  class Meta:
    verbose_name        = "Rule"
    verbose_name_plural = "Rules"
    ordering = ['nls_rule_id',]
    unique_together = (('rule_id', 'definition'),)

  def __str__(self):
      return self.nls_rule_id

  def save(self):
    self.definition_html              = OAAMarkupToHTML(self.definition)
    self.summary_html                 = OAAMarkupToHTML(self.summary)
    self.summary_text                 = OAAMarkupToText(self.summary)
    if self.target_resource_desc:
      self.target_resource_desc_html    = OAAMarkupToHTML(self.target_resource_desc)

    if self.purpose:
      self.purpose_html = markdown.markdown(self.purpose)

    if self.techniques:
      self.techniques_html = markdown.markdown(self.techniques)

    if self.manual_checks:
      self.manual_checks_html = markdown.markdown(self.manual_checks)

    if self.informational_links:
      self.informational_links_html = markdown.markdown(self.informational_links)

    super(Rule, self).save() # Call the "real" save() method.

  def get_scope(self):
    for shortp, longp in RULE_SCOPE:
      if shortp == self.scope:
         return longp

  def show_scope(self):
    return self.get_scope()

  def get_wcag_primary(self):
    return "%s %s (Level %s)"%(self.wcag_primary.number(), self.wcag_primary.title, self.wcag_primary.show_level_html_code())

  def get_wcag_primary_short_html(self):
    return '<a href="">Test</a>'

  def wcag20_requirements(self):
    return "%s - %s"%(self.wcag_primary.number(),self.wcag_related_list())

  def get_rule_mappings(self):
    mappings = []
    rulesets = Ruleset.objects.all()

    for rs in rulesets:
      try:
        rm = RuleMapping.objects.get(rule=self, ruleset=rs)
        if rm.required:
          mappings.append('1')
        else:
          mappings.append('2')
      except ObjectDoesNotExist:
          mappings.append('3')

    return mappings

  def definition_text(self):
    return OAAMarkupToText(self.definition)

## Information link
NODE_RESULT_LABEL_CHOICES = (
    ('ELEMENT_PASS_1',   'ELEMENT_PASS_1'),
    ('ELEMENT_PASS_2',   'ELEMENT_PASS_2'),
    ('ELEMENT_PASS_3',   'ELEMENT_PASS_3'),
    ('ELEMENT_PASS_4',   'ELEMENT_PASS_4'),
    ('ELEMENT_PASS_5',   'ELEMENT_PASS_5'),
    ('ELEMENT_FAIL_1',   'ELEMENT_FAIL_1'),
    ('ELEMENT_FAIL_2',   'ELEMENT_FAIL_2'),
    ('ELEMENT_FAIL_3',   'ELEMENT_FAIL_3'),
    ('ELEMENT_FAIL_4',   'ELEMENT_FAIL_4'),
    ('ELEMENT_FAIL_5',   'ELEMENT_FAIL_5'),
    ('ELEMENT_MC_1',     'ELEMENT_MC_1'),
    ('ELEMENT_MC_2',     'ELEMENT_MC_2'),
    ('ELEMENT_MC_3',     'ELEMENT_MC_3'),
    ('ELEMENT_MC_4',     'ELEMENT_MC_4'),
    ('ELEMENT_MC_5',     'ELEMENT_MC_5'),
    ('ELEMENT_HIDDEN_1', 'ELEMENT_HIDDEN_1'),
    ('ELEMENT_HIDDEN_2', 'ELEMENT_HIDDEN_2'),
    ('PAGE_PASS_1', 'PAGE_PASS_1'),
    ('PAGE_PASS_2', 'PAGE_PASS_2'),
    ('PAGE_PASS_3', 'PAGE_PASS_3'),
    ('PAGE_PASS_4', 'PAGE_PASS_4'),
    ('PAGE_PASS_5', 'PAGE_PASS_5'),
    ('PAGE_FAIL_1', 'PAGE_FAIL_1'),
    ('PAGE_FAIL_2', 'PAGE_FAIL_2'),
    ('PAGE_FAIL_3', 'PAGE_FAIL_3'),
    ('PAGE_FAIL_4', 'PAGE_FAIL_4'),
    ('PAGE_FAIL_5', 'PAGE_FAIL_5'),
    ('PAGE_MC_1',   'PAGE_MC_1'),
    ('PAGE_MC_2',   'PAGE_MC_2'),
    ('PAGE_MC_3',   'PAGE_MC_3'),
    ('PAGE_MC_4',   'PAGE_MC_4'),
    ('PAGE_MC_5',   'PAGE_MC_5'),
    ('WEBSITE_PASS_1', 'WEBSITE_PASS_1'),
    ('WEBSITE_PASS_2', 'WEBSITE_PASS_2'),
    ('WEBSITE_PASS_3', 'WEBSITE_PASS_3'),
    ('WEBSITE_PASS_4', 'WEBSITE_PASS_4'),
    ('WEBSITE_PASS_5', 'WEBSITE_PASS_5'),
    ('WEBSITE_FAIL_1', 'WEBSITE_FAIL_1'),
    ('WEBSITE_FAIL_2', 'WEBSITE_FAIL_2'),
    ('WEBSITE_FAIL_3', 'WEBSITE_FAIL_3'),
    ('WEBSITE_FAIL_4', 'WEBSITE_FAIL_4'),
    ('WEBSITE_FAIL_5', 'WEBSITE_FAIL_5'),
    ('WEBSITE_MC_1',   'WEBSITE_MC_1'),
    ('WEBSITE_MC_2',   'WEBSITE_MC_2'),
    ('WEBSITE_MC_3',   'WEBSITE_MC_3'),
    ('WEBSITE_MC_4',   'WEBSITE_MC_4'),
    ('WEBSITE_MC_5',   'WEBSITE_MC_5'),
)

class NodeResultMessage(models.Model):
  id = models.AutoField(primary_key=True)

  updated_date   = models.DateTimeField(editable=False)

  rule         = models.ForeignKey(Rule, on_delete=models.CASCADE, related_name="node_result_messages")
  label        = models.CharField('Label',  choices=NODE_RESULT_LABEL_CHOICES, max_length=32)
  message      = models.CharField('Message', max_length=512)

  class Meta:
        ordering = ['label',]
        verbose_name="Node Result Message"
        verbose_name_plural="Node Result Message"

class RuleMapping(models.Model):
  id             = models.AutoField(primary_key=True)

  ruleset  = models.ForeignKey(Ruleset, on_delete=models.CASCADE, related_name='rule_mappings')
  rule     = models.ForeignKey(Rule, on_delete=models.CASCADE, related_name='rule_mappings')
  required = models.BooleanField(default=True)
  enabled  = models.BooleanField(default=True)

  class Meta:
    ordering = ['rule__nls_rule_id']

  def __str__(self):
    return str(self.ruleset) + "-" + str(self.rule) + ": " + str(self.required)

class RuleCategoryRuleMapping(models.Model):
  id             = models.AutoField(primary_key=True)

  ruleset        = models.ForeignKey(Ruleset, on_delete=models.CASCADE, related_name='rc_mappings')
  rule_category  = models.ForeignKey(RuleCategory, on_delete=models.CASCADE)
  rule_mappings  = models.ManyToManyField(RuleMapping)

  class Meta:
    ordering = ['rule_category',]

  def __str__(self):
    return str(self.ruleset) + ": " + str(self.rule_category)

class GuidelineRuleMapping(models.Model):
  id             = models.AutoField(primary_key=True)

  ruleset        = models.ForeignKey(Ruleset, on_delete=models.CASCADE, related_name='gl_mappings')
  guideline      = models.ForeignKey(Guideline, on_delete=models.CASCADE)
  rule_mappings  = models.ManyToManyField(RuleMapping)

  class Meta:
    ordering = ['guideline',]

  def __str__(self):
    return str(self.ruleset) + ": " + str(self.guideline)

class SuccessCriterionRuleMapping(models.Model):
  id             = models.AutoField(primary_key=True)

  guideline_rule_mapping = models.ForeignKey(GuidelineRuleMapping, on_delete=models.CASCADE, related_name='sc_mappings')
  success_criterion      = models.ForeignKey(SuccessCriterion, on_delete=models.CASCADE)
  primary_mappings       = models.ManyToManyField(RuleMapping, related_name='primary_mappings')
  related_mappings       = models.ManyToManyField(RuleMapping, related_name='related_mappings')

  class Meta:
    ordering = ['success_criterion',]

  def __str__(self):
    return str(self.guideline_rule_mapping.ruleset) + ": " + str(self.success_criterion)
