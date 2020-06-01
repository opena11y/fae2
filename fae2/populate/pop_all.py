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

file: populate/pop_all.py

Author: Jon Gunderson

"""

from __future__ import absolute_import

import pop_accounts
import os.path
# If self hosting we do not have or need _subscriptions so check for it's existence.
if os.path.isfile('pop_subscriptions'):
  import pop_subscriptions
import pop_site
import pop_markup
import pop_wcag20
import pop_rule_categories
import pop_rules
import pop_rulesets
import pop_faqs

#import fix_rc_slugs
#import pop_institutional_profiles
