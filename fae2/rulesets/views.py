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

file: rulesets/views.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.urls import reverse

from ruleCategories.models import RuleCategory
from rules.models   import Rule
from rules.models   import RuleMapping
from wcag20.models import Guideline
from .models import Ruleset

from reports.views import FAENavigationMixin

class RulesetsView(FAENavigationMixin, TemplateView):
    template_name = 'rulesets/rulesets_view.html'

    def get_context_data(self, **kwargs):
        context = super(RulesetsView, self).get_context_data(**kwargs)

        context['rule_categories'] = RuleCategory.objects.all()
        context['rulesets']        = Ruleset.objects.all()

        return context

class RulesetsWCAGView(FAENavigationMixin, TemplateView):
    template_name = 'rulesets/rulesets_wcag_view.html'

    def get_context_data(self, **kwargs):

        context = super(RulesetsWCAGView, self).get_context_data(**kwargs)

        context['guidelines'] = Guideline.objects.all()
        context['rulesets']   = Ruleset.objects.all()

        return context

class RulesetsRuleView(FAENavigationMixin, TemplateView):
    template_name = 'rulesets/rulesets_rule_view.html'

    def get_context_data(self, **kwargs):
        context = super(RulesetsRuleView, self).get_context_data(**kwargs)

        context['rulesets_url']  = reverse('rulesets', args=[])
        context['rulesets']      = Ruleset.objects.all()
        context['rule']          = Rule.objects.get(rule_id=kwargs['rule_id'])

        return context

class RulesetsRuleWCAGView(FAENavigationMixin, TemplateView):
    template_name = 'rulesets/rulesets_rule_wcag_view.html'

    def get_context_data(self, **kwargs):
        context = super(RulesetsRuleWCAGView, self).get_context_data(**kwargs)

        context['rulesets_url']    = reverse('rulesets_wcag', args=[])
        context['rulesets']        = Ruleset.objects.all()
        context['rule']            = Rule.objects.get(rule_id=kwargs['rule_id'])
        return context

class RulesetView(FAENavigationMixin, TemplateView):
    template_name = 'rulesets/ruleset_view.html'

    def get_context_data(self, **kwargs):
        context = super(RulesetView, self).get_context_data(**kwargs)

        context['rulesets_url']  = reverse('rulesets', args=[])
        context['ruleset']       = Ruleset.objects.get(slug=kwargs['slug'])
        return context

class RulesetWCAGView(FAENavigationMixin, TemplateView):
    template_name = 'rulesets/ruleset_wcag_view.html'

    def get_context_data(self, **kwargs):
        context = super(RulesetWCAGView, self).get_context_data(**kwargs)

        context['rulesets_url'] = reverse('rulesets_wcag', args=[])
        context['ruleset']      = Ruleset.objects.get(slug=kwargs['slug'])
        return context

class RulesetRuleView(FAENavigationMixin, TemplateView):
    template_name = 'rulesets/ruleset_rule_view.html'

    def get_context_data(self, **kwargs):
        context = super(RulesetRuleView, self).get_context_data(**kwargs)

        ruleset = Ruleset.objects.get(slug=kwargs['slug'])
        rule    = Rule.objects.get(rule_id=kwargs['rule_id'])
        context['rulesets_url']    = reverse('rulesets', args=[])
        context['ruleset_url']     = reverse('ruleset', args=[ruleset.slug])
        context['rule']            = rule
        context['rule_mapping']    = RuleMapping.objects.get(ruleset=ruleset, rule=rule)
        return context

class RulesetRuleWCAGView(FAENavigationMixin, TemplateView):
    template_name = 'rulesets/ruleset_rule_wcag_view.html'

    def get_context_data(self, **kwargs):
        context = super(RulesetRuleWCAGView, self).get_context_data(**kwargs)

        ruleset = Ruleset.objects.get(slug=kwargs['slug'])
        rule    = Rule.objects.get(rule_id=kwargs['rule_id'])
        context['rulesets_url']    = reverse('rulesets_wcag', args=[])
        context['ruleset_url']     = reverse('ruleset_wcag', args=[ruleset.slug])
        context['rule']            = rule
        context['rule_mapping']    = RuleMapping.objects.get(ruleset=ruleset, rule=rule)
        return context
