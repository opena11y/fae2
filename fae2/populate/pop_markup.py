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

file: populate/pop_markup.py

Author: Jon Gunderson

"""

from __future__ import print_function
from __future__ import absolute_import
import sys
import os
import django
from django.core.exceptions import ObjectDoesNotExist

fp = os.path.realpath(__file__)
path, filename = os.path.split(fp)

fae2_path = path.split('/populate')[0]
sys.path.append(fae2_path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fae2.settings')
from django.conf import settings

django.setup()

"""This file is for populating the database with markup information
I empty it. Run as a standalone script!"""

from markup.models import LanguageSpec
from markup.models import ElementDefinition

def create_spec(title, abbr, url, url_slug, link_text, flag):

  try:
    spec = LanguageSpec.objects.get(url_slug=url_slug)
    print("  Updating Spec: " + spec.url_slug )
    spec.title         = title
    spec.abbr          = abbr
    spec.url           = url
    spec.link_text     = link_text
    spec.element_based = flag
  except ObjectDoesNotExist:
    spec = LanguageSpec(title=title, abbr=abbr, url=url, url_slug=url_slug, link_text=link_text, element_based=flag)
    print("  Creating Testsuite Spec " + title)
  spec.save()
  return spec

def create_element_definition(s, e, a, v, url, d, t):

  try:
    edef = ElementDefinition.objects.get(spec=s, element=e, attribute=a, value=v)
    if v == '':
      v = '*'
    print("  Updating ElementDefinition: " + str(s) + " for " + e + '[' + a + '=' + v + ']')
    edef.description = d
    edef.type = t
    edef.url = url
  except ObjectDoesNotExist:
    edef = ElementDefinition(spec=s, element=e, attribute=a, value=v, url=url, description=d, type=t)
    print("  Creating ElementDefinition: " + s.title  + " for " + url)
  edef.save()
  return edef

html = create_spec("HTML 4.01", "HTML 4.01", "https://www.w3.org/tr/html", "html4", "HTML4", True)

html_textnode       = create_element_definition( html, "textnodes",   "",  "", "https://www.w3.org/TR/html4/interact/scripts.html",   "", "")
html_all            = create_element_definition( html, "",   "",             "", "https://www.w3.org/TR/html4/",         "", "")

html_all_mousedown  = create_element_definition( html, "",   "onmousedown",  "", "https://www.w3.org/TR/uievents/#event-type-mousedown",   "", "E")
html_all_mouseup    = create_element_definition( html, "",   "onmouseup",    "", "https://www.w3.org/TR/uievents/#event-type-mouseup",     "", "E")
html_all_mouseover  = create_element_definition( html, "",   "onmouseover",  "", "https://www.w3.org/TR/uievents/#event-type-mouseover",  "", "E")
html_all_mouseout   = create_element_definition( html, "",   "onmouseout",   "", "https://www.w3.org/TR/uievents/#event-type-mouseout",   "", "E")
html_all_mousemove  = create_element_definition( html, "",   "onmousemove",  "", "https://www.w3.org/TR/uievents/#event-type-mouseout",   "", "E")

html_all_blur       = create_element_definition( html, "",   "onblur",       "", "https://www.w3.org/TR/uievents/#event-type-blur",       "", "E")
html_all_focus      = create_element_definition( html, "",   "onfocus",      "", "https://www.w3.org/TR/uievents/#event-type-focus",      "", "E")

html_all_change     = create_element_definition( html, "",   "onchange",     "", "https://www.w3.org/TR/uievents/#event-type-change",     "", "E")

html_all_click      = create_element_definition( html, "",   "onclick",      "", "https://www.w3.org/TR/uievents/#event-type-click",      "", "E")
html_all_dbclick    = create_element_definition( html, "",   "ondbclick",    "", "https://www.w3.org/TR/uievents/#event-type-dblclick",      "", "E")

html_all_drag       = create_element_definition( html, "",   "ondrag",       "", "https://developer.mozilla.org/en-US/docs/Web/Events/drag",  "", "E")
html_all_dragstart  = create_element_definition( html, "",   "ondragstart",  "", "https://developer.mozilla.org/en-US/docs/Web/Events/dragstart",  "", "E")
html_all_dragend    = create_element_definition( html, "",   "ondragend",    "", "https://developer.mozilla.org/en-US/docs/Web/Events/dragend",  "", "E")
html_all_dragover   = create_element_definition( html, "",   "ondragover",   "", "https://developer.mozilla.org/en-US/docs/Web/Events/dragover",  "", "E")
html_all_dragenter  = create_element_definition( html, "",   "ondragover",   "", "https://developer.mozilla.org/en-US/docs/Web/Events/dragenter",  "", "E")
html_all_dragleave  = create_element_definition( html, "",   "ondragover",   "", "https://developer.mozilla.org/en-US/docs/Web/Events/dragleave",  "", "E")
html_all_drop       = create_element_definition( html, "",   "ondragover",   "", "https://developer.mozilla.org/en-US/docs/Web/Events/drop",  "", "E")

html_all_keydown    = create_element_definition( html, "",   "onkeydown",    "", "https://www.w3.org/TR/uievents/#event-type-keydown",    "", "E")
html_all_keyup      = create_element_definition( html, "",   "onkeyup",      "", "https://www.w3.org/TR/uievents/#event-type-keyup",      "", "E")
html_all_keypress   = create_element_definition( html, "",   "onkeypress",   "", "https://www.w3.org/TR/uievents/#event-type-keypress",   "", "E")

html_html_lang = create_element_definition( html, "html",  "lang",    "", "https://www.w3.org/TR/html4/struct/global.html#adef-lang",         "", "")
html_all_lang  = create_element_definition( html, "",      "lang",    "", "https://www.w3.org/TR/html4/struct/global.html#adef-lang",         "", "")

html_a              = create_element_definition( html, "a",    "",         "", "https://www.w3.org/TR/html4/struct/objects.html#edef-a",      "", "")
html_a_href         = create_element_definition( html, "a",    "href",     "", "https://www.w3.org/TR/html4/struct/objects.html#adef-href",      "", "")
html_area_href      = create_element_definition( html, "area", "href",     "", "https://www.w3.org/TR/html4/struct/objects.html#adef-href",      "", "")

html_object        = create_element_definition( html, "object",    "",         "", "https://www.w3.org/TR/html4/struct/objects.html#edef-object",      "", "")
html_applet        = create_element_definition( html, "applet",    "",         "", "https://www.w3.org/TR/html4/struct/objects.html#edef-applet",      "", "")
html_embed         = create_element_definition( html, "embed",    "",         "", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed",   "", "")

html_area         = create_element_definition( html, "area",   "",         "", "https://www.w3.org/TR/html4/struct/objects.html#edef-area",   "", "")
html_area_alt     = create_element_definition( html, "area",   "alt",      "", "https://www.w3.org/TR/html4/struct/objects.html#adef-alt",    "", "")
html_area_title   = create_element_definition( html, "area",   "title",    "", "https://www.w3.org/TR/html4/struct/objects.html#adef-alt",    "", "")
html_img          = create_element_definition( html, "img",    "",         "", "https://www.w3.org/TR/html4/struct/objects.html#edef-img",    "", "")
html_img_alt      = create_element_definition( html, "img",    "alt",      "", "https://www.w3.org/TR/html4/struct/objects.html#adef-alt",    "", "")
html_img_title    = create_element_definition( html, "img",    "title",    "", "https://www.w3.org/TR/html4/struct/global.html#adef-title",   "", "")
html_img_longdesc = create_element_definition( html, "img",    "longdesc", "",  "https://www.w3.org/TR/html4/struct/global.html#adef-longdesc",   "", "")

html_title     = create_element_definition( html, "title",  "",        "", "https://www.w3.org/TR/html4/struct/global.html#edef-TITLE",      "", "")
html_h1        = create_element_definition( html, "h1",      "",        "", "https://www.w3.org/TR/html4/struct/global.html#edef-H1",      "", "")
html_h2        = create_element_definition( html, "h2",   "",        "", "https://www.w3.org/TR/html4/struct/global.html#edef-H2",      "", "")

html_h3        = create_element_definition( html, "h3",   "",        "", "https://www.w3.org/TR/html4/struct/global.html#edef-H3",      "", "")

html_h4        = create_element_definition( html, "h4",   "",        "", "https://www.w3.org/TR/html4/struct/global.html#edef-H4",      "", "")

html_h5        = create_element_definition( html, "h5",   "",        "", "https://www.w3.org/TR/html4/struct/global.html#edef-H5",      "", "")

html_h6        = create_element_definition( html, "h6",   "",        "", "https://www.w3.org/TR/html4/struct/global.html#edef-H6",      "", "")

html_all_id         = create_element_definition( html, "",        "id",      "",         "https://www.w3.org/TR/html4/struct/global.html#adef-id",   "", "")
html_input_title    = create_element_definition( html, "input",   "title",   "", "https://www.w3.org/TR/html4/",         "", "")
html_button         = create_element_definition( html, "button",  "",        "",         "https://www.w3.org/TR/html4/struct/global.html#edef-button",   "", "")
html_button_title   = create_element_definition( html, "button",  "title",   "",         "https://www.w3.org/TR/html4/struct/global.html#edef-button",   "", "")
html_input          = create_element_definition( html, "input",   "",        "",         "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_button   = create_element_definition( html, "input",   "type",    "button",   "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_submit   = create_element_definition( html, "input",   "type",    "submit",   "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_reset    = create_element_definition( html, "input",   "type",    "reset",    "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_text     = create_element_definition( html, "input",   "type",    "text",     "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_password = create_element_definition( html, "input",   "type",    "password", "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_checkbox = create_element_definition( html, "input",   "type",    "checkbox", "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_radio    = create_element_definition( html, "input",   "type",    "radio",    "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_file     = create_element_definition( html, "input",   "type",    "file",     "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_image    = create_element_definition( html, "input",   "type",    "image",    "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_input_image    = create_element_definition( html, "input",   "type",    "submit",    "https://www.w3.org/TR/html4/struct/global.html#edef-input",    "", "")
html_select         = create_element_definition( html, "select",   "",       "",         "https://www.w3.org/TR/html4/struct/global.html#edef-select",   "", "")
html_select_title   = create_element_definition( html, "select",   "title",  "",         "https://www.w3.org/TR/html4/struct/global.html#adef-title",    "", "")
html_textarea       = create_element_definition( html, "textarea", "",       "",         "https://www.w3.org/TR/html4/struct/global.html#edef-textarea", "", "")
html_textarea_title = create_element_definition( html, "textarea", "title",  "",         "https://www.w3.org/TR/html4/struct/global.html#adef-title",    "", "")
html_label          = create_element_definition( html, "label",    "",       "",         "https://www.w3.org/TR/html4/struct/global.html#edef-label",    "", "")
html_fieldset       = create_element_definition( html, "fieldset", "",       "",         "https://www.w3.org/TR/html4/struct/global.html#edef-fieldset", "", "")
html_legend         = create_element_definition( html, "legend",   "",       "",         "https://www.w3.org/TR/html4/struct/global.html#edef-legend",   "", "")

html_a_accesskey         = create_element_definition( html, "a",        "accesskey",  "", "https://www.w3.org/TR/html4/struct/objects.html#adef-accesskey",      "", "")
html_input_accesskey     = create_element_definition( html, "input",    "accesskey",  "", "https://www.w3.org/TR/html4/struct/objects.html#adef-accesskey",      "", "")
html_button_accesskey    = create_element_definition( html, "button",   "accesskey",  "", "https://www.w3.org/TR/html4/struct/objects.html#adef-accesskey",      "", "")
html_textarea_accesskey  = create_element_definition( html, "textarea", "accesskey",  "", "https://www.w3.org/TR/html4/struct/objects.html#adef-accesskey",      "", "")
html_select_accesskey    = create_element_definition( html, "select",   "accesskey",  "", "https://www.w3.org/TR/html4/struct/objects.html#adef-accesskey",      "", "")

html_table          = create_element_definition( html, "table",  "",         "",         "https://www.w3.org/TR/html4/struct/global.html#edef-table", "", "")
html_table_summary  = create_element_definition( html, "table",  "summary",  "",         "https://www.w3.org/TR/html4/struct/global.html#adef-summary", "", "")
html_td             = create_element_definition( html, "td",     "",         "",         "https://www.w3.org/TR/html4/struct/global.html#edef-td",      "", "")
html_th             = create_element_definition( html, "th",     "",         "",         "https://www.w3.org/TR/html4/struct/global.html#edef-th",      "", "")
html_th_id          = create_element_definition( html, "th",     "id",       "",         "https://www.w3.org/TR/html4/struct/global.html#adef-id",      "", "")
html_td_headers     = create_element_definition( html, "td",     "headers",  "",         "https://www.w3.org/TR/html4/struct/global.html#adef-headers", "", "")

html_frame          = create_element_definition( html, "frame",  "",        "",   "https://www.w3.org/TR/html4/struct/global.html#edef-frame",    "", "")
html_frame_title    = create_element_definition( html, "frame",  "title",   "",   "https://www.w3.org/TR/html4/struct/global.html#adef-title",    "", "")
html_iframe_title   = create_element_definition( html, "iframe", "title",   "",   "https://www.w3.org/TR/html4/struct/global.html#adef-title",    "", "")

html_b              = create_element_definition( html, "b",       "",  "",   "https://www.w3.org/TR/html4/struct/global.html#edef-b",    "", "")
html_i              = create_element_definition( html, "i",       "",  "",   "https://www.w3.org/TR/html4/struct/global.html#edef-i",    "", "")
html_u              = create_element_definition( html, "u",       "",  "",   "https://www.w3.org/TR/html4/struct/global.html#edef-b",    "", "")
html_font           = create_element_definition( html, "font",    "",  "",   "https://www.w3.org/TR/html4/struct/global.html#edef-font",    "", "")
html_marquee        = create_element_definition( html, "marquee", "",  "",   "",    "", "")
html_blink          = create_element_definition( html, "blink",   "",  "",   "",    "", "")

html5 = create_spec("html 5", "html 5", "https://www.whatwg.org/specs/web-apps/current-work/multipage/", "html5", "html5", True)

html5_nav      = create_element_definition( html5, "nav",      "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-nav-element",          "", "")
html5_article  = create_element_definition( html5, "article",  "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-article-element",      "", "")
html5_section  = create_element_definition( html5, "section",  "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-section-element",      "", "")
html5_main     = create_element_definition( html5, "main",     "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/grouping-content.html#the-main-element", "", "")
html5_aside    = create_element_definition( html5, "aside",    "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-aside-element",        "", "")
html5_footer   = create_element_definition( html5, "footer",   "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-footer-element",       "", "")
html5_header   = create_element_definition( html5, "header",   "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-header-element",       "", "")

html5_figure      = create_element_definition( html5, "figure",     "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/grouping-content.html#the-figure-element",   "", "")
html5_figcaption  = create_element_definition( html5, "figcaption", "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/grouping-content.html#the-figcaption-element",   "", "")

html5_audio    = create_element_definition( html5, "audio", "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#the-audio-element",   "", "")
html5_video    = create_element_definition( html5, "video", "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#the-video-element",   "", "")
html5_track    = create_element_definition( html5, "track", "", "", "https://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#the-track-element",   "", "")

aria = create_spec("Accessible Rich Internet Application Specification", "ARIA 1.0", "https://www.w3.org/TR/wai-aria/", "aria10", "ARIA 1.0", True)

aria_role              = create_element_definition( aria, "", "role", "", "https://www.w3.org/TR/wai-aria/roles", "User interface widget","R")

aria_role_widget       = create_element_definition( aria, "", "role", "widget", "https://www.w3.org/TR/wai-aria/roles", "User interface widget","R")
aria_role_alert        = create_element_definition( aria, "", "role", "alert", "https://www.w3.org/TR/wai-aria/roles#alert", "User interface widget","R")
aria_role_alertdialog  = create_element_definition( aria, "", "role", "alertdialog", "https://www.w3.org/TR/wai-aria/roles#alertdialog", "User interface widget","R")
aria_role_button       = create_element_definition( aria, "", "role", "button", "https://www.w3.org/TR/wai-aria/roles#button", "User interface widget","R")

aria_role_checkbox     = create_element_definition( aria, "", "role", "checkbox", "https://www.w3.org/TR/wai-aria/roles#checkbox", "User interface widget","R")
aria_role_combobox     = create_element_definition( aria, "", "role", "combobox", "https://www.w3.org/TR/wai-aria/roles#combobox", "User interface widget","R")
aria_role_dialog       = create_element_definition( aria, "", "role", "dialog", "https://www.w3.org/TR/wai-aria/roles#dialog", "User interface widget","R")
aria_role_grid         = create_element_definition( aria, "", "role", "grid", "https://www.w3.org/TR/wai-aria/roles#grid", "Composite user interface widget","R")
aria_role_gridcell     = create_element_definition( aria, "", "role", "gridcell", "https://www.w3.org/TR/wai-aria/roles#gridcell", "User interface widget","R")

aria_role_link         = create_element_definition( aria, "", "role", "link", "https://www.w3.org/TR/wai-aria/roles#link", "User interface widget","R")
aria_role_listbox      = create_element_definition( aria, "", "role", "listbox", "https://www.w3.org/TR/wai-aria/roles#listbox", "Composite user interface widget","R")
aria_role_log          = create_element_definition( aria, "", "role", "log", "https://www.w3.org/TR/wai-aria/roles#log", "User interface widget","R")
aria_role_marquee      = create_element_definition( aria, "", "role", "marquee", "https://www.w3.org/TR/wai-aria/roles#marquee", "User interface widget","R")
aria_role_menu         = create_element_definition( aria, "", "role", "menu", "https://www.w3.org/TR/wai-aria/roles#menu", "Composite user interface widget","R")

aria_role_menubar      = create_element_definition( aria, "", "role", "menubar", "https://www.w3.org/TR/wai-aria/roles#menubar", "Composite user interface widget","R")
aria_role_menuitem     = create_element_definition( aria, "", "role", "menuitem", "https://www.w3.org/TR/wai-aria/roles#menuitem", "User interface widget","R")
aria_role_menuitemcheckbox = create_element_definition( aria, "", "role", "menuitemcheckbox", "https://www.w3.org/TR/wai-aria/roles#menuitemcheckbox", "User interface widget","R")
aria_role_menuitemradio    = create_element_definition( aria, "", "role", "menuitemradio", "https://www.w3.org/TR/wai-aria/roles#menuitemradio", "User interface widget","R")
aria_role_option       = create_element_definition( aria, "", "role", "option", "https://www.w3.org/TR/wai-aria/roles#option", "User interface widget","R")

aria_role_progressbar  = create_element_definition( aria, "", "role", "progressbar", "https://www.w3.org/TR/wai-aria/roles#progressbar", "User interface widget","R")
aria_role_radio        = create_element_definition( aria, "", "role", "radio", "https://www.w3.org/TR/wai-aria/roles#radio", "User interface widget","R")
aria_role_radiogroup   = create_element_definition( aria, "", "role", "radiogroup", "https://www.w3.org/TR/wai-aria/roles#radiogroup", "User interface widget","R")
aria_role_scrollbar    = create_element_definition( aria, "", "role", "scrollbar", "https://www.w3.org/TR/wai-aria/roles#scrollbar", "User interface widget","R")
aria_role_slider       = create_element_definition( aria, "", "role", "slider", "https://www.w3.org/TR/wai-aria/roles#slider", "User interface widget","R")

aria_role_spinbutton   = create_element_definition( aria, "", "role", "spinbutton", "https://www.w3.org/TR/wai-aria/roles#spinbutton", "User interface widget","R")
aria_role_status       = create_element_definition( aria, "", "role", "status", "https://www.w3.org/TR/wai-aria/roles#status", "User interface widget","R")
aria_role_tab          = create_element_definition( aria, "", "role", "tab", "https://www.w3.org/TR/wai-aria/roles#tab", "User interface widget","R")
aria_role_switch       = create_element_definition( aria, "", "role", "searchbox", "https://www.w3.org/TR/wai-aria-1.1/#switch", "User Interface Widget","R")
aria_role_tabpanel     = create_element_definition( aria, "", "role", "tabpanel", "https://www.w3.org/TR/wai-aria/roles#tabpanel", "User interface widget","R")
aria_role_textbox      = create_element_definition( aria, "", "role", "textbox", "https://www.w3.org/TR/wai-aria/roles#textbox", "User interface widget","R")

aria_role_timer        = create_element_definition( aria, "", "role", "timer", "https://www.w3.org/TR/wai-aria/roles#timer", "User interface widget","R")
aria_role_tooltip      = create_element_definition( aria, "", "role", "tooltip", "https://www.w3.org/TR/wai-aria/roles#tooltip", "User interface widget","R")
aria_role_treeitem     = create_element_definition( aria, "", "role", "treeitem", "https://www.w3.org/TR/wai-aria/roles#treeitem", "User interface widget","R")
aria_role_tablist      = create_element_definition( aria, "", "role", "tablist", "https://www.w3.org/TR/wai-aria/roles#tablist", "Composite user interface widget","R")
aria_role_toolbar      = create_element_definition( aria, "", "role", "toolbar", "https://www.w3.org/TR/wai-aria/roles#toolbar", "Composite user interface widget","R")

aria_role_tree         = create_element_definition( aria, "", "role", "tree", "https://www.w3.org/TR/wai-aria/roles#tree", "Composite user interface widget","R")
aria_role_treegrid     = create_element_definition( aria, "", "role", "treegrid", "https://www.w3.org/TR/wai-aria/roles#treegrid", "Composite user interface widget","R")
aria_role_article      = create_element_definition( aria, "", "role", "article", "https://www.w3.org/TR/wai-aria/roles#article", "Document structure","R")

aria_role_cell         = create_element_definition( aria, "", "role", "cell", "https://www.w3.org/TR/wai-aria-1.1/#cell", "Document structure","R")
aria_role_columnheader = create_element_definition( aria, "", "role", "columnheader", "https://www.w3.org/TR/wai-aria/roles#columnheader", "Document structure","R")
aria_role_definition   = create_element_definition( aria, "", "role", "definition", "https://www.w3.org/TR/wai-aria/roles#definition", "Document structure","R")
aria_role_directory    = create_element_definition( aria, "", "role", "directory", "https://www.w3.org/TR/wai-aria/roles#directory", "Document structure","R")
aria_role_document     = create_element_definition( aria, "", "role", "document", "https://www.w3.org/TR/wai-aria/roles#document", "Document structure","R")

aria_role_figure       = create_element_definition( aria, "", "role", "figure", "https://www.w3.org/TR/wai-aria-1.1/#figure", "Document structure","R")
aria_role_group        = create_element_definition( aria, "", "role", "group", "https://www.w3.org/TR/wai-aria/roles#group", "Document structure","R")
aria_role_heading      = create_element_definition( aria, "", "role", "heading", "https://www.w3.org/TR/wai-aria/roles#heading", "Document structure","R")
aria_role_img          = create_element_definition( aria, "", "role", "img", "https://www.w3.org/TR/wai-aria/roles#img", "Document structure","R")
aria_role_list         = create_element_definition( aria, "", "role", "list", "https://www.w3.org/TR/wai-aria/roles#list", "Document structure","R")

aria_role_listitem     = create_element_definition( aria, "", "role", "listitem", "https://www.w3.org/TR/wai-aria/roles#listitem", "Document structure","R")
aria_role_math         = create_element_definition( aria, "", "role", "math", "https://www.w3.org/TR/wai-aria/roles#math", "Document structure","R")
aria_role_none         = create_element_definition( aria, "", "role", "none", "https://www.w3.org/TR/wai-aria-1.1/#none", "Document structure","R")
aria_role_note         = create_element_definition( aria, "", "role", "note", "https://www.w3.org/TR/wai-aria/roles#note", "Document structure","R")
aria_role_presentation = create_element_definition( aria, "", "role", "presentation", "https://www.w3.org/TR/wai-aria/roles#presentatin", "Document structure","R")

aria_role_region       = create_element_definition( aria, "", "role", "region", "https://www.w3.org/TR/wai-aria/roles#region", "Document structure","R")
aria_role_row          = create_element_definition( aria, "", "role", "row", "https://www.w3.org/TR/wai-aria/roles#row", "Document structure","R")
aria_role_rowgroup     = create_element_definition( aria, "", "role", "rowgroup", "https://www.w3.org/TR/wai-aria/roles#rowgroup", "Document structure","R")
aria_role_rowheader    = create_element_definition( aria, "", "role", "rowheader", "https://www.w3.org/TR/wai-aria/roles#rowheader", "Document structure","R")
aria_role_separator    = create_element_definition( aria, "", "role", "separator", "https://www.w3.org/TR/wai-aria/roles#separator", "Document structure","R")
aria_role_table        = create_element_definition( aria, "", "role", "table", "https://www.w3.org/TR/wai-aria-1.1/#table", "Document structure","R")
aria_role_term         = create_element_definition( aria, "", "role", "term", "https://www.w3.org/TR/wai-aria-1.1/#term", "Document structure","R")
aria_role_text         = create_element_definition( aria, "", "role", "text", "https://www.w3.org/TR/wai-aria-1.1/#text", "Document structure","R")

aria_role_application  = create_element_definition( aria, "", "role", "application", "https://www.w3.org/TR/wai-aria/roles#application", "Landmark","R")
aria_role_banner       = create_element_definition( aria, "", "role", "banner", "https://www.w3.org/TR/wai-aria/roles#banner", "Landmark","R")
aria_role_complementary = create_element_definition( aria, "", "role", "complementary", "https://www.w3.org/TR/wai-aria/roles#complementary", "Landmark","R")
aria_role_contentinfo   = create_element_definition( aria, "", "role", "contentinfo", "https://www.w3.org/TR/wai-aria/roles#contentinfo", "Landmark","R")
aria_role_form          = create_element_definition( aria, "", "role", "form", "https://www.w3.org/TR/wai-aria/roles#form", "Landmark","R")

aria_role_main          = create_element_definition( aria, "", "role", "main", "https://www.w3.org/TR/wai-aria/roles#main", "Landmark","R")
aria_role_navigation    = create_element_definition( aria, "", "role", "navigation", "https://www.w3.org/TR/wai-aria/roles#navigation", "Landmark","R")
aria_role_search        = create_element_definition( aria, "", "role", "search", "https://www.w3.org/TR/wai-aria/roles#search", "Landmark","R")
aria_role_searchbox     = create_element_definition( aria, "", "role", "searchbox", "https://www.w3.org/TR/wai-aria-1.1/#searchbox", "Document structure","R")

aria_atomic           = create_element_definition( aria, "", "aria-atomic", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-atomic", "Live region attribute","P")
aria_busy             = create_element_definition( aria, "", "aria-busy", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-busy", "Live region attribute","S")
aria_live             = create_element_definition( aria, "", "aria-live", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-live", "Global state or property","P")
aria_relevant         = create_element_definition( aria, "", "aria-relevant", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-relevant", "Global state or property","P")
aria_autocomplete     = create_element_definition( aria, "", "aria-autocomplete", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-autocomplete", "Widget attributes","P")

aria_checked          = create_element_definition( aria, "", "aria-checked", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-checked", "Widget attributes","S")

aria_colcount          = create_element_definition( aria, "", "aria-colcount", "", "https://www.w3.org/TR/wai-aria-1.1/#aria-colcount", "Widget attributes","P")
aria_colindex          = create_element_definition( aria, "", "aria-colindex", "", "https://www.w3.org/TR/wai-aria-1.1/#aria-colindex", "Widget attributes","P")
aria_colspan           = create_element_definition( aria, "", "aria-colspan", "", "https://www.w3.org/TR/wai-aria-1.1/#aria-colspan", "Widget attributes","P")

aria_rowcount          = create_element_definition( aria, "", "aria-rowcount", "", "https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount", "Widget attributes","P")
aria_rowindex          = create_element_definition( aria, "", "aria-rowindex", "", "https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex", "Widget attributes","P")
aria_rowspan           = create_element_definition( aria, "", "aria-rowspan",  "", "https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan", "Widget attributes","P")

aria_details           = create_element_definition( aria, "", "aria-details",  "", "https://www.w3.org/TR/wai-aria-1.1/#aria-details", "Widget attributes","P")
aria_errormessage      = create_element_definition( aria, "", "aria-errormessage",  "", "https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage", "Widget attributes","P")
aria_modal             = create_element_definition( aria, "", "aria-modal",  "", "https://www.w3.org/TR/wai-aria-1.1/#aria-modal", "Widget attributes","P")
aria_placeholder       = create_element_definition( aria, "", "aria-placeholder",  "", "https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder", "Widget attributes","P")
aria_roledescription   = create_element_definition( aria, "", "aria-roledescription",  "", "https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription", "Widget attributes","P")

aria_current          = create_element_definition( aria, "", "aria-current",  "", "https://www.w3.org/TR/wai-aria-1.1/#aria-current", "Widget attributes","S")
aria_disabled         = create_element_definition( aria, "", "aria-disabled", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-disabled", "Widget attributes","S")
aria_expanded         = create_element_definition( aria, "", "aria-expanded", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded", "Widget attributes","S")
aria_haspopup         = create_element_definition( aria, "", "aria-haspopup", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-haspopup", "Widget attributes","P")

aria_hidden           = create_element_definition( aria, "", "aria-hidden", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden", "Widget attributes","S")
aria_invalid          = create_element_definition( aria, "", "aria-invalid", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-invalid", "Widget attributes","S")
aria_label            = create_element_definition( aria, "", "aria-label", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-label", "Widget attributes","P")
aria_level            = create_element_definition( aria, "", "aria-level", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-level", "Widget attributes","P")
aria_multiline        = create_element_definition( aria, "", "aria-multiline", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-multiline", "Widget attributes","P",)

aria_multiselectable  = create_element_definition( aria, "", "aria-multiselectable", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-multiselectable", "Widget attributes","P")
aria_orientation      = create_element_definition( aria, "", "aria-orientation", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-orientation", "Widget attributes","P")
aria_pressed          = create_element_definition( aria, "", "aria-pressed", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-pressed", "Widget attributes","S")
aria_readonly         = create_element_definition( aria, "", "aria-readonly", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-readonly", "Widget attributes","P")
aria_required         = create_element_definition( aria, "", "aria-required", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-required", "Widget attributes","P")

aria_selected         = create_element_definition( aria, "", "aria-selected", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-selected", "Widget attributes","S")
aria_sort             = create_element_definition( aria, "", "aria-sort", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-sort", "Widget attributes","P")
aria_valuemax         = create_element_definition( aria, "", "aria-valuemin", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-valuemin", "Widget attributes","P")
aria_valuemin         = create_element_definition( aria, "", "aria-valuemax", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-valuemax", "Widget attributes","P")
aria_valuenow         = create_element_definition( aria, "", "aria-valuenow", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-valuenow", "Widget attributes","P")

aria_valuetext        = create_element_definition( aria, "", "aria-valuetext", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-valuetext", "Widget attributes","P")
aria_dropeffect       = create_element_definition( aria, "", "aria-dropeffect", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-dropeffect", "Drag and drop attributes","P")
aria_grabbed          = create_element_definition( aria, "", "aria-grabbed", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-grabbed", "Drag and drop attributes",'S')
aria_activedescendant = create_element_definition( aria, "", "aria-activedescendant", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-activedescendant", "Relationship attributes","P")
aria_controls         = create_element_definition( aria, "", "aria-controls", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls", "Relationship attributes","P")

aria_describedby      = create_element_definition( aria, "", "aria-describedby", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby", "Relationship attributes","P")
aria_flowto           = create_element_definition( aria, "", "aria-flowto", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-flowto", "Relationship attributes","P")
aria_labelledby       = create_element_definition( aria, "", "aria-labelledby", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby", "Relationship attributes","P")
aria_owns             = create_element_definition( aria, "", "aria-owns", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-owns", "Relationship attributes","P")
aria_posinset         = create_element_definition( aria, "", "aria-posinset", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-posinset", "Relationship attributes","P")

aria_setsize          = create_element_definition( aria, "", "aria-setsize", "", "https://www.w3.org/TR/wai-aria/states_and_properties#aria-setsize", "Relationship attributes","P")

css = create_spec("CSS 2.1", "CSS 2.1", "https://www.w3.org/tr/css21", "css21", "CSS21", False)

css_position   = create_element_definition( css, "position", "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-position", "","O")
css_left       = create_element_definition( css, "left",     "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-left", "","O")
css_right      = create_element_definition( css, "right",    "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-right", "","O")
css_top        = create_element_definition( css, "top",      "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-top", "","O")
css_bottom     = create_element_definition( css, "bottom",   "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-bottom", "","O")
css_float      = create_element_definition( css, "float",    "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-float", "","O")
css_clear      = create_element_definition( css, "clear",    "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-clear", "","O")
css_color         = create_element_definition( css, "color",          "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-color",         "", 'C')
css_background    = create_element_definition( css, "background",     "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-background",    "", 'C')
css_border_color  = create_element_definition( css, "border-color",   "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-border-color",  "", 'C')
css_outline_color = create_element_definition( css, "outline-color",  "", "", "https://www.w3.org/TR/CSS21/ui.html#propdef-outline-color",      "", 'C')
css_font          = create_element_definition( css, "font",           "", "", "https://www.w3.org/TR/CSS21/visuren.html#propdef-font",          "", 'F')
css_font_size     = create_element_definition( css, "font-size",      "", "", "https://www.w3.org/TR/CSS21/ui.html#propdef-font-family",        "", 'F')
css_content       = create_element_definition( css, "content",      "", "", "https://www.w3.org/TR/CSS21/ui.html#propdef-content",        "", 'O')

css_focus         = create_element_definition( css, ":focus",  "", "", "https://www.w3.org/TR/CSS21/selector.html#x38",        "", 'H')
css_hover         = create_element_definition( css, ":hover",  "", "", "https://www.w3.org/TR/CSS21/selector.html#x38",        "", 'H')
css_active        = create_element_definition( css, ":active", "", "", "https://www.w3.org/TR/CSS21/selector.html#x38",        "", 'H')
