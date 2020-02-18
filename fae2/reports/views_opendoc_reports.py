"""
Copyright 2014-2016 University of Illinois

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

file: reports/views.py

Author: Adarsh Agarwal
"""

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

from django.views.generic import TemplateView
from django.views.generic import CreateView
from django.views.generic import FormView
from django.views.generic import RedirectView

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
import os, csv, tempfile

from odf.opendocument import OpenDocumentText

from odf.style import (Style, TextProperties, ParagraphProperties, ListLevelProperties, TabStop, TabStops)

from odf.text import (H, P, List, ListItem, ListStyle, ListLevelStyleNumber, ListLevelStyleBullet)

from odf import teletype


# ==============================================================
#
# Utiltiy functions
#
# ==============================================================

def check_url(url):
    url = url.strip()

    url = ''.join(c for c in url if ord(c) < 128)

    if url.find('http://') == 0 or url.find('https://') == 0:
        return url

    return 'http://' + url


def formatted_result_messages(result_message):
    class FormattedResultMessage:

        def __init__(self):
            self.severity = "no actions"
            self.message = ""
            self.style = "none"

    frms = []

    if len(result_message) and result_message.find(':'):
        rms = result_message.split(';')

        for rm in rms:
            frm = FormattedResultMessage()

            parts = rm.split(':')

            if len(parts) > 1:
                frm.message = parts[1]

            if rm.find('P:') >= 0:
                frm.severity = 'Pass'
                frm.style = 'pass'
            elif rm.find('V:') >= 0:
                frm.severity = 'Violation'
                frm.style = 'violation'
            elif rm.find('W:') >= 0:
                frm.severity = 'Warning'
                frm.style = 'warning'
            elif rm.find('MC:') >= 0:
                frm.severity = 'Manual Check'
                frm.style = 'manual_check'
            elif rm.find("H:") >= 0:
                frm.severity = 'Hidden'
                frm.style = 'fae-hidden'

            frms.append(frm)
    else:
        frm = FormattedResultMessage()
        frms.append(frm)
    return frms


def getPreviousNextRule(rule_results, current_slug):
    p = False
    n = False
    for rr in rule_results:
        if rr.rule.slug == current_slug:
            break
        p = rr.rule

    flag = False
    for rr in rule_results:
        if flag:
            n = rr.rule
            break

        if rr.rule.slug == current_slug:
            flag = True

    return [p, n]


def getPreviousNextGroup(groups, current_slug):
    p = False
    n = False
    for g in groups:
        #            print("[getPreviousNextRule]:" + str(prr.rule.slug) + " " + rule_slug)
        if g.slug == current_slug:
            break
        p = g

    flag = False
    for g in groups:
        if flag:
            n = g
            break

        if g.slug == current_slug:
            flag = True

    return [p, n]


# ==============================================================
#
# FAE 2.0 Navigation Mixin
#
# ==============================================================

class FilterViewItem:

    def __init__(self, label, url):
        self.label = label
        self.url = url


class FAENavigtionObject:
    slug = False
    page_count = 0
    view = 'rc'
    report_type = 'rules'
    page = 0

    current_label = ""
    current_url = ""

    previous_label = ""
    previous_url = ""

    next_label = ""
    next_url = ""

    def __init__(self, session, user=False):

        self.session = session

        try:
            self.slug = session['report_slug']

            r = WebsiteReport(slug=self.slug)

            try:
                self.view = session['report_view']
            except:
                self.view = 'rc'

            try:
                self.page = session['report_page']
            except:
                self.page = 1

            try:
                self.report_type = session['report_type']
            except:
                self.report_type = 'rules'

            try:
                self.page_count = session['report_page_count']
            except:
                self.page_count = 1

            try:
                self.current_label = session['current_label']
                self.current_url = session['current_url']
            except:
                self.current_label = False
                self.current_url = False

            try:
                self.next_label = session['next_label']
                self.next_url = session['next_url']
            except:
                self.next_label = False
                self.next_url = False

            try:
                self.previous_label = session['previous_label']
                self.previous_url = session['previous_url']
            except:
                self.previous_label = False
                self.previous_url = False

        except:
            self.slug = False
            self.view = 'rc'
            self.page = 1
            self.report_type = 'rules'
            self.page_count = 1

            self.previous_label = False
            self.previous_url = False
            self.current_label = False
            self.current_url = False
            self.next_label = False
            self.next_url = False

        if self.slug:
            self.update_filters()
        else:
            if user and len(user.username) and user.username != 'anonymous':
                try:
                    report = WebsiteReport.objects.filter(user=user).latest('last_viewed')
                except:
                    report = False

                if report:
                    self.set_fae_navigation(report.slug, report.page_count, report.last_view, report.last_report_type,
                                            report.last_page)

    def update_filters(self):

        self.filters = []

        if self.view == 'rs':
            self.add_rule_scope_filter()
        elif self.view == 'gl':
            self.add_guideline_filter()
        else:
            self.add_rule_category_filter()

    def set_fae_navigation(self, slug, page_count, view, type, page):

        if slug:
            self.slug = slug
            self.session['report_slug'] = slug

            self.page_count = page_count
            self.session['report_page_count'] = page_count

        if view:
            self.view = view
            self.session['report_view'] = view

        if type:
            self.report_type = type
            self.session['report_type'] = type

        if page:
            self.page = page
            self.session['report_page'] = page

        self.update_filters()

    def set_current(self, label, url):
        self.current_label = label
        self.session['current_label'] = label
        self.current_url = url
        self.session['current_url'] = url

    def set_next(self, label, url):
        self.next_label = label
        self.session['next_label'] = label
        self.next_url = url
        self.session['next_url'] = url

    def set_previous(self, label, url):
        self.previous_label = label
        self.session['previous_label'] = label
        self.previous_url = url
        self.session['previous_url'] = url

    def add_filter_item(self, group, label):

        if self.report_type == 'page':
            if group:
                url = reverse('report_page_group', args=[self.slug, self.view, group, self.page])
            else:
                url = reverse('report_page', args=[self.slug, self.view, self.page])

        elif self.report_type == 'pages':
            if group:
                url = reverse('report_pages_group', args=[self.slug, self.view, group])
            else:
                url = reverse('report_pages', args=[self.slug, self.view])

        else:
            self.report_type = 'rules'
            if group:
                url = reverse('report_rules_group', args=[self.slug, self.view, group])
            else:
                url = reverse('report_rules', args=[self.slug, self.view])

        fi = FilterViewItem(label, url)

        self.filters.append(fi)

    def add_rule_category_filter(self):
        rcs = RuleCategory.objects.all()
        self.add_filter_item(False, "All Groups")
        for rc in rcs:
            self.add_filter_item(rc.slug, rc.title)

    def add_guideline_filter(self):
        gls = Guideline.objects.all()
        self.add_filter_item(False, "All Groups")
        for gl in gls:
            self.add_filter_item(gl.slug, gl.title)

    def add_rule_scope_filter(self):
        rss = RuleScope.objects.all()
        self.add_filter_item(False, "All Groups")
        for rs in rss:
            self.add_filter_item(rs.slug, rs.title)


class FAENavigationMixin(object):

    def get_context_data(self, **kwargs):
        context = super(FAENavigationMixin, self).get_context_data(**kwargs)

        context['report_nav'] = FAENavigtionObject(self.request.session, self.request.user)

        return context


def ReportRulesViewOpenDoc(request, report, view):
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
    else:
        if view == 'gl':
            groups = report_obj.ws_gl_results.all()
        elif view == 'rs':
            groups = report_obj.ws_rs_results.all()
        else:
            groups = report_obj.ws_rc_results.all()

    textdoc = OpenDocumentText()

    # For Level-1 Headings
    h1style = Style(name="LeftHeading 1", family="paragraph")
    h1style.addElement(ParagraphProperties(attributes={"textalign": "left"}))
    h1style.addElement(TextProperties(attributes={"fontsize": "18pt", "fontweight": "bold"}))

    # For Level-2 Headings
    h2style = Style(name="LeftHeading 2", family="paragraph")
    h2style.addElement(ParagraphProperties(attributes={"textalign": "left"}))
    h2style.addElement(TextProperties(attributes={"fontsize": "15pt", "fontweight": "bold"}))

    # For bold text
    boldstyle = Style(name="Bold", family="text")
    boldstyle.addElement(TextProperties(attributes={"fontweight": "bold"}))

    s = textdoc.styles
    s.addElement(h1style)
    s.addElement(h2style)
    s.addElement(boldstyle)

    mymainheading_element = H(outlinelevel=1, stylename=h1style)
    mymainheading_text = "This is my main heading"
    teletype.addTextToElement(mymainheading_element, mymainheading_text)
    textdoc.text.addElement(mymainheading_element)

    paragraph_element = P(stylename=boldstyle)
    paragraph_text = """
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled it to make a type specimen
    book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages, and more
    recently with desktop publishing software like Aldus PageMaker including
    versions of Lorem Ipsum.
    """
    teletype.addTextToElement(paragraph_element, paragraph_text)
    textdoc.text.addElement(paragraph_element, paragraph_text)

    # Create the HttpResponse object with the appropriate CSV header.
    response = HttpResponse(content_type='application/vnd.oasis.opendocument.text; charset=UTF-8')
    response['Content-Disposition'] = 'inline; filename=report.odt'

    print(textdoc.mimetype)
    response.write(textdoc)
    return response
