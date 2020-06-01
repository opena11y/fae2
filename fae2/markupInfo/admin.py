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

file: markupInfo/admin.py

Author: Jon Gunderson

"""

from __future__ import absolute_import
from django.contrib import admin

from markupInfo.models import WebsiteMarkup
from markupInfo.models import WebsiteMarkupGroup
from markupInfo.models import WebsiteMarkupItem

from markupInfo.models import PageMarkup
from markupInfo.models import PageMarkupGroup
from markupInfo.models import PageMarkupItem

from markupInfo.models import MIpageSummary
from markupInfo.models import MIpageImages
from markupInfo.models import MIpageHeadings
from markupInfo.models import MIpageSections
from markupInfo.models import MIpageLists
from markupInfo.models import MIpageLinks
from markupInfo.models import MIpageTables
from markupInfo.models import MIpageForms
from markupInfo.models import MIpageMedia
from markupInfo.models import MIpageLandmarks
from markupInfo.models import MIpageStructures
from markupInfo.models import MIpageWidgets
from markupInfo.models import MIpageLives
from markupInfo.models import MIpageEvents

class WebsiteMarkupAdmin(admin.ModelAdmin):
  list_display = ('id', 'hidden_count', 'offscreen_count', 'total_count', 'frame_count', 'iframe_count')

admin.site.register(WebsiteMarkup, WebsiteMarkupAdmin)

class PageMarkupAdmin(admin.ModelAdmin):
  list_display = ('id', 'hidden_count', 'offscreen_count', 'total_count', 'frame_count', 'iframe_count')

admin.site.register(PageMarkup, PageMarkupAdmin)

class MIpageSummaryAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_element_count', 'all_hidden_count', 'all_offscreen_count', 'frame_count', 'iframe_count')

admin.site.register(MIpageSummary, MIpageSummaryAdmin)

class MIpageImagesAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_images_count', 'img_count', 'alt_attribute_count', 'longdesc_attribute_count', 'canvas_count', 'svg_count', 'figure_count', 'figcaption_count')

admin.site.register(MIpageImages, MIpageImagesAdmin)

class MIpageHeadingsAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_headings_count', 'h1_count', 'h2_count', 'h3_count', 'h4_count', 'h5_count', 'h6_count')

admin.site.register(MIpageHeadings, MIpageHeadingsAdmin)

class MIpageSectionsAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_sections_count', 'address_count', 'article_count', 'aside_count', 'details_count', 'dialog_count', 'footer_count', 'header_count', 'main_count', 'nav_count', 'section_count', 'summary_count')

admin.site.register(MIpageSections, MIpageSectionsAdmin)

class MIpageListsAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_lists_count', 'ul_count', 'ol_count', 'li_count', 'dl_count', 'dt_count', 'dd_count')

admin.site.register(MIpageLists, MIpageListsAdmin)

class MIpageLinksAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_links_count', 'a_count', 'area_count')

admin.site.register(MIpageLinks, MIpageLinksAdmin)

class MIpageTablesAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_tables_count', 'table_count', 'th_count', 'td_count', 'caption_count', 'summary_attribute_count', 'scope_attribute_count', 'headers_attribute_count')

admin.site.register(MIpageTables, MIpageTablesAdmin)

class MIpageFormsAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_forms_count', 'label_count', 'input_text_count', 'input_checkbox_count', 'input_radio_count', 'input_date_count', 'input_number_count', 'input_url_count', 'autofocus_attribute_count', 'placeholder_attribute_count', 'pattern_attribute_count', 'required_attribute_count', 'output_count', 'progress_count', 'meter_count', 'fieldset_count', 'legend_count', 'select_count', 'textarea_count')

admin.site.register(MIpageForms, MIpageFormsAdmin)

class MIpageMediaAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_media_count', 'audio_count', 'embed_count', 'object_count', 'video_count', 'track_count', 'source_count')

admin.site.register(MIpageMedia, MIpageMediaAdmin)

class MIpageLandmarksAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_landmarks_count', 'role_application_count', 'role_banner_count', 'role_complementary_count', 'role_contentinfo_count', 'role_form_count', 'role_main_count', 'role_navigation_count', 'role_region_count', 'role_search_count')

admin.site.register(MIpageLandmarks, MIpageLandmarksAdmin)

class MIpageStructuresAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_structures_count', 'role_article_count', 'role_directory_count', 'role_document_count', 'role_heading_count', 'role_math_count', 'role_note_count', 'role_presentation_count')

admin.site.register(MIpageStructures, MIpageStructuresAdmin)

class MIpageWidgetsAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_widgets_count', 'role_button_count', 'role_link_count', 'aria_describedby_count', 'aria_describedat_count', 'aria_labelledby_count', 'aria_label_count', 'aria_owns_count', 'aria_activedescendant_count', 'aria_flowto_count', 'aria_controls_count', 'aria_hidden_count')

admin.site.register(MIpageWidgets, MIpageWidgetsAdmin)

class MIpageLivesAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'all_lives_count', 'aria_live_count', 'role_alert_count', 'role_status_count', 'role_log_count')

admin.site.register(MIpageLives, MIpageLivesAdmin)

class MIpageEventsAdmin(admin.ModelAdmin):
  list_display = ('id', 'page_result', 'focus_event_count', 'change_event_count', 'drag_events_count', 'keyboard_events_count', 'mouse_events_count', 'touch_events_count', 'pointer_events_count')

admin.site.register(MIpageEvents, MIpageEventsAdmin)

from django.contrib import admin

# Register your models here.
