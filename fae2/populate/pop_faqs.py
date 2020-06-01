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

file: populate/pop_faqs.py

Author: Jon Gunderson

"""

from __future__ import print_function
from __future__ import absolute_import
import sys
import os
import django
from django.core.exceptions import ObjectDoesNotExist
import re

fp = os.path.realpath(__file__)
path, filename = os.path.split(fp)

fae2_path = path.split('/populate')[0]
sys.path.append(fae2_path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fae2.settings')
from django.conf import settings

django.setup()

import json

from abouts.models           import FAQ

def addFAQ(seq, title, description):

  try:
    faq = FAQ.objects.get(seq=seq)
    print("Updated FAQ: " + title)
    faq.title = title
    faq.description = description
  except:
    print("Created FAQ: " + title)
    faq = FAQ(seq=seq, title=title, description=description)

  faq.save()

desc = """
There are two major reasons why FAE 2.1 and AInspector Sidebar evaluation results may be different:

1. When a page includes dynamically loaded content, the DOM that FAE 2.1 sees will often be different from the DOM that AInspector Sidebar sees, resulting in different evaluation results.  The more dynamic the content in the page, the more possibility of a discrepancy.
1. Pages that are responsive to screen dimensions will have different content rendered depending on the width of the screen.  FAE 2.1 generally has a wide screen and AInspector Sidebar will analyze the content based on the current screen width.

**Note:** AInspector Sidebar will generally be more accurate than FAE for looking at Individual Pages.

"""

addFAQ(1, "FAE 2.1 and AInspector Sidebar evaluation results different?", desc)

desc = """
The rules are designed to help users understand what accessibility issues they need to consider in the design of a website.
Manual checks help users identify what they need to learn about accessibility inorder to insure their web resource is accessible.
Currently manual checks help inform users of what they need to understand about accessibility, but in FAE 2.1 users will be able to update manual checks to Pass, Fail or Not Applicable to update the report details, summary and implementation scores for rules and rule catagories.
"""

addFAQ(2, "Why report manual checking results?", desc)
