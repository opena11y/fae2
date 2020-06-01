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

file: rulesets/urls.py

Author: Jon Gunderson

"""

# abouts/urls.py
from __future__ import absolute_import
from django.conf.urls import url
from .views import RulesetsView
from .views import RulesetsWCAGView
from .views import RulesetsRuleView
from .views import RulesetsRuleWCAGView
from .views import RulesetView
from .views import RulesetWCAGView
from .views import RulesetRuleView
from .views import RulesetRuleWCAGView

urlpatterns = [
    url(r'^$',      RulesetsView.as_view(),     name='rulesets'),
    url(r'wcag/$', RulesetsWCAGView.as_view(), name='rulesets_wcag'),
    url(r'^(?P<rule_id>[\w+]+)/$',      RulesetsRuleView.as_view(),     name='rulesets_rule'),
    url(r'^wcag/(?P<rule_id>[\w+]+)/$', RulesetsRuleWCAGView.as_view(), name='rulesets_rule_wcag'),
    url(r'^ruleset/(?P<slug>\w+)/$',      RulesetView.as_view(),     name='ruleset'),
    url(r'^ruleset/wcag/(?P<slug>\w+)/$', RulesetWCAGView.as_view(), name='ruleset_wcag'),
    url(r'^ruleset/(?P<slug>\w+)/rule/(?P<rule_id>[\w+]+)/$',      RulesetRuleView.as_view(),     name='ruleset_rule'),
    url(r'^ruleset/wcag/(?P<slug>\w+)/rule/(?P<rule_id>[\w+]+)/$', RulesetRuleWCAGView.as_view(), name='ruleset_rule_wcag'),
]
