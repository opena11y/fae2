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


def get_implementation_status(impl_status):
    if impl_status in ['C', 'AC', 'AC-MC', 'PI', 'PI-MC', 'NI', 'NI-MC', 'MC']:
        if 'MC' in impl_status:
            return impl_status.strip('MC') + 'R'
        else:
            return impl_status
    else:
        return 'na'


def ReportRulesViewCSV(request, report, view):
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="test.csv"'

    writer = csv.writer(response)
    writer.writerow(['Rule Group', 'V', 'W', 'MC', 'P', 'N/A', 'Score', 'Status'])

    report_obj = WebsiteReport.objects.get(slug=report)

    page = False

    if report_obj.page_count == 1:
        page = report_obj.get_first_page()
        if view == 'gl':
            groups = page.page_gl_results.all()
        elif view == 'rs':
            groups = page.page_rs_results.all()
        else:
            groups = page.page_rc_results.all()
            view = 'rc'
    else:
        if view == 'gl':
            groups = report_obj.ws_gl_results.all()
        elif view == 'rs':
            groups = report_obj.ws_rs_results.all()
        else:
            groups = report_obj.ws_rc_results.all()
            view = 'rc'

    for g in groups:
        writer.writerow(
            [g.get_title(), g.rules_violation, g.rules_warning, g.rules_manual_check, g.rules_passed, g.rules_na,
             g.implementation_score, get_implementation_status(g.implementation_status)])

    writer.writerow(
        ['All Report Groups', report_obj.rules_violation, report_obj.rules_warning, report_obj.rules_manual_check,
         report_obj.rules_passed, report_obj.rules_na, report_obj.implementation_score,
         get_implementation_status(report_obj.implementation_status)])
    return response
