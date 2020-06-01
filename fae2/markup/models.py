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

file: markup/models.py

Author: Jon Gunderson

"""

# markup/models.py
from __future__ import absolute_import
from django.db import models

## A language spec (e.g. HTML5, HTML 4.01)
class LanguageSpec(models.Model):
  id = models.AutoField(primary_key=True)

  abbr          = models.CharField(max_length=32)
  title         = models.CharField(max_length=128)
  element_based = models.BooleanField("Element based markup (otherwise property based, i.e. CSS)", default=True)
  url           = models.URLField(null=True,blank=True)
  url_slug      = models.SlugField(max_length=32)
  link_text     = models.CharField(max_length=64)

  class Meta:
        verbose_name="Language Specification"
        verbose_name_plural="Language Specifications"
        ordering = ['title']

  def __str__(self):
    return self.abbr

## CSS selector element definition (e.g. input, input[type], input[type="input"])
TYPE_CODES = (
    ('NONE', 'not any special type'),
    ('ROLE', 'ARIA Role'),
    ('PROP', 'ARIA Property'),
    ('STAT', 'ARIA State'),
    ('EVNT', 'Event'),
    ('FONT', 'CSS Font'),
    ('COLR', 'CSS Color'),
    ('POS',  'CSS Position'),
    ('HIGH', 'CSS Highlight'),
    ('CONT', 'CSS Content'),
)

class ElementDefinition(models.Model):
  id = models.AutoField(primary_key=True)

  spec            = models.ForeignKey(LanguageSpec, on_delete=models.CASCADE, related_name='definitions')
  element         = models.CharField(blank=True, max_length=32,default="")
  attribute       = models.CharField(blank=True, max_length=32,default="")
  value           = models.CharField(blank=True, max_length=64,default="")
  description     = models.TextField(blank=True, default="")
  url             = models.URLField(blank=True, default="")
  type            = models.CharField(max_length=4,choices=TYPE_CODES, default='NONE')

  class Meta:
        verbose_name="Element Definition"
        verbose_name_plural="Element Definitions"
        ordering = ['element', 'attribute', 'value']


  def __str__(self):
      tmpstring = self.element
      if self.attribute:
          tmpstring += '[' + self.attribute
          if self.value:
              tmpstring += '="' + self.value + '"]'
          else:
              tmpstring += ']'
      return tmpstring

  def title(self):
      str_title = '';

      if self.element:
         str_title += self.element

      if self.value:
         str_title += '[' + self.attribute + '=' + self.value + ']'
      else:
         if self.attribute:
           str_title += '[' + self.attribute + ']'

      return str_title

  @staticmethod
  def get_by_title(title):
    element = title
    attribute = ""
    value = ""
    if "[" in title:
      parts = title.split('[')
      element = parts[0]
      parts = parts[1].split(']')
      attribute = parts[0]
      if "=" in attribute:
        parts = attribute.split('=')
        attribute = parts[0]
        value = parts[1]
#    print("  element: " + str(len(element)) + "  attribute: " + attribute + "  value: " + value)
    return ElementDefinition.objects.get(element=element,attribute=attribute,value=value)
