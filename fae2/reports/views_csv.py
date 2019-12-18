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
from fae2.settings import SITE_URL


def get_implementation_status(impl_status):
    if impl_status in ['C', 'AC', 'AC-MC', 'PI', 'PI-MC', 'NI', 'NI-MC', 'MC']:
        if 'MC' in impl_status:
            return impl_status.strip('MC') + 'R'
        else:
            return impl_status
    else:
        return 'na'


def get_result(result_value):
    if result_value == 5:
        return 'Violation'
    elif result_value == 6:
        return 'Warning'
    elif result_value == 3:
        return 'Manual Check'
    elif result_value == 2:
        return 'Passed'
    elif result_value == 1:
        return 'Not Applicable'


def addMetaData(report_obj, writer, path):
    writer.writerow(['Meta Label', 'Meta Value'])

    writer.writerow(['Title', report_obj.title])
    writer.writerow(['URL', report_obj.url])
    writer.writerow(['Ruleset', report_obj.ruleset.title])
    writer.writerow(['Depth', report_obj.depth])
    writer.writerow(['Pages', report_obj.page_count])
    writer.writerow(['Report URL', SITE_URL + path])

    writer.writerow([])


def ReportRulesViewCSV(request, report, view):
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('-csv', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)

    report_obj = WebsiteReport.objects.get(slug=report)

    addMetaData(report_obj, writer, request.path.replace('-csv', ''))

    writer.writerow(['Rule Group', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'N/A', 'Score', 'Status'])

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


def ReportRulesGroupViewCSV(request, report, view, group):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('-csv', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)
    report_obj = WebsiteReport.objects.get(slug=report)

    addMetaData(report_obj, writer, request.path.replace('-csv', ''))

    writer.writerow(
        ['ID', 'Rule Summary', 'Result', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'N/A', 'Score', 'Status'])

    if view == 'gl':
        group = report_obj.ws_gl_results.get(slug=group)
        page_results = group.page_gl_results.all()
        groups = Guideline.objects.all()
    elif view == 'rs':
        group = report_obj.ws_rs_results.get(slug=group)
        page_results = group.page_rs_results.all()
        groups = RuleScope.objects.all()
    else:
        group = report_obj.ws_rc_results.get(slug=group)
        page_results = group.page_rc_results.all()
        groups = RuleCategory.objects.all()
        view = 'rc'

    for g in group.ws_rule_results.all():
        writer.writerow(
            [g.rule.nls_rule_id, g.get_title(), get_result(g.result_value), g.pages_violation, g.pages_warning,
             g.pages_manual_check, g.pages_passed, g.pages_na, g.implementation_score,
             get_implementation_status(g.implementation_status)])

    return response
