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

File: abouts/tests.py

Author: Jon Gunderson

"""

# abouts/urls.py
from __future__ import absolute_import
from django.conf.urls import url
from .views import ConceptsTermsView
from .views import DisclaimerView
from .views import OverviewView
from .views import PrivacyView
from .views import ReportIssuesView
from .views import SharingView
from .views import VersionsView
from .views import FAQView
from .views import VPATView

urlpatterns = [
    url(r'^$',            OverviewView.as_view(),       name='overview'),
    url(r'^concepts/$',   ConceptsTermsView.as_view(),  name='concepts_terms'),
    url(r'^disclaimer/$', DisclaimerView.as_view(),     name='disclaimer'),
    url(r'^issues/$',     ReportIssuesView.as_view(),   name='report_issues'),
    url(r'^privacy/$',    PrivacyView.as_view(),        name='privacy'),
    url(r'^sharing/$',    SharingView.as_view(),        name='sharing'),
    url(r'^versions/$',   VersionsView.as_view(),       name='versions'),
    url(r'^faqs/$',       FAQView.as_view(),            name='faqs'),
    url(r'^vpat/$',       VPATView.as_view(),           name='vpat'),
]
