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

file: pageResults/admin.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.contrib import admin

from .models import PageResult
from .models import PageRuleCategoryResult
from .models import PageGuidelineResult
from .models import PageRuleScopeResult
from .models import PageRuleResult

class PageResultAdmin(admin.ModelAdmin):
    list_display  = ('url', 'page_number', 'rules_violation', 'rules_warning', 'rules_manual_check', 'rules_passed', 'implementation_pass_fail_score', 'implementation_score', 'implementation_status')
    list_filter   = ('ws_report',)

admin.site.register(PageResult, PageResultAdmin)

class PageRuleCategoryResultAdmin(admin.ModelAdmin):
    list_display = ('page_result', 'rule_category', 'rules_violation', 'rules_warning', 'rules_manual_check', 'rules_passed', 'implementation_pass_fail_score', 'implementation_score', 'implementation_status')
    list_filter  = ('page_result', 'rule_category')

admin.site.register(PageRuleCategoryResult, PageRuleCategoryResultAdmin)

class PageGuidelineResultAdmin(admin.ModelAdmin):
    list_display = ('page_result', 'guideline', 'rules_violation', 'rules_warning', 'rules_manual_check', 'rules_passed', 'implementation_pass_fail_score', 'implementation_score', 'implementation_status')
    list_filter  = ('page_result', 'guideline')

admin.site.register(PageGuidelineResult, PageGuidelineResultAdmin)

class PageRuleScopeResultAdmin(admin.ModelAdmin):
    list_display = ('page_result', 'rule_scope', 'rules_violation', 'rules_warning', 'rules_manual_check', 'rules_passed', 'implementation_pass_fail_score', 'implementation_score', 'implementation_status')
    list_filter  = ('page_result', 'rule_scope')

admin.site.register(PageRuleScopeResult, PageRuleScopeResultAdmin)

class PageRuleResultAdmin(admin.ModelAdmin):
    list_display = ('page_result', 'rule', 'result_value', 'elements_violation', 'elements_warning', 'elements_mc_identified', 'elements_mc_failed', 'elements_mc_passed', 'elements_mc_na', 'elements_passed', 'implementation_pass_fail_score', 'implementation_score', 'implementation_status')
    list_filter  = ('page_result', 'rule')

admin.site.register(PageRuleResult, PageRuleResultAdmin)
# Register your models here.
