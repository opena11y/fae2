from __future__ import absolute_import

from itertools import chain

from django.urls import reverse_lazy, reverse
from django.contrib.auth.mixins import LoginRequiredMixin
from .uid import generate

from fae2.settings import ANONYMOUS_ENABLED
from fae2.settings import SELF_REGISTRATION_ENABLED
from fae2.settings import SHIBBOLETH_ENABLED
from fae2.settings import PAYMENT_ENABLED

from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.shortcuts import redirect

from django.contrib import messages

from django.contrib.auth.models import User

from reports.models import WebsiteReport
from pageResults.models import PageRuleCategoryResult
from pageResults.models import PageGuidelineResult
from pageResults.models import PageRuleScopeResult
from rulesets.models import Ruleset
from userProfiles.models import UserProfile

from ruleCategories.models import RuleCategory
from wcag20.models import Guideline
from rules.models import RuleScope
from contact.models import Announcement

from userProfiles.models import get_profile

import csv

def ReportRulesViewCSV(request):
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="test.csv"'

    writer = csv.writer(response)
    writer.writerow(['First row', 'Foo', 'Bar', 'Baz'])
    writer.writerow(['Second row', 'A', 'B', 'C', '"Testing"', "Here's a quote"])

    return response