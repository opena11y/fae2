from __future__ import absolute_import

import csv
import json

from django.http import HttpResponse

from fae2.settings import SITE_URL
from reports.models import WebsiteReport
from docx import Document


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


def addMetaData(report_obj, writer, path):
    writer.writerow(['Meta Label', 'Meta Value'])

    writer.writerow(['Title', report_obj.title])
    writer.writerow(['URL', report_obj.url])
    writer.writerow(['Ruleset', report_obj.ruleset.title])
    writer.writerow(['Depth', report_obj.depth])
    writer.writerow(['Pages', report_obj.page_count])
    writer.writerow(['Report URL', SITE_URL + path + '/'])

    writer.writerow([])


def addDocMetaData(report_obj, doc, path):
    table = doc.add_table(rows=1, cols=2)
    table.style = 'Light Shading Accent 1'
    hdr_cells = table.rows[0].cells
    hdr_cells[0].text = 'Meta Label'
    hdr_cells[1].text = 'Meta Value'

    row_cells = table.add_row().cells
    row_cells[0].text = 'Title'
    row_cells[1].text = report_obj.title

    row_cells = table.add_row().cells
    row_cells[0].text = 'URL'
    row_cells[1].text = report_obj.url

    row_cells = table.add_row().cells
    row_cells[0].text = 'Ruleset'
    row_cells[1].text = report_obj.ruleset.title

    row_cells = table.add_row().cells
    row_cells[0].text = 'Depth'
    row_cells[1].text = str(report_obj.depth)

    row_cells = table.add_row().cells
    row_cells[0].text = 'Pages'
    row_cells[1].text = str(report_obj.page_count)

    row_cells = table.add_row().cells
    row_cells[0].text = 'Report URL'
    row_cells[1].text = SITE_URL + path

    doc.add_paragraph('')


def ReportRulesViewCSV(request, report, view):
    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)

    report_obj = WebsiteReport.objects.get(slug=report)

    addMetaData(report_obj, writer, request.path.replace('/csv/', ''))

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


def ReportRulesViewDocx(request, report, view):
    document = Document()
    document.add_heading('Summary of ' + report + '-' + view, 1)
    document.add_paragraph('\n')

    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('/docx/', '').replace('/', '-').strip('-') + '.docx"'

    report_obj = WebsiteReport.objects.get(slug=report)

    addDocMetaData(report_obj, document, request.path.replace('/csv/', ''))

    headers = ['Rule Group', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'N/A', 'Score', 'Status']
    table = document.add_table(rows=1, cols=len(headers))
    table.style = 'Light Shading Accent 2'
    header_cells = table.rows[0].cells

    for i in range(len(headers)):
        header_cells[i].text = headers[i]

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
        row_cells = table.add_row().cells
        row_cells[0].text = g.get_title()
        row_cells[1].text = str(g.rules_violation)
        row_cells[2].text = str(g.rules_violation)
        row_cells[3].text = str(g.rules_manual_check)
        row_cells[4].text = str(g.rules_passed)
        row_cells[5].text = str(g.rules_na)
        row_cells[6].text = str(g.implementation_score)
        row_cells[7].text = get_implementation_status(g.implementation_status)

    row_cells = table.add_row().cells
    row_cells[0].text = 'All Report Groups'
    row_cells[1].text = str(report_obj.rules_violation)
    row_cells[2].text = str(report_obj.rules_violation)
    row_cells[3].text = str(report_obj.rules_manual_check)
    row_cells[4].text = str(report_obj.rules_passed)
    row_cells[5].text = str(report_obj.rules_na)
    row_cells[6].text = str(report_obj.implementation_score)
    row_cells[7].text = get_implementation_status(report_obj.implementation_status)

    document.save(response)

    return response


def ReportRulesGroupViewCSV(request, report, view, group):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)
    report_obj = WebsiteReport.objects.get(slug=report)

    addMetaData(report_obj, writer, request.path.replace('/csv/', ''))

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


def ReportRulesGroupViewDocx(request, report, view, group):
    document = Document()
    document.add_heading('Summary of ' + report + '-' + view + '-' + group, 1)
    document.add_paragraph('\n')

    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('/docx/', '').replace('/', '-').strip('-') + '.docx"'

    report_obj = WebsiteReport.objects.get(slug=report)

    addDocMetaData(report_obj, document, request.path.replace('/csv/', ''))

    headers = ['ID', 'Rule Summary', 'Result', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'N/A', 'Score',
               'Status']
    table = document.add_table(rows=1, cols=len(headers))
    table.style = 'Light Shading Accent 2'
    header_cells = table.rows[0].cells

    for i in range(len(headers)):
        header_cells[i].text = headers[i]

    if view == 'gl':
        group = report_obj.ws_gl_results.get(slug=group)

    elif view == 'rs':
        group = report_obj.ws_rs_results.get(slug=group)

    else:
        group = report_obj.ws_rc_results.get(slug=group)

    for g in group.ws_rule_results.all():
        row_cells = table.add_row().cells
        row_cells[0].text = str(g.rule.nls_rule_id)
        row_cells[1].text = g.get_title()
        row_cells[2].text = get_result(g.result_value)
        row_cells[3].text = str(g.pages_violation)
        row_cells[4].text = str(g.pages_warning)
        row_cells[5].text = str(g.pages_manual_check)
        row_cells[6].text = str(g.pages_passed)
        row_cells[7].text = str(g.pages_na)
        row_cells[8].text = str(g.implementation_score)
        row_cells[9].text = get_implementation_status(g.implementation_status)

    document.save(response)
    return response


def ReportRulesGroupRuleViewCSV(request, report, view, group, rule):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="' + \
                                      request.path.replace('/csv/', '').replace('/', '-').strip('-') + '.csv"'

    writer = csv.writer(response)
    report_obj = WebsiteReport.objects.get(slug=report)

    addMetaData(report_obj, writer, request.path.replace('/csv/', ''))

    if view == 'gl':
        group = report_obj.ws_gl_results.get(slug=group)
    elif view == 'rs':
        group = report_obj.ws_rs_results.get(slug=group)
    else:
        group = report_obj.ws_rc_results.get(slug=group)

    ws_rule_result = group.ws_rule_results.get(slug=rule)

    writer.writerow(
        ['Page', 'Page Title', 'Result', 'Violations', 'Warnings', 'Manual Check', 'Passed', 'Score', 'Status'])

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

    addMetaData(report_obj, writer, request.path.replace('/csv/', ''))
    if view == 'gl':
        group = report_obj.ws_gl_results.get(slug=group)
    elif view == 'rs':
        group = report_obj.ws_rs_results.get(slug=group)
    else:
        group = report_obj.ws_rc_results.get(slug=group)

    ws_rule_result = group.ws_rule_results.get(slug=rule)

    page_rule_result = ws_rule_result.page_rule_results.get(page_result__page_number=page)

    writer.writerow(['Element Identifier', 'Result', 'Element Position', 'Message'])

    for prr in json.loads(page_rule_result.element_results_json):
        writer.writerow(
            [prr['element_identifier'], get_element_result(int(prr['result_value'])), prr['ordinal_position'],
             prr['message']])

    return response
