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

file: fae-util/save_markup_information.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
import sys
import os
import string
import glob

import optparse
import subprocess
import shlex
import time
import getopt
import shutil
import json
import csv

import urllib

# sys.path.append(os.path.abspath('..'))

from django.utils.encoding  import iri_to_uri

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fae20.settings')
from django.conf import settings

from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User

from django.db import connection, transaction

from ruleCategories.models import RuleCategory
from rules.models          import Rule

DEBUG=False
INFO=True
ERROR=True

class PageMarkupInformation:

  def __init__(self, mi, log):
    self.markup_information = mi
    log = log

  def debug(s):
    if DEBUG and log:
      log.write("[SAVE MARKUP][DEBUG]: " + str(s) + "\n")

  def info(s):
    if INFO and log:
      log.write("[SAVE MARKUP][INFO]: " + str(s) + "\n")

  def error(s):
    if ERROR and log:
      log.write("[SAVE MARKUP][ERROR]: " + str(s) + "\n")

  def saveMarkupGroup(self, page_result, group, cursor):

    insert_str = "INSERT INTO \"markupInfo_mipage" + str(group) + "\" ( "
    insert_str += "page_result_id"

    value_str  = ") VALUES ( "
    value_str +=  str(page_result.id)

    for item in self.markup_information[group]:
      insert_str += ", " + str(item)
      value_str  += ", " + str(self.markup_information[group][item])

    insert_str = insert_str + value_str + ")"

#    debug("[PageMarkupInformation][saveMarkupGroup] " + insert_str)

    try:
      # Data insertion operation - commit required
      cursor.execute(insert_str, [])
    except:
      self.error("[PageMarkupInformation][saveMarkupGroup] SQL insert error ")


  def saveToDjango(self, page_result):

    try:
      cursor = connection.cursor()
      for group in self.markup_information:
        self.saveMarkupGroup(page_result, group, cursor)
    except:
      self.error("[PageMarkupInformation][saveToDango] SQL insert error ")

