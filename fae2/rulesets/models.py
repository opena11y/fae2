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

file: rulesets/models.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.db import models

# Ruleset models

from utilities import OAAMarkupToHTML, OAAMarkupToText
from const     import NLS_LANGUAGES
import markdown

from ruleCategories.models import RuleCategory
from wcag20.models import Guideline
from django.urls import reverse

## Rule Sets (e.g. WCAG20_ARIA_STRICT)
class Ruleset(models.Model):
  id             = models.AutoField(primary_key=True)
  updated_date   = models.DateTimeField(editable=False)

  ruleset_id         = models.CharField(max_length=64)
  version            = models.CharField('Ruleset Version', max_length=16, default="unknown")
  slug               = models.SlugField(max_length=64, null=True,blank=True)
  title              = models.CharField('Ruleset Title', max_length=128)
  title_html         = models.CharField(max_length=512, default="")
  title_text         = models.CharField(max_length=128, default="")
  tooltip            = models.CharField(max_length=512,  default="")
  tooltip_html       = models.CharField(max_length=2014,  default="")
  tooltip_text       = models.CharField(max_length=512,  default="")
  web_resources      = models.TextField('Target Web Resources', default="")
  web_resources_html = models.TextField(default="", null=True,blank=True)
  description        = models.TextField(null=True,blank=True)
  description_html   = models.TextField(blank=True, default="")
  author             = models.CharField('Ruleset Author',max_length=64, default="unknown")
  author_url         = models.URLField('Ruleset Author URL',max_length=256, default="")

  class Meta:
    verbose_name        = "Ruleset"
    verbose_name_plural = "Rulesets"
    ordering = ['title_text']

  def __str__(self):
      return self.title_text

  def save(self):
    if not self.slug:
      self.slug = self.ruleset_id

    self.title_html = OAAMarkupToHTML(self.title)
    self.title_text = OAAMarkupToText(self.title)

    self.tooltip_html = OAAMarkupToHTML(self.tooltip)
    self.tooltip_text = OAAMarkupToText(self.tooltip)

    if self.web_resources:
      self.web_resources_html = markdown.markdown(self.web_resources)

    if self.description:
      self.description_html  = markdown.markdown(self.description)

    super(Ruleset, self).save() # Call the "real" save() method.

  def get_show_ruleset_url(self):
    return reverse('ruleset', [self.slug, 'rc'])

  def get_number_of_rules(self):
    return len(self.rule_mappings.all())

  def get_number_of_required_rules(self):
    count = 0
    for rm in self.rule_mappings.all():
      if rm.required:
        count += 1

    return count

  def get_number_of_recommended_rules(self):
    count = 0
    for rm in self.rule_mappings.all():
      if not rm.required:
        count += 1
    return count

  def get_rule_type(self, rule):
    for rm in self.rule_mappings.all():
      if rm.rule == rule:
        return rm.required

    return False
