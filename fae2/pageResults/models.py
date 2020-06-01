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

file: pageResults/models.py

Author: Jon Gunderson

"""

from __future__ import division
from __future__ import absolute_import
from django.db import models

from reports.models import WebsiteReport
from reports.models import ExcludedURL
from ruleCategories.models import RuleCategory
from wcag20.models import Guideline
from rules.models import RuleScope
from rules.models import Rule

from reports.models import IMPLEMENTATION_STATUS_CHOICES

from websiteResults.models import RuleResult
from websiteResults.models import RuleGroupResult
from websiteResults.models import WebsiteRuleCategoryResult
from websiteResults.models import WebsiteGuidelineResult
from websiteResults.models import WebsiteRuleScopeResult
from websiteResults.models import WebsiteRuleResult

# Create your models here.

# ---------------------------------------------------------------
#
# PageResult
#
# ---------------------------------------------------------------

class PageResult(RuleGroupResult):
    id = models.AutoField(primary_key=True)

    ws_report = models.ForeignKey(WebsiteReport, on_delete=models.CASCADE, related_name="page_all_results")

    # Page identification information

    page_number = models.IntegerField(default=-1)

    url = models.URLField('Page URL', max_length=4096, default="")
    url_encoded = models.URLField('Page URL (encoded)', max_length=8192, default="")
    title = models.CharField('Page Title', max_length=512, default="")

    class Meta:
        verbose_name = "Page Result"
        verbose_name_plural = "Page Results"
        ordering = ['page_number']

    def __str__(self):
        return self.url

    def get_title(self):
        if len(self.title):
            return self.title
        else:
            return "NO TITLE: " + self.url[0:50]

    def get_id(self):
        return 'pr_' + str(self.id)

    def to_json_results(self):
        json = {}
        json['id'] = self.get_id()
        json['num'] = self.page_number
        json['title'] = self.title
        json['url'] = self.url

        json['rules_violation'] = self.rules_violation
        json['rules_warning'] = self.rules_warning
        json['rules_manual_check'] = self.rules_manual_check
        json['rules_passed'] = self.rules_passed
        json['rules_na'] = self.rules_na

        json['implementation_pass_fail_score'] = self.implementation_pass_fail_score
        json['implementation_score'] = self.implementation_score

        json['implementation_pass_fail_status'] = self.implementation_pass_fail_status
        json['implementation_status'] = self.implementation_status

        json['rules_with_hidden_content'] = self.rules_with_hidden_content

        return json

# ---------------------------------------------------------------
#
# PageRuleCategoryResult
#
# ---------------------------------------------------------------

class PageRuleCategoryResult(RuleGroupResult):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="page_rc_results")

    slug = models.SlugField(max_length=32, default="none", blank=True, editable=False)

    ws_rc_result = models.ForeignKey(WebsiteRuleCategoryResult, related_name="page_rc_results", blank=True, null=True,
                                     on_delete=models.CASCADE)

    rule_category = models.ForeignKey(RuleCategory, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Page Rule Category Result"
        verbose_name_plural = "Page Rule Category Results"
        ordering = ['rule_category']

    def __str__(self):
        return self.rule_category.title

    def get_title(self):
        return self.rule_category.title

    def get_id(self):
        return 'prcr_' + self.id

# ---------------------------------------------------------------
#
# PageGuidelineResult
#
# ---------------------------------------------------------------

class PageGuidelineResult(RuleGroupResult):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="page_gl_results")

    slug = models.SlugField(max_length=32, default="none", blank=True, editable=False)

    ws_gl_result = models.ForeignKey(WebsiteGuidelineResult, related_name="page_gl_results", blank=True, null=True,
                                     on_delete=models.CASCADE)

    guideline = models.ForeignKey(Guideline, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Page Guideline Result"
        verbose_name_plural = "Page Guideline Results"
        ordering = ['guideline']

    def __str__(self):
        return str(self.guideline)

    def get_title(self):
        return self.guideline.title

    def get_id(self):
        return 'pglr_' + self.id

# ---------------------------------------------------------------
#
# PageRuleScopeResult
#
# ---------------------------------------------------------------

class PageRuleScopeResult(RuleGroupResult):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="page_rs_results")

    slug = models.SlugField(max_length=32, default="none", blank=True, editable=False)

    ws_rs_result = models.ForeignKey(WebsiteRuleScopeResult, related_name="page_rs_results", blank=True, null=True,
                                     on_delete=models.CASCADE)

    rule_scope = models.ForeignKey(RuleScope, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Page Rule Scope Result"
        verbose_name_plural = "Page Rule Scope Results"
        ordering = ['-rule_scope']

    def __str__(self):
        return self.rule_scope.title

    def get_title(self):
        return self.rule_scope.title

    def get_id(self):
        return 'prsr_' + self.id

# ---------------------------------------------------------------
#
# PageRuleResult
#
# ---------------------------------------------------------------

class PageRuleResult(RuleResult):
    id = models.AutoField(primary_key=True)

    rule = models.ForeignKey(Rule, on_delete=models.CASCADE)
    rule_required = models.BooleanField(default=False)

    slug = models.SlugField(max_length=32, default="none", blank=True, editable=False)

    ws_rule_result = models.ForeignKey(WebsiteRuleResult, related_name="page_rule_results", blank=True,
                                       on_delete=models.CASCADE)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="page_rule_results")
    page_rc_result = models.ForeignKey(PageRuleCategoryResult, related_name="page_rule_results",
                                       on_delete=models.CASCADE)
    page_gl_result = models.ForeignKey(PageGuidelineResult, related_name="page_rule_results", on_delete=models.CASCADE)
    page_rs_result = models.ForeignKey(PageRuleScopeResult, related_name="page_rule_results", on_delete=models.CASCADE)

    result_message = models.CharField("Rule Result Message", max_length=4096, default="none")

    elements_passed = models.IntegerField(default=0)
    elements_violation = models.IntegerField(default=0)
    elements_warning = models.IntegerField(default=0)
    elements_hidden = models.IntegerField(default=0)

    elements_mc_identified = models.IntegerField(default=0)
    elements_mc_passed = models.IntegerField(default=0)
    elements_mc_failed = models.IntegerField(default=0)
    elements_mc_na = models.IntegerField(default=0)

    element_results_json = models.TextField(default="", blank=True)

    class Meta:
        verbose_name = "Page Rule Result"
        verbose_name_plural = "Page Rule Results"
        ordering = ['-elements_violation', '-elements_warning', '-elements_mc_identified', '-elements_passed',
                    '-elements_hidden']

    def calculate_implementation(self):

        def set_status(score, label):
            if pass_fail_total and self.implementation_pass_fail_score <= score:
                self.implementation_pass_fail_status = label

            if total and self.implementation_score <= score:
                if pass_fail_total == 0:
                    self.implementation_status = "MC"
                elif total == pass_fail_total:
                    self.implementation_status = label
                else:
                    self.implementation_status = label + "-MC"
            else:
                self.implementation_status = label

        self.implementation_pass_fail_score = -1
        self.implementation_score = -1
        self.implementation_status = "U"

        #    debug('V: ' + str(self.elements_violation) + ' W: ' + str(self.elements_warning) + ' MC: ' + str(self.elements_manual_check) + ' P: ' + str(self.elements_passed))

        pass_fail_total = self.elements_violation + self.elements_warning + self.elements_passed + self.elements_mc_passed + self.elements_mc_failed
        total = self.elements_mc_identified - self.elements_mc_passed - self.elements_mc_failed - self.elements_mc_na

        passed = self.elements_passed + self.elements_mc_passed

        if total > 0:
            total = pass_fail_total + total
        else:
            total = pass_fail_total

        if pass_fail_total:
            self.implementation_pass_fail_score = (100 * passed) / pass_fail_total

        if total:
            self.implementation_score = (100 * passed) / total

        set_status(50, 'NI')
        set_status(95, 'PI')
        set_status(99, 'AC')
        set_status(100, 'C')

        self.save()

    def __str__(self):
        return "Page Rule Result: " + self.result_message

    def get_id(self):
        return 'prr_' + self.id
