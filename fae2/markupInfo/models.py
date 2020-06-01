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

file: markupInfo/models.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
import datetime
import sys
import os
import string

from django.db import models
from reports.models import WebsiteReport
from pageResults.models import PageResult

class WebsiteMarkup(models.Model):
    id = models.AutoField(primary_key=True)
    ws_report = models.ForeignKey(WebsiteReport, on_delete=models.CASCADE, related_name="mi_ws_report")

    hidden_count = models.IntegerField(default=0)
    offscreen_count = models.IntegerField(default=0)
    total_count = models.IntegerField(default=0)

    frame_count = models.IntegerField(default=0)
    iframe_count = models.IntegerField(default=0)

class WebsiteMarkupGroup(models.Model):
    id = models.AutoField(primary_key=True)
    ws_markup = models.ForeignKey(WebsiteMarkup, on_delete=models.CASCADE, related_name="ws_markups")

    name = models.CharField("Group Name", max_length=24)
    count = models.IntegerField(default=0)

class WebsiteMarkupItem(models.Model):
    id = models.AutoField(primary_key=True)
    ws_markup_group = models.ForeignKey(WebsiteMarkupGroup, on_delete=models.CASCADE, related_name="ws_markup_groups")

    element = models.CharField("Element", max_length=24)
    attribute = models.CharField("Attribute", max_length=24)
    event = models.CharField("Event", max_length=24)
    count = models.IntegerField(default=0)

class PageMarkup(models.Model):
    id = models.AutoField(primary_key=True)
    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_markups")

    hidden_count = models.IntegerField(default=0)
    offscreen_count = models.IntegerField(default=0)
    total_count = models.IntegerField(default=0)

    frame_count = models.IntegerField(default=0)
    iframe_count = models.IntegerField(default=0)

class PageMarkupGroup(models.Model):
    id = models.AutoField(primary_key=True)
    page_markup = models.ForeignKey(PageMarkup, on_delete=models.CASCADE, related_name="page_markups")

    name = models.CharField("Group Name", max_length=24)
    count = models.IntegerField(default=0)

    ws_markup_group = models.ForeignKey(WebsiteMarkupGroup, related_name="page_ws_markup_groups",
                                        on_delete=models.CASCADE)

class PageMarkupItem(models.Model):
    id = models.AutoField(primary_key=True)
    page_markup_group = models.ForeignKey(PageMarkupGroup, on_delete=models.CASCADE, related_name="page_markup_groups")

    element = models.CharField("Element", max_length=24)
    attribute = models.CharField("Attribute", max_length=24)
    event = models.CharField("Event", max_length=24)
    count = models.IntegerField(default=0)

    ws_markup_item = models.ForeignKey(WebsiteMarkupItem, on_delete=models.CASCADE, related_name="page_ws_markup_items")

class MIpageSummary(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_summary")

    all_element_count = models.IntegerField(default=0)
    all_hidden_count = models.IntegerField(default=0)
    all_offscreen_count = models.IntegerField(default=0)

    frame_count = models.IntegerField(default=0)
    iframe_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Summary"
        verbose_name_plural = "Page Markup: Summary"

class MIpageImages(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_images")

    all_images_count = models.IntegerField(default=0)
    img_count = models.IntegerField(default=0)
    canvas_count = models.IntegerField(default=0)
    svg_count = models.IntegerField(default=0)
    figure_count = models.IntegerField(default=0)
    figcaption_count = models.IntegerField(default=0)

    alt_attribute_count = models.IntegerField(default=0)
    longdesc_attribute_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Image"
        verbose_name_plural = "Page Markup: Images"

class MIpageHeadings(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_headgings")

    all_headings_count = models.IntegerField(default=0)
    h1_count = models.IntegerField(default=0)
    h2_count = models.IntegerField(default=0)
    h3_count = models.IntegerField(default=0)
    h4_count = models.IntegerField(default=0)
    h5_count = models.IntegerField(default=0)
    h6_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Heading (H1-H6)"
        verbose_name_plural = "Page Markup: Headings (H1-H6)"

class MIpageSections(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_sections")

    all_sections_count = models.IntegerField(default=0)
    address_count = models.IntegerField(default=0)
    article_count = models.IntegerField(default=0)
    aside_count = models.IntegerField(default=0)
    details_count = models.IntegerField(default=0)
    dialog_count = models.IntegerField(default=0)
    footer_count = models.IntegerField(default=0)
    header_count = models.IntegerField(default=0)
    main_count = models.IntegerField(default=0)
    nav_count = models.IntegerField(default=0)
    section_count = models.IntegerField(default=0)
    summary_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: HTML5 Section"
        verbose_name_plural = "Page Markup: HTML5 Sections"

class MIpageLists(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_lists")

    all_lists_count = models.IntegerField(default=0)
    ul_count = models.IntegerField(default=0)
    ol_count = models.IntegerField(default=0)
    li_count = models.IntegerField(default=0)

    dl_count = models.IntegerField(default=0)
    dt_count = models.IntegerField(default=0)
    dd_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: List"
        verbose_name_plural = "Page Markup: Lists"

class MIpageLinks(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_links")

    all_links_count = models.IntegerField(default=0)

    a_count = models.IntegerField(default=0)
    area_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Link"
        verbose_name_plural = "Page Markup: Links"

class MIpageTables(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_tables")

    all_tables_count = models.IntegerField(default=0)

    table_count = models.IntegerField(default=0)
    th_count = models.IntegerField(default=0)
    td_count = models.IntegerField(default=0)
    caption_count = models.IntegerField(default=0)

    summary_attribute_count = models.IntegerField(default=0)
    scope_attribute_count = models.IntegerField(default=0)
    headers_attribute_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Table"
        verbose_name_plural = "Page Markup: Tables"

class MIpageForms(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_controls")

    all_forms_count = models.IntegerField(default=0)

    input_button_count = models.IntegerField(default=0)
    input_checkbox_count = models.IntegerField(default=0)
    input_color_count = models.IntegerField(default=0)
    input_date_count = models.IntegerField(default=0)
    input_datetime_count = models.IntegerField(default=0)
    input_email_count = models.IntegerField(default=0)
    input_file_count = models.IntegerField(default=0)
    input_image_count = models.IntegerField(default=0)
    input_month_count = models.IntegerField(default=0)
    input_number_count = models.IntegerField(default=0)
    input_password_count = models.IntegerField(default=0)
    input_radio_count = models.IntegerField(default=0)
    input_range_count = models.IntegerField(default=0)
    input_reset_count = models.IntegerField(default=0)
    input_search_count = models.IntegerField(default=0)
    input_submit_count = models.IntegerField(default=0)
    input_tel_count = models.IntegerField(default=0)
    input_text_count = models.IntegerField(default=0)
    input_time_count = models.IntegerField(default=0)
    input_url_count = models.IntegerField(default=0)
    input_week_count = models.IntegerField(default=0)

    autofocus_attribute_count = models.IntegerField(default=0)
    placeholder_attribute_count = models.IntegerField(default=0)
    pattern_attribute_count = models.IntegerField(default=0)
    required_attribute_count = models.IntegerField(default=0)

    output_count = models.IntegerField(default=0)
    progress_count = models.IntegerField(default=0)
    meter_count = models.IntegerField(default=0)

    fieldset_count = models.IntegerField(default=0)
    label_count = models.IntegerField(default=0)
    legend_count = models.IntegerField(default=0)
    title_attribute_count = models.IntegerField(default=0)

    button_count = models.IntegerField(default=0)
    select_count = models.IntegerField(default=0)
    textarea_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Form Controls"
        verbose_name_plural = "Page Markup: Form Controls"

class MIpageMedia(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_media")

    all_media_count = models.IntegerField(default=0)
    audio_count = models.IntegerField(default=0)
    embed_count = models.IntegerField(default=0)
    object_count = models.IntegerField(default=0)
    video_count = models.IntegerField(default=0)
    track_count = models.IntegerField(default=0)
    source_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Media"
        verbose_name_plural = "Page Markup: Media"

class MIpageLandmarks(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_landmarks")

    all_landmarks_count = models.IntegerField(default=0)
    role_application_count = models.IntegerField(default=0)
    role_banner_count = models.IntegerField(default=0)
    role_complementary_count = models.IntegerField(default=0)
    role_contentinfo_count = models.IntegerField(default=0)
    role_form_count = models.IntegerField(default=0)
    role_main_count = models.IntegerField(default=0)
    role_navigation_count = models.IntegerField(default=0)
    role_region_count = models.IntegerField(default=0)
    role_search_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Landmark"
        verbose_name_plural = "Page Markup: Landmarks"

class MIpageStructures(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_structures")

    all_structures_count = models.IntegerField(default=0)
    role_article_count = models.IntegerField(default=0)
    role_directory_count = models.IntegerField(default=0)
    role_document_count = models.IntegerField(default=0)
    role_heading_count = models.IntegerField(default=0)
    role_math_count = models.IntegerField(default=0)
    role_note_count = models.IntegerField(default=0)
    role_presentation_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: ARIA Structure"
        verbose_name_plural = "Page Markup: ARIA Structures"

class MIpageWidgets(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_widgets")

    all_widgets_count = models.IntegerField(default=0)
    role_button_count = models.IntegerField(default=0)
    role_link_count = models.IntegerField(default=0)

    aria_describedby_count = models.IntegerField(default=0)
    aria_describedat_count = models.IntegerField(default=0)

    aria_labelledby_count = models.IntegerField(default=0)
    aria_label_count = models.IntegerField(default=0)

    aria_owns_count = models.IntegerField(default=0)
    aria_activedescendant_count = models.IntegerField(default=0)
    aria_flowto_count = models.IntegerField(default=0)
    aria_controls_count = models.IntegerField(default=0)
    aria_hidden_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: ARIA Widget"
        verbose_name_plural = "Page Markup: ARIA Widgets"

class MIpageLives(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_lives")

    all_lives_count = models.IntegerField(default=0)

    aria_live_count = models.IntegerField(default=0)

    role_alert_count = models.IntegerField(default=0)
    role_status_count = models.IntegerField(default=0)
    role_log_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: ARIA Live Region"
        verbose_name_plural = "Page Markup: ARIA Live Regions"

class MIpageEvents(models.Model):
    id = models.AutoField(primary_key=True)

    page_result = models.ForeignKey(PageResult, on_delete=models.CASCADE, related_name="mi_page_events")

    all_events_count = models.IntegerField(default=0)

    load_event_count = models.IntegerField(default=0)

    blur_event_count = models.IntegerField(default=0)
    focus_event_count = models.IntegerField(default=0)

    change_event_count = models.IntegerField(default=0)

    drag_events_count = models.IntegerField(default=0)

    click_event_count = models.IntegerField(default=0)
    double_click_event_count = models.IntegerField(default=0)

    keyboard_events_count = models.IntegerField(default=0)

    mouse_events_count = models.IntegerField(default=0)

    touch_events_count = models.IntegerField(default=0)

    pointer_events_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Page Markup: Events"
        verbose_name_plural = "Page Markup: Events"
