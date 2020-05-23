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

file: fae2/urls.py

Author: Jon Gunderson

"""

from __future__ import absolute_import

"""
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""

from django.conf.urls import include, url
from django.contrib import admin
from django.urls import include, path

from fae2.settings import SHIBBOLETH_ENABLED
from fae2.settings import FAE_DISABLED

from reports import views

from accounts.views import Logout
from accounts.views import Login
from accounts.views import ShibbolethLogout
from accounts.views import ShibbolethLogin
from accounts.views import ShibbolethDiscovery
from accounts.views import ShibbolethInstitution
from accounts.views import HeaderInfo
from accounts.views import DisabledView


if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns

if FAE_DISABLED:
    urlpatterns = [
        url(r'^$', DisabledView.as_view()),
        url(r'^(?P<item1>\w+)/$', DisabledView.as_view()),
        url(r'^(?P<item1>\w+)/(?P<item2>\w+)/$', DisabledView.as_view()),
        url(r'^(?P<item1>\w+)/(?P<item2>\w+)/(?P<item3>\w+)/$', DisabledView.as_view()),
        url(r'^(?P<item1>\w+)/(?P<item2>\w+)/(?P<item3>\w+)/(?P<item4>\w+)/$', DisabledView.as_view()),
        url(r'^(?P<item1>\w+)/(?P<item2>\w+)/(?P<item3>\w+)/(?P<item4>\w+)/(?P<item5>\w+)/$', DisabledView.as_view()),
        url(r'^(?P<item1>\w+)/(?P<item2>\w+)/(?P<item3>\w+)/(?P<item4>\w+)/(?P<item6>\w+)/(?P<item7>\w+)/$',
            DisabledView.as_view()),
    ]
else:
    urlpatterns = [
        url(r'^admin/', admin.site.urls),
        # fae2 specific
        url(r'^', include('reports.urls')),
        url(r'^abouts/', include('abouts.urls')),
        url(r'^contact/', include('contact.urls')),
        url(r'^account/', include('accounts.urls')),
        url(r'^subscription/', include('subscriptions.urls')),
        url(r'^rulesets/', include('rulesets.urls')),
        url(r'^usage/', include('stats.urls')),
    ]

    if SHIBBOLETH_ENABLED:
        urlpatterns += [
            url(r'^login/$', ShibbolethLogin.as_view(), name='login'),
            url(r'^logout/$', ShibbolethLogout.as_view(), name='logout'),
            url(r'^shib-discovery/$', ShibbolethDiscovery.as_view(), name='shib_discovery'),
            url(r'^inst/(?P<domain>\w+)/$', ShibbolethInstitution.as_view(), name='shib_institution'),
            url(r'^header-info/$', HeaderInfo.as_view(), name='header_info'),  # debug information
        ]
    else:
        urlpatterns += [
            url(r'^accounts/', include('django_registration.backends.activation.urls')),
            url(r'^accounts/', include('django.contrib.auth.urls')),
            url(r'^logout/$', Logout.as_view(), name='logout'),
            url(r'^reset/', include('password_reset.urls')),
        ]
