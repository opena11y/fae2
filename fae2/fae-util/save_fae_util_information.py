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

file: fae-util/save_fae_util_information.py

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

from urllib.parse import urlparse

sys.path.append(os.path.abspath('..'))

from django.utils.encoding  import iri_to_uri

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fae2.settings')
from django.conf import settings

from django.core.exceptions import ObjectDoesNotExist

from django.contrib.auth.models import User

from reports.models import ProcessedURL
from reports.models import FilteredURL
from reports.models import UnprocessedURL
from reports.models import ExcludedURL
from reports.models import ExcludedURLPageReference

# from usage.models import Usage

from django.db import connection, transaction

DEBUG=False
INFO=True
ERROR=True

from fae2.settings import APP_DIR

#log = open(os.path.join(APP_DIR + 'logs/fae-information.log'), 'w')
log = False;

def debug(s):
  if DEBUG and log:
    log.write("[SAVE_FAE_UTIL][debug  ]: " + str(s) + "\n")
    log.flush()

def info(s):
  if INFO and log:
    log.write("[SAVE_FAE_UTIL][Info   ]: " + str(s) + "\n")
    log.flush()

def error(s):
  if ERROR and log:
    log.write("[SAVE_FAE_UTIL][**ERROR]: " + str(s) + "\n")
    log.flush()

def stripQuotes(s):
  if s.startswith('"') and s.endswith('"'):
    s = s[1:-1]
  return s

def statusToDatabase(ws_report, file_status):
  # get usage object corresponding to ws_report

  for line in file_status:
    parts = line.split('=')
    if len(parts) == 2:
      if parts[0] == 'processed':
        ws_report.processed_urls_count   = int(parts[1])
      elif parts[0] == 'unprocessed':
        ws_report.unprocessed_urls_count = int(parts[1])
      elif parts[0] == 'filtered':
        ws_report.filtered_urls_count    = int(parts[1])
      elif parts[0] == 'time':
        ws_report.processing_time = int(float(parts[1])*1000.0)
      elif parts[0] == 'more_urls':
        ws_report.more_urls = ('true' == parts[1].strip().lower())

  try:
    ws_report.save()
  except:
    error("** Error: Could not update status information")

def getRowWithComplicatedURLs(r, n):

  r_len = len(r)

  items = []

  pos0 = r.find('"', 0, r_len)
  if pos0 < 0:
    return []

  if pos0 != 0:
    item = r[0:(pos0-1)]
    items.append(item)
  else:
    pos = 0

  pos1 = r.find('","http', (pos0+1), r_len)
  if pos1 < 0:
    return []

  url1 = r[pos0:(pos1+1)]
  items.append(url1)

  pos2 = r.find('","http', (pos1+6), r_len)
  if pos2 < 0:
    pos2 = r.find('",', (pos1+6), r_len)
    if pos2 < 0:
      return []

  url2 = r[(pos1+2):(pos2+1)]
  items.append(url2)

  url3 = "none"
  pos3 = r.find('",', (pos2+6), r_len)
  if pos3 > 0:
    url3 = r[(pos2+2):(pos3+1)]
    items.append(url3)
    pos2 = pos3

  r1 = r[(pos2+2):r_len]

  if len(r1) > 0:
    r1 = r1.strip()

#  debug("   Complicated URL 1: " + url1)
#  debug("   Complicated URL 2: " + url2)
#  debug("   Complicated URL 3: " + url3)
#  debug("Complicated Remander: " + r1 + " (" + str(len(r1)) + ")")

  if len(r1):
    r2 = r1.split(",")

    for item in r2:
      items.append(item)

  if len(items) == n:
    return items

  return []

def filteredUrlsToDatabase(ws_report, fname, num):

  def getRowItems(r):
    items = row.split(',')

    # if the row is clean of extra commas then there should be the n items
    if len(items) == num:
      return items

    # there are more than n-1 commas so URLs are complicated, probably have javascript code in them
    items = getRowWithComplicatedURLs(r, num)

    if len(items) == num:
      return items

    return []

  info("Filtered urls from: " + fname)

  try:
    with open(fname, 'r') as csvfile:

      i = 1
      try:
        for row in csvfile:

          items = getRowItems(row)

          if len(items) == num:
            url1 = iri_to_uri(stripQuotes(items[0]))
            url2 = iri_to_uri(stripQuotes(items[1][:-1]))
            i += 1
            try:
              o_url = FilteredURL(ws_report=ws_report, url=url1, url_referenced=url2)
              o_url.save()
            except:
              error("** Error saving FilteredURL object for: " + " " + url1 + " from  " + url2)
          else:
            error("** Could not parse row into " + str(num) + " parts: " + row)
      except:
        error("** Error reading csv formatted file line: " + str(i) + " in " + fname)
  except IOError as e:
    error("******** Error: " + fname + " cannot be opened")
    error("  I/O error({0}): {1}".format(e.errno, e.strerror))

def unprocessedUrlsToDatabase(ws_report, fname, num):

  def getRowItems(r):
    items = row.split(',')

    # if the row is clean of extra commas then there should be the n items
    if len(items) == num:
      return items

    # there are more than n-1 commas so URLs are complicated, probably have javascript code in them
    items = getRowWithComplicatedURLs(r, num)

    if len(items) == num:
      return items

    return []

  info("Unprocessed urls from: " + fname)

  try:

    with open(fname, 'r') as csvfile:
      i = 1
      try:
        for row in csvfile:
          items = getRowItems(row)

          if len(items) == num:
            url1 = iri_to_uri(stripQuotes(items[0]))
            url2 = iri_to_uri(stripQuotes(items[1]))
            i += 1
            try:
              up_url = UnprocessedURL(ws_report=ws_report, url=url1, url_referenced=url2)
              up_url.dom_time   = int(items[2])
              up_url.link_time  = int(items[3])
              up_url.event_time = int(items[4])
              up_url.eval_time  = int(items[5])
              up_url.save_time  = int(items[6])
              up_url.total_time = int(items[2]) + int(items[3]) + int(items[4]) + int(items[5]) + int(items[6])
              up_url.save()
            except:
              error("** Error creating UnprocessedURL object for: " + url1 + " from  " + url2)
          else:
            error("** Could not parse row into " + str(num) + " parts: " + row)
      except:
        error("** Error reading csv formatted file line: " + str(i) + " in " + fname)

  except IOError as e:
    error("******** Error: " + fname + " cannot be opened")
    error("  I/O error({0}): {1}".format(e.errno, e.strerror))

def processedUrlsToDatabase(ws_report, fname, num):

  def getRowItems(r):

    items = r.split(',')

    # if the line contains simple URLs there should be only 7 commas
    if len(items) == num:
      return items

    # there are more than 7 commas so URLs are complicated, probably have javascript code in them
    items = getRowWithComplicatedURLs(r, num)

    if len(items) == num:
      return items

    return []

  info("Processed urls from: " + fname)
  try:
    with open(fname, 'r') as csvfile:

      i = 1
      try:
        for row in csvfile:
          items = getRowItems(row)

          if len(items) == num:
            url1 = iri_to_uri(stripQuotes(items[1]))
            url2 = iri_to_uri(stripQuotes(items[2]))
            url3 = iri_to_uri(stripQuotes(items[3]))
#            info("  URLS: " + items[0] + " url1: " + url1 + " url2: " + url2 + " url3: " + url3)
            try:
              p_url = ProcessedURL(ws_report=ws_report, url_requested=url1, url_returned=url2, url_referenced=url3)
              p_url.page_seq_num     = int(items[0])
              p_url.redirect         = (url1 != url2)
              p_url.http_status_code = int(items[4])
              p_url.dom_time         = int(items[5])
              p_url.link_time        = int(items[6])
              p_url.event_time       = int(items[7])
              p_url.eval_time        = int(items[8])
              p_url.save_time        = int(items[9])
              p_url.total_time       = int(items[5]) + int(items[6]) + int(items[7]) + int(items[8]) + int(items[9])
              p_url.save()
              i += 1
            except:
              error("** Error creating ProcessedURL object for: " + items[0] + " " + url1 + " from  " + url2)
          else:
            error("** Could not parse row into " + str(num) + " parts: " + row)
      except:
        error("** Error reading line: " + str(i) + " in " + fname)
  except IOError as e:
    error("******** Error: " + fname + " cannot be opened")
    error("  I/O error({0}): {1}".format(e.errno, e.strerror))

def excludedUrlsToDatabase(ws_report, fname, num):

  def getRowItems(r):

    items = r.split(',')

    # if the line contains simple URLs there should be only 7 commas
    if len(items) == num:
      return items

    return []

  info("Excluded urls from: " + fname)
  try:
    with open(fname, 'r') as csvfile:

      i = 1
      try:
        for row in csvfile:
          items = getRowItems(row)
          debug('  ITEMS: ' + str(items))

          if len(items) == num:

            url1 = iri_to_uri(stripQuotes(items[0]))
            url2 = iri_to_uri(stripQuotes(items[1]))
            file_type  = items[2].strip()

            # if the reference does not have a domain, add the base domain
            if url1.find('http') != 0:
              url1 = ws_report.protocol + ws_report.domain + url1

#            debug("[STEP 1]  url1: " + url1 + " url2: " + url2 + " file type: " + file_type)

            parsed = urlparse(url1)
            filename = os.path.basename(parsed.path)

#            debug("[STEP 2] file name: " + filename)

            try:
              e_url = ExcludedURL.objects.get(ws_report=ws_report, filename=filename, url=url1, file_type=file_type)
            except:
              try:
                e_url = ExcludedURL(ws_report=ws_report, filename=filename, url=url1, file_type=file_type)
                e_url.save()
              except:
                error("** Error creating ExcludedURL object for: " + fname + " " + url1 + " from  " + url2)

#            debug("[STEP 3]  e_url: " + str(e_url))

            try:
              pr_url = ExcludedURLPageReference.objects.get(ws_report=ws_report, url=url2)
            except:
              try:
                pr_url = ExcludedURLPageReference(ws_report=ws_report, url=url2)
                pr_url.save()
              except:
                pr_url = False
                error("** Could not find or create a page reference for: '" + url2 + "'")

#            debug("[STEP 4]  page_report: " + str(pr_url))

            if pr_url:
              pr_url.excluded_urls.add(e_url)
              pr_url.save()

          else:
            error("** Could not parse row into " + str(num) + " parts: " + row)
      except:
        error("** Error reading line: " + str(i) + " in " + fname)
  except IOError as e:
    error("******** Error: " + fname + " cannot be opened")
    error("  I/O error({0}): {1}".format(e.errno, e.strerror))
