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

file: websiteResultGroups/models.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.db import models

from django.urls import reverse

from reports.models import RuleResult
from reports.models import RuleGroupResult
from reports.models import WebsiteReport

from ruleCategories.models import RuleCategory
from wcag20.models         import Guideline
from rules.models          import RuleScope
from rules.models          import Rule

# ---------------------------------------------------------------
#
# WebsiteReportGroup
#
# ---------------------------------------------------------------

class WebsiteReportGroup(RuleGroupResult):
  title = models.CharField("Title",  max_length=1024, default="No title", blank=False)

  num_total_pages   = models.IntegerField(default=0)
  num_total_reports = models.IntegerField(default=0)

  ws_reports = models.ManyToManyField(WebsiteReport, blank=True, default=None)

  class Meta:
    verbose_name        = "Website Report Group"
    verbose_name_plural = "Website Report Groups"

  def __unicode__(self):
      return self.title

  def add_website_report(self, ws_report):
#    print('[WebsiteReportGroup][add_website_report] ws_report: ' + str(ws_report))
    try:
      self.num_total_reports = self.num_total_reports + 1
      self.num_total_pages   = self.num_total_pages + ws_report.page_count

      self.ws_reports.add(ws_report)
      self.save()
    except:
      pass

# ---------------------------------------------------------------
#
# WebsiteRuleCategoryResultGroup
#
# ---------------------------------------------------------------

class WebsiteRuleCategoryResultGroup(RuleGroupResult):
  id             = models.AutoField(primary_key=True)

  slug           = models.SlugField(max_length=16, default="none", editable=False)

  wsr_group      = models.ForeignKey(WebsiteReportGroup, on_delete=models.CASCADE, related_name="ws_rc_result_groups")

  rule_category  = models.ForeignKey(RuleCategory, on_delete=models.SET_NULL, null=True, default=None)

  class Meta:
    verbose_name        = "Website Rule Category Result Group"
    verbose_name_plural = "Website Rule Category Result Groups"
    ordering            = ['rule_category']

  def __unicode__(self):
      return self.rule_category.title_plural

  def get_title(self):
    return self.rule_category.title

  def get_id(self):
    return 'wsrcrg_' + self.rule_category.id

# ---------------------------------------------------------------
#
# WebsiteGuidelineResultGroup
#
# ---------------------------------------------------------------

class WebsiteGuidelineResultGroup(RuleGroupResult):
  id         = models.AutoField(primary_key=True)

  slug       = models.SlugField(max_length=16, default="none", editable=False)

  wsr_group  = models.ForeignKey(WebsiteReportGroup, on_delete=models.CASCADE, related_name="ws_gl_result_groups")

  guideline  = models.ForeignKey(Guideline, on_delete=models.SET_NULL, null=True, default=None)

  class Meta:
    verbose_name        = "Website Guideline Result Grouo"
    verbose_name_plural = "Website Guideline Result Groups"
    ordering = ['guideline']

  def __unicode__(self):
    return str(self.guideline)

  def get_title(self):
    return self.guideline.title

  def get_id(self):
    return 'wsglrg_' + self.guideline.id

# ---------------------------------------------------------------
#
# WebsiteRuleScopeResultGroup
#
# ---------------------------------------------------------------

class WebsiteRuleScopeResultGroup(RuleGroupResult):
  id             = models.AutoField(primary_key=True)

  slug           = models.SlugField(max_length=16, default="none", editable=False)

  wsr_group      = models.ForeignKey(WebsiteReportGroup, on_delete=models.CASCADE, related_name="ws_rs_result_groups")

  rule_scope       = models.ForeignKey(RuleScope, on_delete=models.SET_NULL, null=True, default=None)

  class Meta:
    verbose_name        = "Website Rule Scope Result Group"
    verbose_name_plural = "Website Rule Scope Result Groups"
    ordering = ['-rule_scope']

  def __unicode__(self):
    return self.rule_scope.title

  def get_id(self):
    return 'wsrsr_' + self.rule_scope.id

  def get_title(self):
    return self.rule_scope.title

# ---------------------------------------------------------------
#
# WebsiteRuleResultGroup
#
# ---------------------------------------------------------------

class WebsiteRuleResultGroup(RuleResult):

  wsr_group  = models.ForeignKey(WebsiteReportGroup, on_delete=models.CASCADE, related_name="ws_rule_result_groups")

  slug         = models.SlugField(max_length=16, default="none", editable=False)

  rule         = models.ForeignKey(Rule, on_delete=models.SET_NULL, null=True, default=None)

  pages_violation    = models.IntegerField(default=0)
  pages_warning      = models.IntegerField(default=0)
  pages_manual_check = models.IntegerField(default=0)
  pages_passed       = models.IntegerField(default=0)
  pages_na           = models.IntegerField(default=0)

  pages_with_hidden_content  = models.IntegerField(default=0)
