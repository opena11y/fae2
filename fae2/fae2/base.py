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

file: fae2/base.py

Author: Jon Gunderson

"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
from __future__ import print_function
from __future__ import absolute_import
import json

from django.core.exceptions import ImproperlyConfigured
from os.path import join, abspath, dirname
import django_registration.backends.activation

SITE_ID = 1
DEFAULT_CHARSET = 'utf-8'

here = lambda *dirs: join(abspath(dirname(__file__)), *dirs)
root = lambda *dirs: join(abspath(here("", "../../")), *dirs)

BASE_DIR = here("", "")
print("BASE_DIR: " + BASE_DIR)

APP_DIR = root("")
print(" APP_DIR: " + APP_DIR)

# JSON-based secrets module
with open(join(BASE_DIR, "secrets.json")) as f:
    secrets = json.loads(f.read())


def get_secret(setting, secrets=secrets):
    """(Get the secret variable or return explicit exception.)"""
    try:
        return secrets[setting]
    except KeyError:
        error_msg = "Set the {0} enviroment variable".format(setting)
        raise ImproperlyConfigured


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = get_secret('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = get_secret('DEBUG')

EMAIL_HOST = get_secret('EMAIL_HOST')

EMAIL_PORT = get_secret('EMAIL_PORT')
EMAIL_USE_TLS = get_secret('EMAIL_USE_TLS')

EMAIL_HOST_USER = get_secret('EMAIL_HOST_USER')
EMAIL_HOST_USER_PASSWORD = get_secret('EMAIL_HOST_USER_PASSWORD')

DEFAULT_FROM_EMAIL = get_secret('EMAIL_HOST_USER')
SERVER_EMAIL = get_secret('EMAIL_HOST_USER')

if get_secret('SITE_URL').find('127.0.0.1') >= 0 or get_secret('SITE_URL').find('localhost') >= 0:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
else:
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

ACCOUNT_ACTIVATION_DAYS = get_secret('ACCOUNT_ACTIVATION_DAYS')
REGISTRATION_EMAIL_HTML = False

ALLOWED_HOSTS = get_secret('ALLOWED_HOSTS')

ANONYMOUS_ENABLED = get_secret('ANONYMOUS_ENABLED')
SELF_REGISTRATION_ENABLED = get_secret('SELF_REGISTRATION_ENABLED')

try:
    SHIBBOLETH_ENABLED = get_secret('SHIBBOLETH_ENABLED')
except:
    SHIBBOLETH_ENABLED = False

if SHIBBOLETH_ENABLED:
    SHIBBOLETH_URL = get_secret('SHIBBOLETH_URL')
    SHIBBOLETH_NAME = get_secret('SHIBBOLETH_NAME')
    SHIBBOLETH_SUPERUSER = get_secret('SHIBBOLETH_SUPERUSER')
else:
    SHIBBOLETH_URL = ''
    SHIBBOLETH_NAME = ''
    SHIBBOLETH_SUPERUSER = ''

SITE_NAME = get_secret('SITE_NAME')
SITE_URL = get_secret('SITE_URL')

try:
    SHIB_URL = get_secret('SHIB_URL')
except:
    SHIB_URL = ''

ADMIN_USER_NAME = get_secret('ADMIN_USER_NAME')
ADMIN_FIRST_NAME = get_secret('ADMIN_FIRST_NAME')
ADMIN_LAST_NAME = get_secret('ADMIN_LAST_NAME')
ADMIN_PASSWORD = get_secret('ADMIN_PASSWORD')
ADMIN_EMAIL = get_secret('ADMIN_EMAIL')
ANONYMOUS_PASSWORD = get_secret('ANONYMOUS_PASSWORD')
DEFAULT_ACCOUNT_TYPE = get_secret('DEFAULT_ACCOUNT_TYPE')

try:
    FAE_DISABLED = get_secret('FAE_DISABLED')
except:
    FAE_DISABLED = False

try:
    FAE_DISABLED_URL = get_secret('FAE_DISABLED_URL')
except:
    FAE_DISABLED_URL = ""

try:
    PAYMENT_ENABLED = True
    PAYMENT_SITE_ID = get_secret('PAYMENT_SITE_ID')
    PAYMENT_URL = get_secret('PAYMENT_URL')
    PAYMENT_SEND_KEY = get_secret('PAYMENT_SEND_KEY')
    PAYMENT_RECEIVE_KEY = get_secret('PAYMENT_RECEIVE_KEY')
    PAYMENT_ACCOUNT = get_secret('PAYMENT_ACCOUNT')
except:
    PAYMENT_ENABLED = False
    PAYMENT_SITE_ID = False
    PAYMENT_URL = False
    PAYMENT_SEND_KEY = False
    PAYMENT_RECEIVE_KEY = False
    PAYMENT_ACCOUNT = False

# Application definition

PROCESSING_THREADS = get_secret('PROCESSING_THREADS')

# Allow django-bootstrap3 to use jquery
BOOTSTRAP3 = {
    'include_jquery': True,
}

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'django_registration',
    'password_reset',
    'abouts.apps.AboutsConfig',
    'accounts.apps.AccountsConfig',
    'subscriptions.apps.SubscriptionsConfig',
    'contact.apps.ContactConfig',
    'markup.apps.MarkupConfig',
    'markupInfo.apps.MarkupInfoConfig',
    'pageResults.apps.PageResultsConfig',
    'reports.apps.ReportsConfig',
    'ruleCategories.apps.RuleCategoriesConfig',
    'rules.apps.RulesConfig',
    'rulesets.apps.RulesetsConfig',
    'wcag20.apps.WCAG20Config',
    'userProfiles.apps.UserprofilesConfig',
    'websiteResults.apps.WebsiteResultsConfig',
    'websiteResultGroups.apps.WebsiteresultgroupsConfig',
    'stats.apps.StatsConfig',
    'gtm',
)

if SHIBBOLETH_ENABLED:
    MIDDLEWARE = [
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.auth.middleware.PersistentRemoteUserMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
        'django.middleware.security.SecurityMiddleware',
    ]

    AUTHENTICATION_BACKENDS = [
        'django.contrib.auth.backends.RemoteUserBackend',
    ]

    LOGIN_URL = SHIBBOLETH_URL


else:
    MIDDLEWARE = [
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
        'django.middleware.security.SecurityMiddleware',
    ]

ROOT_URLCONF = 'fae2.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [join(BASE_DIR, 'templates/')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.template.context_processors.tz',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'fae2.context_processors.site',
                'fae2.context_processors.anonymous',
                'fae2.context_processors.self_registration',
                'fae2.context_processors.shibboleth',
                'fae2.context_processors.payment_enabled',
                'fae2.context_processors.user_profile'
            ],
        },
    },
]

WSGI_APPLICATION = 'fae2.wsgi.application'

# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': get_secret('DATABASE_NAME'),  # Or path to database file if using sqlite3.
        'USER': get_secret('DATABASE_USER'),  # Not used with sqlite3.
        'PASSWORD': get_secret('DATABASE_PASSWORD'),  # Not used with sqlite3.
        'HOST': get_secret('DATABASE_HOST'),  # Set to empty string for localhost. Not used with sqlite3.
        'PORT': get_secret('DATABASE_PORT'),  # Set to empty string for default. Not used with sqlite3.
    }
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': get_secret('LOGGER_LEVEL'),
            'class': 'logging.FileHandler',
            'filename': join(APP_DIR, 'logs/fae2_log'),
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'level': get_secret('LOGGER_LEVEL'),
            'propagate': True,
        },
    },
}

# Analytics implemented via GTM
# https://pypi.org/project/django-google-tag-manager/

GOOGLE_TAG_ID = get_secret('GOOGLE_TAG_ID')

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'America/Chicago'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = join(BASE_DIR, 'static/')

print('STATIC ROOT: ' + STATIC_ROOT)

STATICFILES_DIRS = (
    join(APP_DIR, "fae2/static"),
)

LOGIN_REDIRECT_URL = '/'
