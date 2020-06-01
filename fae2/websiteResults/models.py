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

file: websiteResults/models.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.db import models

from django.urls import reverse

from reports.models import RuleResult
from reports.models import RuleGroupResult
from reports.models import WebsiteReport

from ruleCategories.models import RuleCategory
from wcag20.models import Guideline
from rules.models import RuleScope
from rules.models import Rule

# ---------------------------------------------------------------
#
# WebsiteRuleCategoryResult
#
# ---------------------------------------------------------------

class WebsiteRuleCategoryResult(RuleGroupResult):
    id = models.AutoField(primary_key=True)

    slug = models.SlugField(max_length=16, default="none", blank=True, editable=False)

    ws_report = models.ForeignKey(WebsiteReport, on_delete=models.CASCADE, related_name="ws_rc_results")

    rule_category = models.ForeignKey(RuleCategory, on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = "Website Rule Category Result"
        verbose_name_plural = "Website Rule Category Results"
        ordering = ['rule_category']

    def __unicode__(self):
        return self.rule_category.title_plural

    def get_title(self):
        return self.rule_category.title

    def get_id(self):
        return 'wsrcr_' + self.rule_category.id

# ---------------------------------------------------------------
#
# WebsiteGuidelineResult
#
# ---------------------------------------------------------------

class WebsiteGuidelineResult(RuleGroupResult):
    id = models.AutoField(primary_key=True)

    ws_report = models.ForeignKey(WebsiteReport, on_delete=models.CASCADE, related_name="ws_gl_results")

    slug = models.SlugField(max_length=16, default="none", blank=True, editable=False)

    guideline = models.ForeignKey(Guideline, on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = "Website Guideline Result"
        verbose_name_plural = "Website Guideline Results"
        ordering = ['guideline']

    def __unicode__(self):
        return str(self.guideline)

    def get_title(self):
        return self.guideline.title

    def get_id(self):
        return 'wsglr_' + self.guideline.id

# ---------------------------------------------------------------
#
# WebsiteRuleScopeResult
#
# ---------------------------------------------------------------

class WebsiteRuleScopeResult(RuleGroupResult):
    id = models.AutoField(primary_key=True)

    slug = models.SlugField(max_length=16, default="none", blank=True, editable=False)

    ws_report = models.ForeignKey(WebsiteReport, on_delete=models.CASCADE, related_name="ws_rs_results")

    rule_scope = models.ForeignKey(RuleScope, on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = "Website Rule Scope Result"
        verbose_name_plural = "Website Rule Scope Results"
        ordering = ['-rule_scope']

    def __unicode__(self):
        return self.rule_scope.title

    def get_id(self):
        return 'wsrsr_' + self.rule_scope.id

    def get_title(self):
        return self.rule_scope.title

# ---------------------------------------------------------------
#
# WebsiteRuleResult
#
# ---------------------------------------------------------------

class WebsiteRuleResult(RuleResult):
    id = models.AutoField(primary_key=True)

    slug = models.SlugField(max_length=16, default="none", blank=True, editable=False)

    rule = models.ForeignKey(Rule, on_delete=models.SET_NULL, null=True)
    rule_required = models.BooleanField(default=False)

    ws_report = models.ForeignKey(WebsiteReport, on_delete=models.CASCADE, related_name="ws_rule_results")

    ws_rc_result = models.ForeignKey(WebsiteRuleCategoryResult, on_delete=models.SET_NULL, null=True,
                                     related_name="ws_rule_results")
    ws_gl_result = models.ForeignKey(WebsiteGuidelineResult, on_delete=models.SET_NULL, null=True,
                                     related_name="ws_rule_results")
    ws_rs_result = models.ForeignKey(WebsiteRuleScopeResult, on_delete=models.SET_NULL, null=True,
                                     related_name="ws_rule_results")

    rule_number = models.IntegerField(default=-1)

    pages_violation = models.IntegerField(default=0)
    pages_warning = models.IntegerField(default=0)
    pages_manual_check = models.IntegerField(default=0)
    pages_passed = models.IntegerField(default=0)
    pages_na = models.IntegerField(default=0)

    elements_violation = models.IntegerField(default=0)
    elements_warning = models.IntegerField(default=0)
    elements_mc_identified = models.IntegerField(default=0)
    elements_mc_passed = models.IntegerField(default=0)
    elements_mc_failed = models.IntegerField(default=0)
    elements_mc_na = models.IntegerField(default=0)
    elements_passed = models.IntegerField(default=0)
    elements_hidden = models.IntegerField(default=0)

    pages_with_hidden_content = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Website Rule Result"
        verbose_name_plural = "Website Rule Results"
        ordering = ['-pages_violation', '-pages_warning', '-pages_manual_check', '-pages_passed',
                    '-pages_with_hidden_content', '-rule__scope']

    def __unicode__(self):
        return "Website Rule Result: " + self.rule.summary_text

    def get_id(self):
        return 'wsrr_' + self.rule.id

    def get_title(self):
        return self.rule.summary_text

    def to_json_results(self):
        json = {}
        json['id'] = self.rule.nls_rule_id
        json['num'] = self.rule_number
        json['summary'] = self.rule.summary_text
        json['required'] = self.rule_required
        json['rule_category'] = self.rule.category.title
        json['wcag20'] = str(self.rule.wcag_primary)
        json['scope'] = str(self.rule.scope)

        json['pages_violation'] = self.pages_violation
        json['pages_warning'] = self.pages_warning
        json['pages_manual_check'] = self.pages_manual_check
        json['pages_passed'] = self.pages_passed
        json['pages_na'] = self.pages_na

        json['elements_violation'] = self.elements_violation
        json['elements_warning'] = self.elements_warning
        json['elements_mc_identified'] = self.elements_mc_identified
        json['elements_mc_passed'] = self.elements_mc_passed
        json['elements_mc_failed'] = self.elements_mc_failed
        json['elements_mc_na'] = self.elements_mc_na
        json['elements_passed'] = self.elements_passed
        json['elements_hidden'] = self.elements_hidden

        json['pages_with_hidden_content'] = self.pages_with_hidden_content

        return json
