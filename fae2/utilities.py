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

file: utilities.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
import re
# Formatter

def OAAMarkupToHTML(str):
  str1 = ""

  if str and len(str):
    str = str.replace("%s", "must")

    code = "<code>"
    for c in str:
      if c == '@':
        str1 += code;
        if code == "<code>":
          code = "</code>"
        else:
          code = "<code>"
      else:
        str1 += c
  return str1

def OAAMarkupToText(str):
  str1 = ""

  if str and len(str):
    str = str.replace("%s", "must")

    for c in str:
      if c != '@':
        str1 += c

  return str1
