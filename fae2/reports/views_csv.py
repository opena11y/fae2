from __future__ import absolute_import

import csv
import json

from django.http import HttpResponse

from fae2.settings import SITE_URL
from reports.models import WebsiteReport

from pageResults.models import PageRuleCategoryResult
from pageResults.models import PageGuidelineResult
from pageResults.models import PageRuleScopeResult

from ruleCategories.models import RuleCategory
from wcag20.models import Guideline
from rules.models import RuleScope

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
    elif result_value == 4:
        return 'Warning'
    elif result_value == 3:
        return 'Manual Check'
    elif result_value == 2:
        return 'Passed'
    elif result_value == 1:
        return 'Not Applicable'

def get_element_result(result_value):
    if result_value == 5:
        return 'Violation'
    elif result_value == 4:
        return 'Warning'
    elif result_value == 3:
        return 'Manual Check'
    elif result_value == 2:
        return 'Hidden'
    elif result_value == 1:
        return 'Pass'

def addReportInformation(report_obj, writer, path):
    writer.writerow(['Meta Label', 'Meta Value'])

    writer.writerow(['Title', report_obj.title])
    writer.writerow(['URL', report_obj.url])
    writer.writerow(['Ruleset', report_obj.ruleset.title])
    writer.writerow(['Depth', report_obj.depth])
    writer.writerow(['Pages', report_obj.page_count])
    writer.writerow(['Report URL', SITE_URL + path + '/'])

    writer.writerow([])

def addRuleInformation(rule, writer):
    writer.writerow(['Rule', rule.nls_rule_id])
    writer.writerow(['Summary', rule.summary_text])
    writer.writerow(['WCAG', rule.wcag_primary])

    writer.writerow([])

def addGroupInformation(group, writer):
    writer.writerow(['Rule Group', group.title])

    count  = 1
    for r in group.get_rules():
        writer.writerow(['Rule ' + str(count), r.nls_rule_id + ': ' + r.summary_text + ' (' + str(r.wcag_primary) + ')'])
        count += 1

    writer.writerow([])

def addPageInformation(page, writer):
    writer.writerow(['Page Number', page.page_number])
    writer.writerow(['Page Title', page.title])
    writer.writerow(['Page URL', page.url])

    writer.writerow([])

def cleanMessage(message):

    message = message.replace('<code>', '\'')
    message = message.replace('</code>', '\'')

    return message

def ReportRulesViewCSV(request, report, view):
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)

    report_obj = WebsiteReport.objects.get(slug=report)

    addReportInformation(report_obj, writer, request.path.replace('/csv/', ''))

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
    else:
        if view == 'gl':
            groups = report_obj.ws_gl_results.all()
        elif view == 'rs':
            groups = report_obj.ws_rs_results.all()
        else:
            groups = report_obj.ws_rc_results.all()

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
                                      request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)
    report_obj = WebsiteReport.objects.get(slug=report)

    addReportInformation(report_obj, writer, request.path.replace('/csv/', ''))

    writer.writerow(
        ['ID', 'Rule Summary', 'Result', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'N/A', 'Score', 'Status'])

    if view == 'gl':
        group = report_obj.ws_gl_results.get(slug=group)

    elif view == 'rs':
        group = report_obj.ws_rs_results.get(slug=group)

    else:
        group = report_obj.ws_rc_results.get(slug=group)

    for g in group.ws_rule_results.all():
        writer.writerow(
            [g.rule.nls_rule_id, g.get_title(), get_result(g.result_value), g.pages_violation, g.pages_warning,
             g.pages_manual_check, g.pages_passed, g.pages_na, g.implementation_score,
             get_implementation_status(g.implementation_status)])

    return response

def ReportRulesGroupRuleViewCSV(request, report, view, group, rule):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)
    report_obj = WebsiteReport.objects.get(slug=report)

    addReportInformation(report_obj, writer, request.path.replace('/csv/', ''))

    if view == 'gl':
        group = report_obj.ws_gl_results.get(slug=group)
    elif view == 'rs':
        group = report_obj.ws_rs_results.get(slug=group)
    else:
        group = report_obj.ws_rc_results.get(slug=group)

    ws_rule_result = group.ws_rule_results.get(slug=rule)

    addRuleInformation(ws_rule_result.rule, writer)

    writer.writerow(
        ['Page', 'Page Title', 'Result', 'Elements Violation', 'Elements Warning', 'Elements Manual Check', 'Elements Passed', 'Score', 'Status'])

    for wsr in ws_rule_result.page_rule_results.all():
        writer.writerow(
            [wsr.page_result.page_number, wsr.page_result.title, get_result(wsr.result_value), wsr.elements_violation,
             wsr.elements_warning, wsr.elements_mc_identified, wsr.elements_passed, wsr.implementation_score,
             get_implementation_status(wsr.implementation_status)])

    writer.writerow([None, 'All Pages', get_result(ws_rule_result.result_value), ws_rule_result.elements_violation,
                     ws_rule_result.elements_warning, ws_rule_result.elements_mc_identified,
                     ws_rule_result.elements_passed, ws_rule_result.implementation_score,
                     get_implementation_status(ws_rule_result.implementation_status)])

    return response

def ReportRulesGroupRulePageViewCSV(request, report, view, group, rule, page):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)
    report_obj = WebsiteReport.objects.get(slug=report)

    addReportInformation(report_obj, writer, request.path.replace('/csv/', ''))
    if view == 'gl':
        group = report_obj.ws_gl_results.get(slug=group)
    elif view == 'rs':
        group = report_obj.ws_rs_results.get(slug=group)
    else:
        group = report_obj.ws_rc_results.get(slug=group)

    ws_rule_result = group.ws_rule_results.get(slug=rule)

    page_rule_result = ws_rule_result.page_rule_results.get(page_result__page_number=page)

    addRuleInformation(page_rule_result.rule, writer)
    addPageInformation(page_rule_result.page_result, writer)

    writer.writerow(['Element Identifier', 'Result', 'Element Position', 'Message'])

    for prr in json.loads(page_rule_result.element_results_json):
        writer.writerow(
            [prr['element_identifier'], get_element_result(int(prr['result_value'])), prr['ordinal_position'],
             cleanMessage(prr['message'])])

    return response

def ReportPagesViewCSV(request, report, view):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)

    report = WebsiteReport.objects.get(slug=report)
    addReportInformation(report, writer, request.path.replace('/csv/', ''))

    writer.writerow(
        ['Page', 'Page Title', 'URL', 'Result', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'Not Applicable', 'Score', 'Status'])

    for pr in report.page_all_results.all():
        writer.writerow(
            [pr.page_number, pr.get_title(), pr.url, get_result(pr.result_value), pr.rules_violation,
             pr.rules_warning, pr.rules_manual_check, pr.rules_passed, pr.rules_na, pr.implementation_score,
             get_implementation_status(pr.implementation_status)])

    return response

def ReportPagesGroupViewCSV(request, report, view, group):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)

    report = WebsiteReport.objects.get(slug=report)
    addReportInformation(report, writer, request.path.replace('/csv/', ''))

    page = False

    if view == 'gl':
        page_results = PageGuidelineResult.objects.filter(page_result__ws_report=report,
                                                          guideline__slug=group)
        group = Guideline.objects.get(slug=group)

    elif view == 'rs':
        page_results = PageRuleScopeResult.objects.filter(page_result__ws_report=report,
                                                          rule_scope__slug=group)
        group = RuleScope.objects.get(slug=group)

    else:
        page_results = PageRuleCategoryResult.objects.filter(page_result__ws_report=report,
                                                             rule_category__slug=group)
        group = RuleCategory.objects.get(slug=group)
        view = 'rc'

    addGroupInformation(group, writer)

    writer.writerow(
        ['Page', 'Page Title', 'URL', 'Result', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'Not Applicable', 'Score', 'Status'])

    for pr in page_results:

        writer.writerow(
            [pr.page_result.page_number, pr.page_result.get_title(), pr.page_result.url, get_result(pr.result_value), pr.rules_violation,
             pr.rules_warning, pr.rules_manual_check, pr.rules_passed, pr.rules_na, pr.implementation_score,
             get_implementation_status(pr.implementation_status)])

    return response

def ReportPageViewCSV(request, report, view, page):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)

    report = WebsiteReport.objects.get(slug=report)
    page = report.page_all_results.get(page_number=page)

    addReportInformation(report, writer, request.path.replace('/csv/', ''))
    addPageInformation(page, writer)

    writer.writerow(['Rule Group', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'N/A', 'Score', 'Status'])

    if view == 'gl':
        groups = page.page_gl_results.all()
    elif view == 'rs':
        groups = page.page_rs_results.all()
    else:
        groups = page.page_rc_results.all()
        view_opt = 'rc'

    for g in groups:
        writer.writerow(
            [g.get_title(), g.rules_violation, g.rules_warning, g.rules_manual_check, g.rules_passed, g.rules_na,
             g.implementation_score, get_implementation_status(g.implementation_status)])

    return response

def ReportPageGroupViewCSV(request, report, view, group, page):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)

    report = WebsiteReport.objects.get(slug=report)
    page = report.page_all_results.get(page_number=page)

    addReportInformation(report, writer, request.path.replace('/csv/', ''))
    addPageInformation(page, writer)

    writer.writerow(['Rule ID', 'Rule Summary', 'Element Violations', 'Element Warnings', 'Element Manual Check', 'Element Passed', 'Element Hidden', 'Score', 'Status'])

    if view == 'gl':
        group_results = page.page_gl_results.get(slug=group)
        group_info = Guideline.objects.get(slug=group)
    elif view == 'rs':
        group_results = page.page_rs_results.get(slug=group)
        group_info = RuleScope.objects.get(slug=group)
    else:
        group_results = page.page_rc_results.get(slug=group)
        group_info = RuleCategory.objects.get(slug=group)

    for prr in group_results.page_rule_results.all():
        writer.writerow(
            [prr.rule.nls_rule_id, prr.rule.summary_text, prr.elements_violation, prr.elements_warning, prr.elements_mc_identified, prr.elements_passed, prr.elements_hidden,
             prr.implementation_score, get_implementation_status(prr.implementation_status)])

    return response

def ReportPageGroupRuleViewCSV(request, report, view, group, page, rule):
    return ReportRulesGroupRulePageViewCSV(request, report, view, group, rule, page)
