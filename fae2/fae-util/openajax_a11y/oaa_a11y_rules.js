/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    rule_scope: ['unknown', 'Element', 'Page', 'Website'],

    message_severities: {
      MUST  : 'must',
      SHOULD: 'should'
    },

    rule_categories: {
           '1': 'Audio and Video',
           '2': 'Tables',
           '4': 'Forms',
           '8': 'Images',
          '16': 'Keyboard Support',
          '32': 'Links',
          '64': 'Navigation',
         '128': 'Structure/Content',
         '256': 'Styles/Readability',
         '512': 'Widgets'
    },

    ACTION_NONE: 'None',

    NOT_APPLICABLE: 'N/A'

});/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules National Language Support (NLS) for Audios
    //
    rules: {
        AUDIO_1: {
            ID:                    'Audio 1',
            DEFINITION:            '@audio@ elements %s have caption or text transcription of the audio content.',
            SUMMARY:               '@audio@ %s have alternative',
            TARGET_RESOURCES_DESC: '@audio@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Add caption or text transcript to @audio@ element',
              FAIL_P:         'Add a caption or text transcript to each of the %N_F the @audio@ elements with out captions or transcripts.',
              MANUAL_CHECK_S: 'Verify the @audio@ element has either a caption or text transcript of the audio content.',
              MANUAL_CHECK_P: 'Verify the %N_MC @audio@ elements are audio only have either a caption or text transcript of the audio.',
              HIDDEN_S:       'The @audio@ element that is hidden was not analyzed for accessible audio.',
              HIDDEN_P:       'The %N_H @audio@ elements that are hidden were not analyzed for accessible audio.',
              NOT_APPLICABLE: 'No @audio@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:    '@audio@ element has caption.',
              ELEMENT_PASS_2:    '@audio@ element has a text transcript.',
              ELEMENT_FAIL_1:    'Add caption or text transcript to @audio@ element.',
              ELEMENT_MC_1:      'Verify the @audio@ element has captions or text transcript.',
              ELEMENT_HIDDEN_1:  'The @audio@ element is hidden and was not evaluated.'
            },
            PURPOSE: [
              'Captions and text transcripts provide a means for people cannot hear the audio to understand the audio content.',
              'Some types of learning disabilities affect speech perception, captions and text transcripts provide an alternative way to understand the audio content.',
              'When the language of the audio is different than the native language of the listener, captions and text transcripts support the listner in understanding the audio content.'
            ],
            TECHNIQUES: [
              'Use the @track@ element to add captioning to the audio content.',
              'Use WebVTT to encode the timed stamped captioning information for the audio content.',
              'Use @aria-describedby@ to reference a text transcript of the audio content.'
            ],
            MANUAL_CHECKS: [
              'When captions are enabled on the media player, check to make sure the captions visible.',
              'If there is a caption make sure the captions accurately represents the audio content.',
              'If there is a text transcript make sure the transcript accurately represents the audio content.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The audio element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-audio-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The track element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-track-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'WebVTT: The Web Video Text Tracks Format',
                url:   'https://dev.w3.org/html5/webvtt/'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        },
        AUDIO_2: {
            ID:                    'Audio 2',
            DEFINITION:            '@object@ elements used for audio only %s have caption or text transcription of the audio content.',
            SUMMARY:               '@object@ for audio %s have alternative',
            TARGET_RESOURCES_DESC: '@object@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add caption or text transcript to @object@ element.',
              FAIL_P:   'Add a caption or text transcript to each of the %N_F the @object@ elements with out captions or transcripts.',
              MANUAL_CHECK_S:     'Check if the @object@ element is audio only content.  If it is audio only make sure it has either a caption or text transcript of the audio content.',
              MANUAL_CHECK_P:     'Check if any of the %N_MC @object@ elements are audio only. If any are audio only make sure they have either a caption or text transcript of the audio.',
              HIDDEN_S: 'The @object@ element that is hidden was not analyzed for accessible audio.',
              HIDDEN_P: 'The %N_H @object@ elements that are hidden were not analyzed for accessible audio.',
              NOT_APPLICABLE:  'No @embed@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@object@ element references text transcript.',
              ELEMENT_FAIL_1:   'Add captions or text transcript to @object@ element.',
              ELEMENT_MC_1:     'Verify the @object@ element has synchronous captions.',
              ELEMENT_MC_2:     'Verify the @object@ element only renders audio only, if it is audio only verify that it has captions or text transcript.',
              ELEMENT_HIDDEN_1: 'The @object@ element is hidden and was not evaluated.'
            },
            PURPOSE: [
              'Captions and text transcripts provide a means for people cannot hear the audio to understand the audio content.',
              'Some types of learning disabilities affect speech perception, captions and text transcripts provide an alternative way to understand the audio content.',
              'When the language of the audio is different than the native language of the listener, captions and text transcripts support the listner in understanding the audio content.'
            ],
            TECHNIQUES: [
              'Use the @audio@ element instead of the @object@ element for audio only content, since the @audio@ element provides better support for captions and text transcripts.',
              'Use @aria-describedby@ attribute to point to a text description of the audio only content.'
            ],
            MANUAL_CHECKS: [
              'Check the web page for a link to a text transcript of the audio, or if the transcript is part of the page rendering the audio.',
              'Check the media player for a button to turn on and off captions.',
              'When captions are enabled on the media player, check to make sure the captions visible and represent the speech and sounds heard on the audio.',
              'In some cases "open" captions might be used, this means the captions are alway "on" as part of the video.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The object element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-object-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        },
        AUDIO_3: {
            ID:                    'Audio 3',
            DEFINITION:            '@embed@ elements used for audio only %s have caption or text transcription of the audio content.',
            SUMMARY:               '@embed@ for audio %s have alternative',
            TARGET_RESOURCES_DESC: '@embed@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:          'Add caption or text transcript to @embed@ element.',
              FAIL_P:          'Add a caption or text transcript to each of the %N_F @embed@ elements without captions or transcripts.',
              MANUAL_CHECK_S:  'Check if the @embed@ element is audio only content.  If it is audio only make sure it has either a caption or text transcript of the audio content.',
              MANUAL_CHECK_P:  'Check if any of the %N_MC @embed@ elements are audio only. If any are audio only make sure they have either a caption or text transcript of the audio.',
              HIDDEN_S:        'The @embed@ element that is hidden was not analyzed for accessible audio.',
              HIDDEN_P:        'The %N_H @embed@ elements that are hidden were not analyzed for accessibile audio.',
              NOT_APPLICABLE:  'No @embed@ elements found on this page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@embed@ element references text transcript.',
              ELEMENT_FAIL_1:   'Add captions or text transcript to @embed@ element.',
              ELEMENT_MC_1:     'Verify the @embed@ element has synchronous captions.',
              ELEMENT_MC_2:     'Verify the @embed@ element only renders audio only, if it is audio only verify that it has captions or text transcript.',
              ELEMENT_HIDDEN_1: 'The @object@ element is hidden and was not evaluated.'
            },
            PURPOSE: [
              'Captions and text transcripts provide a means for people cannot hear the audio to understand the audio content.',
              'Some types of learning disabilities affect speech perception, captions and text transcripts provide an alternative way to understand the audio content.',
              'When the language of the audio is different than the native language of the listener, captions and text transcripts support the listner in understanding the audio content.'
            ],
            TECHNIQUES: [
              'Use the @audio@ element instead of the @embed@ element for audio only content, since the @audio@ element provides better support for captions and text transcripts.',
              'Use @aria-describedby@ attribute to point to a text description of the audio only content.'
            ],
            MANUAL_CHECKS: [
              'Check the web page for a link to a text transcript of the audio, or if the transcript is part of the page rendering the audio.',
              'Check the media player for a button to turn on and off captions',
              'When captions are enabled on the media player, check to make sure the captions visible and represent the speech and sounds heard on the audio.',
              'In some cases "open" captions might be used, this means the captions are alway "on" as part of the video.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The embed element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-embed-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        },
        AUDIO_4: {
            ID:                    'Audio 4',
            DEFINITION:            'Media content with audio that automatically starts playing when the page loads and lasts longer than 3 seconds %s provide a means for the user able to stop, pause or mute the audio content.',
            SUMMARY:               'Pause, stop or mute audio',
            TARGET_RESOURCES_DESC: 'Content that is used to auto play media that includes audio content',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify that there is no media content that plays automatically and includes audio content that lasts longer than 3 seconds.  If the audio content lasts longer than 3 seconds, verify the user can pause, stop or mute the audio.',
              MANUAL_CHECK_P:     'Verify that there is no media content that plays automatically and includes audio content that lasts longer than 3 seconds.  If the audio content lasts longer than 3 seconds, verify the user can pause, stop or mute the audio.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1:   'Verify that there is no media content that plays automatically and includes audio content that lasts longer than 3 seconds.  If the audio content lasts longer than 3 seconds, verify the user can pause, stop or mute the audio.'
            },
            PURPOSE:        [ 'Audio content interferes with people using speech based assistive technologies like screen readers.'
                            ],
            TECHNIQUES:     [ 'Remove or disable the auto playing of media that includes audio content.',
                              'Provide a means to pause, stop or mute the audio content.',
                              'Use cookies to perserve the user peference of pausing, stopping or muting the audio content.'
                            ],
            MANUAL_CHECKS:  [ 'Verify that there is no media content that plays automatically and includes audio content that lasts longer than 3 seconds.  If the audio content lasts longer than 3 seconds, verify the user can pause, stop or mute the audio.'
                            ],
            INFORMATIONAL_LINKS: [{ type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                               title: 'WCAG 2.0 Success Criterion 1.4.2 Audio Control',
                               url:   'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio'
                             },
                             { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                               title: 'How to meet Success Criterion 1.4.2 Audio Control',
                               url:   'https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-visual-audio-contrast-dis-audio'
                             }
                            ]
        }
    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
      BYPASS_1: {
            ID:                    'Bypass 1',
            DEFINITION:            'Provide a keyboard-supported means of bypassing blocks of content, such as navigation menus and page headers, to get to the main content of the page.',
            SUMMARY:               'Skip to main content link',
            TARGET_RESOURCES_DESC: '@a@ and @a[button]@',
            RULE_RESULT_MESSAGES: {
              FAIL_S :         'Provide a valid target for the "skip to main content" link.',
              FAIL_P :         'Provide a valid target for the "skip to main content" link.',
              MANUAL_CHECK_S:  'Verify that the first link on the page is a "skip to main content" link and that the target of the skip link is a focusable element.',
              MANUAL_CHECK_P:  'Verify that the first link on the page is a "skip to main content" link and that the target of the skip link is a focusable element.',
              HIDDEN_S:        'One link that is hidden was not evaluated.',
              HIDDEN_P:        '%N_H links that are hidden were not evaluated.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '"SkipTo" menu button provides navigation to main and navigation landmarks and headings on the page.',
              ELEMENT_PASS_2:   'Link references a target on the page; verify that the target is focusable and at the start of the main content of the page.',
              ELEMENT_PASS_3:   'Target of link; verify that it is at the start of the main content of the page.',
              ELEMENT_FAIL_1:   'Link does not reference a valid target on the page.',
              ELEMENT_MC_1:     'Verify the target of "skip to main content" link is a focusable element.',
              ELEMENT_HIDDEN_1: 'Link is hidden from assistive technologies and was not evaluated.',
              PAGE_PASS_1:      'Page includes a link or "SkipTo" script that provides a means of skipping to the main content of the page.',
              PAGE_FAIL_1:      'Link does not reference a valid target on the page.',
              PAGE_MC_1:        'Verify that that the target of the "skip to main content" link is focusable.',
              PAGE_MC_2:        'Verify that the page provides a link or other means of skipping to the main content of the page.'
            },
            PURPOSE: [
              'Most pages of websites typically have navigation menus, page headers and other repeated content before the main content of the page.',
              'For keyboard-only and screen reader users, a link or other means of skipping these types of content blocks makes it easy to go directly to the main content of the page, without first having to tab through the repeated content.'
            ],
            TECHNIQUES: [
              'Make the first link on the page an internal link that references a valid target element at the beginning of the main content of the page.',
              'The @id@ attribute is preferred method to identify the target element for the "Skip to main content" link.',
              'To make any target element focusable, add @tabindex="-1"@ to the element. If the target is an @a@ element, adding @tabindex="-1"@ will remove it from the tab order.',
              'If you use an @h1[id="main"]@ element as the target of the "Skip to main content" link, most screen readers will read the heading level and content when the user activates the skip to link.',
              'Use the "SkipTo" script, main and navigation landmarks and headings (H1-H2) to enable keyboard navigation from the "SkipTo" menu to all major sections of a page, including main content.',
              'The @name@ attribute can be used if the target is an @a@ element and is focusable (e.g. tabindex or non-empty @href@ value), but this technique is discouraged, since the @name@ attribute is being deprecated in HTML5.'
            ],
            MANUAL_CHECKS: [
              'Using only the keyboard, use the link or "SkipTo" menu to move focus to the main content of the page.',
              'After moving focus to the main content, the next tab should move you to the first link, form control or other interactive element after the main content.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 12.2 The A element',
                url:   'https://www.w3.org/TR/html4/struct/links.html#edef-A'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'WAI-ARIA 1.0 Authoring Practices: Using Tabindex to Manage Focus among Widgets',
                url:   'https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#focus_tabindex'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'SkipTo plugin by PayPal Accessibility Team',
                url:   'https://paypal.github.io/skipto/'
              }
            ]
      }
    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS) for color rules
    //
    rules: {
        COLOR_1: {
            ID:                    'Color 1',
            DEFINITION:            'Text content %s exceed Color Contrast Ratio (CCR) of 3.1 for large and/or bolded text and 4.5 for any other size or style of text.',
            SUMMARY:               'Text %s exceed CCR threshold',
            TARGET_RESOURCES_DESC: 'All elements with text content',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Change the foreground and background colors of the text element to meet the CCR threshold.',
              FAIL_P:   'Change the foreground and background colors of the %N_F text elements to meet the CCR threshold.',
              MANUAL_CHECK_S:     'One element requires manual checking for CCR threshold to the use of a background image.',
              MANUAL_CHECK_P:     '%N_MC elements require manual checking for CCR thrshold to the use of background images.',
              HIDDEN_S: 'The element with text content that is hidden was not analyzed for color contrast accessibility.',
              HIDDEN_P: 'The %N_H elements with text content that are hidden were not analyzed for color contrast accessibility.',
              NOT_APPLICABLE:  'No visible text content on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'CCR of %1 exceeds 4.5.',
              ELEMENT_PASS_2:   'CCR of %1 exceeds 3.1 for large or bolded text.',
              ELEMENT_FAIL_1:   'CCR of %1, adjust foreground and background colors to exceed 4.5.',
              ELEMENT_FAIL_2:   'CCR of %1 for large or bolded text, adjust foreground and background colors to exceed 3.1.',
              ELEMENT_MC_1:     'CCR of %1 is greater than 4.5, but background image may reduce color contrast.',
              ELEMENT_MC_2:     'CCR of %1 is less than or equal to 4.5, but background image may improve color contrast.',
              ELEMENT_MC_3:     'CCR of %1 is greater than 3.1 for large or bolded text, but background image may reduce color contrast.',
              ELEMENT_MC_4:     'CCR of %1 is less than or equal to 3.1 for large and bolded text, but background image may improve color contrast.',
              ELEMENT_HIDDEN_1: 'CCR was not tested since the text is hidden from assistive technologies.'
            },
            PURPOSE:        [ 'The higher the color contrast of text the more easy it is to read, especially for people with visual impairments.'
                            ],
            TECHNIQUES:     [ 'Change the foreground color to a more complementary color to the background color.',
                              'Change the background color to a more complementary color to the foreground color.',
                              'Remove background images or verify they do not compromise color contrast requirements.'
                            ],
            MANUAL_CHECKS:  [ 'Use graphic editing tools to analyze the color(s) of the background image and then recacluate the CCR with the range of colors in the background image.',
                              'Verify the range of colors that could be part of the background of text is have a CCR > 4.5.'
            ],
            INFORMATIONAL_LINKS: [{ type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                               title: 'WCAG 2.0 Success Criterion 1.4.3 Contrast (Minimum): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1',
                               url:   'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast'
                             },
                             { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                               title: 'How to meet Success Criterion 1.4.3 Contrast (Minimum): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1',
                               url:   'https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-visual-audio-contrast'
                             },
                            { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                              title: 'G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text',
                              url:   'https://www.w3.org/TR/WCAG20-TECHS/G17'
                            },
                            { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                              title: 'G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text',
                              url:   'https://www.w3.org/TR/WCAG20-TECHS/G18'
                            },
                            { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                              title: 'G148: Not specifying background color, not specifying text color, and not using technology features that change those default',
                              url:   'https://www.w3.org/TR/WCAG20-TECHS/G148'
                            },
                            { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                              title: 'G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast',
                              url:   'https://www.w3.org/TR/WCAG20-TECHS/G174'
                            }
                            ]
        },
        COLOR_2: {
            ID:                    'Color 2',
            DEFINITION:            'Color %s not be the only way to convey information on the page.',
            SUMMARY:               'Use of color',
            TARGET_RESOURCES_DESC: 'Any content on the page that refers to or is a specific color',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element on the page.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1: 'Verify color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element on the page.'
            },
            PURPOSE:        [ 'For people with color blindness and other forms of visual impairments will not be able to see colors or color differences.',
                              'This requirement also includes references to color of content on page to identify some type of information, there should be redundant labeling of the content, for example using text labels to also identify and refer to the information.'
                            ],
            TECHNIQUES:     [ 'Provide redundant text labels for content presented in color, it the color is presenting meaningful information.',
                              'Use background patterns to also identify information.'
                            ],
            MANUAL_CHECKS:  [ 'Verify the page does not use color alone to identify or refer to information on the page.'
                            ],
            INFORMATIONAL_LINKS: [{ type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                               title: 'WCAG 2.0 Success Criterion 1.4.1 Use of Color',
                               url:   'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color'
                             },
                             { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                               title: 'How to meet Success Criterion 1.4.1 Use of Color',
                               url:   'https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-visual-audio-contrast-without-color'
                             },
                            { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                              title: 'G14: Ensuring that information conveyed by color differences is also available in text',
                              url:   'https://www.w3.org/TR/WCAG20-TECHS/G14'
                            }
                            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        ERROR_1: {
            ID:                    'Error 1',
            DEFINITION:            'Form controls with invalid values %s provide information to assitive technologies that the values are invalid.',
            SUMMARY:               'Information on invalid values',
            TARGET_RESOURCES_DESC: '@textarea@, @select@ and @input@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Change the value of @aria-invalid@ property to @true@, on form control that is invalid and @aria-invalid="false"@.',
              FAIL_P:   'Change the value of @aria-invalid@ property to @true@, on %N_F form controls that are invalid and @aria-invalid="false"@.',
              MANUAL_CHECK_S:     'If the form control can be validated make sure it indicates invalid values when invalid.',
              MANUAL_CHECK_P:     'If the %N_MC form controls can be validated make sure they indicates invalid values when invalid.',
              HIDDEN_S: 'The control element that is hidden does not need to be tested for indicating invalid values.',
              HIDDEN_P: 'The %N_H control elements that are hidden do not need to be tested for indicating invalid values.',
              NOT_APPLICABLE:  'No form controls on this page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:       '@%1@ is invalid (i.e. validity.valid property of the control is "false") change the value of "@aria-invalid@ attribute from @false@ to @true@.',
              ELEMENT_FAIL_2:       '@%1@ is valid (i.e. validity.valid property of the control is "true") change the value of "@aria-invalid@ attribute from @true@ to @false@.',
              ELEMENT_MC_1: '@%1@ is invalid (i.e. validity.valid property of the control is "false"), verify the label contains information on the value being invalid or add the @aria-invalid="true"@ attribute to the control.',
              ELEMENT_MC_2: '@%1@ is being tested for validity (i.e. @pattern@ attribute is present), verify the label contains information on the validity or add the @aria-invalid@ attribute to inidcate the state of validity of the control.',
              ELEMENT_MC_3: 'Verify if the @%1@ is being validated, if it is being validated verify it implements a technique to indicate the state of validity.',
              ELEMENT_PASS_1:         '@%1@ is invalid (i.e. validity.valid property of the control is "false") and the "@aria-invalid=true@" has been set.',
              ELEMENT_PASS_2:         '@%1@ is valid (i.e. validity.valid property of the control is "true") and the "@aria-invalid=false@" has been set.',
              ELEMENT_HIDDEN_1:       '%1 form control was not tested for indicating invalid values because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Users must be able to identify form control values which are invalid in order to successfully correct the values and submit the form.'
            ],
            TECHNIQUES: [
              'Add the text "invalid" to the label of the form control, the text can be placed off screen using CSS.',
              'Add the image to the label.  The image should be visible indicating an invalid value with the alt text \'invalid\'.',
              'Use @aira-invalid@ attribute to indicate the form control is invalid.'
            ],
            MANUAL_CHECKS: [
              'Enter invalid values into form controls that are validated and activate the validation event (i.e. form submission, change of focus...).',
              'For the form controls with invalid values check to make sure the technique for indicating the invalid value is present.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @label@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-LABEL'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: aria-invalid',
                url:   'https://www.w3.org/TR/wai-aria/#aria-invalid'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H44: Using label elements to associate text labels with form controls',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H44'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA21: Using Aria-invalid to Indicate An Error Field',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA21'
              }
            ]
        },
        ERROR_2: {
            ID:                    'Error 2',
            DEFINITION:            'If user input is required for a form control the @required@ or @aria-required@ attribute %s must used.',
            SUMMARY:               'Required form controls',
            TARGET_RESOURCES_DESC: '@textarea@ and @input[type="text"]@ elements, and ARIA textbox, gridcell and combobox widgets',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Update the form control with @aria-required="false"@ and the @required@ attributes to indicate the true required state of the control.',
              FAUL_P:         'Update the %N_F form controls with @aria-required="false"@ and the @required@ attributes to indicate the true required state of the control.',
              MANUAL_CHECK_S: 'If the form control is required, add the @required@ attribute or if HTML4 compatibility is required the @aria-required="true"@ attribute.',
              MANUAL_CHECK_P: 'If any of the %N_F form controls are required, add the @required@ attribute or if HTML4 compatibility is required the @aria-required="true"@ attribute.',
              HIDDEN_S:       'The form control element that is hidden does not need to be tested for being required.',
              HIDDEN_P:       'The %N_H form control elements that are hidden do not need to be tested for being required.',
              NOT_APPLICABLE: 'No form controls on this page that need testing for being required.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'If the @input[type="%1"]@ element with the attribute @aria-required="false"@ which conflicts with presence of the @required@ attribute.',
              ELEMENT_PASS_1:   'If the @input[type="%1"]@ element has the @required@ attribute.',
              ELEMENT_PASS_2:   'If the @input[type="%1"]@ element has the @aria-required@ attribute.',
              ELEMENT_PASS_3:   'If the %1 element has the @required@ attribute.',
              ELEMENT_PASS_4:   'If the %1 element has @aria-required@.',
              ELEMENT_MC_1:     'If the @input[type="%1"]@ element is a required, add the @required@ attribute to the control.',
              ELEMENT_MC_2:     'If the %1 element is a required, add the @required@ attribute to the control.',
              ELEMENT_HIDDEN_1: 'The @input[type="%1"]@ element was not tested because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: 'The @%1@ element was not tested because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Users benefit from information being informed if a input to a control is required for form submission or task completion.'
            ],
            TECHNIQUES: [
              'To identify a required form control, add the HTML5 @required@ attribute to the standard form controls.',
              'If compatibility with HTML4 standards or legacy browsers and assistve technologies, you can also use @aria-required="true"@ to indicate a form control is required.',
              'Use the @required@ attribute (or the @aria-required@ if used) as the CSS selector for visually styling the form control as required.  This ensures that the visual state stays synchronized with the accessibility API state used by assistive technologies.',
              'The only reason to support both @required@ and @aria-required@ on the same form control is to support legacy browsers and assistive technologies.  This required extra care to make sure the two values do not conflict.  If they do conflict the @required@ attribute will override the @aria-required@ property value.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: required attribute',
                url:   'https://www.w3.org/TR/html5/forms.html#attr-input-required'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: aria-required',
                url:   'https://www.w3.org/TR/wai-aria/#aria-required'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA2: Identifying a required field with the aria-required property',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA2'
              }
            ]
        },
        ERROR_3: {
            ID:                    'Error 3',
            DEFINITION:            'If user input is required for a widget the @aria-required@ attribute %s must used.',
            SUMMARY:               'Required widgets',
            TARGET_RESOURCES_DESC: '@textarea@ and @input[type="text"]@ elements, and ARIA textbox, gridcell and combobox widgets',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'If the widget is required use @aria-required="true"@ attribute.',
              MANUAL_CHECK_P: 'If any of the %N_F widgets are required, use the @aria-required="true"@ attribute.',
              HIDDEN_S:       'The widget that is hidden does not need to be tested for being required.',
              HIDDEN_P:       'The %N_H widget elements that are hidden do not need to be tested for being required.',
              NOT_APPLICABLE: 'No widgets on this page that need testing for being required.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @%1[role="%2"]@ widget is identified as required though the use of @aria-required="true"@ attribute.',
              ELEMENT_MC_1:     'If the @%1[role="%2"]@ widget is a required, add the @aria-required="true"@ attribute to the control.',
              ELEMENT_HIDDEN_1: 'The @%1[role="%2"]@ element was not tested because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Users benefit from information being informed if a input to a widget is required for form submission or task completion.'
            ],
            TECHNIQUES: [
              'To identify a required widget, add the ARIA @aria-required="true"@ attribute to the widget.',
              'Use the @aria-required@ attribute as the CSS selector for visually styling the widget as required.  This ensures that the visual state stays synchronized with the accessibility API state used by assistive technologies.',
              'Note the the HTML5 @required@ attribute CANNOT be used to indicate that a widget is required, the @requiured@ attribute can only be used on HTML5 defined form controls.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: aria-required',
                url:   'https://www.w3.org/TR/wai-aria/#aria-required'
              }
            ]
        },
        ERROR_4: {
            ID:                    'Error 4',
            DEFINITION:            'When input error is automatically detected and suggestions are automatically known, the suggestions %s be provided to the user (some exceptions).',
            SUMMARY:               'Error correction suggestions',
            TARGET_RESOURCES_DESC: '@textarea@ and @input[type="text"]@ elements, and ARIA textbox, gridcell and combobox widgets',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'If the form control element or widget can automatically detect errors and suggest corrections, make sure that at least one accessible technique is used to present the suggestion to the user.',
              MANUAL_CHECK_P: 'If the %N_MC form control elements and/or widgets can automatically detect errors and suggest corrections, make sure that at least one accessible technique is used to present the suggestion to the user.',
              HIDDEN_S:       'The form control element and/or widget that is hidden does not need to be tested for accessible suggestions.',
              HIDDEN_P:       'The %N_H form control elements and/or widgets that are hidden does not need to be tested for accessible suggestions.',
              NOT_APPLICABLE: 'No form controls or widgets on this page that typically can provide suggestions.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:     'If the @input[type="%1"]@ element can automatically detect errors and suggest corrections, use at least one accessible technique to provide the information to users.',
              ELEMENT_MC_2:     'If the @%1@ element can automatically detect errors and suggest corrections, use at least one accessible technique to provide the information to users.',
              ELEMENT_MC_3:     'If the @%1@ widget can automatically detect errors and suggest corrections, use at least one accessible technique to provide the information to users.',
              ELEMENT_HIDDEN_1: 'The @input[type="%1"]@ element was not tested because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: 'The @%1@ element was not tested because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_3: 'The @%1@ widget was not tested because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Users benefit from being informed of invalid input and on how to correct invalid input.'
            ],
            TECHNIQUES: [
              'Add @aria-describedby@ reference on the form control or widget to the suggestion information.',
              'Use a popup list to provide suggested values for valid input.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @label@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-LABEL'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: aria-invalid',
                url:   'https://www.w3.org/TR/wai-aria/#aria-invalid'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H44: Using label elements to associate text labels with form controls',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H44'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA1.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA19: Using ARIA role=alert or Live Regions to Identify Errors',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA19.html'
              }             ]
        },
        ERROR_5: {
            ID:                    'Error 5',
            DEFINITION:            'To prevent errors when input includes legal and/or financial transactions (e.g. online shopping, banking), the user %s be able to either reverse, check or confirm the data before the transaction is finalized.',
            SUMMARY:               'Prevent errors',
            TARGET_RESOURCES_DESC: 'Forms that contain legal or financial transactions including online purchases',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'If the form control or widget on this page are used for legal and/or financial transactions, make sure the actions are either reversible or requires the user to confirm the information before the transaction is finalized.',
              MANUAL_CHECK_P: 'If the %N_MC form controls and widgets on this page are used for legal and/or financial transactions, make sure the actions are either reversible or requires the user to confirm the information before the transaction is finalized.',
              HIDDEN_S:       'The form control element and/or widget that is hidden does not need to be tested for accessible suggestions.',
              HIDDEN_P:       'The %N_H form control elements and/or widgets that are hidden does not need to be tested for accessible suggestions.',
              NOT_APPLICABLE: 'No form controls or widgets on this page that typically can provide suggestions.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:     'If the form control or widget is used as part of a legal and/or financial transaction, make sure the information this control provides can be changed and/or confirmed before the transaction is finalized.',
              PAGE_MC_1:        'If form controls and widgets on this page are used for legal and/or financial transactions, make sure the actions are either reversible or requires the user to confirm the information before the transaction is finalized.',
              ELEMENT_HIDDEN_1: 'The form control or widget was not tested because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The intent of this rule is to help users with disabilities avoid serious consequences as the result of a mistake when performing an action that cannot be reversed. For example, purchasing non-refundable airline tickets or submitting an order to purchase stock in a brokerage account are financial transactions with serious consequences.'
            ],
            TECHNIQUES: [
              'Provide a confirmation page showing all the user inputs before for final submission of the information for modification of user controlled data on a server.',
              'Provide a means for the user to review previous submissions and give them the ability to cancel or modify previous submissions of legal or financial information.',
              'Use a confirmation checkbox in addition to the submit button, to require the user to confirm the data is valid before submission.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'Understanding SC 3.3.4 Error Prevention (Legal, Financial, Data.)',
                url:   'https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G164'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G98: Providing the ability for the user to review and correct answers before submitting.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G98'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G155: Providing a checkbox in addition to a submit button.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G155'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G99: Providing the ability to recover deleted information.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G99'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G168: Requesting confirmation to continue with selected action.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G168'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G155: Providing a checkbox in addition to a submit button.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G155'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G98: Providing the ability for the user to review and correct answers before submitting.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G98'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: ' G168: Requesting confirmation to continue with selected action.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G168'
              }
            ]
        }
    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        FOCUS_1: {
            ID:                    'Focus 1',
            DEFINITION:            'The sequential focus order of links, form controls, embedded apps and widgets %s be meaningful.',
            SUMMARY:               'Focus order %s be meaningful',
            TARGET_RESOURCES_DESC: '@a@, @area@, @input@, @textarea@ and @select@ elements and elements with widget roles with @tabindex@ values',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Check the "tab" focus order of the page to make sure the sequence of focusable elements is meaningful.',
              MANUAL_CHECK_P:     'Check the "tab" focus order of the page to make sure the sequence of focusable elements is meaningful.',
              HIDDEN_S: 'The link, form control, embedded app or widget element that is hidden does not need to be tested for focus order.',
              HIDDEN_P: 'The %N_H links, form controls, embedded apps and/or widgets that are hidden do not need to be tested for focus order.',
              NOT_APPLICABLE:  'No or only one focusable element on the page'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1:        'Use the "tab" key to check the focus order of the %1 interactive elements on the page (i.e. links, form controls, ...).',
              PAGE_MC_2:        'Use the "tab" key to check the focus order of the %1 interactive elements on the page (i.e. links, form controls, ...); NOTE: %2 other interactive elements on the page have been removed from the tab order by setting the @tabindex@ value to less than 0.',
              ELEMENT_MC_1:     '%1 element with @role@="%2" is part of the sequential focus order manual check.',
              ELEMENT_MC_2:     '%1 element is part of the sequential focus order manual check.',
              ELEMENT_MC_3:     '%1 element with @role@="%2" has a @tabindex@="%2", so it is NOT part of the sequential focus oarder of the page.',
              ELEMENT_MC_4:     '%1 element has a @tabindex@="%2", so it is NOT part of the sequential focus order of the page.',
              ELEMENT_HIDDEN_1: '%1 element with @role@="%2" is hidden, so NOT a part of the sequential focus order of the page.',
              ELEMENT_HIDDEN_2: '%1 element is hidden, so NOT a part of the sequential focus order of the page.'
            },
            PURPOSE: [
              'The "tab" key is the primary key many browsers use to navigate the interactive elements on a web page.',
              'The sequential order of the elements receiving focus can help a user understand the features on a web page.',
              'The usability of frequently used or important interactive features of a web page can be improved by moving them to the beginning of the focus sequence.'
            ],
            TECHNIQUES: [
              'Use document order to place related interactive items in a meaningful sequence.',
              'The @tabindex@ atttribute value (i.e. values greater than 0) can be used to change the sequence of focusable elements in a web page or make non-interactive elements part of the "tab" order of the page.',
              'A @tabindex@ values of less than 0 remove redundent interactive elements from the sequential focus order.'
            ],
            MANUAL_CHECKS: [
              'Use the "tab" key to move focus through the links, form controls, embedded applications and widgets on the page.',
              'Does the sequence of elements receiving focus make sense (i.e. related items on the page are navigated sequentially as a group).'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G59: Placing the interactive elements in an order that follows sequences and relationships within the content',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G59'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H4: Creating a logical tab order through links, form controls, and objects',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H4'
              }
            ]
        },
        FOCUS_2: {
            ID:                    'Focus 2',
            DEFINITION:            'The element with keyboard focus %s have a visible focus style that is different from the non-focus state.',
            SUMMARY:               'Focus %s be visible',
            TARGET_RESOURCES_DESC: '@a@, @area@, @input@, @textarea@ and @select@ elements and elements with widget roles with @tabindex@ values',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Use the "tab" key to move focus between links, form controls, embedded apps and widgets and check the visibility of focus styling for each element as it receives focus.',
              MANUAL_CHECK_P:     'Use the "tab" key to move focus between links, form controls, embedded apps and widgets and check the visibility of focus styling for each element as it receives focus.',
              HIDDEN_S: 'The link, form control, embedded app or widget element that is hidden does not need to be tested for focus order.',
              HIDDEN_P: 'The %N_H links, form controls, embedded apps and/or widgets that are hidden do not need to be tested for focus order.',
              NOT_APPLICABLE:  'No focusable elements on the page'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1:        'Use keyboard commands to check the keyboard focus styling of the %1 interactive elements on the page (i.e. links, form controls, ...).',
              PAGE_MC_2:        'Use keyboard commands to check the keyboard focus styling of the %1 interactive elements on the page (i.e. links, form controls, ...); NOTE: %2 interactive elements are hidden.',
              ELEMENT_MC_1:     '%1 element with @role@="%2" is part of the keyboard focus styling manual check.',
              ELEMENT_MC_2:     '%1 element is part of the keyboard focus styling manual check.',
              ELEMENT_HIDDEN_1: '%1 element with @role@="%2" is hidden, so is not visible for changing the focus styling.',
              ELEMENT_HIDDEN_2: '%1 element is hidden, so is not visible for changing the focus styling.'
            },
            PURPOSE: [
              'Many browsers don\'t provide a prominent or consistent visible keyboard focus styling for interactive elements, making it difficult for users to identify and track the element with keyboard focus.',
              'Author defined visible keyboard focus style makes it easier for users to know which interactive element has keyboard focus and provides more consistent user experience between browsers and operating systems.'
            ],
            TECHNIQUES: [
              'Use CSS psuedo element selector @:focus@ to change the styling of elements with keyboard focus.',
              'Use @focus@ and @blur@ event handlers on checkboxes and radio buttons to change the styling of not only the form control, but also its label text to make it easier to see.',
              'Styling changes should include creating a border around the interactive element and its label, typically using the CSS @border@ or @outline@ properties.',
              'For consistent look and feel to the website it is often useful for the focus and hover styles to be the same or similar.'
            ],
            MANUAL_CHECKS: [
              'Use the the keyboard (i.e. typically he "tab" key, but in the case of widgets other keys) to move focus through the links, form controls, embedded applications and widgets on the page.',
              'Check if the element with keyboard focus is clearly visible for all focusable elements on the page as you move focus between elements, and that it changes more than just color (i.e. border/outline around element with focus).',
              'Test keyboard focus styling using more than one browser and operating system, since there is a wide varability of between operating systems and browsers for styling keyboard focus.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'C15: Using CSS to change the presentation of a user interface component when it receives focus ',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/C15'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G195: Using an author-supplied, highly visible focus indicator',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G195'
              }
            ]
        },
        FOCUS_3: {
            ID:                    'Focus 3',
            DEFINITION:            'The target of a link %s result in focus the content the window if the target results in more than one window opening.',
            SUMMARY:               'Target focus %s be in content window',
            TARGET_RESOURCES_DESC: '@a@, @area@ and @role="link"@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Check the link to make sure that if the link opens more than one window that the focus is in the content window.',
              MANUAL_CHECK_P:     'Check the %N_MC links to make sure that if any of the links opens more than one window that the focus is in the content window.',
              HIDDEN_S: 'The link element that is hidden does not need to be tested for content focus.',
              HIDDEN_P: 'The %N_H link elements that are hidden do not need to be tested for content focus.',
              NOT_APPLICABLE:  'No link elements on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'If the target of the link opens multiple windows (i.e. typically advertisements or other promotional information) make sure keyboard focus is on the content window.',
              ELEMENT_HIDDEN_1:       '%1 element is hidden, so cannot open any new windows.'
            },
            PURPOSE: [
              'User\'s can become disoriented if the focus causes unpredicatable actions, including new URLs and popup windows for advertisements or promotions.'
            ],
            TECHNIQUES: [
              'Do not link to URLs that open multiple windows and do not manage the focus to be in the content windoow the user was expecting by following the link.'
            ],
            MANUAL_CHECKS: [
              'After selecting a link and if it opens multiple windows, make sure the keyboard focus is in the content window.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G200: Opening new windows and tabs from a link only when necessary',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G200'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G201: Giving users advanced warning when opening a new window',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G201'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F52'
              }
            ]
        },
        FOCUS_4: {
            ID:                    'Focus 4',
            DEFINITION:            '@select@ elements with @onchange@ event handler %s not automatically change the user\'s context when keyboard focus moves between options.',
            SUMMARY:               '@select@ %s not change context',
            TARGET_RESOURCES_DESC: '@a@, @area@ and @role="link"@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Check the @select@ element to make sure that when keyboard focus moves between options does not cause a change in context (e.g. moving to a new URL or focus being moved from the @select@ element).',
              MANUAL_CHECK_P:     'Check the %N_MC @select@ elements to make sure that when keyboard focus moves between options in each control does not cause a change in context (e.g. moving to a new URL or focus being moved from the @select@ element).',
              HIDDEN_S: 'The @select@ element that is hidden does not need to be tested for automatically changing user context.',
              HIDDEN_P: 'The %N_H @select@ elements that are hidden do not need to be tested for automatically changing user context.',
              NOT_APPLICABLE:  'No @select@ elements on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'Check to make sure moving keyboard focus between options in the @select@ box does not move focus from the list of options.',
              ELEMENT_HIDDEN_1:       '@select@ element is hidden.'
            },
            PURPOSE: [
              'User\'s can become disoriented if the focus changes cause unpredicatable actions.',
              'When the user is using the kyboard to explore @select@ box options, the focus must stay on the options, until the user selects one of the options.'
            ],
            TECHNIQUES: [
              'Do not use @onchange@ event handlers on @select@ elements.',
              'Use selections should be made using the enter key.'
            ],
            MANUAL_CHECKS: [
              'Move focus to the @selection@ box and use the keyboard to move the focus between options, check to make sure the focus changes are not causing the context to change (i.e. focus movig to a new window or focus moving from the current option in the select box).'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G200: Opening new windows and tabs from a link only when necessary',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G200'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G201: Giving users advanced warning when opening a new window',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G201'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F52'
              }
            ]
        },
        FOCUS_5: {
            ID:         'Focus 5',
            DEFINITION: 'Forms %s use @input[type="submit"]@ or other form control buttons for submitting forms.',
            SUMMARY:    'Forms submitted using buttons',
            TARGET_RESOURCES_DESC: '@input[type="submit"]@, @input[type="button"]@, @input[type="image"]@, @button@, @[role="button"]@',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that the form has uses a button to submit the form.',
              MANUAL_CHECK_P: 'Verify that each of the %N_MC forms has a button used to submit the form.',
              FAIL_S:    'No button elements found for submitting the form.',
              FAIL_P:    'No button elements found for submitting %N_MC forms.',
              HIDDEN_S:  'The form that is hidden was not evaluated.',
              HIDDEN_P:  'The %N_H forms that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No form controls on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: 'The form has an @input[type="submit"]@.',
              ELEMENT_PASS_2: '@input[type="submit"]@ is used for form submission.',
              ELEMENT_FAIL_1: 'The form has no button elements.',
              ELEMENT_MC_1: 'Verify that the button element contained in the form can be used for form submission.',
              ELEMENT_MC_2: 'Verify that at least one of the %1 button elements contained in the form can be used for form submission.',
              ELEMENT_MC_3: 'Verify if the @input[type="%1"]@ element can be used to  submit the form.',
              ELEMENT_MC_4: 'Verify if the @button@ element can be used to  submit the form.',
              ELEMENT_MC_5: 'Verify if the @%1[role="button"]@ element can be used to  submit the form.',
              ELEMENT_HIDDEN_1: '@form@ element was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@input[type="submit"]@ element was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_3: '@input[type="%1"]@ element was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_4: '@button@ element was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_5: '@%1[role="button"]@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Using a submit button allows users to easily identify and control how to  submit form information to a server for processing.  Forms that are submitted through changes in focus or selection may result in users prematurely submitting the form or not being aware they submitted the form.'
            ],
            TECHNIQUES: [
              'The preferred technique for submitting forms is with the use of the input[type="submit"] form control.',
              'An alternative techniques include using other HTML form control elements, including @input[type="button"]@, @input[type="image"]@ or @button@ elements with an accessible name indicating that the button is for submitting form information.',
              'In the case when a non-form control element (e.g. @a@ or @div@ element) is being used to submit the form, the element can use ARIA [role="button"] attribute with the accessible name indicating that the button is for submitting form information.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @input[type="submit"]@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-INPUT'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H32: Providing submit buttons',
                url:   'https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H32'
              }
            ]
        },
        FOCUS_6: {
            ID:         'Focus 6',
            DEFINITION: '@checkbox@ and @radio@ buttons %s not automatically change context.',
            SUMMARY:    '@checkbox/radio@ buttons changing context.',
            TARGET_RESOURCES_DESC: '@input[type="checkbox"]@ and @input[type="radio"]@',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that the @checkbox@ or @radio@ button does not automatically change context.',
              MANUAL_CHECK_P: 'Verify that %N_MC checkbox@ and/or @radio@ buttons do not automatically change context.',
              HIDDEN_S: 'The @checkbox@ or @radio@ button that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @checkbox@ or @radio@ buttons that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @checkbox@ or @radio@ buttons on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:     'Verify that the @input[type="%1"]@ does not automatically change context when the control is checked or unchecked.',
              ELEMENT_MC_2:     'Verify that the @%1[role="%2"]@ does not automatically change context when the control is checked or unchecked.',
              ELEMENT_HIDDEN_1: '@input[type="%1"]@ element was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: ' @%1[role="%2"]@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Users do not expect that checking or unchecking a radio button or checkbox will cause focus to move to another a page or section of the current page they are on.'
            ],
            TECHNIQUES: [
              'Remove or modify the event handlers to change the behavior to not automatically change context when the checkbox or radio button is checked or unchecked.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @input[type="checkbox"]@ and @input[type="radio"]@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-INPUT'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: Checkbox Role',
                url:   'https://www.w3.org/TR/wai-aria/#checkbox'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: Radio Role',
                url:   'https://www.w3.org/TR/wai-aria/#radio'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H32: Providing submit buttons',
                url:   'https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H32'
              }
            ]
        }
    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        CONTROL_1: {
            ID:         'Control 1',
            DEFINITION: 'Each @input@, @select@, @textarea@, @progress@, @meter@ and @output@ element %s have an accessible label.',
            SUMMARY:    'Form controls %s have labels',
            TARGET_RESOURCES_DESC: '@input@, @select@, @textarea@, @progress@, @meter@ and @output@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add a label to the form control element that is unlabelled.',
              FAIL_P:   'Add labels to the %N_F form control elements that are unlabelled.',
              NOT_APPLICABLE: 'No @input@, @select@, @textarea@, @progress@, @meter@ or @output@ elements on the page.',
              HIDDEN_S: 'One form control element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H form control elements that are hidden were not evaluated.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ control has the label: \'%2\'',
              ELEMENT_FAIL_1:   'Add label to @%1@ control.',
              ELEMENT_HIDDEN_1: '@%1@ control was not tested because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A label associated with a form control ensures that information about the form control is spoken by screen readers when it receives focus.'
            ],
            TECHNIQUES: [
              'The preferred technique for labeling form controls is by reference: First, include an @id@ attribute on the form control to be labeled; then use the @label@ element with a @for@ attribute value that references the @id@ value of the control.',
              'An alternative technique is to use the @label@ element to encapsulate the form control element.',
              'In special cases, the @aria-labelledby@ attribute can be used on the form control element to reference the id(s) of the elements on the page that describe its purpose.',
              'In special cases, the @aria-label@ attribute can be used on the form control element to provide an explicit text description of its purpose.',
              'In special cases, the @title@ attribute on the form control element can be used to provide an explicit text description of its purpose.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @label@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-LABEL'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-label'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @title@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H44: Using label elements to associate text labels with form controls',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H44'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H65: Using the title attribute to identify form controls when the label element cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H65'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H71: Providing a description for groups of form controls using fieldset and legend elements',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H71'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA Best Practices: Labels for Form Controls Overview',
                url:   'https://html.cita.illinois.edu/nav/form/'
              }
            ]
        },
        CONTROL_2: {
            ID:         'Control 2',
            DEFINITION: 'Every @input@ type @image@ element %s have an @alt@ or @title@ attribute with content.',
            SUMMARY:    'Image button %s have alt. content',
            TARGET_RESOURCES_DESC: '@input[type="image"]@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add an @alt@ attribute to the @input[type="image"]@ element that does not have alt. content.',
              FAIL_P:   'Add an @alt@ attribute to the %N_F @input[type="image"]@ elements that do not have alt. content.',
              HIDDEN_S: 'The @input@ type @image@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @input@ type @image@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @input[type="image"]@ elements on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: 'Image button has an accessible name: %1',
              ELEMENT_FAIL_1: 'Add @alt@ attribute with text content.',
              ELEMENT_FAIL_2: 'Add text content to the @alt@ attribute.',
              ELEMENT_HIDDEN_1: 'Image button was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Alternate content associated with an image-based form control ensures that information about the control is spoken by screen readers when it receives focus.'
            ],
            TECHNIQUES: [
              'The @alt@ attribute is the preferred and most commonly used way to provide an accessible label for @input@ type @image@ elements.',
              'In special cases, the @title@ attribute can be used on the @input@ type @image@ element to provide an explicit text description of its purpose.',
              'In special cases, the @aria-labelledby@ attribute can be used on the form control element to reference the id(s) of the elements on the page that describe its purpose.',
              'In special cases, the @aria-label@ attribute can be used on the form control element to provide an explicit text description of its purpose.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @input[type=image]@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#adef-type-INPUT'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-label'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @title@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H36: Using alt attributes on images used as submit buttons',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H36'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA Best Practices: Labels for Form Controls Overview',
                url:   'https://html.cita.illinois.edu/nav/form/'
              }
            ]
        },
        CONTROL_3: {
            ID:         'Control 3',
            DEFINITION: 'A related group of radio buttons %s have a grouping label.',
            SUMMARY:    'Radio buttons %s have grouping label',
            TARGET_RESOURCES_DESC: '@input[type="radio"]@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add a @fieldset@ container with a @legend@ label for the @input[type="radio"]@ element NOT in a grouping container.',
              FAIL_P:   'Add a @fieldset@ container with a @legend@ label for each group of the %N_F @input[type="radio"]@ elements NOT in a grouping container.',
              HIDDEN_S: 'The @input[type="radio"]@ that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @input[type="radio"]@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @input[type="radio"]@ elements on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: 'Radio button has grouping label "%1" from @fieldset/legend@ elements.',
              ELEMENT_PASS_2: 'Radio button has grouping label "%2" from @%1[role=group]@ element.',
              ELEMENT_FAIL_1: 'Add a @fieldset@ element with a @legend@ element to provide a grouping label for the radio buttons.',
              ELEMENT_FAIL_2: 'The @fieldset@ element has a missing or empty @legend@ element.',
              ELEMENT_FAIL_3: 'The @%1[role=group]@ grouping element does not have an accessible name.',
              ELEMENT_HIDDEN_1: 'Radio button was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Radio buttons that provide a set of related options need grouping information and a common grouping label to provide the overall context for those options.',
              'Screen readers treat grouping labels differently than standard labels, typically speaking the grouping label only once when focus is first moved to one the groups controls.'
            ],
            TECHNIQUES: [
              'The @fieldset@/@legend@ element combination is the preferred technique for providing a grouping information and label for a related group of radio buttons.',
              'If the @fieldset@/@legend@ technique cannot be used, use @[role=group]@ on a container element that contains the related radio buttons, and the container element must have an accessible name representing the grouping label.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @fieldset@ and @legend@ elements',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-FIELDSET'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @group@ role',
                url:   'https://www.w3.org/TR/wai-aria/roles#group'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H71: Providing a description for groups of form controls using fieldset and legend elements',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H71'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA: Example 7: Fieldset/Legend for providing a grouping label for radio buttons',
                url:   'https://html.cita.illinois.edu/nav/form/radio/index.php?example=6'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'IBM Web checklist: HTML example 6',
                url:   'https://www-03.ibm.com/able/guidelines/web/webstructure.html'
              }
            ]
        },
        CONTROL_4: {
            // TODO: Question: What if button only contains img elements with alt. text?
            ID:         'Control 4',
            DEFINITION: '@button@ elements %s have text content.',
            SUMMARY:    '@button@s %s have content',
            TARGET_RESOURCES_DESC: '@button@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add descriptive text content to the @button@ element.',
              FAIL_P:   'Add descriptive text content to %N_F @button@ elements.',
              HIDDEN_S: 'The @button@ that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @button@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @button@ elements on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: '@button@ element has text content.',
              ELEMENT_FAIL_1: 'Add text content to the @button@ element.',
              ELEMENT_HIDDEN_1: '@button@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The text content of a @button@ element is used as its label, and ensures that the purpose of the button is spoken by screen readers when the button receives focus.'
            ],
            TECHNIQUES: [
              'The accessible label of a @button@ element includes its text content along with the @alt@ attribute content of any image elements it contains.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @button@ elements',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-BUTTON'
              }
            ]
        },
        CONTROL_5: {
            ID:         'Control 5',
            DEFINITION: 'All @id@ attribute values %s be unique on the page.',
            SUMMARY:               '@id@ %s be unique',
            TARGET_RESOURCES_DESC: 'Form control elements with @id@ attributes',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update elements with @id@ attributes so that each attribute value is unique.',
              FAIL_P:   'Update elements with @id@ attributes so that each attribute value is unique.',
              HIDDEN_S: 'The element with an @id@ attribute that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H elements with @id@ attributes that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No elements or only one element with an @id@ attribute on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: '\'%1\' @id@ attribute value is unique.',
              ELEMENT_FAIL_1: '@%1@ element shares the \'%2\' @id@ value with another element on the page.',
              ELEMENT_FAIL_2: 'The hidden @%1@ element shares the \'%2\' @id@ value with another element on the page.',
              ELEMENT_HIDDEN_1: '%1 element with @id@ attribute was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              '@id@ attribute values on form control elements can be used as references by @label@ elements. When @id@ attribute values on the page are not unique, form controls may be incorrectly labelled.',
              '@aria-labelledby@ and @aria-describedby@ atributes also depend on unique @id@ values for labeling and adding descriptions to form controls.'
            ],
            TECHNIQUES: [
              'If a form control defines an @id@ attribute, ensure that its value is unique on the page.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: @id@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-id'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F77'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H88: Using HTML according to spec',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H88'
              }
            ]
        },
        CONTROL_6: {
            ID:         'Control 6',
            DEFINITION: 'Each @label@ element using the @for@ attribute %s reference a form control on the page.',
            SUMMARY:    '@label@ %s reference control',
            TARGET_RESOURCES_DESC: '@label@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Change the @label@ element to use the @for@ attribute to label its form control.',
              FAIL_P:   'Change the %N_F @label@ elements to use the @for@ attribute to label their respective form controls.',
              MANUAL_CHECK_S: 'There is one form control being labeled by more than one labeling technique.',
              MANUAL_CHECK_P: 'There are %N_MC form controls being labeled by more than one labeling technique.',
              HIDDEN_S: 'The @label@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @label@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No visible @label@ elements with invalid @for@ references on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: '@label[for=%1]@ references a form control.',
              ELEMENT_FAIL_1: 'Change the @label@ element with the @for@ attribute value \'%1\' to reference a form control.',
              ELEMENT_MC_1:   'The @label[for=%1]@ is being ingored as a label because the form control is being labeled with @aria-labelledby@ or @aria-label@ attribute.',
              ELEMENT_HIDDEN_1: 'The @label@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              '@label@ elements are useful for accessibility only when they reference or encapsulate form controls.'
            ],
            TECHNIQUES: [
              'For a @label@ element to properly reference a form control, ensure that the @for@ attribute value on the @label@ element exactly matches the @id@ attribute value on the form control.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @label@ element FOR attribute',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#adef-for'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H44: Using label elements to associate text labels with form controls',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H44'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA: Using @label@ Element for Labeling Form Controls',
                url:   'https://html.cita.illinois.edu/nav/form/form-label-markup.php'
              }
            ]
        },
        CONTROL_7: {
            ID:         'Control 7',
            DEFINITION: 'Every @label@ and @legend@ element %s contain text content.',
            SUMMARY:    '@label@ %s have content',
            TARGET_RESOURCES_DESC: '@label@ and @legend@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add text content to the @label@ or @legend@ element that describes the purpose of the form control or group of form controls, or remove the element if it is not needed for labeling.',
              FAIL_P:   'Add text content to the %N_F @label@ or @legend@ elements that describes the purpose of the form control or group of form controls, or remove the element(s) if they are not needed for labeling.',
              HIDDEN_S: 'One @label@ or @legend@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @label@ or @legend@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @label@ or @legend@ elements on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: '@%1@ has text content.',
              ELEMENT_FAIL_1: 'Add text content to the @%1@ element, or if it is unneeded, remove it from the page.',
              ELEMENT_HIDDEN_1: '@%1@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A @label@ or @legend@ elements is only useful for accessibility when it contains content that describes the purpose of the associated form control(s).'
            ],
            TECHNIQUES: [
              'Add text content to @label@ and @legend@ elements that describes the purpose of the form control or group of form controls.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @label@ element @for@ attribute',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#adef-for'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H44: Using @label@ elements to associate text labels with form controls',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H44'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H88: Using HTML according to spec',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H88'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA: Using @label@ element for Labeling Form Controls',
                url:   'https://html.cita.illinois.edu/nav/form/form-label-markup.php'
              }
            ]
        },
        CONTROL_8: {
            ID:         'Control 8',
            DEFINITION: 'Every @fieldset@ element %s contain exactly one @legend@ element.',
            SUMMARY:    '@fieldset@ %s have one @legend@',
            TARGET_RESOURCES_DESC: '@fieldset@ and @legend@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the @fieldset@ element such that it contains only one @legend@ element.',
              FAIL_P:   'Update %N_F @fieldset@ elements such that each contains only one @legend@ element.',
              HIDDEN_S: 'One @fieldset@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @fieldset@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @fieldset@ elements on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: '@fieldset@ has one @legend@ element.',
              ELEMENT_FAIL_1: 'Add @legend@ element.',
              ELEMENT_FAIL_2: 'Remove %1 @legend@ elements.',
              ELEMENT_FAIL_3: '@legend@ element is hidden from assistive technologies. Use CSS off-screen positioning instead of CSS display or visibility properties to remove @legend@ from graphical rendering.',
              ELEMENT_HIDDEN_1: '@fieldset@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Multiple @legend@ elements contained in the same @fieldset@ may result in the improper calculation of labels for assistive technologies.'
            ],
            TECHNIQUES: [
              'A @fieldset@ element should have one and only one @legend@ element to describe the purpose of the form controls it contains.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: Adding structure to forms: the @fieldset@ and @legend@ elements',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-FIELDSET'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H71: Providing a description for groups of form controls using fieldset and legend elements',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H71'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H88: Using HTML according to spec',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H88'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA: Using @label@ element for Labeling Form Controls',
                url:   'https://html.cita.illinois.edu/nav/form/form-label-markup.php'
              }
            ]
        },
        CONTROL_9: {
            ID:         'Control 9',
            DEFINITION: 'Verify that the @title@ attribute content serves as an appropriate label for the form control, and not only as a tooltip.',
            SUMMARY:    'Verify @title@ is the label.',
            TARGET_RESOURCES_DESC: '@textarea@, @select@ and @input@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that the @title@ attribute is an appropriate label for the form control, and that it is not being used only as a tooltip.',
              MANUAL_CHECK_P: 'Verify that the @title@ attribute is an appropriate label for each of the %N_F form controls, and that it is not being used only as a tooltip.',
              HIDDEN_S: 'The form control element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H form control elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @textarea@, @select@ or @input@ elements on this page with a @title@ attribute.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: '@title@ is not used as label.',
              ELEMENT_MC_1:   'If possible use the @label@ element or an ARIA technique to label %1 form control instead of using the @title@ attribute.',
              ELEMENT_HIDDEN_1: '@%1@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'When the @title@ attribute is used for tooltips, it often uses more words than needed to label a form control for users of assistive technologies.',
              'Use @aria-label@ to provide a shorter label to users of assistive technologies if the @title@ attribute content is determined not to be an optimal label.'
            ],
            TECHNIQUES: [
              'The preferred technique for labeling form controls is to use the @label@ element and its @for@ attribute to reference the @id@ attribute value of the form control element.',
              'An alternative technique is to use the @label@ element to encapsulate the form control element.',
              'In special cases, the @aria-labelledby@ attribute can be used on the form control element to reference the id(s) of the elements on the page that describe its purpose.',
              'In special cases, the @aria-label@ attribute can be used on the form control element to provide an explicit text description of its purpose.',
              'The @title@ attribute will be used as the last resort to provide a label for the form control.'
            ],
            MANUAL_CHECKS: [
              'If the @title@ attribute is the labeling technique of last resort, use other form labeling techniques.',
              'Reserve the @title@ attribute for tooltips if they are needed for your form.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: Adding structure to forms: the @fieldset@ and @legend@ elements',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-FIELDSET'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H88: Using HTML according to spec',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H88'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA: Using @label@ element for Labeling Form Controls',
                url:   'https://html.cita.illinois.edu/nav/form/form-label-markup.php'
              }
            ]
        },
        CONTROL_10: {
            ID:         'Control 10',
            DEFINITION: 'Each standard HTML form control and ARIA widget role must have a label that is unique on the page.',
            SUMMARY:    'Labels %s be unique',
            TARGET_RESOURCES_DESC: '@select@, @textarea@ and @input@ elements of type @text@, @password@, @checkbox@, @radio@, @file@ and aria widget roles',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the labels for the %N_F form controls and ARIA widgets with duplicate labels to uniquely identify the purpose of each control on the page.',
              FAIL_P:   'Update the labels for the %N_F form controls and ARIA widgets with duplicate labels to uniquely identify the purpose of each control on the page.',
              HIDDEN_S: 'The form control or ARIA widget element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H form control and/or ARIA widget elements or widgets that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No form controls or only one form control on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: 'Label is unique.',
              ELEMENT_FAIL_1: 'Change the @label@ element content, use @fieldset@ and @legend@ elements or an ARIA technique to make the label text content unique on the page.',
              ELEMENT_HIDDEN_1: '%1 control element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Labels that are unique make it possible for people to understand the different purposes of form controls on the same page.'
            ],
            TECHNIQUES: [
              'The preferred technique for labeling standard HTML form controls is by reference: First, include an @id@ attribute on the form control to be labeled; then use the @label@ element with a @for@ attribute value that references the @id@ value of the control.',
              'An alternative technique for standard HTML form controls is to use the @label@ element to encapsulate the form control element.',
              'The @fieldset@ and @legend@ elements can be used add a grouping label to the form controls contained in the @fieldeset@ element.',
              'For ARIA widgets and special cases of standard HTML form controls, the @aria-labelledby@ attribute can be used to reference the id(s) of the elements on the page that describe its purpose.',
              'For ARIA widgets and special cases of standard HTML form controls, the @aria-label@ attribute can be used to provide an explicit text description of its purpose.',
              'For ARIA widgets and special cases of standard HTML form controls, the @title@ attribute can be used to provide an explicit text description of its purpose.',
              'For @input[type=submit]@ the default label is "Submit", but the label can be changed using other labeling techniques if there is more than one submit button on the page.',
              'For @input[type=reset]@ the default label is "Reset", but the label can be changed using other labeling techniques if there is more than one reset button on the page.',
              'For @input[type=image]@ the default label is defined using the @alt@ attribute.',
              'For @input[type=button]@ the default label is defined using the @value@ attribute.',
              'For the @button@ element, the child text content can be used to define its purpose.',
              'For some ARIA widgets (e.g. @menuitem@, @tab@, @treeitem@), the child text content can be used to define its purpose.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @label@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-LABEL'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-label'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @title@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H44: Using label elements to associate text labels with form controls',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H44'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H65: Using the title attribute to identify form controls when the label element cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H65'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H71: Providing a description for groups of form controls using fieldset and legend elements',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H71'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA Best Practices: Labels for Form Controls Overview',
                url:   'https://html.cita.illinois.edu/nav/form/'
              }
            ]
        },
        CONTROL_11: {
            ID:         'Control 11',
            DEFINITION: 'If there is more than one form on a page, each @input@ element of type @submit@ or @reset@ %s have a unique label, specified using its @value@ attribute.',
            SUMMARY:    '@submit@ and @reset@ buttons %s be unique',
            TARGET_RESOURCES_DESC: '@submit@ and @reset@ buttons',
            RULE_RESULT_MESSAGES: {
              FAIL_P:   'Change the labeling of %N_F @submit@ or @reset@ buttons to uniquely identify the purpose of each on the page.',
              FAIL_P:   'Change the labeling of %N_F @submit@ or @reset@ buttons to uniquely identify the purpose of each on the page.',
              HIDDEN_S: 'The @submit@ or @reset@ control element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @submit@ and/or @reset@ control elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No forms or only one form on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: 'Label is unique.',
              ELEMENT_FAIL_1: 'Add label to %1 control.',
              ELEMENT_FAIL_2: 'Change the @value@ attribute content, or use an ARIA technique to make the @submit@ or @reset@ labels unique on the page.',
              ELEMENT_HIDDEN_1: '%1 control element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Labels that are unique make it possible for people to understand the different purposes of form controls on the same page.',
              '@submit@ and @reset@ form controls have default labels and if these are present on more than one form on a page, the user may not understand which form they are submitting.'
            ],
            TECHNIQUES: [
              'The preferred technique for changing the default label for @submit@ and @reset@ controls is the @value@ attribute.',
              'In special cases, the @aria-labelledby@ attribute can be used on the form control element to reference the id(s) of the elements on the page that describe its purpose.',
              'In special cases, the @aria-label@ attribute can be used on the form control element to provide an explicit text description of its purpose.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @form@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-FORM'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H44: Using label elements to associate text labels with form controls',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H44'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H65: Using the title attribute to identify form controls when the label element cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H65'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H71: Providing a description for groups of form controls using fieldset and legend elements',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H71'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA Best Practices: Labels for Form Controls Overview',
                url:   'https://html.cita.illinois.edu/nav/form/'
              }
            ]
        }    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

  //
  //  OAA Rules title and message string National Language Support (NLS) for color rules
  //
  rules: {
    FRAME_1: {
      ID:                    'Frame 1',
      DEFINITION:            '@frame@ element %s have an accessible name to support screen reader navigation.',
      SUMMARY:               '@frame@ %s have accessible name',
      TARGET_RESOURCES_DESC: '@frame@ elements',
      RULE_RESULT_MESSAGES: {
        FAIL_S:   'Add a @title@ attribute to the @frame@ element that describes the contents of the frame.',
        FAIL_P:   'Add a @title@ attribute to the %N_F @frame@ elements that describes the contents of the frame.',
        MANUAL_CHECK_S:  'Verify the @frame@ element with empty accessible name (e.g. @title=""@ attribute) does not contain visible content.',
        MANUAL_CHECK_M:  'Verify the %N_MC @frame@ elements with empty accessible names (e.g. @title=""@ attribute) do not contain visible content.',
        HIDDEN_S: 'The @frame@ element that is hidden was not evaluated.',
        HIDDEN_P: 'The %N_H @frame@ elements that are hidden were not evaluated.',
        NOT_APPLICABLE:  'No visible @frame@ elements on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1:   '@frame@ element has the accessible name: %1.',
        ELEMENT_FAIL_1:   'Add a @title@ attribute to the @frame@ element describing the contents of the frame.',
        ELEMENT_MC_1:     'Verify the @frame@ element with empty accessible name (e.g. @title=""@) is not intended to be a frame navigation target.',
        ELEMENT_HIDDEN_1: '@frame@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE:        [ 'Screen readers provide a means to navigate web page content using @frame@ elements.',
                        'The accessible name of the @frame@ element (the @title@ attribute value) must describe the contents of the frame.',
                        'The accessible name helps users decide whether they want to navigate to a frame.'
                      ],
      TECHNIQUES:     [ 'Use the @title@ attribute to provide an accessible name for a @frame@ element.',
                        'Accessible names should be short and describe the contents of the @frame@ element to help users to decide whether to navigate to a @frame@.',
                        'For @frame@s with no visible content, explicitly identify the @frame@ as having no information for the user (e.g. @title="No content"@).'
                      ],
      MANUAL_CHECKS:  [ 'View the accessible names of the frames in the document to verify that they help users identify the contents of each frame.'
      ],
      INFORMATIONAL_LINKS: [
                       { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                         title: 'WCAG 2.0 Success Criterion 2.4.1 Bypass Blocks: A mechanism is available to bypass blocks of content that are repeated on multiple Web pages',
                         url:   'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip'
                       },
                       { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                         title: 'H64: Using the title attribute of the frame and iframe elements',
                         url:   'https://www.w3.org/TR/WCAG20-TECHS/H64.html'
                       }
                      ]
    },

    FRAME_2: {
      ID:                    'Frame 2',
      DEFINITION:            '@iframe@ element %s have an accessible name to support screen reader navigation.',
      SUMMARY:               '@iframe@ %s have accessible name',
      TARGET_RESOURCES_DESC: '@iframe@ elements',
      RULE_RESULT_MESSAGES: {
        FAIL_S:   'Add an accessible name to @iframe@ element that describes the contents of the frame.',
        FAIL_P:   'Add accessible names to %N_F @iframe@ elements that describe the contents of the frame.',
        MANUAL_CHECK_S:  'Verify the @iframe@ elements with empty accessible name (e.g. @title=""@ attribute) does not contain visible content.',
        MANUAL_CHECK_M:  'Verify the %N_MC @iframe@ elements with empty accessible names (e.g. @title=""@ attribute) do not contain visible content.',
        HIDDEN_S: 'The @iframe@ element that is hidden was not evaluated.',
        HIDDEN_P: 'The %N_H @iframe@ elements that are hidden were not evaluated.',
        NOT_APPLICABLE:  'No visible @iframe@ elements on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1:   '@iframe@ element has accessible name.',
        ELEMENT_FAIL_1:   'Add an accessible name to the @iframe@ element describing the contents of the @iframe@.',
        ELEMENT_MC_1:     'Verify the @iframe@ element with empty accessible name (e.g. @title=""@) does not contain visible content.',
        ELEMENT_HIDDEN_1: '@iframe@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE:        [ 'Screen readers provide a means to navigate web page content using @iframe@ elements.',
                        'The accessible name of the @iframe@ element must describe the contents of the @iframe@.',
                        'The accessible name helps users to decide whether they want to navigate to a @iframe@.'
      ],
      TECHNIQUES:     [ 'Use the @title@ attribute to define an accessible name for an @iframe@ element.',
                        'Use the @aria-label@ attribute to define an accessible name for an @iframe@ element.',
                        'Use the @aria-labelledby@ attribute to define an accessible name for an @iframe@ element.',
                        'Accessible names should be short and describe the contents of the @iframe@ element to help users to decide whether to navigate to the @iframe@.',
                        'For @iframe@s with no visible content, explicitly identify the @iframe@ as having no information for the user (e.g. @title="No content"@).'
      ],
      MANUAL_CHECKS:  [ 'View the accessible names of the @iframe@s in the page to verify that they help users identify the contents of each frame.'
      ],
      INFORMATIONAL_LINKS: [
                      { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                        title: 'WCAG 2.0 Success Criterion 2.4.1 Bypass Blocks: A mechanism is available to bypass blocks of content that are repeated on multiple Web pages',
                        url:   'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip'
                      },
                      { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                        title: 'H64: Using the title attribute of the frame and iframe elements',
                        url:   'https://www.w3.org/TR/WCAG20-TECHS/H64.html'
                      }
      ]
    }
  }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

  //
  //  OAA Rules title and message string National Language Support (NLS)
  //
  rules: {
    IMAGE_1: {
      ID:         'Image 1',
      DEFINITION: 'Each @img@ element %s specify an @alt@ attribute or equivalent markup that either defines a text alternative or identifies the image as being used for decoration, spacing or some other stylistic purpose.',
      SUMMARY:    'Images %s have alt text',
      TARGET_RESOURCES_DESC: '@img@ and [role="img"]',
      RULE_RESULT_MESSAGES: {
        FAIL_S:   'Add an @alt@ attribute or equivalent markup to the image element with missing alt text, or identify the image as decorative.',
        FAIL_P:   'Add an @alt@ attribute or equivalent markup to each of the %N_F image elements with missing alt text, or identify the image as decorative.',
        HIDDEN_S: 'One image element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H image elements that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No @img@ or @[role="img"]@ elements found on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1: '@%1@ element has @alt@ attribute.',
        ELEMENT_PASS_2: '@%1@ element has @aria-labelledby@ attribute.',
        ELEMENT_PASS_3: '@%1@ element has @aria-label@ attribute.',
        ELEMENT_PASS_4: '@%1@ element has @title@ attribute.',
        ELEMENT_FAIL_1: 'Add an @alt@, @aria-labelledby@ or @aria-label@ attribute to the @%1@ element to add a text alternative, or use @alt=""@, @role="presentation"@ or include the image as a CSS @background-image@ to identify it as purely decorative.',
        ELEMENT_FAIL_2: 'Use the @aria-labelledby@ or @aria-label@ attribute instead of @alt@ attribute for the text alternative for @%1[role="img"]@ element, or change the role to @role="presentation"@ to identify the image as purely decorative.',
        ELEMENT_HIDDEN_1: '@%1@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'A text alternative for an image, usually specified with an @alt@ attribute, provides a summary of the purpose of the image for people with visual impairments, enabling them to understand the content or purpose of the image on the page.',
        'An image with a text alternative that is an empty string or that has @role="presentation"@ is ignored by assistive technologies. Such markup indicates that the image is being used for decoration, spacing or other stylistic purposes rather than meaningful content.'
      ],
      TECHNIQUES: [
        'A text alternative should summarize the purpose of an image as succinctly as possible (preferably with no more than 100 characters).',
        'The @alt@ attribute is the preferred and most commonly used way to provide a text alternative for @img@ and @area@ elements.',
        'The @aria-labelledby@ attribute can be used to provide a text alternative when an image can be described using text already associated with the image, or for elements with @role="img"@.',
        'The @aria-label@ attribute should only be used to provide a text alternative in the special case when an element has a @role="img"@ attribute. Use the @alt@ attribute for @img@ and @area@ elements.',
        'The @title@ attribute will be used by assistive technologies to provide a text alternative if no other specification technique is found.',
        'Use the attributes @alt=""@, @role="presentation"@ or include the image as a CSS @background-image@ to identify it as being used purely for stylistic or decorative purposes and one that should be ignored by people using assistive technologies.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 5 Specification: 12.2 The @img@ element',
          url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-img-element'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @img@ role',
          url:   'https://www.w3.org/TR/wai-aria/#img'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-label'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: 13.8 How to specify alternate text',
          url:   'https://www.w3.org/TR/html4/struct/objects.html#adef-alt'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G94: Providing text alternative for non-text content that serves the same purpose and presents the same information as the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G94'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G95: Providing text alternatives that provide a brief description of the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G95'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'WebAIM: Alternative Text',
          url:   'https://webaim.org/techniques/alttext/'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'Accessibility at Penn State: Text Equivalents for Images',
          url:   'https://accessibility.psu.edu/images/'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'CSS Backgrounds and Borders Module Level 3: The @background-image@ property',
          url:   'https://www.w3.org/TR/css3-background/#the-background-image'
        }
      ]
    },

    IMAGE_2: {
      ID:         'Image 2',
      DEFINITION: 'The text alternative for @img@ elements and elements with @[role="img"]@ %s summarize the content and/or purpose of the image.',
      SUMMARY:    'Alt text %s summarize purpose',
      TARGET_RESOURCES_DESC: '@img@, [role="img"] with short descriptions',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S: 'Verify that the text alternative of the @img@ element or element with @[role="img"]@ accurately and succinctly summarizes the content and/or purpose of the image.',
        MANUAL_CHECK_P: 'Verify that the text alternative for each of the %N_MC @img@ elements and/or elements with @[role="img"]@ accurately and succinctly summarizes the content and/or purpose of the image.',
        HIDDEN_S: 'One @img@ element or element with @[role="img"]@ element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H @img@ elements and/or elements with @[role="img"]@ that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No @img@ elements and/or elements with @[role="img"]@ on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_MC_1: 'Verify the @img@ element\'s text alternative accurately and succinctly summarizes the content and/or purpose of the image.',
        ELEMENT_MC_2: 'Verify the @%1[role=img]@ element\'s text alternative accurately and succinctly summarizes the content and/or purpose of the image.',
        ELEMENT_HIDDEN_1: '@img@ element was not evaluated because it is hidden from assistive technologies.',
        ELEMENT_HIDDEN_2: '@%1[role=img]@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'Images can convey a wide range of content and be used for many different purposes on a web page, from button and icon images that perform simple actions to complex graphics that help people visualize the features and relationships of large data sets.',
        'Markup supports creating both short and long text alternatives. A short text alternative is designed to orient people who cannot see the image to the type of content it contains or its purpose on the page.  A long text alternative or long description provides comprehensive details of the features of an image, e.g., the data used to generate a chart or graph, relationships in a flow chart, or a MathML version of a mathematical equation.',
        'Images that function as buttons and perform an action on the page should have a short text alternative that is as succinct as possible (e.g., "Increase text size").',
        'Informative images of photographs need a short text alternative and additionally can often benefit from long descriptions.',
        'Informative images of charts or graphs need both a short text alternative and a long description to describe its purpose and the data used to create it.',
        'If an image that is informative does not have text alternative content, users of assistive technologies will not have access to the information the image conveys.'
      ],
      TECHNIQUES: [
        'Use the @alt@ attribute on @img@ elements to provide a text alternative for the image. A rule of thumb is to use what you would say to someone over the phone to describe the image.',
        'The @aria-labelledby@ attribute can be used to provide a text alternative when images can be described using text already associated with the image, such as a visible caption, or for elements with @role="img"@.',
        'The @aria-label@ attribute should only be used to provide a text alternative in the special case when an element has a @role="img"@ attribute.',
        'The @title@ attribute will be used by assistive technologies to provide a text alternative if no other specification technique is found.  NOTE: Using the @title@ attribute will also generate a tooltip in some browsers.',
        'Use the attributes @alt=""@, @role="presentation"@ or include the image as a CSS @background-image@ to identify it as being used purely for stylistic or decorative purposes and that it should be ignored by people using assistive technologies.'
      ],
      MANUAL_CHECKS: [
        'Find each image on the page and verify that it is only being used decoratively or is redundant with other information on the page.'
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 5 Specification: 12.2 The @img@ element',
          url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-img-element'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @img@ role',
          url:   'https://www.w3.org/TR/wai-aria/#img'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-label'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: 13.8 How to specify alternate text',
          url:   'https://www.w3.org/TR/html4/struct/objects.html#adef-alt'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G94: Providing text alternative for non-text content that serves the same purpose and presents the same information as the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G94'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G95: Providing text alternatives that provide a brief description of the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G95'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'WebAIM: Alternative Text',
          url:   'https://webaim.org/techniques/alttext/'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'Accessibility at Penn State: Text Equivalents for Images',
          url:   'https://accessibility.psu.edu/images/'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'Diagram Center: Digital Image And Graphic Resources for Accessible Materials',
          url:   'https://diagramcenter.org/'
        }

      ]
    },

    IMAGE_3: {
      ID:         'Image 3',
      DEFINITION: 'The source filename of the image element %s not be part of its text alternative.',
      SUMMARY:    'Alt text %s not include filename',
      TARGET_RESOURCES_DESC: '@img@, @area@ and @[role="img"]@ elements',
      RULE_RESULT_MESSAGES: {
        FAIL_S:   'Change the value of the @alt@ attribute on the image element to summarize the purpose of the image without referencing its source filename.',
        FAIL_P:   'Change the value of the @alt@ attribute on the %N_F out of %N_T image elements to summarize the purpose of each image without referencing its source filename.',
        HIDDEN_S: 'One image element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H image elements that are hidden were not evaluated.',
        NOT_APPLICABLE:  'No @img@, @area@ or @[role="img"]@ elements found on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1: 'The text alternative does not contain the source filename.',
        ELEMENT_FAIL_1: 'Change the text alternative to summarize the purpose of the image without referencing its source filename.',
        ELEMENT_HIDDEN_1: '@%1@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'A text alternative should summarize the purpose of an image for people with visual impairments.',
        'The source filename of the image should not be included because generally it is not useful information.',
        'An image with a text alternative that is an empty string is ignored by assistive technologies, and indicates that it is being used for styling purposes rather than meaningful content.'
      ],
      TECHNIQUES: [
        'A text alternative should describe the purpose of an image as succinctly as possible (preferably with no more than 100 characters). Do not include the source filename as part of the text content.',
        'The @alt@ attribute is the preferred and most commonly used way to provide a text alternative for @img@ and @area@ elements.',
        'The @aria-labelledby@ attribute can be used to provide a text alternative when images can be described using text already associated with the image, such as a visible caption, or for elements with @role="img"@.',
        'The @aria-label@ attribute should only be used to provide a text alternative in the special case when an element has a @role="img"@ attribute.',
        'The @title@ attribute will be used by assistive technologies to provide a text alternative if no other specification technique is found.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: 13.8 How to specify alternate text',
          url:   'https://www.w3.org/TR/html4/struct/objects.html#adef-alt'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G94: Providing text alternative for non-text content that serves the same purpose and presents the same information as the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G94'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G95: Providing text alternatives that provide a brief description of the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G95'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/F30'
        }
      ]
    },

    IMAGE_4_EN: {
      ID:         'Image 4 (English)',
      DEFINITION: 'The text alternative  for an image %s be no more than 100 characters in length.',
      SUMMARY:    'Alt text no more than 100 characters',
      TARGET_RESOURCES_DESC: '@img@, @area@ and @[role="img"]@ elements',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S: 'Verify the image with the text alternative longer than 100 characters could not be reworded more succinctly or be rewritten to use a long description.',
        MANUAL_CHECK_P: 'Verify the %N_MC images with text alternatives longer than 100 characters can not be reworded more succinctly or be rewritten to use long descriptions.',
        HIDDEN_S: 'One image element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H image elements that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No @img@ or @[role="img"]@ elements on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1: 'The text alternative is %1 characters long.',
        ELEMENT_MC_1:   'The text alternative is %1 characters long. Check its content to determine whether it can be reworded to be no more than 100 characters. Also consider providing a long description using the @aria-describedby@, @title@ or @longdesc@ attribute, which would then allow shortening the text alternative content.',
        ELEMENT_HIDDEN_1: '@%1@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'A text alternative should summarize the purpose of an image as succinctly as possible for people with visual impairments.',
        'Overly long text alternatives can reduce usability by increasing the time it takes to read a web page and understand the significance of the included images.',
        'An image with a text alternative that is an empty string (e.g. @alt=""@) is ignored by assistive technologies, and indicates that it is being used for purely decorative, spacing or stylistic purposes rather than for meaningful content.'
      ],
      TECHNIQUES: [
        'A text alternative (e.g. in English and many other Western languages) should describe the purpose of an image as succinctly as possible (preferably with no more than 100 characters).',
        'If a text alternative requires more than 100 characters, consider using the @aria-describedby@, @title@ or @longdesc@ attribute for a longer, more detailed description of the image, along with shortening the text alternative content.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: 13.8 How to specify alternate text',
          url:   'https://www.w3.org/TR/html4/struct/objects.html#adef-alt'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G94: Providing text alternative for non-text content that serves the same purpose and presents the same information as the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G94'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G95: Providing text alternatives that provide a brief description of the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G95'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/F30'
        }
      ]
    },

    IMAGE_5: {
      ID:         'Image 5',
      DEFINITION: 'Verify an image with @[alt=""]@ or @[role="presentation"]@ is only being used for purely decorative, spacing or stylistic purposes.',
      SUMMARY:    'Verify image is decorative',
      TARGET_RESOURCES_DESC: '@img[alt=""]@, @img[role="presentation"]@, @[role="img"]@ with an empty text alternative',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S: 'Verify the image is being used purely for decorative, spacing or styling purposes.',
        MANUAL_CHECK_P: 'Verify the %N_MC images are being used purely for decorative, spacing or styling purposes.',
        HIDDEN_S: 'One @img@ element or element with @[role="img"]@ element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H @img@ elements and/or elements with @[role="img"]@ that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No @img@ elements or elements with @[role="img"]@ on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_MC_1: 'Verify that the @img@ element is used only for decorative, spacing or styling purposes.',
        ELEMENT_MC_2: 'Verify that the @%1[role=img]@ element is used only for decorative, spacing or styling purposes.',
        ELEMENT_HIDDEN_1: '@img@ element was not evaluated because it is hidden from assistive technologies.',
        ELEMENT_HIDDEN_2: '@%1[role=img]@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'If an image is used purely for stylistic or decorative purposes, users of screen readers do not need to know that the image exists and no alternative is needed.',
        'If an image contains information, but is mistakenly identified as decorative, users of assistive technologies will not have access to the information.'
      ],
      TECHNIQUES: [
        'Use the attributes @alt=""@, @role="presentation"@ or include the image as a CSS @background-image@ to identify it as being used purely for stylistic or decorative purposes and that it should be ignored by people using assistive technologies.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 5 Specification: 12.2 The @img@ element',
          url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-img-element'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @presentation@ role',
          url:   'https://www.w3.org/TR/wai-aria/#presentation'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'CSS Backgrounds and Borders Module Level 3: The @background-image@ property',
          url:   'https://www.w3.org/TR/css3-background/#the-background-image'
        }
      ]
    },

    IMAGE_6: {
      ID:         'Image 6',
      DEFINITION: 'Complex images, charts or graphs (e.g. images generated from tabular data) %s have long descriptions to provide an additional detailed description of the information conveyed by the image.',
      SUMMARY:    'Long description for complex images',
      TARGET_RESOURCES_DESC: '@img@, [role="img"] that represent complex images and images generated from tabular data.',
      RULE_RESULT_MESSAGES: {
        FAIL_S: 'Update the undefined @idrefs@ of the @img@ element or element with @aria-describedby@ to include only defined @id@ values.',
        FAIL_P: 'Update the undefined @idrefs@ of the %N_MC @img@ elements and/or elements with @aria-describedby@ to include only defined @id@ values.',
        MANUAL_CHECK_S: 'Determine if the @img@ element or element with @[role="img"]@ can benefit from a long description, and if so, provide a detailed description of the content of the image.',
        MANUAL_CHECK_P: 'Determine if any of the %N_MC @img@ elements and/or elements with @[role="img"]@ can benefit from a long description, and for each that can, provide a detailed description of the content of the image.',
        HIDDEN_S: 'One @img@ element or element with @[role="img"]@ element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H @img@ elements and/or elements with @[role="img"]@ that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No @img@ elements and/or elements with @[role="img"]@ on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_FAIL_1: 'The @aria-describedby@ attribute references undefined @id@ value(s): %1.',
        ELEMENT_MC_1: 'Verify the @img@ element\'s long description "%1" (from @aria-describedby="%1"@) provides a detailed description of the information conveyed by the image.',
        ELEMENT_MC_2: 'Verify the @%1[role=img]@\'s long description "%1" (from @aria-describedby="%1"@) provides a detailed description of the information conveyed by the image.',
        ELEMENT_MC_3A: 'Update the @title@ attribute content to provide additional information than what is already available in the @alt@ attribute for it to become a long description.',
        ELEMENT_MC_3: 'Verify the @img@ element\'s long description "%1" (from @title@) provides a detailed description of the information conveyed by the image.',
        ELEMENT_MC_4: 'Verify the @%1[role=img]@\'s long description "%1" (from @title@) provides a detailed description of the information conveyed by the image.',
        ELEMENT_MC_5: 'Verify the @img@ element\'s long description defined using @longdesc="%1"@ provides a detailed description of the information conveyed by the image.',
        ELEMENT_MC_6: 'Verify the @%1[role=img]@\'s long description defined using @longdesc="%2"@ provides a detailed description of the information conveyed by the image.',
        ELEMENT_MC_7: 'Determine whether the @img@ element is a complex image, chart or graph that needs a long description, and whether the text alternative could be used to indicate the presence and location of the long description.',
        ELEMENT_MC_8: 'Determine if the  @%1[role=img]@ element is a complex image, chart or graph that needs a long description, and whether the text alternative could be used to indicate the presence and location of the long description.',
        ELEMENT_HIDDEN_1: '@img@ element was not evaluated because it is hidden from assistive technologies.',
        ELEMENT_HIDDEN_2: '@%1[role=img]@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'A long description should provide more information and detail than the text alternative for the image (e.g. @alt@ attribute).',
        'Images can convey a wide range of content and be used for many different purposes on a web page, from purely decorative to complex graphics helping people visualize the features and relationships of large data sets.',
        'All users can benefit from long descriptions by providing another modality for the author to convey information contained in the image and by providing search engines with information to more accurately return relevant results.',
        'Informative images of photographs or paintings can often benefit from long descriptions.',
        'Informative images like charts or graphs need long descriptions to describe the data used to create the chart or graph.'
      ],
      TECHNIQUES: [
        'Ideally, the long description of an image should be accessible to all users by including it as part of the page content, and in close proximity to the image it describes.',
        'Use the @aria-describedby@ attribute to reference one or more @id@s on the page that contain the long description. When this technique is used, assistive technologies extract the text content of the referenced @id@s and make it available as concatenated, unstructured text (i.e., stripping out any list markup, links, paragraphs, etc.).',
        'Use the @title@ attribute to provide a long description.',
        'Use the @alt@ attribute or equivalent markup to indicate the presence and location of the long description when it consists of structured content (e.g. tabular data, lists, links) in close proximity to the image. For example, @alt="..., for more information view the following data table"@.',
        'Use the @longdesc@ attribute, which requires a URI value, to link to a long description for an image. NOTES: (1) The URI can be an internal link on the same page as the image, or a link to an external page or a fragment thereof. (2) There is a discoverability problem with this technique in that the description will typically only be available to screen reader users. Therefore, until browser implementations for @longdesc@ have improved, alternative techniques that enable all users to access the long description are preferred.',
        'Use techniques that allow all users to view the long description. For example, the @summary/details@ elements can be used when the author prefers the detailed description to be initially hidden from users.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 5 Specification: 12.2 The @img@ element',
          url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-img-element'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @img@ role',
          url:   'https://www.w3.org/TR/wai-aria/#img'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-describedby@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML5 Image Description Extension (longdesc)',
          url:   'https://www.w3.org/TR/html-longdesc/'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: 13.8 How to specify alternate text',
          url:   'https://www.w3.org/TR/html4/struct/objects.html#adef-alt'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G94: Providing text alternative for non-text content that serves the same purpose and presents the same information as the non-text content',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G94'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'WebAIM: Alternative Text',
          url:   'https://webaim.org/techniques/alttext/'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'Accessibility at Penn State: Text Equivalents for Images',
          url:   'https://accessibility.psu.edu/images/'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'Diagram Center: Digital Image And Graphic Resources for Accessible Materials',
          url:   'https://diagramcenter.org/'
        }
      ]
    },

    IMAGE_7: {
      ID:         'Image 7',
      DEFINITION: 'Mathematical expressions %s be marked up using MathML instead of bitmapped images.',
      SUMMARY:    'Use MathML for mathematical expressions',
      TARGET_RESOURCES_DESC: '@img@ and [role="img"] elements representing mathematical expressions',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S: 'If the @img@ element or element with @[role="img"]@ represents a mathematical expression, convert the image content to MathML.',
        MANUAL_CHECK_P: 'If the %N_MC @img@ elements and/or elements with @[role="img"]@ represents a mathematical expression, convert the image content to MathML.',
        HIDDEN_S: 'The @img@ element or element with @[role="img"]@ element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H @img@ elements and/or elements with @[role="img"]@ that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No @img@ elements and/or elements with @[role="img"]@ on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_MC_1: 'If the @img@ element represents a mathematical expression, convert the image content to MathML.',
        ELEMENT_MC_2: 'If the @%1[role=img]@ element represents a mathematical expression, convert the image content to MathML.',
        ELEMENT_HIDDEN_1: '@img@ element was not evaluated because it is hidden from assistive technologies.',
        ELEMENT_HIDDEN_2: '@%1[role=img]@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'Images used to convey mathematical expressions are not accessible to people with disabilities using assistive technologies.',
        'MathML is a W3C standard for representing mathematical expressions for web technologies and is the most accessible web math format for people using assistive technologies.',
        'MathML has capabilities similar to SVG graphics, providing the abilities to resize and style content without the loss of fidelity of the visual rendering to match the capabilities of people with visual impairments.'
      ],
      TECHNIQUES: [
        'Use MathML to represent the mathematical expressions.',
        'Use MathJax to support MathML rendering in a wide range of browsers with and without native support for rendering MathML.',
        'Design Science MathPlayer is a universal math reader that now enables math to be spoken in many assistive technology products.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        {type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Mathematical Markup Language (MathML) Version 3.0',
          url:   'https://www.w3.org/TR/MathML/'
        },
        {type:  OpenAjax.a11y.REFERENCES.REFERENCE,
          title: 'MathJax Javascript Library',
          url:   'https://www.mathjax.org/'
        },
        {type:  OpenAjax.a11y.REFERENCES.REFERENCE,
          title: 'PSU Accessibility: MathML and MathJax',
          url:   'https://accessibility.psu.edu/math/mathml/'
        },
        {type:  OpenAjax.a11y.REFERENCES.REFERENCE,
          title: 'Design Science: Math Type',
          url:   'https://www.dessci.com/en/products/mathtype/'
        },
        {type:  OpenAjax.a11y.REFERENCES.REFERENCE,
          title: 'Design Science: Math Player',
          url:   'https://www.dessci.com/en/products/mathplayer/'
        },
        {type:  OpenAjax.a11y.REFERENCES.REFERENCE,
          title: 'MathML in Daisy',
          url:   'https://www.daisy.org/project/mathml'
        },
        {type:  OpenAjax.a11y.REFERENCES.REFERENCE,
          title: 'EPUB 3 Accessibility Guidelines: MathML',
          url:   'https://www.idpf.org/accessibility/guidelines/content/mathml/desc.php'
        },
        {type:  OpenAjax.a11y.REFERENCES.REFERENCE,
          title: 'W3C Math Wiki: MathML Tools',
          url:   'https://www.w3.org/Math/wiki/Tools'
        }
      ]
    }
  }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

  //
  //  OAA Rules title and message string National Language Support (NLS)
  //
  rules: {
    HEADING_1: {
      ID:                    'Heading 1',
      DEFINITION:            'The page %s contain at least one @h1@ element identifying and describing the main content of the page.',
      SUMMARY:               'Page %s have @h1@ element',
      TARGET_RESOURCES_DESC: '@h1@ and @body@ elements',
      RULE_RESULT_MESSAGES: {
        FAIL_S:   'Add a descriptive @h1@ element at the beginning of the main content of the page.',
        FAIL_P:   'Add a descriptive @h1@ element at the beginning of the main content of the page.',
        HIDDEN_S: 'One @h1@ element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H @h1@ elements that are hidden were not evaluated.'
      },
      NODE_RESULT_MESSAGES: {
        PAGE_PASS_1:     'Page has @h1@ element.',
        PAGE_FAIL_1:     'Add an @h1@ element at the beginning of the main content of the page.',
        ELEMENT_PASS_1:  '@h1@ element contributes to passing this rule.',
        ELEMENT_FAIL_1:  'Add an accessible name to the @h1@ element that describes the main content of the page.',
        ELEMENT_HIDDEN_1:'The @h1@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'An @h1@ heading provides an important navigation point for users of assistive technologies, allowing them to easily find the main content of the page.',
        'An @h1@ heading is often also used in the banner of a web page to identify and describe the website.',
        'Home pages of websites often have a variety of "main" sections (e.g. navigation links, news, calendars, ...) that could be considered having somewhat equal potential interest by a visitor, these sections could each be identified using @h1@ headings.'
      ],
      TECHNIQUES: [
        'Include an @h1@ element at the beginning of the main content.',
        'The accessible name of the @h1@ element should describe the main content of the page.',
        'The accessible name of the @h1@ element in the banner of the page, should identify and describe the website.',
        'The @h1@ element should be visible graphically and to assistive technologies. It should not be hidden using CSS techniques.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: The @h1@ element',
          url:   'https://www.w3.org/TR/html4/struct/global.html#edef-H1'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G130: Providing descriptive headings',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G130'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G141: Organizing a page using headings',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G141'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'iCITA Best Practices: Unique Title',
          url:   'https://html.cita.illinois.edu/nav/title/'
        }
      ]
    },
    HEADING_2: {
      ID:                    'Heading 2',
      DEFINITION:            'If the page contains @h1@ element and either a @main@ or @banner@ landmark, the @h1@ element %s be a child of either the main or @banner@ landmark.',
      SUMMARY:               '@h1@ %s be in @main@ or @banner@ landmark',
      TARGET_RESOURCES_DESC: '@h1@ elements and elements with ARIA attribute @role="main"@ or @role="banner"@ ',
      RULE_RESULT_MESSAGES: {
        FAIL_S: 'Move the @h1@ element inside (and preferably at the beginning) of the @main@ element, or change the @h1@ element to another heading level.',
        FAIL_P: 'Move the %N_F @h1@ elements inside (and preferably at the beginning) of @main@ or @banner@ landmark elements, or change the @h1@ elements to other heading levels.',
        HIDDEN_S: 'One @h1@ element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H @h1@ elements that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No @h1@ elements and either a @main@ or @banner@ landmark.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1:   'The @h1@ is a child element of a @main@ landmark.',
        ELEMENT_PASS_2:   'The @h1@ is a child element of a @banner@ landmark.',
        ELEMENT_FAIL_1:   'Position the @h1@ element as one of the first child elements of a @main@ landmark to mark the beginning of main content to identify the main content of this page, or within the @banner@ landmark to provide a label for the website.',
        ELEMENT_HIDDEN_1: 'The @h1@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'An @h1@ heading should primarily be used to identify the content on the specific page within the website and be placed at the beginning of the main content to provide an important navigation point for users of assistive technologies, allowing them to easily find the main content of the page.',
        'An @h1@ heading can also be used (but not required) to provide a label for the website and when it is used for this purpose it should be placed in the @banner@ element.',
        'Including both a @main@ landmark and an @h1@ element provides a redundant way for users of assistive technologies to find the main content of a web page.'
      ],
      TECHNIQUES: [
        'This rule supports the coding practice of reserving the @h1@ element for titling the main content area of a web page.',
        'Include an @h1@ element at the beginning of each @main@ landmark.',
        'The @h1@ element should describe the main content or purpose of the page.',
        'If there is more than one @main@ landmark, use the @aria-labelledby@ attribute on each to reference an @h1@ element that provides its accessible name.',
        'An @h1@ element being used to label the the website must be placed inside the @banner@ element.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: The @h1@ element',
          url:   'https://www.w3.org/TR/html4/struct/global.html#edef-H1'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: @main@ role',
          url:   'https://www.w3.org/TR/wai-aria/#main'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: @banner@ role',
          url:   'https://www.w3.org/TR/wai-aria/#banner'
        }
      ]
    },
    HEADING_3: {
      ID:                    'Heading 3',
      DEFINITION:            'The accessible names of sibling heading elements of the same level %s be unique.',
      SUMMARY:               'Sibling headings %s be unique',
      TARGET_RESOURCES_DESC: 'Heading elements',
      RULE_RESULT_MESSAGES: {
        FAIL_P: 'Update the accessible names of the %N_F sibling heading elements of the same level to be unique.',
        HIDDEN_S: 'One heading element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H heading elements that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No sibling heading elements of the same level were found on the page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1:    'The %1 heading content is unique among its sibling headings.',
        ELEMENT_FAIL_1:  'Change the accessible name of %1 heading to make it unique among its sibling headings.',
        ELEMENT_HIDDEN_1:  'The %1 element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'If section headings that share the same parent heading are NOT unique, users of assistive technologies will not be able to discern the differences among sibling sections of the web page.'
      ],
      TECHNIQUES: [
        'Make sure the accessible names of sibling headings that share the same parent heading help users understand the unique content of each section they describe.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: Headings: The H1, H2, H3, H4, H5, H6 elements',
          url:   'https://www.w3.org/TR/html4/struct/global.html#edef-H1'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G130: Providing descriptive headings',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G130'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G141: Organizing a page using headings',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G141'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'iCITA Best Practices: Unique Title',
          url:   'https://html.cita.illinois.edu/nav/title/'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'iCITA Best Practices: Sub Headings',
          url:   'https://html.cita.illinois.edu/nav/heading/'
        }
      ]
    },
    HEADING_5: {
      ID:                    'Heading 5',
      DEFINITION:            'Heading elements %s be properly nested on the page.',
      SUMMARY:               'Headings %s be properly nested',
      TARGET_RESOURCES_DESC: 'Heading elements',
      RULE_RESULT_MESSAGES: {
        FAIL_S:  'Review the entire heading structure and update the heading levels so that the heading element is properly nested in relation to the %N_T headings on the page.',
        FAIL_P:  'Review the entire heading structure and update the heading levels so that the %N_F heading elements are properly nested in relation to the %N_T headings on the page.',
        HIDDEN_S: 'One heading element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H heading elements that are hidden were not evaluated.',
        NOT_APPLICABLE: 'No heading elements or only one heading element on this page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1:   'The %1 element is properly nested.',
        ELEMENT_PASS_2:   'All heading elements are properly nested',
        ELEMENT_FAIL_1:   'Adjust the level of the %1 element or other heading elements so that the headings are properly nested on the page.',
        ELEMENT_FAIL_2:   'Adjust the heading levels of the parent %1 element or this %2 element so that the headings are properly nested on the page.',
        ELEMENT_HIDDEN_1: 'The %1 element was not evaluated because it is hidden from assistive technologies.',
        ELEMENT_HIDDEN_2: 'The %1 element has not text content either add content, or remove it from the page if it is not needed.'
      },
      PURPOSE: [
        'Heading elements that are properly nested help users of assistive technologies understand the structure of the information on the web page.'
      ],
      TECHNIQUES: [
        'Include headings elements at the proper level for each section of a web page.',
        'Use headings as labels for ARIA landmarks to provide a redundant way for users of assistive technologies to navigate the page (i.e. header or landmark navigation).',
        'Check headings against other headings in the document to make sure they uniquely describe the content of each section of the web page.',
        'If headings are too similar to each other, users of assistive technologies will not be able to use them to understand the differences between sections of the web page.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: Headings: The H1, H2, H3, H4, H5, H6 elements',
          url:   'https://www.w3.org/TR/html4/struct/global.html#edef-H1'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G130: Providing descriptive headings',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G130'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G141: Organizing a page using headings',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G141'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'iCITA Best Practices: Unique Title',
          url:   'https://html.cita.illinois.edu/nav/title/'
        },
        { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
          title: 'iCITA Best Practices: Sub Headings',
          url:   'https://html.cita.illinois.edu/nav/heading/'
        }
      ]
    },
    HEADING_6: {
      ID:                    'Heading 6',
      DEFINITION:            'Heading elements %s have visible text content.',
      SUMMARY:               'Headings %s have text content',
      TARGET_RESOURCES_DESC: 'Heading elements',
      RULE_RESULT_MESSAGES: {
        FAIL_S:   'For the heading element with only image content, replace the image with text content styled using CSS.',
        FAIL_P:   'For the %N_F heading elements with only image content, replace the images with text content styled using CSS.',
        HIDDEN_S: 'One heading element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H heading elements that are hidden were not evaluated.',
        NOT_APPLICABLE:  'No headings with only image content.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1:   'The %1 element contains visible text content.',
        ELEMENT_FAIL_1: 'Add visible text content to the %1 element.',
        ELEMENT_FAIL_2: 'The %1 element does not have an accessible name.  Either remove the heading from the page or add visible text content to describe the section.',
        ELEMENT_HIDDEN_1: 'The %1 element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'Heading elements that consist only of image content are not easily restyled for readabilty by people with low vision.'
      ],
      TECHNIQUES: [
        'Use CSS instead of images to style heading text content.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: Headings: The H1, H2, H3, H4, H5, H6 elements',
          url:   'https://www.w3.org/TR/html4/struct/global.html#edef-H1'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'C22: Using CSS to control visual presentation of text',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/C22'
        }
      ]
    },
    HEADING_7: {
      ID:                    'Heading 7',
      DEFINITION:            'If a @contentinfo@, @complementary@, @form@, @navigation@ or @search@ landmark contains a heading element, the first heading should be an @h2@ element.',
      SUMMARY:               'First landmark heading @h2@',
      TARGET_RESOURCES_DESC: '@contentinfo@, @complementary@, @form@, @navigation@ or @search@ landmarks elements',
      RULE_RESULT_MESSAGES: {
        FAIL_S:   'Adjust the heading structure within the landmark so that the first heading is an @h2@ element.',
        FAIL_P:   'Adjust the heading structures of the %N_F landmarks with headings so that the first heading of each is an @h2@ element.',
        HIDDEN_S: 'One @h2@ element that is hidden was not evaluated.',
        HIDDEN_P: '%N_H @h2@ elements that are hidden were not evaluated.',
        NOT_APPLICABLE:  'No headings in landmarks, or no landmarks on the page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1:   'The @h2@ element is the first heading in the landmark.',
        ELEMENT_FAIL_1: 'Adjust the headings in the %1 landmark to ensure that the first heading is an @h2@ element instead of an @%2@.',
        ELEMENT_HIDDEN_1: 'The @h2@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'Headings provide a redundant way for people to navigate and orient themselves to content on a web page.',
        'The use of an @h2@ element as the first heading in a landmark (except the @main@ and @banner@ landmarks) supports a consistent use of headings for finding the main sections in a web page.'
      ],
      TECHNIQUES: [
        'Locate an @h2@ element at the beginning of the content in the landmark to describe the content in the landmark.',
        'The @h2@ element can be used as the accessible name for a landmark using the @aria-labelledby@ attribute on the landmark to point to an @id@ attribute on the @h2@ element.',
        'The @h2@ element can be hidden from the graphical rendering using offscreen CSS positioning (e.g. @position: absolute@ )techniques.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: landmark roles',
          url:   'https://www.w3.org/TR/wai-aria/#landmark'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: Headings: The H2 elements',
          url:   'https://www.w3.org/TR/html4/struct/global.html#edef-H2'
        }
      ]
    },
        // ----------------------------------------------------------------
        // LANDMARK_8: Headings nested in landmarks
        // ----------------------------------------------------------------

        HEADING_8: {
            ID:         'Heading 8',
            DEFINITION: 'Headings %s be properly nested within a landmark.',
            SUMMARY:    'Headings nested in landmarks',
            TARGET_RESOURCES_DESC: 'Landmark elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Review the heading structure within the landmark and adjust the heading levels such that all are properly nested.',
              FAIL_P:   'Review the heading structure for each landmark with more than one heading, and adjust the heading levels in each landmark such that all headings are properly nested.',
              HIDDEN_S: 'If the hidden heading element is supposed to be visible to assistive technologies, style it to be positioned off-screen.',
              HIDDEN_P: 'If any of the %N_H hidden heading elements are supposed to be visible to assistive technologies, style them to be positioned off-screen.',
              NOT_APPLICABLE: 'No nested headings found in landmarks.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ heading is properly nested in the @%2@ landmark.',
              ELEMENT_FAIL_1:   'Adjust the level of the @%1@ heading or other heading elements such that the headings are properly nested in the @%2@ landmark.',
              ELEMENT_FAIL_2:   'Add text content to @%1@ element that describes the section it labels or remove it from the @%2@ landmark.',
              ELEMENT_FAIL_3:   'Adjust the level of either the parent @%1@ heading or this @%2@ heading such that they are properly nested in the @%3@ landmark.',
              ELEMENT_HIDDEN_1: 'The @%1@ heading in the @%2@ landmark was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: 'The @%2@ landmark was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              // TODO: what is the purpose?
              'Headings provide a way to indicate the structure and to label the sections of content within a landmark.',
              'Headings and there associated heading levels provide a way for people using assistive technology to understand and navigate the structure of the content within a landmark.'
            ],
            TECHNIQUES: [
              // TODO: what are the techniques?
              'Use an @h1@ element for the first heading in @main@ landmarks.',
              'Use an @h2@ element for the first heading in other top level landmarks.',
              'Use heading elements to identify the content of each section within a landmark.',
              'Properly nest of heading elements within a landmark (e.g. @h2@ follows @h1@ headings, @h3@ follows @h2@ headings, ...).'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: contentinfo role',
                url:   'https://www.w3.org/TR/wai-aria/#contentinfo'
              }
            ]
        }
    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
         HTML_1: {
            ID:                    'HTML 1',
            DEFINITION:            '@strong@, @em@ or in some cases @h1-h6@ heading elements %s be used instead of @b@ and @i@ elements.',
            SUMMARY:               'Replace @b@ and @i@ elements',
            TARGET_RESOURCES_DESC: '@b@ and @i@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Change the @b@ or @i@ element to a @strong@ or @em@ element or, if appropriate, an @h1-h6@ element.',
              FAIL_P:   'Change the @b@ or @i@ elements to @strong@ or @em@ elements or, if appropriate, @h1-h6@ elements.',
              HIDDEN_S: 'If the hidden @b@ or @i@ element becomes visible, it should be changed to a @strong@, @em@ or possibly an @h1-h6@ element.',
              HIDDEN_P: 'If any of the %N_H hidden @b@ or @i@ elements become visible, they should be changed to @strong@, @em@ or possibly @h1-h6@ elements.',
              NOT_APPLICABLE:  'No @b@ or @i@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1: 'Change the @b@ element to a @strong@ element or to a heading element (i.e. @h1-h6@), depending on its purpose in the page.',
              ELEMENT_HIDDEN_1: '@b@ element is hidden, but should be changed to a @strong@ element or to a heading element (i.e. @h1-h6@), depending on its purpose in the page, in case it becomes visible.',
              ELEMENT_FAIL_2: 'Change the @i@ element to an @em@ element or to a heading element (i.e. @h1-h6@), depending on its purpose in the page.',
              ELEMENT_HIDDEN_2: '@i@ element is hidden, but should be changed to an @em@ element or to a heading element (i.e. @h1-h6@), depending on its purpose in the page, in case it becomes visible.'
            },
            PURPOSE: [
              'In inline formatting use, the @b@ and @i@ elements do not convey the semantics of the text content.',
              'The @b@ and @i@ elements are often misused for emphasizing words in a sentence, or to change the styling of content being used as a section header in the page.'
            ],
            TECHNIQUES: [
              'If a @b@ element is being used in a sentence for emphasizing a word or phrase, replace it with the @strong@ element.',
              'If an @i@ element is being used in a sentence for emphasizing a word or phrase, replace it with the @em@ element.',
              'If a @b@ or @i@ element is being used to style a section heading, replace it with an @h1-h6@ heading element, depending on the level of heading needed in accordance with the structure of the page.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: Headings: The em and strong elements',
                url:   'https://www.w3.org/TR/html4/struct/text.html#edef-EM'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: Headings: The H1-H6 elements',
                url:   'https://www.w3.org/TR/html4/struct/global.html#edef-H2'
              }
            ]
        },
        HTML_2: {
            ID:                    'HTML 2',
            DEFINITION:            '@marquee@ elements %s be removed to improve readability of content.',
            SUMMARY:               'Replace @marquee@ elements',
            TARGET_RESOURCES_DESC: '@marquee@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Replace the @marquee@ element with a standard HTML element. Use CSS techniques to style the content, and JavaScript to provide controls that stop and start the scrolling.',
              FAIL_P:   'Replace the %N_F @marquee@ elements with standard HTML elements. Use CSS techniques to style the content, and JavaScript to provide controls that stop and start the scrolling.',
              HIDDEN_S: 'If the hidden @marquee@ element becomes visible, it must be changed to a standard HTML element.  Use CSS techniques to style the content, and JavaScript to provide controls that stop and start the scrolling.',
              HIDDEN_P: 'If any of the %N_H hidden @marquee@ elements become visible, they must be changed to standard HTML elements. Use CSS techniques to style the content, and JavaScript to provide controls that stop and start the scrolling.',
              NOT_APPLICABLE:  'No @marquee@ elements found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1: 'Change the @marquee@ element to a standard HTML element. Use CSS techniques to style the content, and JavaScript to provide controls that stop and start the scrolling.',
              ELEMENT_HIDDEN_1: '@marquee@ element is hidden, but should be changed to a standard HTML element, in case it becomes visible. Use CSS techniques to style the content, and JavaScript to provide controls that stop and start the scrolling.'
            },
            PURPOSE: [
              'Automatically moving text cannot be read by many people with visual impairments or by people with learning disabilities that affect reading.'
            ],
            TECHNIQUES: [
              'Replace the @marquee@ element with a standard HTML element and use CSS techniques to style the content.',
              'By default, when the page loads, the marquee should be paused.',
              'Use Javascript to provide buttons that start and stop the scrolling of content in the marquee.',
              'Provide a means to see all of the content in the marquee at one time.'
            ],
            MANUAL_CHECKS: [
              'Verify that when the page loads, the content is not scrolling.',
              'Verify that there are start and pause buttons that start and stop the scrolling of content.'
            ],
            INFORMATIONAL_LINKS: [
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

  //
  //  OAA Rules title and message string National Language Support (NLS)
  //
  rules: {

    KEYBOARD_1: {
      ID:                    'Keyboard 1',
      DEFINITION:            'Elements with ARIA widget roles %s have event handlers that support the keyboard interactions required by those roles.',
      SUMMARY:               'Widget roles require keyboard support',
      TARGET_RESOURCES_DESC: 'Elements with ARIA widget roles',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S:  'Verify the element with the widget role has the keyboard interactions required by its role.',
        MANUAL_CHECK_P:  'Verify the %N_MC elements with widget roles have the keyboard interactions required by their roles.',
        HIDDEN_S:        'One hidden element with a widget role was not evaluated.',
        HIDDEN_P:        '%N_H hidden elements with widget roles were not evaluated.',
        NOT_APPLICABLE:  'No elements with widget roles on the page'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_MC_1:     'Verify the "%1" event handlers on the element support the keyboard interactions required by the @%2@ widget role.',
        ELEMENT_MC_2:     'Verify the "%1" event handlers on ancestor elements, or on the document object, support the keyboard interactions required by the @%2@ widget role.',
        ELEMENT_MC_3:     'Verify the "%1" event handlers on the @%2@ owner widget (through @aria-owns@) support the keyboard interactions on its descendant components required by the @%3@ widget role.',
        ELEMENT_MC_4:     'Verify the "%1" event handlers on the widget subcomponents support the keyboard interactions required by the @%2@ widget role.',
        ELEMENT_MC_5:     'Verify the keyboard interaction required by the @%1@ widget role.',
        ELEMENT_HIDDEN_1: 'Element with @%1@ widget role was not evaluated because it is hidden.'
      },
      PURPOSE: [
        'Keyboard support is required by people who cannot use the mouse and/or gestures to select the options and perform the actions made available to them by interactive elements.',
        'Native HTML4 and HTML5 link and form control elements have default keyboard interactions that are built-in and standardized among browsers.',
        'When authors create custom interactive elements they need to support the keyboard interaction patterns that users have come to expect.',
        'The ARIA Authoring Practices Guide identifies the keyboard interaction patterns that users expect and can rely upon, based on each ARIA widget role.'
      ],
      TECHNIQUES: [
        'Use the ARIA Authoring Practices guide to identify the keyboard interaction support needed for each ARIA Widget role being used.',
        'Add custom @keydown@, @keypress@ and/or @keyup@ event handlers to support the keyboard interactions required by the ARIA widget role.',
        'Verify that keyboard interactions are consistent among browsers and devices (e.g., desktop computers and mobile devices using Bluetooth keyboards).'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1: Widget Roles',
          url:   'https://www.w3.org/TR/wai-aria-1.1/#widget_roles'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'WAI-ARIA Authoring Practices 1.1: Design Patterns and Widgets',
          url:   'https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'Mozilla Developer Network: DOM on-event handlers',
          url:   'https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'Mozilla Developer Network: EventTarget.addEventListener()',
          url:   'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
        },
        { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
          title: 'OAA Web Accessibility ARIA Examples',
          url:   'https://oaa-accessibility.org/examples/'
        }
      ]
    },
    KEYBOARD_2: {
      ID:                    'Keyboard 2',
      DEFINITION:            'All functionality provided by the interactive elements on the page %s be operable through the keyboard interface.',
      SUMMARY:               'Interactive functionality %s be keyboard operable',
      TARGET_RESOURCES_DESC: 'Links, form controls, widgets, @object@, @embed@ and @applet@ elements',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S:   'Verify that the functionality provided by the link, form control, element with event handlers or embedded application is operable through the keyboard.',
        MANUAL_CHECK_P:   'Verify that the functionality provided by the %N_MC links, form controls, elements with event handlers and/or embedded applications is operable through the keyboard.',
        HIDDEN_S:         'The hidden link, form control, element with event handlers, @object@ or @applet@ element was not evaluated.',
        HIDDEN_P:         '%N_H hidden links, form controls, elements with event handlers, @object@ and/or @applet@ elements were not evaluated.',
        NOT_APPLICABLE:   'No interactive elements on the page.'
      },
      NODE_RESULT_MESSAGES: {
        PAGE_PASS_1:       'The interactive element on the page does not have an explicit @tabindex@ value or added event handlers that might change its default functionality or ARIA role.',
        PAGE_PASS_2:       'The @%1@ interactive elements on the page do not have explicit @tabindex@ values or added event handlers that might change their default functionalities or ARIA roles.',
        ELEMENT_PASS_1:    'The @%1@ element does not have an explicit @tabindex@ value or added event handlers that might change its default functionality or ARIA role.',
        PAGE_MC_1:         'Verify that the functionality provided by the added event handler or explicitly defined @tabindex@ value on the interactive element has the corresponding keyboard support.',
        PAGE_MC_2:         'Verify that the functionality provided by the added event handlers or explicitly defined @tabindex@ values on the %1 interactive elements has the corresponding keyboard support.',
        ELEMENT_MC_1:      'Verify that the functionality provided by the added event handlers on the @%1@ element have the corresponding keyboard support.',
        ELEMENT_MC_2:      'Verify that the functionality that results from assigning @tabindex=%1@ on the @%2@ element has the corresponding keyboard support.',
        ELEMENT_MC_3:      'Verify that the functionality provided by the @%1@ element has the corresponding keyboard support.',
        ELEMENT_HIDDEN_1:  'The @%1@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'Many users are unable to use the mouse, either because of visual impairments, which make it difficult or impossible for them to see the pointer, or motor skill impairments, which prevent them from being able to accurately position the mouse pointer.',
        'This requirement is not intended to discourage support for mouse behaviors, but rather to make sure there is an equivalent way of using the keyboard for all interactive tasks that can be performed using the mouse.',
        'The recommended and most efficient way to include keyboard support for interactive elements is to follow computing platform conventions. This will make it it easier for all users to benefit from keyboard support, since the keystrokes and shortcuts will be easier to discover and familiar to the greatest number of users.',
        'Touch typists often prefer keyboard commands over mouse actions, especially for frequently performed operations, since they are much more efficient from a hand motion perspective.'
      ],
      TECHNIQUES: [
        'Use the WAI-ARIA 1.0 Authoring Practices to determine the keyboard support that is appropriate for common widget types.',
        'Use keyboard event handers to implement keyboard support for interactive behaviors defined on the page.',
        'Avoid using @object@ and @embed@ elements due to the difficulty in providing the corresponding keyboard support for all of their inherent interactive behaviors.',
        'Avoid using @tabindex@ values greater than 0 to change tabbing order, since tabbing behavior is inconsistent and therefore unpredictable across web browsers.'
      ],
      MANUAL_CHECKS: [
        'Make a list of the functional feature of a web site.',
        'Using only the keyboard, perform all of the functions provided by all of the interactive components on the web page.'
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'WAI-ARIA 1.0 Authoring Practices',
          url:   'https://www.w3.org/WAI/PF/aria-practices/'
        },
        { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
          title: 'OAA Web Accessibility ARIA Examples',
          url:   'https://oaa-accessibility.org/examples/'
        },
        { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
          title: 'Accessible jQuery-ui Components Demonstration',
          url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/'
        }
      ]
    },

    KEYBOARD_3: {
      ID:                    'Keyboard 3',
      DEFINITION:            '@object@ and @applet@ elements %s not trap the keyboard.',
      SUMMARY:               'No keyboard trap',
      TARGET_RESOURCES_DESC: '@object@ and @applet@ elements',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S:  'Verify the embedded application to make sure the application does not trap the keyboard.',
        MANUAL_CHECK_P:  'Verify the %N_MC embedded applications to make sure application does not trap the keyboard.',
        HIDDEN_S:        'One hidden @object@ or @applet@ element was not evaluated.',
        HIDDEN_P:        '%N_H hidden @object@ and/or @applet@ elements were not evaluated.',
        NOT_APPLICABLE:  'No @applet@ and @object@ elements on the page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_MC_1:  'Verify the %1 element to see if it traps the keyboard.',
        ELEMENT_HIDDEN_1:        '%1 element is hidden, so it cannot trap the keyboard.'
      },
      PURPOSE: [
        'If an embedded application (i.e. @object@ or @applet@ element) traps the keyboard, keyboard users will not be able to use the web page.'
      ],
      TECHNIQUES: [
        'Use @tabindex="-1"@ on the element to remove it from "tab" order of the page.',
        'If the embedded application does support accessibility, use a button to move focus to the application.'
      ],
      MANUAL_CHECKS: [
        'Move keyboard focus to the embedded application and see if you can move focus back to the web content using just the keyboard.'
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
        },
        { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
          title: 'OAA Web Accessibility ARIA Examples',
          url:   'https://oaa-accessibility.org/examples/'
        }
      ]
    }
  }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {

        // ----------------------------------------------------------------
        // LANDMARK_1: main landmark: at least one
        // ----------------------------------------------------------------

        LANDMARK_1: {
            ID:         'Landmark 1',
            DEFINITION: 'Each page %s have at least one @main@ landmark, used to identify the main content.',
            SUMMARY:    '@main@ landmark: at least one',
            TARGET_RESOURCES_DESC: '@[role="main"]@ and @main@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add a @main@ landmark to the page.',
              FAIL_P:   'Add a @main@ landmark to the page.',
              HIDDEN_S: 'One @main@ landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @main@ landmarks that are hidden were not evaluated.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_PASS_1: 'Page has one @main@ landmark.',
              PAGE_PASS_2: 'Page has %1 @main@ landmarks.',
              PAGE_FAIL_1: 'Add a @main@ landmark that identifies the main content of the page.',
              ELEMENT_PASS_1:   '@%1[role="main"]@ defines a @main@ landmark.',
              ELEMENT_PASS_2:   '@main@ element defines a @main@ landmark.',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="main"@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@main@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A @main@ landmark provides a navigation point to the primary content of the page for users of assistive technologies.',
              'Most pages only need one @main@ landmark, but in the case of portals or mashups, there may be more than one @main@ landmark on a "page".'
            ],
            TECHNIQUES: [
              'A @main@ element or an element with a @role="main"@ attribute defines a @main@ landmark.',
              'When there is only one @main@ landmark on the page (the typical case), do not use a label.',
              'When there is more than one @main@ landmark, use the @aria-labelledby@ or @aria-label@ attribute to describe the content of each.',
              'If you need to support Microsoft Internet Explorer 8, you must NOT use the @main@ element since the element is supported in the accessibility API, just use @role="main"@ to identify the main landmark.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: main role',
                url:   'https://www.w3.org/TR/wai-aria/#main'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The MAIN element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-main-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_2: Page structure must/should be defined by landmarks
        // ----------------------------------------------------------------

        LANDMARK_2: {
            ID:         'Landmark 2',
            DEFINITION: 'All rendered content %s be placed inside of container elements with appropriate ARIA landmark roles.',
            SUMMARY:    'All content %s be contained in landmarks',
            TARGET_RESOURCES_DESC: 'all rendered content',
            RULE_RESULT_MESSAGES: {
              FAIL_S: 'Update the landmark structure of the page by placing the one element not contained in a landmark into a container element with a proper landmark role.',
              FAIL_P: 'Update the landmark structure of the page by placing the %N_F elements not contained in landmarks into one or more container elements with proper landmark roles.',
              MANUAL_CHECK_S: 'One element may contain renderable content.  If so, move it into a container element with proper landmark role.',
              MANUAL_CHECK_P: '%N_MC elements may contain renderable content.  If so, move them into container elements with proper landmark roles.',
              HIDDEN_S: 'One hidden element with renderable content was found.  If it could become visible make sure it is in a container element with a proper landmark role.',
              HIDDEN_P: '%N_H hidden elements with renderable content were found.  If any could become visible make sure they are in container elements with proper landmark roles.',
              NOT_APPLICABLE: 'No renderable content found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_PASS_1: 'All %1 elements with content are contained in landmarks.',
              PAGE_MC_1:   '%1 element(s) may contain renderable content. If so, move it/them into appropriate landmarks.',
              PAGE_FAIL_1: 'Move %1 element(s) into appropriate landmarks. (This may require creating additional landmarks.)',
              ELEMENT_PASS_1:   '@%1@ element is contained in @%2@ landmark.',
              ELEMENT_MC_1:     '@%1@ element may contain renderable content. If so, move it into an appropriate landmark.',
              ELEMENT_FAIL_1:   'Move @%1@ element into an appropriate landmark. (This may require creating an additional landmark.)',
              ELEMENT_HIDDEN_1: 'The @%1@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Landmarks provide a way to organize the various types of content on a page for users of assistive technologies. The organization of content regions using landmarks is functionally similar to the way visual designers organize information for people who rely on a graphical rendering of the content.',
              'When content is not contained in a landmark, it will be unreachable using landmark navigation, which is an important feature provided by assistive technologies such as screen readers.'
            ],
            TECHNIQUES: [
              'Use the appropriate landmarks to identify the different regions of content on a web page.',
              'The most important landmark roles are @main@ and @navigation@, as nearly every page will include at least those regions.',
              'Other commonly used landmark roles include @banner@, @contentinfo@, @complementary@ and @search@.',
              'Use HTML5 sectioning elements that have a default ARIA landmark role: @main@ (@main@), @nav@ (@navigation@), @aside@ (@complementary@) and in some situations @header@ (@banner@) and @footer@ (@contentinfo@). When using these elements, the @role@ attribute should NOT be defined.',
              'In HTML4 and XHTML 1.0 documents, a landmark can be created using a @div@ element with a @role@ attribute and the appropriate ARIA landmark role value (e.g., @role="main"@).',
              'The @search@ role is typically placed on a @form@ element or a @div@ that surrounds the search form.'
            ],
            MANUAL_CHECKS: [
              '@object@, @embed@ and @applet@ tags may be used to render content. Use inspection tools to determine if any of these elements actually render content on the page.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sections',
                url:   'https://www.w3.org/TR/html5/sections.html#sections'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_3: navigation landmark: at least one
        // ----------------------------------------------------------------

        LANDMARK_3: {
            ID:         'Landmark 3',
            DEFINITION: 'Each page in a website %s have at least one @navigation@ landmark, used to identify website navigation links.',
            SUMMARY:    '@navigation@ landmark: at least one',
            TARGET_RESOURCES_DESC: '@[role="navigation"]@ or top-level @nav@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add one or more @navigation@ landmarks that identify groups of links that support website navigation.',
              FAIL_P:   'Add one or more @navigation@ landmarks that identify groups of links that support website navigation.',
              HIDDEN_S: 'One @navigation@ landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @navigation@ landmarks that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No lists of links found on page.'
            },
            NODE_RESULT_MESSAGES: {
              WEBSITE_PASS_1: 'The page contains one @navigation@ landmark.',
              WEBSITE_PASS_2: 'The page contains %1 @navigation@ landmarks.',
              WEBSITE_FAIL_1: 'Add at least one @navigation@ landmark to the page to identify the links used for website or page content navigation.',
              ELEMENT_PASS_1:   '@%1[role="navigation"]@ defines a @navigation@ landmark.',
              ELEMENT_PASS_2:   '@nav@ element defines a @navigation@ landmark.',
              ELEMENT_FAIL_1:   '@%1@ list element has %2 links and not in any landmark.',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="navigation"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Navigation landmarks provide a way to identify groups (e.g. lists) of links that are intended to be used for website or page content navigation.'
            ],
            TECHNIQUES: [
              'Reserve the @navigation@ landmark for website and page navigation links.',
              'Website and page navigation links should be top-level @navigation@ landmarks (i.e. not contained in other landmarks).',
              'The @nav@ element or an element with @role="navigation"@ attribute defines a @navigation@ landmark and must be on a container element (e.g., @div@) for @ol@ and @ul@ elements that contain li elements with links. (This may require adding a container element.)',
              'If there is only one @navigation@ landmark on the page, do not use a label.',
              'If there is more than one @navigation@ landmark, use the @aria-labelledby@, @aria-label@ oe @title@ attribute to describe the purpose of the links (e.g., Table of Contents, Site Map, etc.) contained in each.',
              'If the same set of links is used in more than one place on a page, use "Copy 1", "Copy 2" ... "Copy N" as a part of the accessible name to make the navigation labels unique and help orient assistive technology users that the group of links is repeated on the page.'
            ],
            MANUAL_CHECKS: [
              'A list of links to other pages in the website, or to content sections of the current page, should use a @navigation@ landmark.',
              'Verify the links are used for website or page navigation purposes.',
              'Verify the labels uniquely identify each set of navigational links.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: navigation role',
                url:   'https://www.w3.org/TR/wai-aria/#navigation'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The NAV element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-nav-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H97: Grouping related links using the nav element',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H97.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_4: banner landmark: for branding content
        // ----------------------------------------------------------------

        LANDMARK_4: {
            ID:         'Landmark 4',
            DEFINITION: 'Website branding content, typically at the top of a web page, %s be identified by using the @banner@ landmark.',
            SUMMARY:    '@banner@ landmark: identifies branding content',
            TARGET_RESOURCES_DESC: '@[role="banner"]@ and top-level @header@ element',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'If there is branding content, typically at the top of the page, use the @banner@ landmark to identify it.',
              MANUAL_CHECK_P: 'If there is branding content, typically at the top of the page, use the @banner@ landmark to identify it.',
              HIDDEN_S: 'One @banner@ landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H@ banner@ landmarks that are hidden were not evaluated.'
            },
            NODE_RESULT_MESSAGES: {
              WEBSITE_PASS_1:   'Page has @banner@ landmark.',
              WEBSITE_PASS_2:   'Page has %1 @banner@ landmarks.',
              WEBSITE_MC_1:     'If the page has a branding banner, use @role="banner"@ on its container element.',
              ELEMENT_PASS_1:   '@%1[role="banner"]@ defines a @banner@ landmark.',
              ELEMENT_PASS_2:   'The top level @header@ element defines a @banner@ landmark.',
              ELEMENT_HIDDEN_1: '@%1[role="banner"]@ element was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: 'A top level @header@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A @banner@ landmark provides a way to identify organizational or company branding content, usually replicated across all pages and located at the top of each page.'
            ],
            TECHNIQUES: [
              'The @header@ element defines a @banner@ landmark, except when it is a descendant of any of the following elements: @article@, @aside@, @main@, @nav@ or @section@.',
              'If the @header@ element technique is not being used, a @role="banner"@ attribute on the container element for the branding content can be used to define a @banner@ landmark.',
              'In websites that support mashups using @iframe@ or @frame@ elements, a @banner@ landmark is allowed in each frame.',
              'If the page is part of a website supporting mashups, use the @aria-labelledby@ or @aria-label@ attribute to differentiate @banner@ landmarks in each frame.'
            ],
           MANUAL_CHECKS: [
              'Banners are a convention used on most web sites to convey branding information, and may also be used as a location for advertising information.',
              'The @banner@ landmark identifies the banner content on the page.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: banner role',
                url:   'https://www.w3.org/TR/wai-aria/#banner'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The FOOTER element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-footer-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sectioning content',
                url:   'https://www.w3.org/TR/html5/dom.html#sectioning-content-0'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sectioning root',
                url:   'https://www.w3.org/TR/html5/sections.html#sectioning-root'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_5: banner landmark: no more than one
        // ----------------------------------------------------------------

        LANDMARK_5: {
            ID:         'Landmark 5',
            DEFINITION: 'Each page %s contain no more than one @banner@ landmark.',
            SUMMARY:    '@banner@ landmark: no more than one',
            TARGET_RESOURCES_DESC: '@[role="banner"]@ and top-level @header@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S: 'More than one @banner@ landmark found on the page. Only one @banner@ landmark is allowed per page or iframe.',
              FAIL_P: 'More than one @banner@ landmark found on the page. Only one @banner@ landmark is allowed per page or iframe.',
              HIDDEN_S: 'One @banner@ landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H@ banner@ landmarks that are hidden were not evaluated.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_PASS_1:      'The page contains one @banner@ landmark.',
              PAGE_FAIL_1:      'The page contains %1 @banner@ landmarks. Modify the page to have only one container element with a @banner@ landmark role.',
              ELEMENT_PASS_1:   '@%1[role="banner"]@ defines a @banner@ landmark.',
              ELEMENT_PASS_2:   'Top level @header@ element defines a @banner@ landmark.',
              ELEMENT_FAIL_1:   '@%1[role="banner"]@ defines a @banner@ landmark.  Modify the page to include only one @banner@ element.',
              ELEMENT_FAIL_2:   'Top level @header@ element defines a @banner@ landmark.  Modify the page to include only one @banner@ element.',
              ELEMENT_HIDDEN_1: '@%1[role="banner"]@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: 'Top level @header@ element  was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A banner landmark provides a way to identify redundant branding content, usually placed at the top of each web page.'
            ],
            TECHNIQUES: [
              'The @header@ element defines a @banner@ landmark, except when it is a descendant of any of the following elements: @article@, @aside@, @main@, @nav@ or @section@.',
              'If the @header@ element technique is not being used, a @role="banner"@ attribute on the container element for the branding content can be used to define a @banner@ landmark.',
              'In websites that support mashups using @iframe@ or @frame@ elements, a @banner@ landmark is allowed in each frame.',
              'If the page is part of a website supporting mashups, use the @aria-labelledby@ or @aria-label@ attribute to differentiate @banner@ landmarks in each frame.'
            ],
            MANUAL_CHECKS: [
              'Banners are a convention used on most web sites to convey branding information, and may also be used as a location for advertising information.',
              'The @banner@ landmark identifies the banner content on the page.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: banner role',
                url:   'https://www.w3.org/TR/wai-aria/#banner'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The FOOTER element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-footer-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_6: contentinfo landmark: for admin content
        // ----------------------------------------------------------------

        LANDMARK_6: {
            ID:         'Landmark 6',
            DEFINITION: 'Website administrative content (e.g., copyright, contact, privacy info, etc., typically at the bottom of a web page) %s be identified by using the @contentinfo@ landmark.',
            SUMMARY:    '@contentinfo@ landmark: identifies admin content',
            TARGET_RESOURCES_DESC: '@[role="contentinfo"]@ and top-level @footer@ element',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'If there is administrative content (e.g., copyright, contact, privacy info, etc.), typically at the bottom of the page, use the @contentinfo@ landmark or top level @footer@ element to identify it.',
              MANUAL_CHECK_P: 'If there is administrative content (e.g., copyright, contact, privacy info, etc.), typically at the bottom of the page, use the @contentinfo@ landmark or top level @footer@ element to identify it.',
              HIDDEN_S: 'One @contentinfo@ landmark or @footer@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @contentinfo@ landmarks or @footer@ elements that are hidden were not evaluated.'
            },
            NODE_RESULT_MESSAGES: {
              WEBSITE_PASS_1: 'Page has @contentinfo@ landmark or top level @footer@ element.',
              WEBSITE_PASS_2: 'Page has %1 @contentinfo@ landmarks and/or top level @footer@ elements.',
              WEBSITE_MC_1:   'If the page has administrative content, use @role="contentinfo"@ or @footer@ element on its container element.',
              ELEMENT_PASS_1:   '@%1@ element has @role="contentinfo"@.',
              ELEMENT_PASS_2:   'Top level @footer@ element with the default @role="contentinfo"@.',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="contentinfo"@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@footer@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @contentinfo@ landmark provides a way to identify administrative content, typically found at the bottom of each page in a website and referred to as footer information in publishing contexts.',
              'The @contentinfo@ landmark typically includes information and/or links to copyright, contact info, privacy policies and other general information found on all pages in the website.'
            ],
            TECHNIQUES: [
              'The @footer@ element defines a @contentinfo@ landmark, except when it is a descendant of any of the following elements: @article@, @aside@, @main@, @nav@ or @section@.',
              'If the @footer@ element technique is not being used, a @role="contentinfo"@ attribute on the container element for the administrative content can be used to define a @contentinfo@ landmark.',
              'In websites that support mashups using @iframe@ or @frame@ elements, a @contentinfo@ landmark is allowed in each frame.',
              'If the page is part of a website supporting mashups, use the @aria-labelledby@ or @aria-label@ attribute to differentiate possible @contentinfo@ landmarks in each frame.'
            ],
            MANUAL_CHECKS: [
              'Footers are a convention used on most web sites to provide copyright, contact, privacy and other types of adminstrative content.',
              'The @contentinfo@ landmark identifies the footer content on the page.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: contentinfo role',
                url:   'https://www.w3.org/TR/wai-aria/#contentinfo'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The FOOTER element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-footer-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sectioning content',
                url:   'https://www.w3.org/TR/html5/dom.html#sectioning-content-0'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sectioning root',
                url:   'https://www.w3.org/TR/html5/sections.html#sectioning-root'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_7: contentinfo landmark: no more than one
        // ----------------------------------------------------------------

        LANDMARK_7: {
            ID:         'Landmark 7',
            DEFINITION: 'Each page %s contain no more than one @contentinfo@ landmark.',
            SUMMARY:    '@contentinfo@ landmark: no more than one',
            TARGET_RESOURCES_DESC: '@[role="contentinfo"]@ and top-level @footer@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'More than one @contentinfo@ landmark found on the page. Only one @contentinfo@ landmark is allowed per page or iframe.',
              FAIL_P:   'More than one @contentinfo@ landmark found on the page. Only one @contentinfo@ landmark is allowed per page or iframe.',
              HIDDEN_S: 'One @contentinfo@ landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @contentinfo@ landmarks that are hidden were not evaluated.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_PASS_1:      'The page contains one @contentinfo@ landmark.',
              PAGE_FAIL_1:      'The page contains %1 @contentinfo@ landmarks and/or @footer@ elements. Modify the page to have only one container element with a @contentinfo@ landmark role or @footer@ element.',
              ELEMENT_PASS_1:   '@%1[role="contentinfo"]@ defines a @contentinfo@ landmark.',
              ELEMENT_PASS_2:   'Top level @footer@ element defines a @contentinfo@ landmark.',
              ELEMENT_FAIL_1:   '@%1[role="contentinfo"]@ defines a @contentinfo@ landmark.  Modify the page to include only one @contentinfo@ element.',
              ELEMENT_FAIL_2:   'Top level @footer@ element defines a @contentinfo@ landmark.  Modify the page to include only one @contentinfo@ element.',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="contentinfo"@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@footer@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @contentinfo@ landmark provides a way to identify administrative content, typically found at the bottom of each page in a website and referred to as footer information in publishing contexts.',
              'The @contentinfo@ landmark typically includes information and/or links to copyright, contact info, privacy policies and other general information found on all pages in the website.',
              'The @footer@ element that is NOT contained in an @section@ and @aside@ element has the default role of @contentinfo@ landmark.'
            ],
            TECHNIQUES: [
              'The @footer@ element defines a @contentinfo@ landmark, except when it is a descendant of any of the following elements: @article@, @aside@, @main@, @nav@ or @section@.',
              'If the @footer@ element technique is not being used, a @role="contentinfo"@ attribute on the container element for the administrative content can be used to define a @contentinfo@ landmark.',
              'In websites that support mashups using @iframe@ or @frame@ elements, a @contentinfo@ landmark is allowed in each frame.',
              'If the page is part of a website supporting mashups, use the @aria-labelledby@ or @aria-label@ attribute to differentiate possible @contentinfo@ landmarks in each frame.'
            ],
            MANUAL_CHECKS: [
              'Footers are a convention used on most web sites to provide copyright, contact, privacy and other types of adminstrative content.',
              'The @contentinfo@ landmark identifies the footer content on the page.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: contentinfo role',
                url:   'https://www.w3.org/TR/wai-aria/#contentinfo'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The FOOTER element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-footer-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_8: banner landmark: must/should be top-level
        // ----------------------------------------------------------------

        LANDMARK_8: {
            ID:         'Landmark 8',
            DEFINITION: 'The @banner@ landmark %s be a top-level landmark.',
            SUMMARY:    '@banner@ landmark: %s be top-level',
            TARGET_RESOURCES_DESC: '@[role="banner"]@ and top-level @header@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the @banner@ landmark on the page to ensure that it is a top-level landmark.',
              FAIL_P:   'Update the @banner@ landmarks on the page to ensure that each is a top-level landmark.',
              HIDDEN_S: 'One element with @[role="hidden"]@ attribute or @header@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H elements with @[role="hidden"]@ attributes or @header@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No elements with @[role="banner"]@ or @header@ elements on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1[role="banner"]@ defines a top-level @banner@ landmark.',
              ELEMENT_PASS_2:   '@%1[role="banner"]@ defines a top-level @banner@ landmark in the @frame@ or @iframe@.',
              ELEMENT_PASS_3:   '@header@ element defines a top-level @banner@ landmark.',
              ELEMENT_PASS_4:   '@header@ element defines a top-level @banner@ landmark in the @frame@ or @iframe@.',
              ELEMENT_FAIL_1:   'Update the landmark structure on the page such that the @%1[role="banner"]@ element is a top-level landmark (it is currently the child of a @%2@ landmark).',
              ELEMENT_FAIL_2:   'Update the landmark structure on the page such that the @header@ element is a top-level landmark (it is currently the child of a @%1@ landmark).',
              ELEMENT_HIDDEN_1: '@%1[role="banner"]@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@header@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Top-level landmarks are the easiest to find and navigate to using assistive technologies.',
              'Banner content is usually the content at beginning of a page that repeats on most pages within a website.'
            ],
            TECHNIQUES: [
              'When creating the landmark structure on the page, ensure that the @banner@ landmark or @header@ element is a top-level landmark (i.e., it is not contained within any other landmarks).',
              'A @header@ element with the context of the @body@ element or an element with @[role="contentinfo"]@ attribute defines a @banner@ landmark.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: banner role',
                url:   'https://www.w3.org/TR/wai-aria/#banner'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The HEADER element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-header-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_9: banner landmark: restrictions
        // ----------------------------------------------------------------

        LANDMARK_9: {
            ID:         'Landmark 9',
            DEFINITION: 'The @banner@ landmark %s only contain @navigation@, @region@ or @search@ landmarks.',
            SUMMARY:    '@banner@ landmark: restrictions',
            TARGET_RESOURCES_DESC: '@banner@ landmark',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the landmarks on the page to ensure that the @banner@ landmark only contains @navigation@, @region@ and @search@ landmarks.',
              FAIL_P:   'Update the %N_F landmarks that are part of the @banner@ landmark to ensure that the @banner@ landmark only contains @navigation@, @region@ and @search@ landmarks.',
              HIDDEN_S: 'One element with @[role="banner"]@ or top-level @header@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H elements with @[role="banner"]@ or top-level @header@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @[role="banner"]@ or top-level @header@ elements on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ landmark can be part of @banner@ landmark.',
              ELEMENT_PASS_2:   '@banner@ landmark does not contain any other landmarks.',
              ELEMENT_PASS_3:   '@banner@ landmark contains one allowed landmark: %1.',
              ELEMENT_PASS_4:   '@banner@ landmark contains %1 allowed landmarks: %2.',
              ELEMENT_FAIL_1:   'Update the landmarks on the page so that the @%1@ landmark is not contained in the @banner@ landmark or @header@ element. Depending on the content in this landmark, consider moving it outside the @banner@ landmark.',
              ELEMENT_FAIL_2:   'The  @banner@ landmark should NOT contain the following landmark: %1.',
              ELEMENT_FAIL_3:   'The  @banner@ landmark should NOT contain the following %1 landmarks: %2.',
              ELEMENT_HIDDEN_1: '@%1[role="banner"]@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@header@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
               'Ensuring that the landmark structure of a page is not overly complex enables users of assistive technologies to more easily find and navigate to the desired content.'
            ],
            TECHNIQUES: [
              'If landmarks are needed within a @banner@ landmark, use only @navigation@, @region@ or @search@.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: banner role',
                url:   'https://www.w3.org/TR/wai-aria/#banner'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The HEADER element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-header-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sections',
                url:   'https://www.w3.org/TR/html5/sections.html#sections'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_10: navigation landmark: restrictions
        // ----------------------------------------------------------------

        LANDMARK_10: {
            ID:         'Landmark 10',
            DEFINITION: 'The @navigation@ landmark %s only contain @region@ or @search@ landmarks.',
            SUMMARY:    '@navigation@ landmark: restrictions',
            TARGET_RESOURCES_DESC: '@navigation@ landmark',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the landmarks on the page to ensure that the @navigation@ landmark only contains @region@ or @search@ landmarks.',
              FAIL_P:   'Update the %N_F @navigation@ landmarks on the page to ensure that they only contain  @region@ or @search@ landmarks.',
              HIDDEN_S: 'One @navigation@ landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @navigation@ landmarks that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @navigation@ landmarks on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ landmark can be part of @navigation@ landmark.',
              ELEMENT_PASS_2:   '@navigation@ landmark does not contain any other landmarks.',
              ELEMENT_PASS_3:   '@navigation@ landmark contains one allowed landmark: %1.',
              ELEMENT_PASS_4:   '@navigation@ landmark contains %1 allowed landmarks: %2.',
              ELEMENT_FAIL_1:   'Update the landmarks on the page such that the @%1@ landmark is not contained by the @navigation@ landmark. Depending on the content in this landmark, consider moving it outside the @navigation@ landmark.',
              ELEMENT_FAIL_2:   'The  @navigation@ landmark should NOT contain the following landmark: %1.',
              ELEMENT_FAIL_3:   'The  @navigation@ landmark should NOT contain the following %1 landmarks: %2.',
              ELEMENT_HIDDEN_1: '@%1[role="navigation"]@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@nav@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Ensuring that the landmark structure of a page is not overly complex enables users of assistive technologies to more easily find and navigate to the desired content.'
            ],
            TECHNIQUES: [
              'If landmarks are needed within a @navigation@ landmark, use only @region@ or @search@.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: navigation role',
                url:   'https://www.w3.org/TR/wai-aria/#navigation'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The NAV element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-nav-element'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_11: main landmark: must/should be top-level
        // ----------------------------------------------------------------

        LANDMARK_11: {
            ID:         'Landmark 11',
            DEFINITION: 'The @main@ landmark %s be a top-level landmark.',
            SUMMARY:    '@main@ landmark: %s be top-level',
            TARGET_RESOURCES_DESC: '@main@ landmark',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the @main@ landmark on the page to ensure that it is a top-level landmark.',
              FAIL_P:   'Update the  @main@ landmarks on the page to ensure that each is a top-level @main@ landmark.',
              HIDDEN_S: 'One element with @[role="main"]@ attribute or a @main@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H elements with @[role="main"]@ attribute and/or @main@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @[role="main"]@ attributes or @main@ elements on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1[role="main"]@ attribute defines a top-level @main@ landmark.',
              ELEMENT_PASS_2:   '@%1[role="main"]@ attribute defines a top-level @main@ landmark in the @frame@ or @iframe@.',
              ELEMENT_PASS_3:   '@main@ element defines a top-level @main@ landmark.',
              ELEMENT_PASS_4:   '@main@ element defines a top-level @main@ landmark in the @frame@ or @iframe@.',
              ELEMENT_FAIL_1:   'Update the landmark structure on the page such that the @%1[role="main"]@ element defines a top-level @main@ landmark (it is currently the child of a @%2@ landmark).',
              ELEMENT_FAIL_2:   'Update the landmark structure on the page such that the @main@ element defines a top-level @main@ landmark (it is currently the child of a @%1@ landmark).',
              ELEMENT_HIDDEN_1: '@%1[role="main"]@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@main@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Top-level landmarks are the easiest landmarks to find and navigate to using assistive technologies.'
            ],
            TECHNIQUES: [
              'When creating the landmark structure on the page, ensure that the @main@ landmark is a top-level landmark (i.e., it is not contained within any other landmarks).',
              'The @main@ element or an element with @[role="main"]@ attribute defines a @main@ landmark.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: main role',
                url:   'https://www.w3.org/TR/wai-aria/#main'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The MAIN element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-main-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_12: contentinfo landmark: must/should be top-level
        // ----------------------------------------------------------------

        LANDMARK_12: {
            ID:         'Landmark 12',
            DEFINITION: 'The @contentinfo@ landmark %s be a top-level landmark.',
            SUMMARY:    '@contentinfo@ landmark: %s be top-level',
            TARGET_RESOURCES_DESC: '@contentinfo@ landmark',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the @contentinfo@ landmark on the page to ensure that it is a top-level landmark.',
              FAIL_P:   'Update the @contentinfo@ landmarks on the page to ensure that each @contentinfo@ landmark is a top-level landmark.',
              HIDDEN_S: 'One element with @[role="contentinfo"]@ attribute or @footer@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H elements with  @[role="contentinfo"]@ attributes and/or @footer@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No elements with @[role="contentinfo"]@ attribute and/or @footer@ elements landmarks on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1[role="contentinfo"]@ attribute defines a top-level @contentinfo@ landmark.',
              ELEMENT_PASS_2:   '@%1[role="contentinfo"]@ attribute defines a top-level @contentinfo@ landmark in the @frame@ or @iframe@.',
              ELEMENT_PASS_3:   '@footer@ element defines a top-level @contentinfo@ landmark.',
              ELEMENT_PASS_4:   '@footer@ element defines a top-level @contentinfo@ landmark in the @frame@ or @iframe@.',
              ELEMENT_FAIL_1:   'Update the landmark structure on the page such that the @%1[role="contentinfo"]@ element defines a top-level @contentinfo@ landmark (it is currently the child of a @%2@ landmark).',
              ELEMENT_FAIL_2:   'Update the landmark structure on the page such that the @footer@ element defines a top-level @contentinfo@ landmark (it is currently the child of a @%1@ landmark).',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="contentinfo"@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@%1@ element with @role="contentinfo"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Top-level landmarks are the easiest to find and navigate to using assistive technologies.'
            ],
            TECHNIQUES: [
              'When creating the landmark structure on the page, ensure that the @contentinfo@ landmark is a top-level landmark (i.e., it is not contained within any other landmarks).',
              'A @footer@ element with the context of the @body@ element or an element with @[role="contentinfo"]@ attribute defines a @contentinfo@ landmark.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: contentinfo role',
                url:   'https://www.w3.org/TR/wai-aria/#contentinfo'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The FOOTER element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-footer-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_13: contentinfo landmark: restrictions
        // ----------------------------------------------------------------

        LANDMARK_13: {
            ID:         'Landmark 13',
            DEFINITION: 'The @contentinfo@ landmark %s only contain @navigation@, @region@ or @search@ landmarks.',
            SUMMARY:    '@contentinfo@ landmark: restrictions',
            TARGET_RESOURCES_DESC: '@contentinfo@ landmark',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the landmarks on the page to ensure that the @contentinfo@ landmark only contains @navigation@, @region@ and @search@ landmarks.',
              FAIL_P:   'Update the %N_F landmarks that are part of the @contentinfo@ landmark to ensure that the @contentinfo@ landmark only contains @navigation@, @region@ and @search@ landmarks.',
              HIDDEN_S: 'One element with @[role="contentinfo"]@ or top-level @footer@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H elements with @[role="contentinfo"]@ or top-level @footer@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @[role="contentinfo"]@ or top-level @footer@ elements on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ landmark can be part of @contentinfo@ landmark.',
              ELEMENT_PASS_2:   '@contentinfo@ landmark does not contain any other landmarks.',
              ELEMENT_PASS_3:   '@contentinfo@ landmark contains one allowed landmark: %1.',
              ELEMENT_PASS_4:   '@contentinfo@ landmark contains %1 allowed landmarks: %2.',
              ELEMENT_FAIL_1:   'Update the landmarks on the page so that the @%1@ landmark is not contained in the @contentinfo@ landmark. Depending on the content in this landmark, consider moving it outside the @contentinfo@ landmark.',
              ELEMENT_FAIL_2:   'The  @contentinfo@ landmark should NOT contain the following landmark: %1.',
              ELEMENT_FAIL_3:   'The  @contentinfo@ landmark should NOT contain the following %1 landmarks: %2.',
              ELEMENT_HIDDEN_1: '@%1[role="contentinfo"]@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@footer@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
               'Ensuring that the landmark structure of a page is not overly complex enables users of assistive technologies to more easily find and navigate to the desired content.'
            ],
            TECHNIQUES: [
              'If landmarks are needed within a @contentinfo@ landmark, use only @navigation@, @region@ or @search@.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: contentinfo role',
                url:   'https://www.w3.org/TR/wai-aria/#contentinfo'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The FOOTER element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-footer-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sections',
                url:   'https://www.w3.org/TR/html5/sections.html#sections'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_14: search landmark: restrictions
        // ----------------------------------------------------------------

        LANDMARK_14: {
            ID:         'Landmark 14',
            DEFINITION: 'The @search@ landmark %s only contain @region@ landmarks.',
            SUMMARY:    '@search@ landmark: restrictions',
            TARGET_RESOURCES_DESC: '@search@ landmark',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the landmarks on the page to ensure that the @search@ landmark only contains @region@ landmarks.',
              FAIL_P:   'Update the %N_F @search@ landmarks on the page to ensure that each only contains  @region@ landmarks.',
              HIDDEN_S: 'One @search@ landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @search@ landmarks that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @search@ landmarks on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: '@%1@ landmark can be part of @search@ landmark.',
              ELEMENT_PASS_2: '@search@ landmark does not contain any @region@ landmarks.',
              ELEMENT_PASS_3: '@search@ landmark contains one allowed landmark: %1.',
              ELEMENT_PASS_4: '@search@ landmark contains %1 allowed landmarks: %2.',
              ELEMENT_FAIL_1: 'Update the landmark structure on the page such that the @%1@ landmark is not contained by the @search@ landmark. Depending on the content in this landmark, consider moving it outside the @search@ landmark.',
              ELEMENT_FAIL_2:   'The  @search@ landmark should NOT contain the following landmark: %1.',
              ELEMENT_FAIL_3:   'The  @search@ landmark should NOT contain the following %1 landmarks: %2.',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="search"@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@%1@ element with @role="@%2"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A @search@ landmark identifies a form on the page used to search for content across the entire website.',
              'For @search@ landmarks containing more than one search option and where each option can be represented as its own section, use @region@ landmarks to identify these sections.',
              'Ensuring that the landmark structure of a page is not overly complex enables users of assistive technologies to more easily find and navigate to the desired content.'
            ],
            TECHNIQUES: [
              'Website search options should be top-level @search@ landmarks (e.g. not contained in other landmarks).',
              'Include a @role="search"@ attribute on an element that contains all of the search form controls.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: search role',
                url:   'https://www.w3.org/TR/wai-aria/#search'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_15: form landmark: restrictions
        // ----------------------------------------------------------------

        LANDMARK_15: {
            ID:         'Landmark 15',
            DEFINITION: 'The @form@ landmark %s only contain @region@ landmarks.',
            SUMMARY:    '@form@ landmark: restrictions',
            TARGET_RESOURCES_DESC: '@form@ landmark',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the landmark structure on the page to ensure that the @form@ landmark only contains @region@ landmarks.',
              FAIL_P:   'Update the %N_F @form@ landmarks on the page to ensure that each only contains @region@ landmarks.',
              HIDDEN_S: 'One @form@ landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @form@ landmarks that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @form@ landmarks on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ landmark can be part of @form@ landmark.',
              ELEMENT_PASS_2:   '@form@ landmark does not contain any @region@ landmarks.',
              ELEMENT_PASS_3:   '@form@ landmark contains one @region@ landmark.',
              ELEMENT_PASS_4:   '@form@ landmark contains %1 @region@ landmarks.',
              ELEMENT_FAIL_1:   'Update the landmark structure on the page such that the @%1@ landmark is not contained by the @form@ landmark. Depending on the content in this landmark, consider moving it outside the @form@ landmark.',
              ELEMENT_FAIL_2:   'Update the landmark structure on the page such that the @form@ landmark contains only @region@ landmarks.',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="form"@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@form@ element was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_3: '@%1@ element with @role="%2"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Form landmarks provide a way to identify groups of form controls and widgets on the page.',
              'For @form@ landmarks containing more than one group of controls, where each is considered its own section, use @region@ landmarks to identify these sections.',
              'Ensuring that the landmark structure of a page is not overly complex enables users of assistive technologies to more easily find and navigate to the desired content.'
            ],
            TECHNIQUES: [
              'A @form@ element or an element with a @role="form"@ attribute, which also has an author-defined accessible name, will be considered an @form@ landmark.',
              'A @form@ landmark should be a container element of all the form controls in the form.',
              'Use a element @[role=region]@ attribute or a @section@ on an element that identifies subgroups or sections of controls.',
              'Use ARIA labeling techniques to give each region an accessible name describing the contents of the region.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: form role',
                url:   'https://www.w3.org/TR/wai-aria/#form'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_16: region landmark labeling
        // ----------------------------------------------------------------

        LANDMARK_16: {
            ID:         'Landmark 16',
            DEFINITION: 'Each element with an @[role=region]@ that should be an @region@ landmark %s have an accessible name.',
            SUMMARY:    '@region@ landmark must have accessible name',
            TARGET_RESOURCES_DESC: 'Elements with @role="region"@ and @section@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Determine whether the element with ARIA role of @region@ should be a landmark and if so, add an accessible name to the element.',
              MANUAL_CHECK_P: 'Determine if any of the %N_MC elements with ARIA role of @region@ should be landmarks, and if so, add an accessible name to the those elements.',
              HIDDEN_S: 'One element with ARIA role of @region@ that is hidden was not evaluated.',
              HIDDEN_P: '%N_H elements with ARIA role of @region@ that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No elements with ARIA role of @region@ on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1[role="region"]@ element has an accessible name and is considered an ARIA landmark.',
              ELEMENT_PASS_2:   '@section@ element has an accessible name.',
              ELEMENT_MC_1:     'Determine if the @%1[role="region"]@ element should be an ARIA landmark, and if so, add an accessible name.',
              ELEMENT_MC_2:     'Determine if the @section@ element should be an ARIA landmark, and if so, add an accessible name.',
              ELEMENT_HIDDEN_1: '@%1[role="region"]@ element was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@section@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @region@ landmark is used to identify subsections of @banner@, @complementary@, @contentinfo@, @main@, @navigation@ and @search@ landmarks.',
              'For an element with an @[role=region]@ to be considered an @region@ landmark on the page, it must have an accessible name that identifies the contents of the region.'
            ],
            TECHNIQUES: [
              'A @section@ element or an element with a @role="region"@ attribute, which also has an author-defined accessible name, will be considered an @region@ landmark.',
              'Use the @aria-labelledby@ attribute to provide an accessible name by referencing the @id@s of one or more heading (e.g. h2, h3, h4 element) or other elements that identify the contents of the region.',
              'Use the @aria-label@ attribute to provide an accessible name that identifies the contents of the region.',
              'The @title@ attribute may also be used to provide an accessible name to identify the contents of the region. Note, however, that this technique also generates a tooltip in many  web browsers.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: region role',
                url:   'https://www.w3.org/TR/wai-aria/#region'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The SECTION element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-section-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA20: Using the region role to identify a region of the page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA20'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }

            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_17: unique acc. names for landmarks with same role
        // ----------------------------------------------------------------

        LANDMARK_17: {
            ID:         'Landmark 17',
            DEFINITION: 'Multiple instances of landmarks with the same role %s have unique accessible names.',
            SUMMARY:    'Landmarks %s be uniquely identifiable',
            TARGET_RESOURCES_DESC: 'Landmarks',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Review the landmark labeling to ensure that its accessible name is unique among other landmarks of the same type.',
              FAIL_P:   'Review the labeling of %N_T landmarks to ensure that, if any other landmarks of the same type exist on the page, each has a unique accessible name.',
              HIDDEN_S: 'One landmark that is hidden was not evaluated.',
              HIDDEN_P: '%N_H landmarks that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No landmarks on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ landmark has a unique label.',
              ELEMENT_FAIL_1:   'Change the accessible name "%1" of the @%2@ landmark (or the other duplicates) so that it is unique on the page.',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="%2"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Landmarks identify the regions of content on a page.',
              'When a landmark does not have an author-defined accessible name, assistive technologies will use its ARIA role as an identifier.',
              'When there is more than one landmark of the same type on the page (e.g., multiple @navigation@ and/or @region@ landmarks), additional labeling through the use of author-defined accessible names is needed to allow users to differentiate among them.'
            ],
            TECHNIQUES: [
              'Use the @aria-labelledby@ attribute to provide a unique accessible name by referencing the @id@ of a heading or other element on the page that describes the content of the landmark.',
              'Use the @aria-label@ attribute to provide a unique accessible name that describes the content of the landmark.',
              'The @title@ attribute may be used to provide a unique accessible name that describes the content of the landmark. Note, however, that many browsers will also generate a tooltip from the @title@ attribute value.',
              'While ARIA landmarks may be defined using the @role@ attribute, some HTML5 sectioning elements have default landmark roles (e.g., @main@, @nav@, @aside@, and in some situations, @header@ and @footer@). Thus when multiple @nav@ elements, for example, are used on a page, define a unique accessible name for each of them.'
                          ],
            MANUAL_CHECKS: [
              'Verify that the label describes the content of the landmark.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: region role',
                url:   'https://www.w3.org/TR/wai-aria/#region'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sections',
                url:   'https://www.w3.org/TR/html5/sections.html#sections'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_18: Landmarks must be descriptive
        // ----------------------------------------------------------------

        LANDMARK_18: {
            ID:         'Landmark 18',
            DEFINITION: 'Landmarks %s identify regions of content on the page according to the ARIA Landmark Roles specification.',
            SUMMARY:    'Landmarks %s identify content regions',
            TARGET_RESOURCES_DESC: 'Elements with ARIA Landmark roles',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:  'Verify that the landmark role correctly identifies the content region for which the element is a container.',
              MANUAL_CHECK_P:  'Verify that each of the %N_MC landmark roles correctly identifies the content region for which its corresponding element is a container.',
              HIDDEN_S:        'One landmark that is hidden was not evaluated.',
              HIDDEN_P:        '%N_H landmarks that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No landmarks on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:      'Verify the @%1@ landmark with the label "%2" describes the type of content it contains.',
              ELEMENT_HIDDEN_1:  'The @%1@ landmark was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'When ARIA landmarks are used to identify regions of content on the page, users of assistive technologies gain programmatic access to those regions through built-in navigation commands.',
              'Proper use of landmarks provides a navigable structure where common sections or features of pages can be easily accessed or, conversely, skipped over if they represent repeated blocks of content.',
              'If the appropriate landmark roles are NOT used, the type or purpose of each content region will be less obvious to users of assistive technologies.',
              'In the worst-case scenario, when NO landmark roles are present, the content on the page will be presented to users of assistive technologies as a single undifferentiated block.',
              'Visual styling of blocks of content are often good indicators of potential landmarks (e.g. @banner@, @main@, @navigation@, @contentinfo@).'
            ],
            TECHNIQUES: [
              'Use the appropriate landmarks to identify the different regions of content on a web page.',
              'The most important landmark roles are @main@ and @navigation@, as nearly every page will include at least those regions.',
              'Other commonly used landmark roles include @banner@, @contentinfo@, @complementary@ and @search@.',
              'Use HTML5 sectioning elements that have a default ARIA landmark role: @main@ (@main@), @nav@ (@navigation@), @aside@ (@complementary@) and in some situations @header@ (@banner@) and @footer@ (@contentinfo@). When using these elements, the @role@ attribute should NOT be defined.',
              'In HTML4 and XHTML 1.0 documents, a landmark can be created using a @div@ element with a @role@ attribute and the appropriate ARIA landmark role value (e.g., @role="main"@).',
              'The @search@ role is typically placed on a @form@ element or a @div@ that surrounds the search form.',
              'When there are multiple instances of a particular landmark role on a page, provide a unique accessible name for each landmark with the same role to enable users to differentiate among them.',
              'An alternative landmark can be created in HTML5 by using the @section@ element, which has a default landmark role of @region@, with an author-defined accessible name (e.g., using @aria-labelledby@ to reference a heading element).',
              'Do not nest landmarks with the same role (e.g., do not place navigation landmarks within a navigation landmark). Instead, use the @section@ element technique described above to provide additional subsections within a standard landmark.',
              'If a region on a page does not correspond to one of the defined ARIA landmark roles, the @section@ element technique described above can be used to create a landmark container for the content.'
            ],
            MANUAL_CHECKS: [
              'View the accessible names of the landmarks on the page and verify that each uniquely describes the type of content the landmark contains.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: Sections',
                url:   'https://www.w3.org/TR/html5/sections.html#sections'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }

            ]
        },

        // ----------------------------------------------------------------
        // LANDMARK_19: complementary landmark: restrictions
        // ----------------------------------------------------------------

        LANDMARK_19: {
            ID:         'Landmark 19',
            DEFINITION: 'The @complementary@ landmark %s be a top-level landmark.',
            SUMMARY:    '@complementary@ landmark: must be top level',
            TARGET_RESOURCES_DESC: '@complementary@ landmark',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the @complementary@ landmark on the page to ensure that it is a top-level @complementary@ landmark.',
              FAIL_P:   'Update the @complementary@ landmarks on the page to ensure that each is a top-level  @complementary@ landmark or a child of a @main@ landmark.',
              HIDDEN_S: 'One element with @[role="complementary"]@ attribute or @aside@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H elements with @[role="complementary"]@ attribute and/or @aside@ elements  that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @[role="complementary"]@ attributes and/or @aside@ elements on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1[role="complementary"]@ attribute defines a @complementary@ landmark that is a top-level landmark.',
              ELEMENT_PASS_2:   '@%1[role="complementary"]@ attribute defines a @complementary@ landmark that is a top-level landmark in the @frame@ or @iframe@.',
              ELEMENT_PASS_3:   '@aside@ element defines a @complementary@ landmark that is a top-level landmark.',
              ELEMENT_PASS_4:   '@aside@ element defines a @complementary@ landmark is a top-level landmark in the @frame@ or @iframe@.',
              ELEMENT_FAIL_1:   'Update the landmark structure on the page such that the @%1[role="complementary"]@ attribute defines a @complementary@ that is a top-level landmark (it is currently the child of a @%2@ landmark).',
              ELEMENT_FAIL_2:   'Update the landmark structure on the page such that the @aside@ element is a top-level landmark (it is currently the child of a @%1@ landmark).',
              ELEMENT_HIDDEN_1: '@%1[role="complementary"]@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2: '@aside@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              '@complementary@ landmarks provide a way to identify sections of a page that may not be considered the main content, but that provide important supporting or related information to the main content.',
              'Top-level landmarks are the easiest to find and navigate to using assistive technologies.'
            ],
            TECHNIQUES: [
              'Use an @aside@ element to define a @complementary@ landmark.',
              'If the @aside@ element technique is not being used, a @role="complementary"@ attribute on the container element of the supporting content can be used to define a @complementary@ landmark.',
              'When creating the landmark structure on the page, ensure that the @complementary@ landmark is a top-level landmark (i.e., it is not contained within any other landmarks).'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: complementary role',
                url:   'https://www.w3.org/TR/wai-aria/#complementary'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The ASIDE element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-aside-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA11: Using ARIA landmarks to identify regions of a page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA11'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA13: Using aria-labelledby to name regions and landmarks',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA13'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA14'
              }
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        LANGUAGE_1: {
            ID:                    'Language 1',
            DEFINITION:            'Page %s define the language of its principal content using a valid IANA language code.',
            SUMMARY:               'Page %s use language code',
            TARGET_RESOURCES_DESC: 'HTML element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:  'Identify the principal language of the web page by using the @lang@ attribute on its @html@ element.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_PASS_1: 'The @html@ element defines the \'%1\' language code.',
              PAGE_FAIL_1: 'Add a @lang@ attribute with a valid IANA code to the  @html@ element of the page.',
              PAGE_FAIL_2: 'Change the language code \'%1\' defined in the @lang@ attribute of the @html@ element to a valid IANA code.'
            },
            PURPOSE: [
              'Assistive technologies like screen readers and other speech output technologies need to know the languages represented by the characters in order to speak the text content correctly.'
            ],
            TECHNIQUES: [
              'Use the @lang@ attribute on the @html@ or @xhtml@ element to define the principal language of the web page.',
              'Use the IANA codes to identify the principal language (e.g. en, fr, ...).'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML4: Specifying the language of content: the lang attribute',
                url:   'https://www.w3.org/TR/html4/struct/dirlang.html#adef-lang'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The lang and xml:lang attributes',
                url:   'https://www.w3.org/TR/html5/dom.html#the-lang-and-xml:lang-attributes'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'W3C Internationalization: Language tags in HTML and XML',
                url:   'https://www.w3.org/International/articles/language-tags/'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'W3C Internationalization: Choosing a Language Tag',
                url:   'https://www.w3.org/International/questions/qa-choosing-language-tags'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H57: Using language attributes on the html element',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H57'
              }
            ]
        },
        LANGUAGE_2: {
            ID:                    'Language 2',
            DEFINITION:            'Elements with text content in a different language from the principal language of the page %s use the @lang@ attribute with a valid IANA language code to identify the change.',
            SUMMARY:               'Identify language changes',
            TARGET_RESOURCES_DESC: 'Elements with text content that is in a different language than the principal language of the page',
            RULE_RESULT_MESSAGES: {
              FAIL_S:  'Change the @lang@ attribute value to a valid IANA language code for the element with the @lang@ attribute.',
              FAIL_P:  'Change the @lang@ attribute values of the %N_F elements with invalid codes to valid IANA language codes.',
              MANUAL_CHECK_S: 'Review the page for any text content that is different than the principal language of the page. If such content is found, use the @lang@ attribute on the appropriate container element to identify the language change.',
              MANUAL_CHECK_P: 'Review the page for any text content that is different than the principal language of the page. If any such content sections are found, use the @lang@ attribute on each of the appropriate container elements to identify the language changes.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_FAIL_1: 'Change the @lang@ attribute value on the element with an invalid code to a valid IANA language code.',
              PAGE_FAIL_2: 'Change the @lang@ attribute values on the %1 elements with invalid codes to valid IANA language codes.',
              PAGE_MC_1: 'One change in language was found on the page. Review the page for any other text content in languages that are different than the principal language of the page. If any more changes in language are found, use the @lang@ attribute to identify them.',
              PAGE_MC_2: '%1 changes in language were found on the page. Review the page for any other text content in languages that are different than the principal language of the page. If any more changes in language are found, use the @lang@ attribute to identify them.',
              PAGE_MC_3: 'Review the page for any text content in a languages that are different than the principal language of the page. If any changes in language are found, use the @lang@ attribute to identify them.',
              ELEMENT_PASS_1: 'The @%1@ element has the valid language code of \'%2\'',
              ELEMENT_FAIL_1: 'Change the value \'%2\' defined for the @lang@ attribute on the @%1@ element to a valid IANA language code.',
              ELEMENT_HIDDEN_1: 'The @%1@ element with the language code \'%2\' is hidden'
            },
            PURPOSE: [
              'Assistive technologies like screen readers and other speech output technologies need to know the language of the characters of an element to speak the text content correctly.'
            ],
            TECHNIQUES: [
              'Use the @lang@ attribute to define the IANA language of the text content of the element.',
              'Use the IANA codes to identify the language of the text in the element (e.g. en, fr, ...).'
            ],
            MANUAL_CHECKS: [
              'Review the page for any text content in languages that are different than the principal language of the page.',
              'If any changes in language are found, use the @lang@ attribute to identify them.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML4: Specifying the language of content: the lang attribute',
                url:   'https://www.w3.org/TR/html4/struct/dirlang.html#adef-lang'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The lang and xml:lang attributes',
                url:   'https://www.w3.org/TR/html5/dom.html#the-lang-and-xml:lang-attributes'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'W3C Internationalization: Language tags in HTML and XML',
                url:   'https://www.w3.org/International/articles/language-tags/'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'W3C Internationalization: Choosing a Language Tag',
                url:   'https://www.w3.org/International/questions/qa-choosing-language-tags'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H58: Using language attributes to identify changes in the human language',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H58'
              }
            ]
        },
        LANGUAGE_3: {
            ID:                    'Language 3',
            DEFINITION:            'Elements with @lang@ attribute %s have valid IANA language codes.',
            SUMMARY:               'Valid IANA language codes',
            TARGET_RESOURCES_DESC: 'Elements with lang attributes',
            RULE_RESULT_MESSAGES: {
              NOT_APPLICABLE: 'No elements with @lang@ attribute defined'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @%1@ element defines the \'%2\' language code.',
              ELEMENT_FAIL_1: 'Change the language code \'%2\' defined in the @lang@ attribute of the @%1@ element to a valid IANA language code.',
              ELEMENT_HIDDEN_1: 'The @%1@ element with the language code \'%2\' is hidden.'
            },
            PURPOSE: [
              'Assistive technologies like screen readers and other speech output technologies need to know the language of the characters of an element in order to speak the text content correctly.'
            ],
            TECHNIQUES: [
              'Use the @lang@ attribute to define the IANA language of the text content of the element.',
              'Use the IANA codes to identify the language of the text in the element (e.g. en, fr, ...).'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML4: Specifying the language of content: the lang attribute',
                url:   'https://www.w3.org/TR/html4/struct/dirlang.html#adef-lang'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: The lang and xml:lang attributes',
                url:   'https://www.w3.org/TR/html5/dom.html#the-lang-and-xml:lang-attributes'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'W3C Internationalization: Language tags in HTML and XML',
                url:   'https://www.w3.org/International/articles/language-tags/'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'W3C Internationalization: Choosing a Language Tag',
                url:   'https://www.w3.org/International/questions/qa-choosing-language-tags'
              }
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        LAYOUT_1: {
            ID:                    'Layout 1',
            DEFINITION:            'Layout tables %s organize content in a meaningful sequence.',
            SUMMARY:               'Layout tables %s have meaningful sequence',
            TARGET_RESOURCES_DESC: '@table@ elements used for layout',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:    'Verify document has a meaningful sequence when layout table markup is disabled.  If content does not have a meaningful sequence, reorganize content on the page to have a meaningful sequence when layout tables are disabled.',
              HIDDEN_S:          'One @table@ element that is hidden was not evaluated.',
              HIDDEN_P:          '%N_H @table@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No layout tables found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_PASS_1:      'Page does not have any tables or layout tables are only one column wide.',
              PAGE_MC_1:        '%1 tables being used for layout were found, verify the page has a meaningful sequence of content when table markup is disabled.',
              ELEMENT_PASS_1:   'Table is one column wide, and will have the same document sequence when table markup is disabled.',
              ELEMENT_MC_1:     'Verify document has a meaningful sequence of content when layout table markup is disabled.',
              ELEMENT_MC_2:     'Verify the content in the %1x%2 layout table has a meaningful sequence of content when table markup is disabled, if the table is actually a data table add data table markup to give the table an effective caption and the data tables headings.',
              ELEMENT_MC_3:     'Verify the nesting of tables for layout of content maintains a meaningful sequence of content when table markup is disabled.',
              ELEMENT_HIDDEN_1: 'Meaningful sequence was not tested The layout @table@ is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The sequence of the content (i.e. reading order) in a web page affects the conveyed meaning, especially for users of assistive technologies who cannot see the relationships between sections of content as provided by the visual cues in a graphical layout.',
              'Using table markup for page layout is one way in which the DOM order of web content can be altered such that it makes sense visually, but the reading order rendered by assistive technologies is no longer meaningful.'
            ],
            TECHNIQUES: [
              'Use CSS and web standards techniques for the coding of content, and the graphical styling and positioning of content.',
              'Avoid using table markup for graphical layout, if you do use tables for layout make sure the content still is meaningful when the table markup is disabled.',
              'Avoid using nested tables for layout, the deeper the level of nesting the more chance there of having a confusing sequence of content.',
              'Tables that are used for layout should use only @tr@ and @td@ elements, and the @table@, @tr@ and @td@ elements should have a @role="presentation"@ attribute to clearly indicate the table markup is being used for layout.'
            ],
            MANUAL_CHECKS: [
              'Use browser developer tools to disable table markup or enable a user stylesheet to change table cells to be rendered as block level elements.',
              'With layout tables disabled, view the content to make sure the reading order and structure of the document makes sense.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification: Visual formatting model',
                url:   'https://www.w3.org/TR/CSS21/visuren.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G57: Ordering the content in a meaningful sequence',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G57'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'C6: Positioning content based on structural markup',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/C6'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'C8: Using CSS letter-spacing to control spacing within a word',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/C8'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'C27: Making the DOM order match the visual order',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/C27'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F1'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F33'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F34'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F49'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'Web Standards Group',
                url:   'https://webstandardsgroup.org/standards/'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'W3C Standards',
                url:   'https://www.w3.org/standards/'
              }
            ]
        },
        LAYOUT_2: {
            ID:                    'Layout 2',
            DEFINITION:            'Tables %s not be nested for layout of content.',
            SUMMARY:               'Do not nest layout tables',
            TARGET_RESOURCES_DESC: '@table@ elements used for layout',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update the markup and CSS on this page to remove the nesting of the layout table that is nested.',
              FAIL_P:   'Update the markup and CSS on this page to remove the nesting of %N_F layout tables that are nested.',
              HIDDEN_S: 'One table element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H table elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No table elements used for layout.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:    'Table is not nested with another layout table.',
              ELEMENT_PASS_2:    'Table is one column wide, and will have the same document sequence when table markup is disabled.',
              ELEMENT_FAIL_1:  'Update the markup and CSS on this page to remove the nesting of this layout table.',
              ELEMENT_HIDDEN_1:  'Table nesting was not tested beacuse the @table@ is hidden from assistive technology.'
            },
            PURPOSE: [
              'The sequence of content (i.e. order) in the document code affects its meaning, nesting layout tables often makes the sequence of content less understandable.'
            ],
            TECHNIQUES: [
              'Use CSS and web standards techniques for the coding of content, and the graphical styling and positioning of content.',
              'Avoid using table markup for graphical layout, if you do use tables for layout make sure the content still is meaningful when the table markup is disabled.',
              'Avoid using nested tables for layout, the deeper the level of nesting the more chance there of having a confusing sequence of content.',
              'Tables that are used for layout should use only @tr@ and @td@ elements, and the @table@, @tr@ and @td@ elements should have a @role="presentation"@ attribute to clearly indicate the table markup is being used for layout.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification: Visual formatting model',
                url:   'https://www.w3.org/TR/CSS21/visuren.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F33'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F49'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'Web Standards Group',
                url:   'https://webstandardsgroup.org/standards/'
              },
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'W3C Standards',
                url:   'https://www.w3.org/standards/'
              }
            ]
        },
        LAYOUT_3: {
            ID:                    'Layout 3',
            DEFINITION:            'Verify that the use of the @aria-flowto@ attribute supports the intended reading order of content on the page.',
            SUMMARY:               'Verify @aria-flowto@ supports reading order',
            TARGET_RESOURCES_DESC: 'Elements with @aria-flowto@ attribute',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:    'Verify the element with the @aria-flowto@ attribute contributes to the intended reading order of content on the page.',
              MANUAL_CHECK_P:    'Verify the %N_MC elements with the @aria-flowto@ attributes contribute to the intended reading order of content on the page.',
              HIDDEN_S:          'One element with @aria-flowto@ attribute that is hidden was not evaluated.',
              HIDDEN_P:          '%N_H elements with @aria-flowto@ attribute that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No elements with @aria-flowto@ attribute found.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:     'Verify the content reflow defined by the @aria-flowto@ attribute on the  @%1@ element creates a meaningful reading order.',
              ELEMENT_HIDDEN_1: '@%1@ element with @aria-flowto@ attribute was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The reading order of content on the page can, in some cases, be made easier to understand by users of assistive technology with the use of @aria-flowto@.',
              'By default the reading order used by assisitive technologies is the same as the DOM ordering of content.',
              'When the DOM order of content is interspersed with unrelated content, @aria-flowto@ can be used to keep related content together.  For example a multi-column newspaper where an article spans several columns, @aria-flowto@ can be used to make it look like one continuous column to assistive technology.',
              'The @aria-flowto@ reorganizes the content by changing the order of how the content is represented in accessibility Application Programming Interfaces (APIs) used by operating systems to communicate to screen readers.'
            ],
            TECHNIQUES: [
              'The @aria-flowto@ attribute value contains a sequence of @idrefs@ that changes the reading order of content on the page as rendered by assistive technologies.',
              'Since @aria-flowto@ changes reading order to assistive technologies, it is important to read the page with a screen reader to verify the content affected by the @aria-flowto@ places related information in the proper sequence.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: flowto property',
                url:   'https://www.w3.org/TR/wai-aria/states_and_properties#aria-flowto'
              }
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

  //
  //  OAA Rules title and message string National Language Support (NLS)
  //
  rules: {

    LINK_1: {
      ID:                    'Link 1',
      DEFINITION:            'The accessible name of a link %s accurately describe the target or purpose of the link.',
      SUMMARY:               'Link text %s describe the link target',
      TARGET_RESOURCES_DESC: '@a@ and @area@ elements and elements with @role="link"@ attribute',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S: 'Verify the accessible name of the @a@, @area@ or @[role=link]@ element describes the target of the link.',
        MANUAL_CHECK_P: 'Verify the accessible name of each of the %N_MC @a@, @area@ or @[role=link]@ elements describes the target of the link.',
        FAIL_S:         'Add text content to the empty link that describes the target of the link.',
        FAIL_P:         'Add text content to the %N_F empty links that describes the target of each link.',
        HIDDEN_S:       'One hidden link was not evaluated.',
        HIDDEN_P:       '%N_H hidden links were not evaluated.',
        NOT_APPLICABLE: 'No @a@, @area@ or @[role=link]@ elements on the page.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_MC_1:     '@%1@ element has accessible name "%2". Verify that the name accurately describes the target of the link, or if not, change the accessible name to be more descriptive.',
        ELEMENT_MC_2:     '@%1@ element has accessible name "%2" with text content "%3". Verify that the name and text content, along with its surrounding context, each accurately describes the target of the link, or if not, change the accessible name, text content and/or context so that they are more descriptive.',
        ELEMENT_FAIL_1:   'The @%1@ element does NOT have an accessible name. Add text content to the link or use an ARIA labeling technique so that the accessible name describes the target of the link.',
        ELEMENT_HIDDEN_1: '@%1@ element was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'When the accessible name of a link does not describe its target or purpose, users will not have the information they need to determine the usefulness of the target resources.',
        'Following links to target resources that do not provide the expected informational value is inefficient and potentially frustrating.'
      ],
      TECHNIQUES: [
        'The text content of a link, which is its default accessible name, should uniquely describe the target or purpose of the link.',
        'Use @aria-label@, @aria-labelledby@ or the @title@ attribute to provide a more descriptive accessible name when the text content of the link cannot be changed.',
        'Use @aria-describedby@ to provide additional information for links that share the same accessible name but have different contexts to allow users to differentiate among them.',
        'If the content of a link includes an @img@ element, the accessible name for the link will incorporate the text alternative specified for the image.'
      ],
      MANUAL_CHECKS: [
        'Read the accessible name for each link aloud and make sure that it describes the target or purpose of the link.'
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: 12.2 The A element',
          url:   'https://www.w3.org/TR/html4/struct/links.html#edef-A'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-label'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-describedby@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: The @title@ attribute',
          url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'H30: Providing link text that describes the purpose of a link for anchor elements',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/H30'
        },
        { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
          title: 'OAA Example 44 - Using aria-describedby to satisfy WCAG 2.4.4 Link Purpose in Context',
          url:   'https://oaa-accessibility.org/example/44/'
        }
      ]
    },

    LINK_2: {
      ID:                    'Link 2',
      DEFINITION:            'Links with different @href@s %s have unique accessible names or descriptions.',
      SUMMARY:               'Link text %s be unique',
      TARGET_RESOURCES_DESC: '@a@ and @area@ elements and elements with @role="link"@',
      RULE_RESULT_MESSAGES: {
        FAIL_P:   'Change the accessible names or add @aria-describedby@ attributes to the %N_F @a@, @area@ or @[role=link]@ elements to provide additional information that makes each accessible name or description unique.',
        NOT_APPLICABLE:  'No @a@, @area@ or @[role=link]@ elements on the page share the same accessible name.'
      },
      NODE_RESULT_MESSAGES: {
        ELEMENT_PASS_1:     '@%1@ element has the same @href@ value as the %2 links with which it shares its accessible name.',
        ELEMENT_PASS_2:     '@%1@ element has a different @href@ value than the %2 links with which it shares its accessible name, but has a unique description using the @aria-describedby@ attribute.',
        ELEMENT_FAIL_1:   'Change the accessible name of the @%1@ element or provide additional information using the @aria-describedby@ attribute to make the link text unique.'
      },
      PURPOSE: [
        'Screen reader programs provide commands that list all links on a page by their accessible names. When links are taken out of their page context and placed in the context of such a list, links with the same accessible name appear to refer to the same informational resource.',
        'When links that point to different URLs have the same accessible name or description, screen reader users may be unable to determine which link among them references the information they are seeking.'
      ],
      TECHNIQUES: [
        'The link text (i.e. its accessible name and/or description) should uniquely describe the target of a link.',
        'Use the @aria-label@, @aria-labelledby@ or @title@ attribute to provide a more descriptive accessible name when the text content of the link cannot be changed.',
        'Use @aria-describedby@ to provide additional information for links that share the same accessible name but have different contexts to allow users to differentiate among them.'
      ],
      MANUAL_CHECKS: [
      ],
      INFORMATIONAL_LINKS: [
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: 12.2 The A element',
          url:   'https://www.w3.org/TR/html4/struct/links.html#edef-A'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-label'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-describedby@ attribute',
          url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
        },
        { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'HTML 4.01 Specification: The @title@ attribute',
          url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'H30: Providing link text that describes the purpose of a link for anchor elements',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/H30'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA1'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'ARIA7: Using aria-labelledby for link purpose',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA7'
        },
        { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
          title: 'ARIA8: Using aria-label for link purpose',
          url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA8'
        },
        { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
          title: 'OAA Example 44 - Using aria-describedby to satisfy WCAG 2.4.4 Link Purpose in Context',
          url:   'https://oaa-accessibility.org/example/44/'
        }
      ]
    }
  }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)

    //
    rules: {
     LIST_1: {
            ID:                    'List 1',
            DEFINITION:            'Page %s use semantic markup for lists: to identify the type of list container (ordered, unordered or description list) and to group its related list item elements.',
            SUMMARY:               'Use semantic markup for lists',
            TARGET_RESOURCES_DESC: '@ul@, @ol@, @li@, @dl@, @dt@ and @dd@ elements, @[role="list"]@, @[role="group"]@ and @[role="listitem"]@',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:   'Verify the list element is used semantically.',
              MANUAL_CHECK_P:   'Verify the %N_MC list elements are used semantically.',
              HIDDEN_S:         'The hidden list element was not evaluated.',
              HIDDEN_P:         'The %N_H hidden list elements were not evaluated.',
              NOT_APPLICABLE:   'No list elements found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1:         'Verify the %1 list elements are used semantically and that list markup was not omitted.',
              ELEMENT_MC_1:      'Verify the @%1@ element identifies a container element for a related group of list items.',
              ELEMENT_MC_2:      'Verify the @%1@ element identifies a list item element in a meaningfully grouped list of items.',
              ELEMENT_HIDDEN_1:  'The hidden @%1@ element was not evaluated.'
            },
            PURPOSE: [
              'When list markup is used semantically, assistive technologies are able to convey information to users as they navigate to and within lists, such as the total number of items and the relative position of each item in the list.',
              'Assistive technologies also provide additional navigation commands for lists, such as "Go to next list item" and "Go to next list".',
              'Concision of list item content is important for accessibility, since assistive technologies read the entire content of each list item when users navigate through lists.',
              'When list markup is used in ways that violate the semantics of lists, it will be confusing to users of assistive technologies and diminish the accessibility of the page.'
            ],
            TECHNIQUES: [
              'Ensure that list item content is concise.',
              'You can use ARIA labeling techniques to give a list container element a descriptive label.',
              'Use @ol@ as a container element for an ordered list of items.',
              'Use @ul@ as a container element for an unordered list of items.',
              'Use @li@ elements to identify items in ordered (@ol@) and unordered (@ul@) lists.',
              'Use @dl@ as a container element for a description list (a.k.a. definition list) that contains contiguous groupings of terms and their associated descriptions or definitions.',
              'Use @dt@ elements to identify terms being described or defined in a description list (@dl@).',
              'Use @dd@ elements to identify descriptions or definitions for a term in a description list (@dl@).',
              'For repairing existing content that does not use list elements, you can use the ARIA @role@ attributes with value @[role="list"]@ or @[role="group"]to identify list container elements and @[role="listitem"]@ to identify list item elements.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: ol element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-ol-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: ul element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-ul-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: li element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-li-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: dl element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-dl-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: dt element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-dt-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: dd element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-dd-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0; group role',
                url:   'https://www.w3.org/TR/wai-aria/#group'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0; list role',
                url:   'https://www.w3.org/TR/wai-aria/#list'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0; listitem role',
                url:   'https://www.w3.org/TR/wai-aria/#listitem'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0; aria-posinset',
                url:   'https://www.w3.org/TR/wai-aria/#aria-posinset'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0; aria-setsize',
                url:   'https://www.w3.org/TR/wai-aria/#aria-setsize'
              }
            ]
        },
     LIST_2: {
            ID:                    'List 2',
            DEFINITION:            'When appropriate, a list container element (@ul@, @ol@, @dl@, @[role="list"]@, @[role="group"]@) %s include a label that describes the purpose or contents of the list.',
            SUMMARY:               'Provide list labels when appropriate',
            TARGET_RESOURCES_DESC: '@ul@, @ol@ and @dl@ elements, container elements with @[role="list"]@, @[role="group"]@',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:   'Determine whether the container element benefits from a label and, if so, verify that it accurately describes the contents of the list.',
              MANUAL_CHECK_P:   'Determine whether the %N_MC list container elements benefit from labels and, if so, verify that each accurately describes the contents of the list.',
              HIDDEN_S:         'The hidden list element was not evaluated.',
              HIDDEN_P:         'The %N_H hidden list elements were not evaluated.',
              NOT_APPLICABLE:   'No list elements elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:      'Verify the label "%1" accurately describes the contents of the list.',
              ELEMENT_MC_2:      'Verify the @%1@ list container element does not benefit from a label, or add a label that describes the contents of the list.',
              ELEMENT_HIDDEN_1:  'The hidden @%1@ element was not evaluated.'
            },
            PURPOSE: [
              'Assistive technologies use labels on @ul@, @ol@ and @dl@ elements, and elements with @[role="list"]@ and @[role="group"]@ attributes to help screen reader users understand the purpose or contents of lists.'
            ],
            TECHNIQUES: [
              'Use the @aria-labelledby@ attribute to add a label to a list container element to reference the @id@(s) of one or more elements on the page that describe its contents.',
              'Use the @aria-label@ attribute to add a label to a list container element to provide an explicit text description of its contents.',
              'The @title@ attribute can also be used to add a label to a list container element to provide an explicit text description of its contents.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: ol element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-ol-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: ul element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-ul-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: dl element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-dl-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0; group role',
                url:   'https://www.w3.org/TR/wai-aria/#group'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0; list role',
                url:   'https://www.w3.org/TR/wai-aria/#list'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-label'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @title@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
              }
            ]
        }
     }
});

/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        NAVIGATION_1: {
            ID:         'Navigation 1',
            DEFINITION: 'At least two of the following features %s be provided for finding content in a website: a website search feature; a list of links on the home page to all pages in the website; a list of links on each page for navigation between pages; bread crumb links on each page for hierarchical navigation of the website and/or a dedicated page that serves as a site map of all the pages in the website.',
            SUMMARY:    'At least two ways of finding content',
            TARGET_RESOURCES_DESC: 'Website navigational links and search form controls',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that this page can be found from other pages in the website using at least two of the following features: a website search feature; a list of links for navigation from at least one other page in the website and/or from a page in the web site that serves as a site map.',
              MANUAL_CHECK_P: 'Verify that this page can be found from other pages in the website using at least two of the following features: a website search feature; a list of links for navigation from at least one other page in the website and/or from a page in the web site that serves as a site map.',
              NOT_APPLICABLE: 'Single page web resource: no other pages to link to or to search from.'
            },
            NODE_RESULT_MESSAGES: {
              WEBSITE_MC_1: 'This page has both @navigation@ and @search@ landmarks. Verify that they provide links for navigating and the ability to search for content in this website.',
              WEBSITE_MC_2: 'Verify that this page can be found from at least two of the following website features: a website search feature; a list of links for navigation from at least one other page in the website and/or from a page in the web site that serves as a site map.',
              ELEMENT_MC_1: 'Verify that this @navigation@ landmark can be used for navigation of the content in this website.',
              ELEMENT_MC_2: 'Verify that this @search@ landmark can be used to search for content in this website.'
            },
            PURPOSE: [
              'One of the fundamental features of the web is the provision of easy access to useful information. By providing multiple ways to find information within a website, people with disabilities are able to locate content in a manner that best meets their needs.'
            ],
            TECHNIQUES: [
              'Website search feature identified by the @search@ landmark.',
              'A list of links for navigation between pages using the @navigation@ landmark.',
              'Sandtrail/bread crumb links for hierarchical navigation of the website using the @navigation@ landmark.',
              'A dedicated page that serves as a site map of all the pages in the website.'
            ],
            MANUAL_CHECKS: [
              'Verify that at least two of the techniques are implemented for finding content on this page.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G63: Providing a site map',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G63'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G64: Providing a Table of Contents',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G64'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G125: Providing links to navigate to related Web pages',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G125'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G126: Providing a list of links to all other Web pages',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G126'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G161: Providing a search function to help users find content',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G161'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G185: Linking to all of the pages on the site from the home page',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G185'
              }
            ]
        },
        NAVIGATION_2: {
            ID:         'Navigation 2',
            DEFINITION: 'Consistent ordering of @main@, @navigation@, @search@, @banner@, @contentinfo@, @complementary@ and any other shared landmarks used across all pages in a website.',
            SUMMARY:    'Consistent ordering of landmarks',
            TARGET_RESOURCES_DESC: '@main@, @navigation@, @search@, @banner@ and @contentinfo@ landmarks',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that this page uses the same ordering of@main@, @navigation@, @search@, @banner@, @contentinfo@, @complementary@ and any other shared landmarks as other pages within the website.',
              MANUAL_CHECK_P: 'Verify that this page uses the same ordering of @main@, @navigation@, @search@, @banner@, @contentinfo@, @complementary@ and any other shared landmarks as other pages within the website.',
              NOT_APPLICABLE: 'No landmarks found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              WEBSITE_MC_1:   'Verify that this page uses the same ordering of the following landmarks as other pages in the website: %1.',
              ELEMENT_MC_1:   'Verify that the ordering of the @main@ landmark relative to other landmarks on this page is the same as the ordering used on the other pages in this website.',
              ELEMENT_MC_2:   'Verify that the ordering of the @navigation@ landmark relative to other landmarks on this page is the same as the ordering used on the other pages in this website.',
              ELEMENT_MC_3:   'Verify that the ordering of the @banner@ landmark relative to other landmarks on this page is the same as the ordering used on the other pages in this website.',
              ELEMENT_MC_4:   'Verify that the ordering of the @contentinfo@ landmark relative to other landmarks on this page is the same as the ordering used on the other pages in this website.',
              ELEMENT_MC_5:   'Verify that the ordering of the @search@ landmark relative to other landmarks on this page is the same as the ordering used on the other pages in this website.',
              ELEMENT_MC_6:   'Verify that the ordering of the @complementary@ landmark relative to other landmarks on this page is the same as the ordering used on the other pages in this website.'
            },
            PURPOSE: [
              'One of the fundamental features of the web is the provision of easy access to useful information. Providing consistent ordering of landmarks across all pages of a website will make it easier for people to find the information they are seeking and to navigate between and within pages.'
            ],
            TECHNIQUES: [
              'Include the basic @main@, @navigation@, @banner@ and @contentinfo@ landmarks in your page templates for the website.',
              'If the page includes a website search form, use the @search@ landmark.',
              'Use consistent ordering of the @main@, @navigation@, @search@, @banner@, @contentinfo@, @complementary@ and any other landmarks that are a part of each page within a website.'
            ],
            MANUAL_CHECKS: [
              'Verify that the ordering of the @main@, @navigation@, @search@, @banner@, @contentinfo@, @complementary@ and any other landmarks that are part of each page is consistent with the ordering of these landmarks on other pages.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G61: Presenting repeated components in the same relative order each time they appear',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G61'
              }
            ]
        },
        NAVIGATION_3: {
            ID:         'Navigation 3',
            DEFINITION: 'Consistent ordering of @h1@ and @h2@ elements that label recurring page sections common across all pages in a website.',
            SUMMARY:    'Consistent ordering of @h1@ and @h2@ labels',
            TARGET_RESOURCES_DESC: '@h1@ and @h2@ elements used to identify recurring sections of pages within a website',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that this page uses the same ordering of @h1@ and @h2@ elements used to mark recurring page sections as the ordering used on the other pages within the website.',
              MANUAL_CHECK_P: 'Verify that this page uses the same ordering of @h1@ and @h2@ elements used to mark recurring page sections as the ordering used on the other pages within the website.',
              FAIL_S:         'No @h1@ or @h2@ elements found on the page.',
              FAIL_P:         'No @h1@ or @h2@ elements found on the page.',
              NOT_APPLICABLE: 'Single page web resource: consistent ordering of @h1@ and @h2@ does not apply.'
            },
            NODE_RESULT_MESSAGES: {
              WEBSITE_FAIL_1: 'No @h1@ or @h2@ elements found on the page.',
              WEBSITE_MC_1:   'Verify that the ordering of @h1@ and @h2@ elements used to mark recurring page sections on this page is the same as the ordering used on the other pages within the website.',
              ELEMENT_MC_1:   'Verify that if this @h1@ heading is used to identify the main content of the page, it is in the same order relative to any @h2@ elements that identify recurring page sections as the ordering used on the other pages within the website.',
              ELEMENT_MC_2:   'Verify that if this @h2@ heading is used to identify a recurring page section, it is in the same order relative to other comparable @h2@ elements as the ordering used on the other pages within the website.'
            },
            PURPOSE: [
              'One of the fundamental features of the web is the provision of easy access to useful information. Consistent ordering of @h1@ and @h2@ elements used to identify recurring page sections common across all pages in the website will make it easier for people to find information they are seeking and to navigate between and within pages.'
            ],
            TECHNIQUES: [
              'Use an @h1@ element to identify the main content within a page.',
              'Use @h2@ elements to identify other recurring page sections such as navigation bars, web site search forms, footer information, etc.'
            ],
            MANUAL_CHECKS: [
              'View the @h1@ and @h2@ heading structure of the page, and verify that it has the same or a similar structure as other pages within the website, especially with respect to recurring page sections.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G61: Presenting repeated components in the same relative order each time they appear',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G61'
              }
            ]
        },
        NAVIGATION_4: {
            ID:         'Navigation 4',
            DEFINITION: 'Consistent labeling of landmarks across all pages in a website.',
            SUMMARY:    'Consistent labeling of landmarks',
            TARGET_RESOURCES_DESC: '@main@, @navigation@, @search@, @banner@, @complementary@ and @contentinfo@ landmarks',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that the labeling of the @main@, @navigation@, @search@, @banner@, @complementary@ and @contentinfo@ landmarks on this page is consistent with the labeling of all comparable landmarks on all other pages within the website.',
              MANUAL_CHECK_P: 'Verify that the labeling of the @main@, @navigation@, @search@, @banner@, @complementary@ and @contentinfo@ landmarks on this page is consistent with the labeling of all comparable landmarks on all other pages within the website.',
              NOT_APPLICABLE:  'No landmarks found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              WEBSITE_MC_1: 'Verify that the labeling of landmarks on this page is consistent with the labeling of comparable landmarks on all other pages within the website.',
              ELEMENT_MC_1: 'Verify that the labeling of the @main@ landmark on this page is consistent with the labeling of comparable @main@ landmarks on all other pages within the website.',
              ELEMENT_MC_2: 'Verify that the labeling of the @navigation@ landmark on this page is consistent with the labeling of comparable @navigation@ landmarks on all other pages within the website.',
              ELEMENT_MC_3: 'Verify that the labeling of the @banner@ landmark on this page is consistent with the labeling of comparable @banner@ landmarks on all other pages within the website.',
              ELEMENT_MC_4: 'Verify that the labeling of the @contentinfo@ landmark on this page is consistent with the labeling of comparable @contentinfo@ landmarks on all other pages within the website.',
              ELEMENT_MC_5: 'Verify that the labeling of the @search@ landmark on this page is consistent with the labeling of comparable @search@ landmarks on all other pages within the website.',
              ELEMENT_MC_6: 'Verify that the labeling of the @complementary@ landmark on this page is consistent with the labeling of comparable @complementary@ landmarks on all other pages within the website.'
            },
            PURPOSE: [
              'One of the fundamental features of the web is the provision of easy access to useful information. Consistent labeling of comparable landmark-identified content across all pages of a website will make it easier for people to find information they are seeking and to navigate between and within pages.'
            ],
            TECHNIQUES: [
              'Most pages have sections associated with the @main@, @navigation@, @banner@ and @contentinfo@ landmarks in your page templates for the website.',
              'If the page includes a website search form, use the @search@ landmark.',
              'Landmarks only need labels (using @aria-label@ or @aria-labelledby@) if there is more than one landmark of the same type on a page.',
              'If landmarks have labels, use consistent labeling of the landmarks across all pages within the website.'
            ],
            MANUAL_CHECKS: [
              'Verify that the main content of the page is contained within the @main@ landmark.',
              'Verify that recurring content at the top of each page is contained within a @banner@ landmark.',
              'Verify that website navigational links are contained within @navigation@ landmarks.',
              'Verify that recurring content at the bottom of each page is contained within a @contentinfo@ landmark.',
              'Verify that if a landmark has a label and there are comparable landmarks on other pages in the website, the labels are the same on each page.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G61: Presenting repeated components in the same relative order each time they appear',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G61'
              }
            ]
        },
        NAVIGATION_5: {
            ID:         'Navigation 5',
            DEFINITION: 'Consistent accessible names for @h1@ and @h2@ elements that identify recurring page sections common across all pages in a website.',
            SUMMARY:    'Consistent @h1@ and @h2@ page section labels',
            TARGET_RESOURCES_DESC: '@h1@ and @h2@ elements used to identify recurring page sections within a website',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that the accessible names of @h1@ and @h2@ elements used to identify recurring page sections are consistent with those on all other pages within the website.',
              MANUAL_CHECK_P: 'Verify that the accessible names of @h1@ and @h2@ elements used to identify recurring page sections are consistent with those on all other pages within the website.',
              FAIL_S: 'No @h1@ or @h2@ elements found on the page.',
              FAIL_P: 'No @h1@ or @h2@ elements found on the page.',
              NOT_APPLICABLE: 'Single page web resource: consistency of accessible names does not apply.'
            },
            NODE_RESULT_MESSAGES: {
              WEBSITE_FAIL_1: 'No @h1@ or @h2@ elements found on the page',
              WEBSITE_MC_1:   'Verify that the accessible names of @h1@ and @h2@ elements used to identify recurring page sections are the same as those of comparable @h1@ and @h2@ elements found on the other pages within the website.',
              ELEMENT_MC_1:   'Verify that if this @h1@ heading is used to identify the main content of the page, it has the same accessible name as comparable @h1@ elements on the other pages within the website.',
              ELEMENT_MC_2:   'Verify that if this @h2@ heading is used to identify a recurring page section, it has the same accessible name as comparable @h2@ elements on the other pages within the website.'
            },
            PURPOSE: [
              'One of the fundamental features of the web is the provision of easy access to useful information. Consistent accessible names of @h1@ and @h2@ elements used to identify recurring page sections common across all pages in the website will make it easier for people to find information they are seeking and to navigate between and within pages.'
            ],
            TECHNIQUES: [
              'Use @h1@ elements to identify the main content within a page.',
              'Use @h2@ elements to identify other major sections within pages, e.g. navigation bars, web site search forms, footer information, etc.'
            ],
            MANUAL_CHECKS: [
              'View the @h1@ and @h2@ heading structure of the page, and verify that it has the same relative order as other pages within the website'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G61: Presenting repeated components in the same relative order each time they appear',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G61'
              }
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

  //
  //  OAA Rules title and message string National Language Support (NLS) for sensory rules
  //
  rules: {
    ORDER_1: {
      ID:                    'Order 1',
      DEFINITION:            'Elements positioned using CSS @absolute@, @relative@ or @fixed@ %s maintain a meaningful reading order of content.',
      SUMMARY:               'Reading order: CSS positioning',
      TARGET_RESOURCES_DESC: '@article@, @aside@, @div@, @footer@, @header@, @main@, @nav@, @section@, @table[role="presentation"]@',
      RULE_RESULT_MESSAGES: {
        MANUAL_CHECK_S:   'Verify the element positioned with CSS maintains a reading order meaningful to users of assistive technologies.',
        MANUAL_CHECK_P:   'Verify the %N_MC elements positioned with CSS maintain a reading order meaningful to users of assistive technologies.',
        HIDDEN_S:         'The element positioned with CSS that is hidden was not evaluated.',
        HIDDEN_P:         '%N_H elements positioned with CSS that are hidden were not evaluated.'
        },
      NODE_RESULT_MESSAGES: {
        ELEMENT_MC_1:     'Verify the @%1@ element with @position: %2@ maintains a meaningful reading order with other content on the page.',
        ELEMENT_HIDDEN_1: 'The @%1@ element with @position: %2@ was not evaluated because it is hidden from assistive technologies.'
      },
      PURPOSE: [
        'If the reading order of text content on the page is presented to users of assistive technologies in an order that does not match the intension of the author, reading comprehension will be affected. In worst-case scenarios, the meaning of the out-of-order content may contradict or bear little resemblance to the intended meaning.',
        'Assistive technologies render web page content based upon the sequence of the DOM elements within the HTML document.',
        'Web page designs that rely upon @table@ markup for layout or advanced CSS positioning techniques and JavaScript to rearrange content may result in a visual rendering of content that differs in reading order from the actual DOM ordering used by assistive technologies. Thus while the visual rendering may appear to have the correct or desired reading order, when rendered by assistive technologies such as screen readers, the actual reading order will be incorrect and correspondingly illogical.',
        'The relationship of the DOM order of content to the intended reading order is therefore very important for ensuring that information is logically presented to users of assistive technologies.'
      ],
      TECHNIQUES: [
        'Minimize the use of CSS @position@ values of @absolute@,  @relative@ and @fixed@.',
        'Make sure related content moves as a block when repositioning content on a page.'
      ],
      MANUAL_CHECKS: [
        'Disable layout tables (e.g. table[role="presentation"]) and CSS to make sure the content rendered has a meaningful sequence.'
      ],
      INFORMATIONAL_LINKS: [
        {
          type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'WCAG 2.0 Success Criterion 1.3.2 Meaningful Sequence',
          url:   'https://www.w3.org/TR/WCAG20/#content-structure-separation-sequence'
        },
        {
          type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
          title: 'Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification: position property',
          url:   'https://www.w3.org/TR/CSS2/visuren.html#propdef-position'
        }
      ]
    }
  }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules National Language Support (NLS) for Audio Rules
    //
    rules: {
        RESIZE_1: {
            ID:                    'Resize 1',
            DEFINITION:            'When the text of a page is resized the text content %s reflow to fill available view and all text content should remain visible (e.g. text is not clipped by iframe sizes or CSS overflow limits).',
            SUMMARY:               'Resize text content',
            TARGET_RESOURCES_DESC: 'All pages',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:  'Resize the text using the zoom feature of the browser to check to make sure text content is visible (e.g. text is not clipped by iframe sizes or CSS overflow limits).'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1:      'Resize the text using the zoom feature of the browser to check to make sure text content is visible (e.g. text is not clipped by iframe sizes or CSS overflow limits).'
            },
            PURPOSE: [
              'People with visual impairments may increase the size of text and the text should reflow to fit the available viewing area to make it easier to read.',
              'If text is clipped by limits on iframe sizes or CSS overflow properties some text content will be impossible to view.'
            ],
            TECHNIQUES: [
              'Use relative CSS sized like @em@ and @percentage@ rather than pixels and point sizes.',
              'If using the CSS overflow property, @iframe@ or @frame@ check to make sure content reflows and is not clipped by changes in zoom levels.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'How to meet 1.4.4 Resize Text',
                url:   'https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-visual-audio-contrast-scale'
              }
            ]
        }
    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        ROLE_1: {
            ID:               'Role 1',
            DEFINITION:       'Overriding a @main@ element\'s default @role@ of @main@ landmark %s only be done in special cases.',
            SUMMARY:          '@main@ element @role@ semantics.',
            TARGET_RESOURCES_DESC: '@main@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ attribute from the @main@ element to support the default @main@ landmark semantics, if the content does not represent @main@ landmark semantics use @role="presentation"@ or change the element to one that does identify the semantics of the content.',
              FAIL_P:         'Remove the @role@ attribute from the %N_F @main@ elements to support the default @main@ landmark semantics, if the content does not represent @main@ landmark semantics use @role="presentation"@ or change the element to one that does identify the semantics of the content.',
              MANUAL_CHECK_S: 'Verify that the @main@ element with @role="presentation"@ does not contain @main@ landmark semantics.',
              MANUAL_CHECK_P: 'Verify that the %N_MC @main@ elements with @role="presentation"@ do not contain @main@ landmark semantics.',
              HIDDEN_S:       'One @main@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @main@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @main@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the attribute @role="%1"@ to support the default semantics of a @main@ landmark or if the element does not identify the primary content change the role to @role="presentation"@ or use a different element that does identify the semantics of content.',
              ELEMENT_MC_1:     'Verify the @main@ element with @role="presentation"@ does not contain the primary content of the page.',
              ELEMENT_HIDDEN_1: '@main@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @main@ element has role restrictions as part of its definition in the W3C HTML5 Specification.',
              'The @main@ element semantics are to identify the primary content on the page.',
              'If the @main@ element does not contain the primary content of the web page the @main@ landmark semantics the of the element must be changed.'
            ],
            TECHNIQUES: [
              'HTML5 enabled browsers and modern assistive technologies identify the @main@ element as a @main@ landmark without @role="main"@ being specified, but @role="main"@ is allowed for backward compatibility.',
              'If the @main@ element does not contain the primary content of the web page due to author error use @role="presentation"@ to override the @main@ landmark semantics or change element to an element that correctly identifies the semantics of the content.',
              'If you need to support Microsoft Internet Explorer(IE) 8, use @div[role="main"]@ instead of the @main@ element to indicate primary content, since IE 8 does not support accessibility features of HTML5 elements.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The main element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-main-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Using WAI-ARIA in HTML',
                url:   'https://www.w3.org/TR/aria-in-html/'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: main role',
                url:   'https://www.w3.org/TR/wai-aria/#main'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: presentation role',
                url:   'https://www.w3.org/TR/wai-aria/#presentation'
              }
            ]
        },
        ROLE_2: {
            ID:               'Role 2',
            DEFINITION:       'The @body@ element %s only @document@ (default) or @application@ role semantics.',
            SUMMARY:          '@body@ element role semantics.',
            TARGET_RESOURCES_DESC: '@body@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Change the role attribute on the @body@ element to either @document@ or @application@, or remove the @role@ attribute all together.',
              FAIL_P:         'Change the role attribute on the %N_F @body@ elements to either @document@ or @application@, or remove the role attribute all together.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1: 'Change the attribute @role="%1"@ to @role="document"@ or @role="application"@, or remove the @role@ attribute all together.'
            },
            PURPOSE: [
              'The @body@ element has role restrictions as part of its definition in the W3C HTML5 Specification.',
              'The @body@ element should only be used to indicate whether the page is primarily has @document@ or @application@ semantics.',
              'The default (e.g. no @role@ attribute) is @document@ role semantics.'
            ],
            TECHNIQUES: [
              'If the web page is primarily composed of forms and widgets that benefit from using the @role="application"@ on the @body@ element.',
              'If the web page is primarily composed of non interactive text and images do not use the @role@ attribute on the @body@ element.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The body element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-body-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: document role',
                url:   'https://www.w3.org/TR/wai-aria/#document'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: application role',
                url:   'https://www.w3.org/TR/wai-aria/#application'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Using WAI-ARIA in HTML',
                url:   'https://www.w3.org/TR/aria-in-html/'
              }
            ]
        },
        ROLE_3: {
            ID:               'Role 3',
            DEFINITION:       '@ol@ and @ul@ elements %s only have grouping role values of @directory, @group@, @listbox@, @menu@, @menubar@, @presentation@, @radiogroup@, @tablist@, @toolbar@ or @tree@.',
            SUMMARY:          '@ol@ and @ul@ role grouping semantics',
            TARGET_RESOURCES_DESC: '@ol@ and @ul@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ on the @ol@ and @ul@ element or change the @role@ semantics to an allowed grouping widget role.',
              FAIL_P:         'Remove the @role@ on the %N_F @ol@ and @ul@ elements or change the @role@ semantics to an allowed grouping widget role.',
              MANUAL_CHECK_S: 'Verify that the  @ol@ and @ul@ element with @role="presentation"@ does not contain content related to the semantics of a list element or grouping widget role.',
              MANUAL_CHECK_P: 'Verify that the %N_MC  @ol@ and @ul@ elements with @role="presentation"@ do not contain content related to the semantics of a list element or grouping widget role.',
              HIDDEN_S:       'One @ol@ and @ul@ element with @role@ attribute that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @ol@ and @ul@ elements with @role@ attribute that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @ol@ and @ul@ elements with @role@ attribute found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute on the @%1@ element, change the attribute @role="%2"@ to an allowed role, or use a different element that represents the semantics of the content.',
              ELEMENT_MC_1:     'Verify the @%1@ element with @role="presentation"@ does not contain content that could be considered part of a list.',
              ELEMENT_HIDDEN_1: '@%1@ element with @role="%2"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @ol@ and @ul@ elements have role restrictions as part of their definition in the W3C HTML5 Specification.',
              'When @ol@ and @ul@ elements only need to use the @role@ attribute when they are part of interactive widgets and are restricted to widget grouping roles.',
              'The @role@ values used identify grouping widget roles to ensure that their native grouping semantics are not inadvertently overridden by non-grouping widget or landmark roles.'
            ],
            TECHNIQUES: [
              'Do not use the @role@ attribute if the default semantics of @ol@ or @ul@ represent a container of a non-interactive list.',
              'The @ol@ and @ul@ elements when used as part of widgets must be used to indicate the grouping of a list of related widget roles.',
              'Allowed role values include: @directory, @group@, @listbox@, @menu@, @menubar@, @presentation@, @radiogroup@, @tablist@, @toolbar@ or @tree@.',
              'In rare cases @role="presentation"@ is allowed on a @ol@ and @ul@ element when the element is not being used to represent a group of related items in a list.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The ol element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-ol-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The ul element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-ul-element'
              }
            ]
        },
        ROLE_4: {
            ID:               'Role 4',
            DEFINITION:       '@article@ element %s only have @role@ semantics of @region@, @article@ (default), @main@, @document@ or @application@.',
            SUMMARY:          '@article@ element role semantics',
            TARGET_RESOURCES_DESC: '@article@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ attribute or change the @role@ attribute on the @article@ element to an allowed @role@ value or remove the @role@ attribute all together.',
              FAIL_P:         'Remove the @role@ attributes and/or change the @role@ attribute on the %N_F @article@ elements to an allowed @role@ value or remove the role attribute all together.',
              HIDDEN_S:       'One @article@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @article@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @article@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute, change the attribute @role="%1"@ to one of the allowed roles, or use a different element that does semantically identify the content',
              ELEMENT_HIDDEN_1: '@article@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @article@ element has role restrictions as part of its definition in the W3C HTML5 Specification.',
              'The @article@ element can be primarily be used to identify news paper or magazine articles, a list or nested messages in a comment or discussion list.',
              'The @article@ element might also be used to identify static text and image content in a web application using the @region@ or @document@ role.',
              'The @article@ element might also be used to identify a section of form controls and widgets in a web application using the @region@ or @application@ role.'

            ],
            TECHNIQUES: [
              'If the content of the @article@ element is primarily form controls and/or widgets use @role="application"@ on the @article@ element.',
              'If the content of the @article@ element is used as the container for the main content of the page use @role="main"@ on the @article@ element or preferably change the element to a @main@ element.',
              'If the content of the @article@ element is used as the container for a message in nested discussion list, comment to a blog, or as a magazine/news story use @role="article"@ on the @article@ element.',
              'If the content of the @article@ element is used as a sub-section of another landmark use @role="region"@ with an accessible name to identify the sub-section.',
              'If the content of the @article@ element does not meet any of the other techniques do not use the @role@ attribute.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The article element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-article-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: document role',
                url:   'https://www.w3.org/TR/wai-aria/#document'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: application role',
                url:   'https://www.w3.org/TR/wai-aria/#application'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: main role',
                url:   'https://www.w3.org/TR/wai-aria/#main'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: article role',
                url:   'https://www.w3.org/TR/wai-aria/#article'
              }

            ]
        },
        ROLE_5: {
            ID:               'Role 5',
            DEFINITION:       '@section@ element %s only have role semantics of @alert@, @alertdialog@, @application@, @contentinfo@, @dialog@, @document@, @log@, @main@, @marquee@, @presentation@, @region@, @search@ or @status@.',
            SUMMARY:          '@section@ element role semantics',
            TARGET_RESOURCES_DESC: '@section@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ attribute on the @section@ element or change the role to an allowed role that semantically identifies the content:  @alert@, @alertdialog@, @application@, @contentinfo@, @dialog@, @document@, @log@, @main@, @marquee@, @presentation@, @region@, @search@ or @status@, or remove the @role@ attribute all together.',
              FAIL_P:         'Remove the @role@ attribute on the %N_F @section@ elements and/or change their roles to an allowed role that semantically identifies the content:  @alert@, @alertdialog@, @application@, @contentinfo@, @dialog@, @document@, @log@, @main@, @marquee@, @presentation@, @region@, @search@ or @status@, or remove the @role@ attribute all together.',
              HIDDEN_S:       'One @section@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @section@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @section@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute, change the attribute @role="%1"@ to one of the allowed roles, or use a different element that does semantically identify the content',
              ELEMENT_HIDDEN_1: '@section@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @section@ element has role restrictions as part of its definition in the W3C HTML5 Specification.',
              'The @section@ element can be used to for identifying many types of of sections and sub sections within a web page and a limited number of widget roles, review the techniques for the possible uses of the section element with ARIA @role@ semantics.',
              'The @section@ element should not be used when there is a more semantically meaningful elements available (e.g. @main@, @header@, @footer@,..)',
              'The default (e.g. no @role@ attribute) is @role="region"@, if the @section@ element has an accessible name it will be considered a landmark in the document.'
            ],
            TECHNIQUES: [
              'If the content of the @section@ element is used as a sub-section of another landmark use @role="region"@ with an accessible name to identify the sub-section.',
              'If the content of the @section@ element is used to provide a time sensitive text message to the user that is very important for the user to know use the live region @role="alert"@ on the @section@ element.',
              'If the content of the @section@ element is used to create a error dialog box with a message that is very important for the user to know use the @role="alertdialog"@ on the @section@ element.',
              'If the content of the @section@ element is primarily form controls and/or widgets use @role="application"@ on the @section@ element.',
              'If the content of the @section@ element is used as the container for footer information that is repeated on most pages of the website use @role="contentinfo"@ on the @section@ element.',
              'If the content of the @section@ element is used to create a non-error message related dialog box use the @role="dialog"@ on the @section@ element.',
              'If the content of the @section@ element is primarily composed of non interactive text and images and the @section@ element is embedded inside an container element with @role="application""@ use the @role="document"@ attribute on the @section@ element.',
              'If the content of the @section@ element is used as the container a list of messages use @role="log"@ on the @section@ element.',
              'If the content of the @section@ element is used as the container for the main content of the page use @role="main"@ on the @section@ element.',
              'If the content of the @section@ element is used as for periodically changing text on the page that is considered more informational (e.g. news tag line) use @role="marquee"@ on the @section@ element.',
              'If the content of the @section@ element is NOT being used as the container for a region landmark use @role="presentation"@ on the @section@ element to remove it from landmark navigation.',
              'If the content of the @section@ element is used as the container for sub section within a landmark use @role="region"@ on the @section@ element.',
              'If the content of the @section@ element is used as the container for a search the website form use @role="search"@ on the @section@ element.',
              'If the content of the @section@ element is used as the container for a status message that will be automatically be updated on some pending transaction use @role="status"@ on the @section@ element.',
              'If the content of the @section@ element does not meet any of the other techniques do not use the @role@ attribute.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The article element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-article-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: alert role',
                url:   'https://www.w3.org/TR/wai-aria/#alert'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: alertdialog role',
                url:   'https://www.w3.org/TR/wai-aria/#alertdialog'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: application role',
                url:   'https://www.w3.org/TR/wai-aria/#application'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0:contentinfo role',
                url:   'https://www.w3.org/TR/wai-aria/#contentinfo'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: dialog role',
                url:   'https://www.w3.org/TR/wai-aria/#dialog'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: document role',
                url:   'https://www.w3.org/TR/wai-aria/#document'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: log role',
                url:   'https://www.w3.org/TR/wai-aria/#log'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: main role',
                url:   'https://www.w3.org/TR/wai-aria/#main'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: marquee role',
                url:   'https://www.w3.org/TR/wai-aria/#marquee'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: presentation role',
                url:   'https://www.w3.org/TR/wai-aria/#presentation'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: search role',
                url:   'https://www.w3.org/TR/wai-aria/#search'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: status role',
                url:   'https://www.w3.org/TR/wai-aria/#status'
              }
            ]
        },
        ROLE_6: {
            ID:               'Role 6',
            DEFINITION:       'Overriding a @nav@ element\'s default @role@ of @navigation@ landmark %s only be done in special cases.',
            SUMMARY:          'Do not override @nav@ element semantics.',
            TARGET_RESOURCES_DESC: '@nav@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ attribute on the @nav@ element to support the default semantics of a @navigation@ landmark, change the @role@ attribute to @presentation@ if the content does not represent a @navigation@ landmark or change the element to an element that better represents the semantics of the content.',
              FAIL_S:         'Remove the @role@ attribute on the %N_F @nav@ elements to support the default semantics of a @navigation@ landmark, change the @role@ attribute to @presentation@ if the content does not represent a @navigation@ landmark or change the element to an element that better represents the semantics of the content.',
              HIDDEN_S:       'One @nav@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @nav@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @nav@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute, change the attribute @role="%1"@ to @navigation@ or @role="presentation"@ or use a different element that represents the semantics of the content.',
              ELEMENT_MC_1:     'Verify the @nav[role="presentation"]@ does not contain content that represents a @navigation@ landmark.',
              ELEMENT_HIDDEN_1: '@nav@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A @nav@ element has role restrictions as part of its definition in the W3C HTML5 Specification to help ensure the @nav@ element semantics of identifying @navigation@ landmark content.',
              'A @nav@ element should only use @role="presentation"@ if the content of the @nav@ element is not being used to identify @navigation@ landmark content (e.g. repairing poor page semantics).'
            ],
            TECHNIQUES: [
              'The @nav@ element with no @role@ value by default defines a @navigation@ landmark, but the @role="navigation"@ is allowed to support legacy pages.',
              'If the @nav@ element does not identify a @navigation@ landmark content use a different element that does identify the semantics of content.',
              'In rare cases @role="presentation"@ can be used when the @nav@ element does not represent the website or page navigation links on the page (e.g. repairing poor page semantics).',
              'Any other @role@ values are not allowed on @nav@ elements.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The nav element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-nav-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: navigation role',
                url:   'https://www.w3.org/TR/wai-aria/#navigation'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: presentation role',
                url:   'https://www.w3.org/TR/wai-aria/#presentation'
              }

            ]
        },
        ROLE_7: {
            ID:               'Role 7',
            DEFINITION:       '@aside@ element %s only have role semantics of @complementary@ (default do not set), @note@, @region@, @search@ or @presentation@.',
            SUMMARY:          '@aside@ element role semantics',
            TARGET_RESOURCES_DESC: '@aside@ element',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ attribute on the @aside@ element, change the role to an allowed role that semantically identifies the content: @complementary@ (default do not set), @note@, @region@, @search@ or @presentation@ .',
              FAIL_P:         'Remove the @role@ attribute on the %N_F @section@ elements, change their roles to an allowed role that semantically identifies the content:  @complementary@ (default do not set), @note@, @region@, @search@ or @presentation@.',
              HIDDEN_S:       'One @aside@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @aside@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @aside@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute, change the attribute @role="%1"@ to one of the allowed roles, or use a different element that does semantically identify the content',
              ELEMENT_HIDDEN_1: '@aside@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @aside@ element has role restrictions as part of its definition in the W3C HTML5 Specification.',
              'The @aside@ element is used for tangentially related content to main content of the page and are often represented as sidebars in printed typography.',
              'Tangentially related content should be identified as a @role="complementary"@, @role="search"@ or role of @role="note"@.',
              'The difference between @complementary@ and @search@ roles and the @note@ role is that @complementary@ and @search@ are landmark roles and support and @note@ is not a landmark role.',
              'The @search@ role should be used if the content of the @aside@ element are form controls or widgets used for searching the website content.'
            ],
            TECHNIQUES: [
              'If the content of the @aside@ element is used for tangentially related content to main content of the page use @role="complementary"@ to make the content part of the landmark navigation of the page.',
              'If the content of the @aside@ element is used for website content search form controls use @role="search"@ to identify the search semantics and make the content part of the landmark navigation of the page.',
              'If the content of the @aside@ element is used for tangentially related content to main content of the page use @role="note"@.  The @note@ role is not part of the landmark navigation of the page and therefore is less commonly used.',
              'If the content of the @aside@ element is used as a sub-section of another landmark use @role="region"@ with an accessible name to identify the sub-section.',
              'If the content of the @aside@ element is used for any other purpose than for tangentially related content to main content use @role="presentation"@ to remove the @aside@ semantics.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The aside element',
                url:   'https://www.w3.org/TR/html5/sections.html#the-aside-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: complementary role',
                url:   'https://www.w3.org/TR/wai-aria/#complementary'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: note role',
                url:   'https://www.w3.org/TR/wai-aria/#note'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: search role',
                url:   'https://www.w3.org/TR/wai-aria/#search'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: presentation role',
                url:   'https://www.w3.org/TR/wai-aria/#presentation'
              }
            ]
        },
        ROLE_8: {
            ID:               'Role 8',
            DEFINITION:       'Overriding a @header@ element\'s default @role@ of @banner@ landmark %s only be done in special cases.',
            SUMMARY:          'Do not override @header@ element @role@.',
            TARGET_RESOURCES_DESC: '@header@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ attribute from the @header@ element to support the default @banner@ landmark semantics, if the content does not represent @banner@ landmark semantics use @role="presentation"@ or change the element to one that does identify the semantics of the content .',
              FAIL_P:         'Remove the @role@ attribute from the %N_F @header@ elements to support the default @banner@ landmark semantics, if the content does not represent @banner@ landmark semantics use @role="presentation"@ or change the element to one that does identify the semantics of the content .',
              MANUAL_CHECK_S: 'Verify that the @header@ element with @role="presentation"@ does not contain @banner@ landmark semantics.',
              MANUAL_CHECK_P: 'Verify that the %N_MC @header@ elements with @role="presentation"@ do not contain @banner@ landmark semantics.',
              HIDDEN_S:       'One @header@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @header@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @header@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute, change the attribute @role="%1"@ to @banner@ or @role="presentation"@, or use a different element that represents the semantics of the content.',
              ELEMENT_MC_1:     'Verify the @header[role="presentation"]@ does not contain content that represents a @banner@ landmark.',
              ELEMENT_HIDDEN_1: '@header@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A top-level @header@ element has role restrictions as part of its definition in the W3C HTML5 Specification to help ensure the @header@ element semantics of identifying @banner@ landmark content.',
              'A top-level @header@ element should only use @role="presentation"@ if the content of the @header@ element is not being used to identify @banner@ landmark content (e.g. repairing poor page semantics).'
            ],
            TECHNIQUES: [
              'The top level @header@ element with no @role@ value by default defines a @banner@ landmark, but the @role="banner"@ is allowed to support legacy pages.',
              'If the top level @header@ element does not identify a @banner@ landmark content use a different element that does identify the semantics of content.',
              'In rare cases @role="presentation"@ can be used when the @header@ element does not represent the @banner@ landmark content on the page (e.g. repairing poor page semantics).',
              'Any other @role@ values are not allowed on @header@ elements.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The main element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-main-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: banner role',
                url:   'https://www.w3.org/TR/wai-aria/#banner'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: presentation role',
                url:   'https://www.w3.org/TR/wai-aria/#presentation'
              }
            ]
        },
        ROLE_9: {
            ID:               'Role 9',
            DEFINITION:       'Overriding a @footer@ element\'s default @role@ of @contentinfo@ landmark %s only be done in special cases.',
            SUMMARY:          'Do not override @footer@ element @role@.',
            TARGET_RESOURCES_DESC: '@footer@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ attribute from the @footer@ element to support the default @contentinfo@ landmark semantics, if the content does not represent @contentinfo@ landmark semantics use @role="presentation"@ or change the element to one that does identify the semantics of the content .',
              FAIL_P:         'Remove the @role@ attribute from the %N_F @footer@ elements to support the default @contnentinfo@ landmark semantics, if the content does not represent @contentinfo@ landmark semantics use @role="presentation"@ or change the element to one that does identify the semantics of the content .',
              MANUAL_CHECK_S: 'Verify that the @footer@ element with @role="presentation"@ does not contain @banner@ landmark semantics.',
              MANUAL_CHECK_P: 'Verify that the %N_MC @footer@ elements with @role="presentation"@ do not contain @banner@ landmark semantics.',
              HIDDEN_S:       'One @footer@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @footer@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @footer@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute, change the attribute @role="%1"@ to @contentinfo@ or @role="presentation"@, or use a different element that represents the semantics of the content.',
              ELEMENT_MC_1:     'Verify the @footer[role="presentation"]@ does not contain content that represents a @contentinfo@ landmark.',
              ELEMENT_HIDDEN_1: '@footer@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'A top-level @footer@ element has role restrictions as part of its definition in the W3C HTML5 Specification to help ensure the @footer@ element semantics of identifying @contentinfo@ landmark content.',
              'A top-level @footer@ element should only use @role="presentation"@ if the content of the @footer@ element is not being used to identify @contentinfo@ landmark content (e.g. repairing poor page semantics).'
            ],
            TECHNIQUES: [
              'The top level @footer@ element with no @role@ value by default defines a @contentinfo@ landmark, but the @role="contentinfo"@ is allowed to support legacy pages.',
              'If the top level @footer@ element does not identify a @contentinfo@ landmark content use a different element that does identify the semantics of the content.',
              'In rare cases @role="presentation"@ can be used when the @footer@ element does not represent the @contentinfo@ landmark content on the page (e.g. repairing poor page semantics).',
              'Any other @role@ values are not allowed on @footer@ elements.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The main element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-main-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: contentinfo role',
                url:   'https://www.w3.org/TR/wai-aria/#contentinfo'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: presentation role',
                url:   'https://www.w3.org/TR/wai-aria/#presentation'
              }
            ]
        },
        ROLE_10: {
            ID:               'Role 10',
            DEFINITION:       'Overriding heading element\'s (@h1-h6@) default @role@ of @heading@  %s only be done in special cases.',
            SUMMARY:          'Overriding @h1-h6@ role semantics',
            TARGET_RESOURCES_DESC: '@h1@, @h2@, @h3@, @h4@, @h5@, @h6@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ attribute from the heading element to support the default @heading@ semantics, use @tab@ if the heading represents a @tab@ in a @tabpanel@, or use @role="presentation"@ if the content does not represent @heading@ or @tab@ semantics.',
              FAIL_P:         'Remove the @role@ attribute from the %N_F heading elements to support the default @heading@ semantics, use @tab@ if the heading represents a @tab@ in a @tabpanel@, and/or use @role="presentation"@ if the content does not represent @heading@ or @tab@ semantics.',
              MANUAL_CHECK_S: 'Verify that the heading element (@h1-h6@) with @role="presentation"@ does not contain @banner@ landmark semantics.',
              MANUAL_CHECK_P: 'Verify that the %N_MC heading elements (@h1-h6@) with @role="presentation"@ do not contain @banner@ landmark semantics.',
              HIDDEN_S:       'One heading element (@h1-h6@) that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H heading elements (@h1-h6@) that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @heading@ elements found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute form the %1 element to support the default semantics of @heading@, change the attribute @[role="%2"]@ to @tab@ or @presentation@, or use a different element that represents the semantics of the content.',
              ELEMENT_MC_1:     'Verify the @%1[role="presentation"]@ does not contain content that represents a @heading@ semantics.',
              ELEMENT_HIDDEN_1: '@%1[role="%2"]@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Heading elements (@h1-h6@) have role restrictions as part of its definition in the W3C HTML5 Specification to help ensure the heading element semantics of identifying @heading@ and @tab@ content.',
              'Heading elements (@h1-h6@) should only use @role="presentation"@ if the content of the heading element is not being used to identify @heading@ and @tab@ content (e.g. repairing poor page semantics).'
            ],
            TECHNIQUES: [
              'Heading elements (@h1-h6@) typically do not need any role definition, there default role is @heading@.',
              'Heading elements (@h1-h6@) used as the @tab@s in a @tabpanel@ widget need to have the @role="tab"@.',
              'In rare cases @role="presentation"@ can be used when a heading element does not provide a label for a section of content or is a tab in a tabpanel widget. Although a better solution is to change the element to something more semantically meaningful.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The main element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-main-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: heading role',
                url:   'https://www.w3.org/TR/wai-aria/#heading'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: tab role',
                url:   'https://www.w3.org/TR/wai-aria/#tab'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: presentation role',
                url:   'https://www.w3.org/TR/wai-aria/#presentation'
              }
            ]
        },
        ROLE_11: {
            ID:               'Role 11',
            DEFINITION:       '@li@ elements %s only have group item role values of @listitem@ (default - do not set), @menuitem@, @menuitemcheckbox@, @menuitemradio@, @option@, @tab@, @treeitem@ or @presentation@.',
            SUMMARY:          '@li@ element group item semantics',
            TARGET_RESOURCES_DESC: '@li@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ on the @li@ element to support the default @listitem@ semantics or change the @role@ semantics to an allowed grouping widget role.',
              FAIL_P:         'Remove the @role@ on the %N_F @li@ elements to support the default @listitem@ semantics and/or change the @role@ semantics to an allowed grouping widget role.',
              MANUAL_CHECK_S: 'Verify that the @li@ element with @role="presentation"@ does not contain content related to the semantics of the @listitem@ or other allowed @grouping@ widget roles.',
              MANUAL_CHECK_P: 'Verify that the %N_MC @li@ elements with @role="presentation"@ do not contain content related to the semantics of the @listitem@ or other allowed @grouping@ widget roles.',
              HIDDEN_S:       'One @li@ element with @role@ attribute that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @li@ elements with @role@ attribute that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @li@ elements with @role@ attribute found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:   'Remove the @role@ attribute on the @li@ element, change the attribute @role="%1"@ to an allowed role, or use a different element that represents the semantics of the content.',
              ELEMENT_MC_1:   'Verify the @li@ element with @role="presentation"@ does not contain content that could be considered part of a list.',
              ELEMENT_HIDDEN_1: '@li@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @li@ element have role restrictions as part of their definition in the W3C HTML5 Specification.',
              'When @li@ elements only need to use the @role@ attribute when they are part of interactive widgets and are restricted to widget group item roles.',
              'The @role@ values used identify grouping widget roles to ensure that their native grouping semantics are not inadvertently overridden by non-grouping widget or landmark roles.'
            ],
            TECHNIQUES: [
              'The @li@ elements when used as part of widgets must be used to indicate an item in a grouping widget role.',
              'In rare cases @role="presentation"@ is allowed on a @li@ element when the element is not being used to represent an item in a list.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The li element',
                url:   'https://www.w3.org/TR/html5/grouping-content.html#the-li-element'
              }
            ]
        },
        ROLE_12: {
            ID:               'Role 12',
            DEFINITION:       '@a[href]@ elements %s only have role values of @link@ (default), @button@, @checkbox@, @menuitem@, @menuitemcheckbox@, @menuitemradio@, @tab@, @switch@ or @treeitem@.',
            SUMMARY:          '@a[href]@ element role semantics',
            TARGET_RESOURCES_DESC: '@a[href]@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ on the @a@ element to support the default @link@ semantics or change the @role@ semantics to an allowed grouping widget role.',
              FAIL_P:         'Remove the @role@ on the %N_F @a@ elements to support the default @link@ semantics and/or change the @role@ semantics to an allowed grouping widget role.',
              HIDDEN_S:       'One @a[href]@ element with @role@ attribute that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @a[href]@ elements with @role@ attribute that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @a[href]@ elements with @role@ attribute found on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @role=%1@ is an allowed role value for the @a[href]@ element.',
              ELEMENT_FAIL_1:   'Remove the @role@ attribute on the @a[href]@ element, change the attribute @role="%1"@ to an allowed role, or use a different element that represents the semantics of the content.',
              ELEMENT_HIDDEN_1: '@a[href]@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @a[href]@ has a default role of @link@ and the browser natively supports the behavior of being part of the tab order of the page (e.g. @tabindex=0@) and will repsond to click events and the enter key.',
              'When @a[href]@ elements only need to use the @role@ attribute when they are part of interactive widgets and are restricted to subset of widget roles: @button@, @checkbox@, @menuitem@, @menuitemcheckbox@, @menuitemradio@, @tab@, @switch@ or @treeitem@.'
            ],
            TECHNIQUES: [
              'The @a[href]@ element\'s default role of @link@ can only be overridden with following roles: @button@, @checkbox@, @menuitem@, @menuitemcheckbox@, @menuitemradio@, @tab@, @switch@ or @treeitem@.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The a element',
                url:   'https://www.w3.org/TR/html51/semantics.html#the-a-element'
              }
            ]
        },
        ROLE_13: {
            ID:               'Role 13',
            DEFINITION:       '@select@ elements %s only have role values of @listbox@ (default) or @menu@.',
            SUMMARY:          '@select@ element role semantics',
            TARGET_RESOURCES_DESC: '@select]@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ on the @select@ element to support the default @listbox@ semantics or change the @role@ semantics to the @menu@ role.',
              FAIL_P:         'Remove the @role@ on the %N_F @select@ elements to support the default @listbox@ semantics and/or change the @role@ semantics to the @menu@ role.',
              HIDDEN_S:       'One @select@ element with @role@ attribute that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @select@ elements with @role@ attribute that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @select@ elements with @role@ attribute found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @role=%1@ is an allowed role value for the @select@ element.',
              ELEMENT_FAIL_1:   'Remove the @role@ attribute on the @select@ element, change the attribute @role="%1"@ to an allowed role, or use a different element that represents the semantics of the content.',
              ELEMENT_HIDDEN_1: '@select@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @select@ element has a default role of @listbox@ and the browser natively supports the behavior of being part of the tab order of the page (e.g. @tabindex=0@) and will repsond to click events and the enter key.',
              'When @select@ elements only need to use the @role@ attribute when it semantics are a @menu@ instead of a @listbox@.'
            ],
            TECHNIQUES: [
              'The @select@ element\'s default role of @listbox@ can only be overridden with @menu@.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The select element',
                url:   'https://www.w3.org/TR/html51/semantics.html#the-select-element'
              }
            ]
        },
        ROLE_14: {
            ID:               'Role 14',
            DEFINITION:       '@textarea@ elements %s only have role values of @listbox@ (default) or @menu@.',
            SUMMARY:          '@textarea@ element role semantics',
            TARGET_RESOURCES_DESC: '@textarea]@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Remove the @role@ on the @textarea@ element to support the default @textbox@ semantics or use a different element to represent the semantics of the content.',
              FAIL_P:         'Remove the @role@ on the %N_F @textarea@ elements to support the default @editbox@ semantics and/or use a different element to represent the semantics of the content.',
              HIDDEN_S:       'One @textarea@ element with @role@ attribute that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @textarea@ elements with @role@ attribute that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No @textarea@ elements with @role@ attribute found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @role=%1@ is an allowed role value for the @textarea@ element, but it should be removed since a @textarea@ element can only have the semantics of a @textbox@.',
              ELEMENT_FAIL_1:   'Remove the @role@ attribute on the @textarea@ element, either remove the role to allow the default role of @textbox@, or use a different element that represents the semantics of the content.',
              ELEMENT_HIDDEN_1: '@textarea@ element with @role="%1"@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @textarea@ element has a default role of @textbox@ can have no other role value.'
            ],
            TECHNIQUES: [
              'The @textarea@ element\'s default role of @textbox@ it can have NO other role, do NOT set.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 5 Specification: The textarea element',
                url:   'https://www.w3.org/TR/html51/semantics.html#the-textarea-element'
              }
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS) for sensory rules
    //
    rules: {
        SENSORY_1: {
            ID:                    'Sensory 1',
            DEFINITION:            'Understanding and operating on content on the page %s not rely solely on the shape, size, visual location, orientation, or sound.',
            SUMMARY:               'Not only shape, size and location',
            TARGET_RESOURCES_DESC: 'Images used for links and controls',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify that understanding the content, navigation of links and operation of controls and widgets does not depend solely on the shape, size, visual location, orientation, or sound.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'Verify that understanding the content, navigation of links and operation of controls and widgets does not depend solely on the shape, size, visual location, orientation, or sound.'
            },
            PURPOSE:        [ 'People with visual impairments and learning disabilities that affect the visual processing of information may not be able to perceive the content or identify the purpose of links and controls.',
                              'People with hearing impairments and learning disabilities that affect the auditory processing of information may not be able to perceive the content or identify the purpose of links and controls.'
                            ],
            TECHNIQUES:     [ 'Provide redundant text labels and references in addition to references to shape, size, visual location or sound.'
                            ],
            MANUAL_CHECKS:  [ 'Verify that understanding the content, navigation of links and operation of controls and widgets does not depend solely on the shape, size, visual location, orientation, or sound.'
                            ],
            INFORMATIONAL_LINKS: [{ type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                               title: 'WCAG 2.0 Success Criterion 1.3.3 Sensory Characteristics',
                               url:   'https://www.w3.org/TR/WCAG20/#content-structure-separation-understanding'
                             },
                             { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                               title: 'How to meet Success Criterion 1.3.3 Sensory Characteristics',
                               url:   'https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-content-structure-separation-understanding'
                             }
                            ]
        }
    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        TABLE_1: {
            ID:                    'Table 1',
            DEFINITION:            'Data cells in data tables %s have row and/or column header cells.',
            SUMMARY:               'Data cells %s have row/column headers',
            TARGET_RESOURCES_DESC: '@td@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Add @th@ elements to the first row or column of the data table.',
              FAIL_P:         'Add @th@ elements to the first row or column of the data table.',
              MANUAL_CHECK_S: 'The @td@ element does not have any text content. Verify that this cell is being used for formatting and does not need row or column headers.',
              MANUAL_CHECK_P: '%N_F @td@ elements do not have any text content. Verify that these cells are being used for formatting and do not need row or column headers.',
              HIDDEN_S:       'One @td@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @td@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No data tables and/or @td@ cells on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @td@ element has row and/or column headers.',
              ELEMENT_FAIL_1:   'Add text content to the row and/or column header cells.',
              ELEMENT_FAIL_2:   'Add header cells using row and/or column headers.',
              ELEMENT_MC_1:     'The @td@ element does not have any text content and it does not have any header cells. Verify that this cell is being used for formatting and does not need row or column headers.',
              ELEMENT_HIDDEN_1: 'The @td@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'When @th@ (table header) elements are used as the first cell in each row and/or column of a data table, assistive technologies can infer the header-to-data-cell relationships for those rows and columns, making the header information programmatically available to screen reader users from any data cell.',
              'By providing a representation that is functionally equivalent to the visual relationships of data cells to row and column headers that sighted users rely upon, screen reader users are able to maintain orientation and comprehension as they traverse the data table.',
              'When solitary row and/or column headers are not sufficient to describe a data cell, use the @headers@ attribute to identify the appropriate header cells.'
            ],
            TECHNIQUES: [
              'Use a @th@ element as the first cell in each row and/or column to define row and column headers in simple data tables.',
              'Use @th@ element for row and column header cells.',
              'While not recommended, it is also valid to use @td@ element with a @scope@ attribute as a header cell.',
              'Avoid using empty rows and columns for formatting data tables. Use CSS instead.'
            ],
            MANUAL_CHECKS: [
              'Verify that empty @td@ and @th@ elements do not need table headers.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 11.2.6 Table cells: The TH and TD elements',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#edef-TD'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: scope attribute',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#adef-scope'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H51: Using table markup to present tabular information',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H51'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H63: Using the scope attribute to associate header cells and data cells in data tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H63'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'IBM Web checklist Checkpoint 1.3e: Tables',
                url:   'https://www-03.ibm.com/able/guidelines/web/webtableheaders.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Simple Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-simple.php'
              }
            ]
        },
        TABLE_2: {
            ID:                    'Table 2',
            DEFINITION:            'Data tables %s have an accessible name to identify the purpose of the table.',
            SUMMARY:               'Data tables %s have name',
            TARGET_RESOURCES_DESC: '@table@',
            RULE_RESULT_MESSAGES: {
              FAIL_S:           'Add an accessible name for the data table using either the @caption@ element; or one of the following @table@ element attributes: @summary@, @title@, @aria-label@ or @aria-labelledby@.',
              FAIL_P:           'Add an accessible name to each of the %N_F out of %N_T data tables using either the @caption@ element; or one of the following @table@ element attributes: @summary@, @title@, @aria-label@ or @aria-labelledby@.',
              HIDDEN_S:         'One data table that is hidden was not evaluated.',
              HIDDEN_P:         '%N_H data tables that are hidden were not evaluated.',
              NOT_APPLICABLE:   'No data tables found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'Accessible name defined using the @caption@ element: \'%1\'.',
              ELEMENT_PASS_2:   'Accessible name defined using the @summary@ attribute with content: \'%1\'.',
              ELEMENT_PASS_3:   'Accessible name defined using the @aria-label@ attribute with content: \'%1\'.',
              ELEMENT_PASS_4:   'Accessible name defined using the @aria-labelledby@ attribute with content: \'%1\'.',
              ELEMENT_PASS_5:   'Accessible name defined using the @title@ attribute with content: \'%1\'.',
              ELEMENT_FAIL_1:   'Add accessible name using either the @caption@ element; or one of the following @table@ element attributes: @summary@, @title@ @aria-label@ or @aria-labelledby@ attribute.',
              ELEMENT_HIDDEN_1: 'The @table@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'An accessible name for a data table enables people using assistive technologies to identify the purpose of the table and to differentiate among multiple data tables on the same page.',
              'Screen readers include table navigation commands and the accessible name will provides context to the table.'
            ],
            TECHNIQUES: [
              'Use @caption@ element to provide an accessible name for a data table.',
              'Use @summary@ attribute to provide an accessible name for a data table.',
              'Use @title@ attribute to provide an accessible name for a data table.',
              'Use @aria-label@ attribute to provide an accessible name for a data table (NOTE: inconsistent browser/AT support).',
              'Use @aria-labelledby@ attribute to provide an accessible name for a data table (NOTE: inconsistent browser/AT support).',
              'If the table is not used for tabular data, but instead for layout of content, use the @role="presentation"@ on the @table@ element.'
            ],
            MANUAL_CHECKS: [
              'Make sure the the accessible name accurately and succinctly identifies the purpose of the data table.',
              'If the table markup is actually being used for laying out content in rows or columns, use @role="presentation"@ on the @table@ element.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 11.2.2 Table Captions: The CAPTION element',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#h-11.2.2'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: summary attribute',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#adef-summary'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-label'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @title@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H39: Using caption elements to associate data table captions with data tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H39'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H73: Using the summary attribute of the table element to give an overview of data tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H73'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F46'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'IBM Web checklist Checkpoint 1.3e: Tables',
                url:   'https://www-03.ibm.com/able/guidelines/web/webtableheaders.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Simple Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-simple.php'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Complex Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-complex.php'
              }
            ]
        },
        TABLE_3: {
            ID:                    'Table 3',
            DEFINITION:            'Some data tables %s have an accessible description (e.g. summary) of contents of the table.',
            SUMMARY:               'Data tables %s have description',
            TARGET_RESOURCES_DESC: '@table[summary]@,  @table[title]@ or @aria-describedby@ attribute',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'For the data table without a summary, consider adding an @summary@, @title@ or @aria-describedby@ attribute to point to a summary of the information in the simple table.',
              MANUAL_CHECK_P: 'For the %N_F data tables without summary, consider adding an @summary@, @title@ or @aria-describedby@ attribute to point to a summary of the information in each simple table.',
              HIDDEN_S:       'One data @table@ element that is hidden was not evaluated.',
              HIDDEN_P:       'The %N_H data @table@ elements elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No data tables on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @table@ element has an accessible description through the @summary@ attribute.',
              ELEMENT_PASS_2:   'The @table@ element has an accessible description through the @aria-describedby@ reference.',
              ELEMENT_PASS_3:   'The @table@ element has an accessible description through the @title@ attribute.',
              ELEMENT_MC_1:     'This is a simple table, consider adding a @summary@ or @aria-describedby@ attribute to provide a accessible description (e.g. a summary) of the content of the table.',
              ELEMENT_MC_2:     'This is a complex table, it is highly recommended to add a @summary@ or @aria-describedby@ attribute to provide a accessible description (e.g. a summary) of the content of the table.',
              ELEMENT_HIDDEN_1: 'The @table@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Complex data tables are defined as tables with row and/or column spans, or more than one header cell (e.g. @th@ element) in any row or column of the table.',
              'An accessible description providing a summary of the organization of the table or numerical values reduces the time for users of assistive technology to explore and understand the content of a table.',
              'An accessible description that includes a synopsis of the authors intended conclusions of viewing the content of a table make it easier for people using assistive technologies to understand importance of why the author provided the data table.'
              ],
            TECHNIQUES: [
              'Use the  @summary@ attribute to provide a accessible description of the information in a data table.',
              'Use the  @title@ attribute to provide a accessible description of the information in a data table.',
              'Use the  @aria-describedby@ attribute to provide a reference to an accessible description of the information in a data table.'
            ],
            MANUAL_CHECKS: [
              'Verify the content of the accessible description accurately summarizes the organization, numerical information in the table or authors intended conclusions from viewing the table.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: summary attribute',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#adef-summary'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-describedby@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @title@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'IBM Web checklist Checkpoint 1.3e: Tables',
                url:   'https://www-03.ibm.com/able/guidelines/web/webtableheaders.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Simple Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-simple.php'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Complex Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-complex.php'
              }
            ]
        },
        TABLE_4: {
            ID:                    'Table 4',
            DEFINITION:            'Data tables %s have unique accessible names to help users identify and differentiate the data tables on a page.',
            SUMMARY:               'Data tables %s have unique names',
            TARGET_RESOURCES_DESC: '@table@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Change the accessible name of the @table@ to be unique.',
              FAIL_P:         'Change the accessible name of the %N_F out of %N_T data tables that do not have unique names to be unique.',
              HIDDEN_S:       'One @table@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @table@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'Multiple data tables were not found on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The accessible name for the data table is unique: \'%1\'.',
              ELEMENT_FAIL_1:   'Change the accessible name for the data table to be unique on the page: \'%1\'.',
              ELEMENT_FAIL_2:   'Add a accessible name to the data table.',
              ELEMENT_HIDDEN_1: 'The @table@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Data tables that share the same accessible name make it difficult to users of assistive technologies to differentiate the differences in content of the data tables on the same page.',
              'In rare cases when multiple data tables have duplicate data, use "Copy 1", "Copy 2" and "Copy X" as part of the accessible name of each table to make it clear that there is more than one copy of the same information on the page.'
            ],
            TECHNIQUES: [
              'Use @caption@ element to provide an accessible name for a data table.',
              'Use @summary@ attribute to provide an accessible name for a data table.',
              'Use @title@ attribute to provide an accessible name for a data table.',
              'Use @aria-label@ attribute to provide an accessible name for a data table (NOTE: inconsistent browser/AT support).',
              'Use @aria-labelledby@ attribute to provide an accessible name for a data table (NOTE: inconsistent browser/AT support).',
              'If the table is not used for tabular data, but instead for layout of content, use the @role="presentation"@ on the @table@ element.'
            ],
            MANUAL_CHECKS: [
              'Verify the accessible names for tables are unique and identify the content in the data tables.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 11.2.2 Table Captions: The CAPTION element',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#h-11.2.2'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: summary attribute',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#adef-summary'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-label'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @title@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H39: Using caption elements to associate data table captions with data tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H39'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H73: Using the summary attribute of the table element to give an overview of data tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H73'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/F46'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'IBM Web checklist Checkpoint 1.3e: Tables',
                url:   'https://www-03.ibm.com/able/guidelines/web/webtableheaders.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Simple Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-simple.php'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Complex Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-complex.php'
              }
            ]
        },
        TABLE_5: {
            ID:                    'Table 5',
            DEFINITION:            'Table markup %s identify a table as either a data table or a layout table.',
            SUMMARY:               'Identify table markup as data or layout',
            TARGET_RESOURCES_DESC: '@table@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'The table without headers or @role="presentation"@, define the purpose of the table by adding header cells if the table is being used for tabular data or use @role="presentation"@ on the table elements if the table is being used to layout content.',
              FAIL_P:   'For the %N_F tables without headers or @role=presentation"@, define the purpose of the table by adding header cells if the table is being used for tabular data or use @role="presentation"@ on the table elements if the table is being used to layout content.',
              MANUAL_CHECK_S: 'Verify the @table@ element that only has one row or column is used only only for layout.',
              MANUAL_CHECK_P: 'Verify the %N_H @table@ elements that only have one row or column are used only only for layout.',
              HIDDEN_S: 'One @table@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @table@ elements elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No table markup found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @table@ is considered a data table, since it has header cells or an accessible name.',
              ELEMENT_PASS_2:   'The @table@ is considered a layout table, since it has @role="presentation"@.',
              ELEMENT_PASS_3:   'The @table@ is considered a complex data table, since it has colums/row spans or multiple headers in a row or column.',
              ELEMENT_MC_1:     'Verify the table with only one row is only used for layout purposes.',
              ELEMENT_MC_2:     'Verify the table with only one column is only used for layout purposes.',
              ELEMENT_FAIL_1:   'Define the purpose of the table by adding header cells if the table is being used for tabular data or use @role="presentation"@ on the table element if the table is being used to layout content.',
              ELEMENT_HIDDEN_1: 'The @table@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The @table@ element is designed for representing tabular data in a web page, but table markup has also been used by web developers as a means to layout content in rows and columns.',
              'Users of assistive technology are confused when the purpose of table markup is not clearly identified (i.e. layout or for tabular data).',
              'Use @role="presentation"@ on the @table@ element to clearly identify a table markup for layout.',
              'Adding an accessible name and/or description to a @table@ element identifies table markup as a data table (e.g. layout tables must not have an accessible name or description).',
              'The use header cells (e.g. @th@ or @td[scope]@ elements) identifies a @table@ element as a data table.'
            ],
            TECHNIQUES: [
              'Use @th@ elements in the first row and/or first column to identify a table as a data table.',
              'Use @caption@ element; @summary@, @title@, @aria-label@, @aria-labelledby@ or @aria-describedby@ attribute to add an accessible name or description to a @table@ element.',
              'Use @role="presentation"@ on the @table@ element to identify a table and its child table elements (e.g. @tr@ and @td@ elements) are being used for layout.',
              'Layout tables must only use the @tr@ and @td@ table elements for layout content and must NOT have an accessible name or description.'
            ],
            MANUAL_CHECKS: [
              'If a table is used for layout verify the order of content still makes sense when the table markup is disabled.',
              'If a table is used for data tables, verify the each data cell has header cells that clearly identify the meaning of the content of the data cell.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: presentation role',
                url:   'https://www.w3.org/TR/wai-aria/#presentation'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 11.2.6 Table cells: The TH and TD elements',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#edef-TD'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 11.2.2 Table Captions: The CAPTION element',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#h-11.2.2'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: summary attribute',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#adef-summary'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H51: Using table markup to present tabular information',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H51'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H63: Using the scope attribute to associate header cells and data cells in data tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H63'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'IBM Web checklist Checkpoint 1.3e: Tables',
                url:   'https://www-03.ibm.com/able/guidelines/web/webtableheaders.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Simple Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-simple.php'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Complex Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-complex.php'
              }
            ]
        },
        TABLE_6: {
            ID:                    'Table 6',
            DEFINITION:            'Each data table header cell %s use @th@ elements rather than @td@ element with a @scope@ attribute.',
            SUMMARY:               'Header cells %s be @th@ elements',
            TARGET_RESOURCES_DESC: '@th@ and @td[scope]@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Change the @td[scope]@ element to a @th@ element',
              FAIL_P:   'Change the @td[scope]@ element to a @th@ element for each of the %N_F header cells using @td[scope]@',
              HIDDEN_S: 'One @table@ element that is hidden was not evaluated.',
              HIDDEN_P: '%N_H @table@ elements elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No td[scope]@ elements on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @th@ element is used for header cell',
              ELEMENT_FAIL_1:   'Change the @td[scope]@ element to a @th@ element',
              ELEMENT_HIDDEN_1: 'The @th@ element was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              '@th@ element is the web standards way to identify header cells in a table, and makes the data table source code easier to read and debug for accessibility problems.'
            ],
            TECHNIQUES: [
              'Use @th@ elements in the first row or column to identify row and column headers in a simple data tables.',
              'Use @headers@ attribute on each @td@ element to identify header information in complex data tables.',
              'Use @th@ element for cells used as header cells in the table.'
            ],
            MANUAL_CHECKS: [
              'Verify the each data cell has header cells that clearly identify the meaning of the content of the data cell.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 11.2.6 Table cells: The TH and TD elements',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#edef-TD'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H51: Using table markup to present tabular information',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H51'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H63: Using the scope attribute to associate header cells and data cells in data tables',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H63'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'IBM Web checklist Checkpoint 1.3e: Tables',
                url:   'https://www-03.ibm.com/able/guidelines/web/webtableheaders.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Simple Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-simple.php'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Complex Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-complex.php'
              }
            ]
        },
        TABLE_7: {
            ID:                    'Table 7',
            DEFINITION:            'Data cells in complex data tables %s use @headers@ attribute to identify header cells.',
            SUMMARY:               'Data cells %s use @headers@ attribute',
            TARGET_RESOURCES_DESC: '@td@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Add a @headers@ attribute to the data cell to identify the header cells for the data cell.',
              FAIL_P:         'Add %N_F data cells use the @headers@ attribute to identify the header cells for the data cell.',
              MANUAL_CHECK_S: 'The @td@ element does not have any text content and it does not have any header cells, verify that this cell is being used for formatting and does not need headers.',
              MANUAL_CHECK_P: 'There are %N_MC @td@ elements that do not have any text content and do not have any header cells, verify that thess cells are being used for formatting and do not need headers.',
              HIDDEN_S:       'One @td@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @td@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No complex data tables on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The header comes from the @headers@ attribute with the following ids: \'%1\'.',
              ELEMENT_FAIL_1:   'Add header cells using the @headers@ attribute, since this table is a complex data table.',
              ELEMENT_FAIL_2:   'Add text content to the header cells with the following ids: \'%1\'.',
              ELEMENT_FAIL_3:   'Change the idrefs \'%1\' in the @headers@ attribute to valid ids.',
              ELEMENT_MC_1:     'The @td@ element does not have any text content and it does not have any header cells, verify that this cell is being used for formatting and does not need headers.',
              ELEMENT_HIDDEN_1: 'Data cell was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'The data cells in complex data tables need to use the @headers@ attribute to identify the appropriate header cells, since simple row/column relationships cannot be relied upon to provide header information.',
              'Complex data tables are defined as tables with row and/or column spans, or more than one header cell (e.g. @th@ element) in any row or column of the table.'
            ],
            TECHNIQUES: [
              'Use @headers@ attribute on each @td@ element used as a data cell to identify header information in complex data tables.'
            ],
            MANUAL_CHECKS: [
              'Verify the each data cell has header cells that clearly identify the meaning of the content of the data cell.',
              'Verify that empty @td@ and @th@ elements and does not need table headers.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 11.2.6 Table cells: The TH and TD elements',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#edef-TD'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'IBM Web checklist Checkpoint 1.3e: Tables',
                url:   'https://www-03.ibm.com/able/guidelines/web/webtableheaders.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'iCITA HTML Best Practices: Complex Data Table Example',
                url:   'https://html.cita.illinois.edu/nav/dtable/dtable-example-complex.php'
              }
            ]
        },
        TABLE_8: {
            ID:                    'Table 8',
            DEFINITION:            'The accessible name of a data table % be different from its accessible description.',
            SUMMARY:               'Name %s be different than description',
            TARGET_RESOURCES_DESC: 'Data tables with both an accessible name and accessible description',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Change the accessible name and/or accessible description of the data table with accessible name that is the same as the accessible description, make sure the accessible name identifies the content of the data table and the description provides a summary of the content.',
              FAIL_P:         'Change the accessible name and/or accessible description of the %N_F data tables with accessible name that is the same as the accessible description, make sure the accessible name identifies the content of each data table and the description provides a summary of the content.',
              MANUAL_CHECK_S: 'Verify the data table with an accessible name that is longer than the accessible description is actually providing a useful summary of the contents of the data table.',
              MANUAL_CHECK_P: 'Verify the %N_MC data tables with an accessible name that is longer than the accessible description is actually providing a useful summary of the contents of the data table.',
              HIDDEN_S:       'One @table@ element that is hidden was not evaluated.',
              HIDDEN_P:       '%N_H @table@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No data tables with both an accessible name and description on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'Accessible name and description are different.',
              ELEMENT_FAIL_1:   'Change the accessible name and/or accessible description, make sure the accessible name identifies the content of the table and the description provides a summary of the content.',
              ELEMENT_MC_1:     'Verify the data table with an accessible name that is longer than the accessible description is actually providing a useful summary of the contents of the data table.',
              ELEMENT_HIDDEN_1: 'The table was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Accessible name and description are designed to provide two different types of information to users of assistive technologies and therefore should not duplicate each other.',
              'Accessible name is designed to provide a short title to identify the data table, so when users of assistive technology are using table navigation commands they can identify the table.',
              'Accessible description is designed to provide a longer summary of the table, this could include author intended conclusions of the data.'
            ],
            TECHNIQUES: [
              'Accessible name is typically defined using the @caption@ element, but the @summary@, @title@, @aria-label@ and @aria-labelledby@ attribute can also be used.',
              'Accessible description is typically defined using the @summary@ attribute, but the @title@ and @aria-describedby@ attribute can also be used.',
              'The accessible name is defined before the accessible description, so if using the @summary@ and/or @title@ attribute for the accessible name will require a different technique to add an accessible description.'
            ],
            MANUAL_CHECKS: [
              'Verify the accessible name clearly identifies the table.',
              'Verify the summary accurately summarizes the table.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: 11.2.6 Table cells: The TH and TD elements',
                url:   'https://www.w3.org/TR/html4/struct/tables.html#edef-TD'
              }
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules National Language Support (NLS) for Audio Rules
    //
    rules: {
        TIMING_1: {
            ID:                    'Timing 1',
            DEFINITION:            'A page that contains time limits for user interaction or viewing content %s provide a way to turn off, adjust or extend the time limits.',
            SUMMARY:               'Control time limits',
            TARGET_RESOURCES_DESC: 'Pages with scripting or other embedded technologies to control the response time for input or the amount of time to view content',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:  'If the page contains time limits, verify that there is a way to turn off, adjust or extend the time limits; or that one of the three exceptions applies.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1:      'If the page contains time limits, verify that there is a way to turn off, adjust or extend the time limits; or that one of the three exceptions applies.'
            },
            PURPOSE: [
              'People with physical disabilities may need more time to respond to web sites with time limits for selecting an option.',
              'People with visual impairments and visual processing learning disabilities may need more time to read material if the rendering of the material is automatically removed or obscured after a time period.',
              'Providing adjustable time periods in line with the persons capabilities makes it possible for people to complete the tasks associated with the website.'
            ],
            TECHNIQUES: [
              'Turn off: The user is allowed to turn off the time limit before encountering it.',
              'Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting.',
              'Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten time.',
              'Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible.',
              'Essential Exception: The time limit is essential and extending it would invalidate the activity.',
              '20 Hour Exception: The time limit is longer than 20 hours.'
            ],
            MANUAL_CHECKS: [
              'If the page contains time limits, verify that there is a way to turn off, adjust or extend the time limits; or that one of the three exceptions applies.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'How to meet 2.2.1 Timing Adjustable',
                url:   'https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-time-limits-required-behaviors'
              }
            ]
        },
        TIMING_2: {
            ID:                    'Timing 2',
            DEFINITION:            'A page that includes moving, blinking, scrolling or auto-updating content that starts automatically and lasts more than 5 seconds %s have a mechanism to pause, stop, or hide such content.',
            SUMMARY:               'Control moving, blinking or auto-updating content',
            TARGET_RESOURCES_DESC: 'Canvas, SVG and image animations; moving, blinking, scrolling or auto-updating text content; and embedded applications',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'If the page includes moving, blinking, scrolling or auto-updating content, verify there has a mechanism to pause, stop, or hide the information.',
              MANUAL_CHECK_P:     'If the page includes moving, blinking, scrolling or auto-updating content, verify there has a mechanism to pause, stop, or hide the information.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:     'If the %1 element includes moving, blinking, scrolling or auto-updating content, verify there has a mechanism to pause, stop, or hide the information.',
              ELEMENT_HIDDEN_1: 'The %1 element has not evaluated for moving, blinking, scrolling or auto-updating content',
              PAGE_MC_1:        'If the page includes moving, blinking, scrolling or auto-updating content, verify there has a mechanism to pause, stop, or hide the information.'
            },
            PURPOSE: [
              'People with visual impairments and visual processing learning disabilities may not be able to read or understand content that is blinking, scrolling or auto updating'
            ],
            TECHNIQUES: [
              'Pause/Resume: Through configuration or controls on the page, enable the user to pause and resume the moving, blinking, scrolling or auto-updating content.',
              'Stop: Through configuration or controls on the page, enable the user to stop the moving, blinking, scrolling or auto-updating content and see all of the content at one time.',
              'Hide: Through configuration or controls on the page, enable the user to hide the moving, blinking, scrolling or auto-updating content if it is not essential for the activity.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'How to meet 2.2.2 Pause, Stop, Hide',
                url:   'https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-time-limits-pause'
              }
            ]
        },
        TIMING_3: {
            ID:                    'Timing 3',
            DEFINITION:            'A page %s not include content that flashes more than three times in one second, unless below general flash and red flash thresholds.',
            SUMMARY:               'Flashing limits',
            TARGET_RESOURCES_DESC: 'Canvas, SVG and image animations; flashing text content; video; and embedded applications',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify the page does not include content that flashes more than three times in one second, unless below general flash and red flash thresholds.',
              MANUAL_CHECK_P:     'Verify the page does not include content that flashes more than three times in one second, unless below general flash and red flash thresholds.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:     'Verify the %1 element does not include content that flashes more than three times in one second, unless below general flash and red flash thresholds.',
              ELEMENT_HIDDEN_1: 'The %1 element has not evaluated for moving, blinking, scrolling or auto-updating content',
              PAGE_MC_1:        'Verify the page does not include any content that flashes more than three times in one second, unless below general flash and red flash thresholds.'
            },
            PURPOSE: [
              'People who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes.',
              'People are even more sensitive to red flashing than to other colors.',
              'NOTE: This flashing requirements was adapted from the broadcasting industry standards (e.g. content is viewed from a closer distance and using a larger angle of vision).'
            ],
            TECHNIQUES: [
              'There is no remedication technique, the content must be removed or disabled from flashing.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'How to meet 2.3.1 Three Flashes or Below Threshold',
                url:   'https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-seizure-does-not-violate'
              }
            ]
        }
    }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        TITLE_1: {
            ID:            'Title 1',
            DEFINITION:    '@title@ element %s identify both the website and page content.',
            SUMMARY:       '@title@ %s identify website and page',
            TARGET_RESOURCES_DESC: '@title@',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S: 'Verify that the @title@ element identifies both the website (if applicable) and the page content.',
              FAIL_S: 'Add a @title@ element to the @head@ element section with text content that identifies both the website (if applicable) and the page content.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1:   'Verify that the @title@ element identifies both the website (if applicable) and the page content.',
              PAGE_FAIL_1: 'Add content to the @title@ element that identifies both the website (if applicable) and the page content.',
              PAGE_FAIL_2: 'Add a @title@ element to the page that identifies both the website (if applicable) and the page content.'
            },
            PURPOSE: [
              'The @title@ element content can be accessed by assistive technologies to orient the user to the website and page content.'
            ],
            TECHNIQUES: [
              'Use a @title@ element to identify the website and page content.',
              'If the page is part of a sequence of web pages, include the sequence number and total number of steps in the @title@ element.'
            ],
            MANUAL_CHECKS: [
              'If applicable, verify that the title of the page identifies the website to which it belongs.',
              'Verify that the title of the page also identifies the page content.',
              'If the page is part of a sequence of web pages, verify that the title describes which step it is in the sequence.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML TITLE Element Specification',
                url:   'https://www.w3.org/TR/html4/struct/global.html#edef-TITLE'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G88: Providing descriptive titles for Web pages',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G88'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H25: Providing a title using the title element',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H25'
              }
            ]
        },
        TITLE_2: {
            ID:            'Title 2',
            DEFINITION:    '@h1@ elements %s match part of the @title@ element content.',
            SUMMARY:       '@h1@ %s match part of the @title@',
            TARGET_RESOURCES_DESC: '@title@ and @h1@',
            RULE_RESULT_MESSAGES: {
              FAIL_S: 'The page has missing, hidden or empty @title@ and/or @h1@ elements or the @h1@ element content is not similar to the @title@ content.',
              FAIL_P: 'The page has missing, hidden or empty @title@ and/or @h1@ elements or the content of the @h1@ elements is not similar to the @title@ content.',
              MANUAL_CHECK_S: 'Verify that both the @title@ and @h1@ elements describe the purpose or content of the page and @h1@ elements are use to identify and describe the major sections of the page.',
              MANUAL_CHECK_P: 'Verify that both the @title@ and @h1@ elements describe the purpose or content of the page and @h1@ elements are use to identify and describe the major sections of the page.',
              HIDDEN_S: 'The page has a hidden @h1@ element that was not evaluated.',
              HIDDEN_P: 'The page has %N_H hidden @h1@ elements that were not evaluated.'
            },
            NODE_RESULT_MESSAGES: {
              PAGE_MC_1:   'The @h1@ element has the same or similar content as the @title@ element.',
              PAGE_PASS_1: 'The @h1@ element has the same or similar content as the @title@ element.',
              PAGE_PASS_2: 'The @h1@ elements have the same or similar content as the @title@ element.',
              PAGE_FAIL_1: 'Add a @title@ element to the page to enable the evaluation of @h1@ elements for similarity.',
              PAGE_FAIL_2: 'Add an @h1@ element to the page at the beginning of the main content.',
              PAGE_FAIL_3: 'Update the @h1@ element to have the same or similar content as the @title@ element.',
              PAGE_FAIL_4: 'Update the @h1@ elements to have the same or similar content as the @title@ element.',
              ELEMENT_MC_1:   'Verify @h1@ element identifies and describes a major section of the page.',
              ELEMENT_PASS_1: 'The @h1@ element has the same or similar content as the @title@ element.',
              ELEMENT_FAIL_1: 'The @h1@ element does NOT have the same or similar content as the @title@ element.',
              ELEMENT_FAIL_2: 'Add content to the @h1@ element, or remove it from the page.',
              ELEMENT_HIDDEN_1: 'The @h1@ element is hidden from assistive technology and therefore does not describe the purpose or content of the page.'
            },
            PURPOSE: [
              '@h1@ elements can be accessed by assistive technologies to identify the page content and to orient users within the website. The @h1@ element may also be used to identify the website.'
            ],
            TECHNIQUES: [
              'Use the @h1@ element to identify the page content in the same or similar way as the @title@ element.',
              'The @h1@ element may also be used to identify the website in the same or similar way as the @title@ element.',
              'If the page is part of a sequence of web pages, the @h1@ element should indicate the step in the sequence.'
            ],
            MANUAL_CHECKS: [
              'Verify that the @h1@ content identifies the page content.',
              'If applicable, verify that the @h1@ content of the page identifies the website to which it belongs.',
              'If the web page is part of a sequence of web pages, verify that the @h1@ content indicates the step number of the sequence.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML TITLE Element Specification',
                url:   'https://www.w3.org/TR/html4/struct/global.html#edef-TITLE'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G88: Providing descriptive titles for Web pages',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G88'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H25: Providing a title using the title element',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H25'
              }
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        VIDEO_1: {
            ID:                    'Video 1',
            DEFINITION:            '@video@ elements used for prerecorded video only content %s have text or audio description of the video content.',
            SUMMARY:               '@video@ for video only %s have alternative',
            TARGET_RESOURCES_DESC: '@video@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify the @video@ element with the @aria-describedby@ attributes is used for video only content.   If so, verify the text description reference using the @aria-describedby@ describes the video only content.',
              MANUAL_CHECK_P:     'Verify if any of the %N_MC @video@ elements with the @aria-describedby@ attributes are used for video only content.   If so, verify the text description reference using the @aria-describedby@ describes the video only content.',
              HIDDEN_S: 'The @video@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @video@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @video@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:    '@video@ element has audio description track',
              ELEMENT_MC_1:      'Verify the @video@ element is used for video only content.   If so, verify the text description reference using the @aria-describedby@ describes the video only content.',
              ELEMENT_MC_2:      'Verify the @video@ element is used for video only content provides an audio track to describe the video content or text description of the video.',
              ELEMENT_HIDDEN_1:  'The @video@ element is hidden and therefore not evaluated.'
            },
            PURPOSE: [
              'Text and audio descriptions provide a means for people who cannot see the video to understand the video content.',
              'Some types of learning disabilities affect visual processing, text and audio descriptions provide an alternative way to understand the video content.'
            ],
            TECHNIQUES: [
              'Use the @track@ element to add audio descriptions to the video content.',
              'Use @aria-describedby@ to reference a text description of the video content.',
              'Include an audio sound track that describes the video content.'
            ],
            MANUAL_CHECKS: [
              'When audio descriptions are enabled on the media player, check to make sure the audio description can be heard.',
              'If there is a audio description make sure the description accurately describes the video content.',
              'If there is a text description make sure the description accurately describes the video content.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The video element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-video-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The track element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-track-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        },
        VIDEO_2: {
            ID:                    'Video 2',
            DEFINITION:            '@object@ elements used for prerecorded video only content %s have text or audio descriptions of the video content.',
            SUMMARY:               '@object@ for video only %s have alternative',
            TARGET_RESOURCES_DESC: '@object@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify the @object@ element is used for prerecorded video only content.  If it is used for video only, verify it has either a text or audio description of the video content.',
              MANUAL_CHECK_P:     'Verify if any of the %N_MC @object@ elements are used for prerecorded video only content.  If any are used for video only, verify they have either a text or audio description of the video content.',
              HIDDEN_S: 'The @object@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @object@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @object@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'Verify the @object@ element with @video@ in its @type@ attrbute is used for video only content.  If so verify the @aria-describedby@ references a text description of the video only content.',
              ELEMENT_MC_2: 'Verify the @object@ element with @video@ in its @type@ attrbute is used for video only content.  If so verify the video only content has a text or audio descriptions.',
              ELEMENT_MC_3: 'Verify if the @object@ element is used for video only content.  If so verify the @aria-describedby@ references a text description of the video only content.',
              ELEMENT_MC_4: 'Verify if the @object@ element is used for video only content.  If so verify the video only content has a text or audio description.',
              ELEMENT_HIDDEN_1:       'The @object@ element is hidden and cannot render video content.'
            },
            PURPOSE: [
              'Text and audio descriptions provide a means for people who cannot see the video to understand the video content.',
              'Some types of learning disabilities affect visual processing, text and audio descriptions provide an alternative way to understand the video content.'
            ],
            TECHNIQUES: [
              'Use the @video@ element instead of the @object@ element for video only content, since the @video@ element provides better support for audio description tracks.',
              'Include an audio track in the video that describes the video content.',
              'Use @aria-describedby@ attribute to point to a text description of the video only content.'
            ],
            MANUAL_CHECKS: [
              'When audio descriptions are enabled on the media player, check to make sure the audio description can be heard.',
              'If there is a audio description make sure the description accurately describes the video content.',
              'If there is a text description make sure the description accurately describes the video content.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The object element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-object-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        },
        VIDEO_3: {
            ID:                    'Video 3',
            DEFINITION:            '@embed@ elements used for video only content %s have caption or text transcription of the audio content.',
            SUMMARY:               '@embed@ for video only %s have alternative',
            TARGET_RESOURCES_DESC: '@embed@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify the @embed@ element is used for prerecorded video only content.  If it is used for video only, verify it has either a text or audio description of the video content.',
              MANUAL_CHECK_P:     'Verify if any of the %N_MC @embed@ elements are used for prerecorded video only content.  If any are used for video only, verify they have either a text or audio description of the video content.',
              HIDDEN_S: 'The @embed@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @embed@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @embed@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'Verify the @embed@ element with @video@ in its @type@ attribute is used for video only content.  If so verify the @aria-describedby@ references a text description of the video only content.',
              ELEMENT_MC_2: 'Verify the @embed@ element with @video@ in its @type@ attribute is used for video only content.  If so verify the video only content has a text or audio description.',
              ELEMENT_MC_3: 'Verify if the @embed@ element is used for video only content.  If so verify the @aria-describedby@ references a text description of the video only content.',
              ELEMENT_MC_4: 'Verify if the @embed@ element is used for video only content.  If so verify the video only content has a text or audio description.',
              ELEMENT_HIDDEN_1:       'The @embed@ element is hidden and cannot render video content.'
            },
            PURPOSE: [
              'Text and audio descriptions provide a means for people who cannot see the video to understand the video content.',
              'Some types of learning disabilities affect visual processing, text and audio descriptions provide an alternative way to understand the video content.'
            ],
            TECHNIQUES: [
              'Use the @video@ element instead of the @embed@ element for video only content, since the @video@ element provides better support for audio description tracks.',
              'Include an audio track in the video that describes the video content.',
              'Use @aria-describedby@ attribute to point to a text description of the video only content.'
            ],
            MANUAL_CHECKS: [
              'When audio descriptions are enabled on the media player, check to make sure the audio description can be heard.',
              'If there is a audio description make sure the description accurately describes the video content.',
              'If there is a text description make sure the description accurately describes the video content.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The embed element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-embed-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        },
        VIDEO_4: {
            ID:                    'Video 4',
            DEFINITION:            'Live and prerecorded video with synchronized audio (i.e. a movie, lecture) using the @video@ element %s have synchronized captions.',
            SUMMARY:               '@video@ %s have caption',
            TARGET_RESOURCES_DESC: '@video@ elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add caption @track@ element to the @video@ element.',
              FAIL_P:   'Add caption @track@ element to each of the %N_F @video@ elements with out caption tracks.',
              MANUAL_CHECK_S:     'Verify that the @video@ element without a caption track has open captions.',
              MANUAL_CHECK_P:     'Verify that the %N_MC @video@ elements without caption tracks have open captions.',
              HIDDEN_S: 'The @video@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @video@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @video@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:         '@video@ element has caption track.',
              ELEMENT_FAIL_1:       'Add caption @track@ element to @video@ element.',
              ELEMENT_MC_1: 'Verify the video content includes open captions.',
              ELEMENT_HIDDEN_1:       'The @video@ element is hidden and cannot render content.'
            },
            PURPOSE: [
              'Synchronized captions provide a means for people who cannot hear the audio content of a video to understand the audio content of the video.',
              'Some types of learning disabilities affect auditory processing, captions provide an alternative way to understand the audio content of a video.',
              'This rule covers the requirements of both WCAG 2.0 Success Criteria 1.2.2 and 1.2.4, and therefore covers both live and prerecorded video content.'
             ],
            TECHNIQUES: [
              'Use the @track@ element to add a caption track to the video content.',
              'Use open captions to include the captions as part of the video.',
              'If closed captions are not support, use open captioning to include captions as part of the video.',
              'Open captioning is the only way to insure that captions are available on most cells phones and tablet computers connecting through wireless services.'
            ],
            MANUAL_CHECKS: [
              'When captions are enabled on the media player, verify the captions are visible.',
              'Verify that the captions accurately represent and are synchronized with the speech and sounds in the video.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The video element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-video-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The track element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-track-element'
              }
            ]
        },
        VIDEO_5: {
            ID:                    'Video 5',
            DEFINITION:            'Live and prerecorded video with synchronized audio (i.e. a movie, lecture) using the @object@ element %s have synchronized captions.',
            SUMMARY:               '@object@ for video %s have captions',
            TARGET_RESOURCES_DESC: '@object@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify the @object@ element is used for video content with synchronized audio (i.e movie, lecture).  If it is video with synchronized audio, verify it has open or closed captioning of the audio content.',
              MANUAL_CHECK_P:     'Verify if any of the %N_MC @object@ elements are used for video content with synchronized audio (i.e movie, lecture).  If any are used for video with synchronized audio, verify it has open or closed captioning of the audio content.',
              HIDDEN_S: 'The @object@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @object@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @object@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'Verify the @object@ element with @video@ in its @type@ attribute has synchronized audio (i.e. movie, lecture).  If so, verify there is open or closed captioning of the audio content.',
              ELEMENT_MC_2: 'Verify the @object@ element renders video content with synchronized audio (i.e. movie, lecture).  If so, verify there is open or closed captioning of the audio content.',
              ELEMENT_HIDDEN_1: 'The @object@ element is hidden and cannot render video content.'
            },
            PURPOSE: [
              'Synchronized captions provide a means for people who cannot hear the audio content of a video to have access to the speech and sounds of the video.',
              'Some types of learning disabilities effect auditory processing, captions provide an alternative way to understand the audio content of a video.',
              'This rule covers the requirements of both WCAG 2.0 Success Criteria 1.2.2 and 1.2.4, and therefore covers both live and prerecorded content.'
            ],
            TECHNIQUES: [
              'Consider using the @video@ element instead of the @object@ element for video containing synchronized audio.  The @video@ element has better support for adding caption tracks.',
              'Use video authoring tools and player technologies that support captioning.  Use the features of the authoring system and player to add open or closed captions to the video.',
              'If closed captions are not support, use open captioning to include captions as part of the video.',
              'Open captioning is the only way to insure that captions are available on most cells phones and tablet computers.'
            ],
            MANUAL_CHECKS: [
              'When captions are enabled on the media player, verify the captions are visible.',
              'Verify that the captions accurately represent and are synchronized with the speech and sounds in the video.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The object element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-object-element'
              }
            ]
        },
        VIDEO_6: {
            ID:                    'Video 6',
            DEFINITION:            'Live and prerecorded video with synchronized audio (i.e. a movie, lecture) using the @embed@ element %s have synchronized captions.',
            SUMMARY:               '@embed@ for video %s have captions',
            TARGET_RESOURCES_DESC: '@embed@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify the @embed@ element is used for video content with synchronized audio (i.e movie, lecture).  If it is video with synchronized audio, verify it has captions of the audio content.',
              MANUAL_CHECK_P:     'Verify if any of the %N_MC @embed@ elements are used for video content with synchronized audio (i.e movie, lecture).  If any are used for video with synchronized audio, verify it has captions of the audio content.',
              HIDDEN_S: 'The @embed@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @embed@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @embed@ elements found on this page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'Verify the @embed@ element with @video@ in its @type@ attribute has synchronized audio (i.e. movie, lecture).  If so, verify their are captions avialble for the audio content.',
              ELEMENT_MC_2: 'Verify the @embed@ element renders video content with synchronized audio (i.e. movie, lecture).  If so, verify their are captions avialble for the audio content.',
              ELEMENT_HIDDEN_1:       'The @embed@ element is hidden and cannot render video content.'
            },
            PURPOSE: [
              'Synchronized captions provide a means for people who cannot hear the audio content of a video to have access to the speech and sounds of the video.',
              'Some types of learning disabilities effect auditory processing, captoins provide an alternative way to understand the audio content of a video.',
              'This rule covers the requirements of both WCAG 2.0 Success Criteria 1.2.2 and 1.2.4, and therefore covers both live and prerecorded content.'
            ],
            TECHNIQUES: [
              'Consider using the @video@ element instead of the @object@ element for video containing synchronized audio.  The @video@ element has better support for adding caption tracks.',
              'Use video authoring tools and player technologies that support captioning.  Use the features of the authoring system and player to add open or closed captions to the video.',
              'If closed captions are not support, use open captioning to include captions as part of the video.',
              'Open captioning is the only way to insure that captions are available on most cells phones and tablet computers.'
            ],
            MANUAL_CHECKS: [
              'When captions are enabled on the media player, verify the captions are visible.',
              'Verify that the captions accurately represent and are synchronized with the speech and sounds in the video.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The embed element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-embed-element'
              }
            ]
        },
        VIDEO_7: {
            ID:                    'Video 7',
            DEFINITION:            '@video@ elements used for prerecorded video with synchronized audio (i.e. a movie, archived lecture) %s have an audio description of the video content.',
            SUMMARY:               '@video@ element %s have audio description.',
            TARGET_RESOURCES_DESC: '@video@ elements.',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add audio description track to @video@ element without an audio description track.',
              FAIL_P:   'Add audio description track to each of the %N_F the @video@ elements without audio description tracks.',
              MANUAL_CHECK_S:     'Verify the @video@ element with is used for prerecorded video with synchronized audio.   If so, verify the video includes an audio description of the video content.',
              MANUAL_CHECK_P:     'Verify if any of the %N_MC @video@ elements are used for prerecorded video with synchronized audio.   If so, verify each of the videos includes an audio description of the video content.',
              HIDDEN_S: 'The @video@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @video@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @video@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:         '@video@ element has audio description track.',
              ELEMENT_FAIL_1:       'Add audio description track to @video@ element.',
              ELEMENT_MC_1: 'Verify an audio description of the video content is included in the audio track of the video.',
              ELEMENT_HIDDEN_1:       'The @video@ element is hidden and cannot render content.'
            },
            PURPOSE: [
              'Text and audio descriptions provide a means for people who cannot see the video to understand the video content.',
              'Some types of learning disabilities affect visual processing, text and audio descriptions provide an alternative way to understand the video content.',
              'This rule covers the requirements of both WCAG 2.0 Success Criteria 1.2.3 and 1.2.5, that is why a text description of the video content cannot be used to satisfy this rule.'
            ],
            TECHNIQUES: [
              'Use the @track@ element to add audio descriptions to the video content.',
              'Use @aria-describedby@ to reference a text description of the video content.'
            ],
            MANUAL_CHECKS: [
              'When audio descriptions are enabled on the media player, check to make sure the audio description can be heard.',
              'If there is a audio description make sure the description accurately describes the video content.',
              'If there is a text description make sure the description accurately describes the video content.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The video element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-video-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The track element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-track-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        },
        VIDEO_8: {
            ID:                    'Video 8',
            DEFINITION:            '@object@ elements used for prerecorded video with synchronized audio (i.e. a movie, archived lecture) %s have an audio description of the video content.',
            SUMMARY:               '@object@ for video %s have audio description.',
            TARGET_RESOURCES_DESC: '@object@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify the @object@ element is used for prerecorded video with synchronized audio (i.e. a movie, archived lecture).  If so, verify the video includes an audio description of the video content.',
              MANUAL_CHECK_P:     'Verify if any of the %N_MC @object@ elements are used for prerecorded video with synchronized audio (i.e. a movie, archived lecture).  If so, verify each video includes an audio description of the video content.',
              HIDDEN_S: 'The @object@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @object@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @object@ elements found on this page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'Verify the @object@ element with @video@ in its @type@ attrbute is used for prerecorded video with synchronized audio (i.e. a movie, archived lecture).  If so verify an audio description of the video content is available.',
              ELEMENT_MC_2: 'Verify if the @object@ element is used for prerecorded video with synchronized audio (i.e. a movie, archived lecture).  If so verify an audio description of the video content is available.',
              ELEMENT_HIDDEN_1:       'The @object@ element is hidden and cannot render video content.'
            },
            PURPOSE: [
              'Text and audio descriptions provide a means for people who cannot see the video to understand the video content.',
              'Some types of learning disabilities affect visual processing, text and audio descriptions provide an alternative way to understand the video content.',
              'This rule covers the requirements of both WCAG 2.0 Success Criteria 1.2.3 and 1.2.5, that is why a text description of the video content cannot be used to satisfy this rule.'
            ],
            TECHNIQUES: [
              'Use the @video@ element instead of the @object@ element for video only content, since the @video@ element provides better support for audio description tracks.',
              'Include an audio track in the video that describes the video content.',
              'Use @aria-describedby@ attribute to point to a text description of the video only content.'
            ],
            MANUAL_CHECKS: [
              'When audio descriptions are enabled on the media player, check to make sure the audio description can be heard.',
              'If there is a audio description make sure the description accurately describes the video content.',
              'If there is a text description make sure the description accurately describes the video content.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The object element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-object-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        },
        VIDEO_9: {
            ID:                    'Video 9',
            DEFINITION:            '@embed@ elements used for prerecorded video with synchronized audio (i.e. a movie, archived lecture) %s have audio description of the video content.',
            SUMMARY:               '@embed@ for video %s have audio description',
            TARGET_RESOURCES_DESC: '@embed@ elements',
            RULE_RESULT_MESSAGES: {
              MANUAL_CHECK_S:     'Verify the @embed@ element is used for prerecorded video with synchronized audio (i.e. a movie, archived lecture).   If so, verify the video includes an audio description of the video content.',
              MANUAL_CHECK_P:     'Verify if any of the %N_MC @embed@ elements are used for prerecorded video with synchronized audio (i.e. a movie, archived lecture).   If so, verify each of the videos include an audio description of the video content.',
              HIDDEN_S: 'The @embed@ element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H @embed@ elements that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @embed@ elements found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1: 'Verify the @embed@ element with @video@ in its @type@ attrbute is used for video with synchronized audio (i.e. a movie, archived lecture).  If so, verify the video includes an audio description of the video content.',
              ELEMENT_MC_2: 'Verify if the @embed@ element is used for video with synchronized audio (i.e. a movie, archived lecture).  If so, verify the video includes an audio description of the video content.',
              ELEMENT_HIDDEN_1:       'The @embed@ element is hidden and cannot render video content.'
            },
            PURPOSE: [
              'Text and audio descriptions provide a means for people who cannot see the video to understand the video content.',
              'Some types of learning disabilities affect visual processing, text and audio descriptions provide an alternative way to understand the video content.',
              'This rule covers the requirements of both WCAG 2.0 Success Criteria 1.2.3 and 1.2.5, that is why a text description of the video content cannot be used to satisfy this rule.'
            ],
            TECHNIQUES: [
              'Use the @video@ element instead of the @embed@ element for video only content, since the @video@ element provides better support for audio description tracks.',
              'Include an audio track in the video that describes the video content.',
              'Use @aria-describedby@ attribute to point to a text description of the video only content.'
            ],
            MANUAL_CHECKS: [
              'When audio descriptions are enabled on the media player, check to make sure the audio description can be heard.',
              'If there is a audio description make sure the description accurately describes the video content.',
              'If there is a text description make sure the description accurately describes the video content.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HMTL 5: The embed element',
                url:   'https://www.w3.org/TR/html5/embedded-content-0.html#the-embed-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (ARIA) 1.0: aria-describedby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-describedby'
              }
            ]
        }
   }
});
/*
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* --------------------------------------------------------------------------- */
/*       OpenAjax Alliance Rules National Language Support (NLS): English      */
/* --------------------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesNLSFromJSON('en-us', {

    //
    //  OAA Rules title and message string National Language Support (NLS)
    //
    rules: {
        WIDGET_1: {
            ID:                    'Widget 1',
            DEFINITION:            'Widgets %s have label.',
            SUMMARY:               'Widgets %s have label',
            TARGET_RESOURCES_DESC: 'Elements with @role@ attribute values that are defined as widgets',
            RULE_RESULT_MESSAGES: {
              FAIL_S:         'Add a label to the element with a widget role that is unlabelled.',
              FAIL_P:         'Add labels to the %N_F elements with widget roles that are unlabelled.',
              MANUAL_CHECK_S: 'Element with a widget role may need a label.',
              MANUAL_CHECK_P: '%N_MC out of %N_T element with widget roles may need a label.',
              HIDDEN_S:       'An element defined as a widget role that is hidden and was not evaluated.',
              HIDDEN_P:       '%N_H elements defined with widget roles that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No elements with widget roles on this page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1: '@%1@ element with @%2@ widget role has label: %3.',
              ELEMENT_MC_1:   '@%1@ element with @%2@ widget role may require a label depending on context (i.e multiple elements with the same widget role) in the page, adding an label will improve accessibility.',
              ELEMENT_FAIL_1:   'Add label to @%1@ element with @%2@ widget role.',
              ELEMENT_HIDDEN_1: 'Label for widget was not tested because @%1@ element with @%2@ widget role is hidden from assistive technologies and/or not visible on screen'
            },
            PURPOSE: [
              'A label associated with a element with a widget role ensures that information about the widget is spoken by screen readers when it receives focus.'
            ],
            TECHNIQUES: [
              'In some cases the child text nodes and @alt@ from descendant image elements will be used as the label for elements with widget roles.',
              'Use @aria-labelledby@ attribute to reference the id(s) of the elements on the page to label elements with widget roles.',
              'Use @aria-label@ attribute to provide a explicit label for an element with a widget role.',
              'Elements with grouping widget roles may not receive keyboard focus, but giving them a label provides users of assistive technologies a more accurate description of the purpose of the widget'
            ],
            MANUAL_CHECKS: [
              'Good labels are both concise and descriptive of the element with widget role purpose.',
              'If element with widget roles are arranged in groups, make sure labels include grouping information.',
              'Consider using @aria-describedby@ to provide references to instructions or error information.',
              'When there is more than one widget of the same type on a page, they need an label for users to uniquely identify the form control.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Accessible Name (e.g. label) Calculation',
                url:   'https://www.w3.org/TR/wai-aria/#namecalculation'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: aria-labelledby',
                url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: aria-label',
                url:   'https://www.w3.org/TR/wai-aria/#aria-label'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA6: Using aria-label to provide labels for objects',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA6'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA9: Using aria-labelledby to concatenate a label from several text nodes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA9'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'WAI-ARIA 1.0 Authoring Practices',
                url:   'https://www.w3.org/TR/wai-aria-practices/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
        },
        WIDGET_2: {
            ID:                    'Widget 2',
            DEFINITION:            'Elements with @onClick@ event handlers %s be a link, button or have a widget role with tabindex.',
            SUMMARY:               '@onClick@ event handlers %s have role',
            TARGET_RESOURCES_DESC: 'Elements with @onClick@ event handler values that are defined as widgets',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add widget role name to element.',
              FAIL_P:   'Add widget roles to each of the %N_F elements.',
              MANUAL_CHECK_S:     'Verify that any child elements that can respond to element with an @onclick@ event handler are a link, form control or has a widget role, and can be accessed with the keyboard alone.',
              MANUAL_CHECK_P:     'Verify that any child elements that can respond to %N_MC elements with an @onclick@ event handler are a link, form control or has a widget role, and can be accessed with the keyboard alone.',
              HIDDEN_S: 'The element with an @onClick@ event handler that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H elements with @onClick@ events handler that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No elements with @onClick@ event handlers on the page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ element has a widget role.',
              ELEMENT_PASS_2:   '@%1@ element is a form control.',
              ELEMENT_PASS_3:   '@%1@ element is a link.',
              ELEMENT_FAIL_1:   'Add widget role to the @%1@ element.',
              ELEMENT_MC_1:     'The @%1@ element has an @onclick@ event handler, verify any child elements that can respond to the @onclick@ event handler are a link, form control or have a widget role, and can be access with the keyboard alone.',
              ELEMENT_HIDDEN_1: 'Elements with onClick events having a @role@ was not tested because %1 element with @onClick@ event handler is hidden from assistive technologies and/or not visible on screen.'
            },
            PURPOSE: [
              'Elements with @onClick@ event handlers must be a link, form control or have a widget role.'
            ],
            TECHNIQUES: [
              'Use ARIA widget role on non-form controls to describe their function on the page.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'WAI-ARIA 1.0 Authoring Practices: Tabindex for managing focus',
                url:   'https://www.w3.org/TR/2010/WD-wai-aria-practices-20100916/#kbd_focus'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA4: Using a WAI-ARIA role to expose the role of a user interface component',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA4.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
        },
        WIDGET_3: {
            ID:                    'Widget 3',
            DEFINITION:            '@role@ attribute value %s be a widget, section, landmark or live region role.',
            SUMMARY:               '@role@ %s be valid',
            TARGET_RESOURCES_DESC: 'Elements with @role@ attribute values',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add a valid widget, section, landmark or live region role value to the element.',
              FAIL_P:   'Add a valid widget, section, landmark or live region role values to %N_F out of %N_T elements with @role@ attributes.',
              HIDDEN_S: 'The element with a role that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H elements with a role that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No elements with @role@ attribute on this page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:     '@%1@ is a widget role.',
              ELEMENT_PASS_2:     '@%1@ is a landmark role.',
              ELEMENT_PASS_3:     '@%1@ is a live region role.',
              ELEMENT_PASS_4:     '@%1@ is a section role.',
              ELEMENT_FAIL_1:   '@%1@ is an abstract ARIA role, change the role attribute to a widget, landmark or live region role.',
              ELEMENT_FAIL_2:   'The @role@ attribute is an empty string, change the @role@ attribute value to an appropriate widget, landmark, section or live region role.',
              ELEMENT_FAIL_3:   '@%1@ is not a defined ARIA role, change the @role@ attribute value to an appropriate widget, landmark, section or live region role.',
              ELEMENT_HIDDEN_1:   '@role@ attribute value was not validated because the %1 element is hidden from assistive technologies and/or not visible on screen.'
            },
            PURPOSE: [
              'Elements with @role@ attributes describe the section of a document (i.e landmarks) and the types of interactive elements (i.e. widgets) to users of assistive technologies, especially screen reader users.'
            ],
            TECHNIQUES: [
              'Use ARIA landmark roles to describe the sections of a web page.',
              'Use ARIA widget roles to describe interactive elements on a web page'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Landmark Roles',
                url:   'https://www.w3.org/TR/wai-aria/#landmark_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA4: Using a WAI-ARIA role to expose the role of a user interface component',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA4.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA19: Using ARIA role=alert or Live Regions to Identify Errors',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA19.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
        },
        WIDGET_4: {
            ID:                    'Widget 4',
            DEFINITION:            'ARIA property and state values %s be valid types.',
            SUMMARY:               'ARIA values %s be valid',
            TARGET_RESOURCES_DESC: 'Elements with aria attributes',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Change ARIA attribute to a valid type.',
              FAIL_P:   'Change %N_F out of %N_T ARIA attributes to a valid types.',
              HIDDEN_S: 'The widget that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H widgets that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No ARIA attributes on this page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   'The @%1@ attribute with the value "@%2@" is a valid token.',
              ELEMENT_PASS_2:   'The @%1@ attribute with the value "@%2@" is a valid "%3" type.',
              ELEMENT_FAIL_1: 'The @%1@ attribute with the value "@%2@" must change to one of the following values: %3.',
              ELEMENT_FAIL_2: 'The @%1@ attribute with the value "@%2@" must change to one or more of the following values: %3.',
              ELEMENT_FAIL_3: 'The @%1@ attribute with the value "@%2@" must change to a value with type of \'%3\'.',
              ELEMENT_HIDDEN_1: 'ARIA attribute value was not tested for validity because the @%1@ attribute with the value "@%2@" is hidden from assistive technologies and not visible on screen.'
            },
            PURPOSE: [
              'ARIA attributes must be a valid type to accurately describe web content to users of assistive technologies, especially screen reader users.'
            ],
            TECHNIQUES: [
              'Use valid values for ARIA attributes.',
              'Check W3C WAI Accessible Rich Internet Applications specifications for allowed values for ARIA attributes.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Supported Property and States',
                url:   'https://www.w3.org/TR/wai-aria/#states_and_properties'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA5.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
      },
      WIDGET_5: {
            ID:                    'Widget 5',
            DEFINITION:            'ARIA property or state %s be defined.',
            SUMMARY:               'ARIA attribute %s be defined',
            TARGET_RESOURCES_DESC: 'Elements with aria attributes',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Change ARIA attribute to a defined property or state.',
              FAIL_P:   'Change all %N_F out of %N_T ARIA attributes to a defined properties or states.',
              HIDDEN_S: 'The widget that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H widgets that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No undefined ARIA attributes on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:    'The @%1@ attribute is a defined ARIA property or state.',
              ELEMENT_FAIL_1:  'The @%1@ attribute must be changed to a defined ARIA property or state.',
              ELEMENT_HIDDEN_1:  'Valid ARIA attribute was not tested becasue the @%1@ attribute with the value "@%2@" is hidden from assistive technologies and/or not visible on screen.'
            },
            PURPOSE: [
              'ARIA attributes must be defined properties or states to accurately describe web content to users of assistive technologies, especially screen reader users'
            ],
            TECHNIQUES: [
              'Use defined ARIA properties and states in the ARIA specification.',
              'Check W3C WAI Accessible Rich Internet Applications specifications for allowed values for ARIA attributes.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Supported Property and States',
                url:   'https://www.w3.org/TR/wai-aria/#states_and_properties'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA5.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
      },
      WIDGET_6: {
            ID:                    'Widget 6',
            DEFINITION:            'Widgets %s define required properties and states.',
            SUMMARY:               'Widgets %s have properties',
            TARGET_RESOURCES_DESC: 'Widgets with required properties and states',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add required properties and states to widget.',
              FAIL_P:   'Add required properties and states to the %N_F of the %N_T widgets with required properties and/or states on the page.',
              HIDDEN_S: 'The widget with required properties and states that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H widgets that have required properties and states that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No widgets with required properties and states on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ widget has the following required ARIA properties and states: %2.',
              ELEMENT_FAIL_1: 'Add one or more of the required ARIA properties and states (i.e. "%2") to the @%1@ widget.',
              ELEMENT_HIDDEN_1: 'Required ARA properties and states was not tested because the %1 widget is hidden from assistive technologies and/or not visible on screen.'
            },
            PURPOSE: [
              'ARIA roles, properties and states describes the features of interactive widgets to users of assistive technologies, especially screen reader users.'
            ],
            TECHNIQUES: [
              'Use required ARIA properties to describe the features and options of a widget.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA5.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
        },
      WIDGET_7: {
            ID:                    'Widget 7',
            DEFINITION:            'Widgets %s have required child roles.',
            SUMMARY:               'Widgets %s have child roles',
            TARGET_RESOURCES_DESC: 'Widgets with required owned elements',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add required child roles to child elements in the widget.',
              FAIL_P:   'Add required child roles to child elements in the %N_F out of %N_T widgets with required child elements.',
              HIDDEN_S: 'The widget that requires child widget roles that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H widgets that require child widget roles that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No widgets with required child ARIA elements on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:    '@%1@ widget has at least one required owned elements: %2.',
              ELEMENT_FAIL_1:  '@%1@ widget is MISSING one or more of following required owned elements: %2.',
              ELEMENT_HIDDEN_1:  'Required child widgets was not tested because the %1 widget is hidden from assistive technologies and not visible on screen.'
            },
            PURPOSE: [
              'ARIA roles, properties and states describes the features of interactive widgets to users of assistive technologies, especially screen reader users.'
            ],
            TECHNIQUES: [
              'Use required ARIA owned elements to describe the features and options of a widget.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA4: Using a WAI-ARIA role to expose the role of a user interface component',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA4.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
        },
     WIDGET_8: {
            ID:                    'Widget 8',
            DEFINITION:            'Widgets %s have required parent role.',
            SUMMARY:               'Widgets %s have parent',
            TARGET_RESOURCES_DESC: 'Widgets with required parent role',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Add required parent role to the widget.',
              FAIL_P:   'Add required parent role to the %N_F of the %N_T widgets that require a parent role.',
              HIDDEN_S: 'The widget that requires a parent role that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H widgets that require a parent roles that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No widgets with required parent role on this page'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ widget is a child of the a @%2@ role.',
              ELEMENT_FAIL_1: 'Create a parent widget with the role of @%1@ for this @%2@ widget.',
              ELEMENT_FAIL_2: 'Create a parent widget with the one of the required roles (i.e. @%1@) for this @%2@ widget.',
              ELEMENT_HIDDEN_1: 'Required parent widgets was not tested because the %1 widget is hidden from assistive technologies and/or not visible on screen.'
            },
            PURPOSE: [
              'ARIA roles, properties and states describes the features of interactive widgets to users of assistive technologies, especially screen reader users.'
            ],
            TECHNIQUES: [
              'Use required parent roles to describe the features and options of a widget.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA4: Using a WAI-ARIA role to expose the role of a user interface component',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA4.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
        },
     WIDGET_9: {
            ID:                    'Widget 9',
            DEFINITION:            'Widgets %s be owned by only one parent widget.',
            SUMMARY:               'Only one owner',
            TARGET_RESOURCES_DESC: 'Widgets with required parent roles',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update widgets with aria-owns to make sure it only references a child widget once.',
              FAIL_P:   'Update %N_F out of %N_T widgets with aria-owns to make sure they reference a child widget only once.',
              HIDDEN_S: 'The widget with @aria-owns@ that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H widgets with @aria-owns@ that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No widgets using aria-owns on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:   '@%1@ child widget is referenced only by @%2@ parent widget with aria-owns.',
              ELEMENT_FAIL_1: 'Update references of @%1@ parent widgets with aria-owns to reference @%2@ child widget only once.',
              ELEMENT_HIDDEN_1: 'Widgets owned by more than one parent widget was not tested becasue the %1 parent widget with aria-owns is hidden from assistive technologies and not visible on screen.'
            },
            PURPOSE: [
              'ARIA roles, properties and states describes the features of interactive widgets to users of assistive technologies, especially screen reader users.'
            ],
            TECHNIQUES: [
              'Parent widget roles with aria-owns must accurately describe the parent relationships, a child widget can only have one parent widget.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              }
            ]
        },
     WIDGET_10: {
            ID:                    'Widget 10',
            DEFINITION:            'Range widget %s have value between minimum and maximum values.',
            SUMMARY:               'Value in range',
            TARGET_RESOURCES_DESC: 'Range widgets',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Update @range@ widget attributes of the range widget so the @aria-valuenow@ attribute is in the range defined by @aria-valuemin@ and @aria-valuemax@ attributes.',
              FAIL_P:   'Update @range@ widget attributes of the %N_F out of %N_T range widgets so the @aria-valuenow@ attribute of each widget is in the range defined by @aria-valuemin@ and @aria-valuemax@ attributes.',
              HIDDEN_S: 'The @range@ widget that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H @range@ widgets that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No @range@ widgets on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_PASS_1:    '@%1@ widget is using @aria-valuetext@ attribute which overrides the @aria-valuenow@ attribute for describing the value of the range.',
              ELEMENT_PASS_2:    '@%1@ widget value of %2 is in the range %3 and %4.',
              ELEMENT_PASS_3:    '@%1@ widget has the range %3 and %4, and by not including the @aria-valuenow@ attribute the value of the progress-bar is considered indeterminate.',
              ELEMENT_FAIL_1:  'Update the numeric values of @aria-valuenow@ (%1), @aria-valuemin@ (%2) and @aria-valuemax@ (%3) so the @aria-valuenow@ value is in range.',
              ELEMENT_FAIL_2:  'Update the numeric values of @aria-valuemin@ (%1) and @aria-valuemax@ (%2) so the @aria-valuemin@ value is less than the @aria-valuemax@ value.',
              ELEMENT_FAIL_3:  'For progress bar update the numeric values or add @aria-valuemin@ (%2) and @aria-valuemax@ (%3) attributes and when state of progress is known use the @aria-valuenow@ attribute value to communicate the current state of progress.',
              ELEMENT_FAIL_4:  'Update or create @%1@ attribute to be a numeric value.',
              ELEMENT_FAIL_5:  'Update or create @%1@ attributes to be a numeric values.',
              ELEMENT_HIDDEN_1:  'Widget range values were not tested becasue the %1 range widget is hidden from assistive technologies.'
            },
            PURPOSE: [
              'ARIA roles, properties and states describes the features of interactive widgets to users of assistive technologies, especially screen reader users.'
            ],
            TECHNIQUES: [
              'Use the @aria-valuenow@, @aria-valuemin@ and @aria-valuemax@ are accurately defined.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA5.html'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              }
            ]
        },
     WIDGET_11: {
            ID:                    'Widget 11',
            DEFINITION:            'Elements with UI event handlers %s have widget roles that accurately describe the options and actions available to the user upon interacting with the element.',
            SUMMARY:               'Elements with event handlers %s have roles',
            TARGET_RESOURCES_DESC: 'Elements with event handlers',
            RULE_RESULT_MESSAGES: {
              FAIL_S:          'Add an ARIA widget role to the interactive element, or to its descendants, to describe the user interactions associated with the event handler or handlers on the element.',
              FAIL_P:          'Add ARIA widget roles to the %N_F interactive elements, or to their descendants, to describe the user interactions associated with the event handlers on those elements.',
              MANUAL_CHECK_S:  'Verify the user interactions associated with the interactive element with one or more event handlers are accurately described by the element\'s widget role and/or those of its descendants.',
              MANUAL_CHECK_P:  'Verify the user interactions associated with the %N_MC interactive elements with one or more event handlers are accurately described by each element\'s widget role and/or their descendants.',
              HIDDEN_S:        'The hidden interactive element with event handlers was not evaluated.',
              HIDDEN_P:        'The %N_H interactive elements with event handlers were not evaluated.',
              NOT_APPLICABLE:  'No interactive elements with event handlers found on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MANUAL_CHECK_1:  'Verify the user options and actions available through the "@%2@" event handler(s) are accurately described by the @%1@ widget role.',
              ELEMENT_MANUAL_CHECK_2:  'Verify the user options and actions available through the "@%2@" event handler(s) are accurately described by native role semantics of the @%1@ element.',
              ELEMENT_MANUAL_CHECK_3:  'Verify the user options and actions available through the "@%2@" event handler(s) are accurately described by the descendant elements with widget roles or the native role semantics of the interactive elements.',
              ELEMENT_FAIL_1:   'Add widget role(s) to the element and/or its descendants that accurately describe the user options and actions of the @%1@ element with the following event handlers: %2.',
              ELEMENT_HIDDEN_1: 'Roles for interactive elements was not tested because the %1 element is hidden from assistive technologies with following event handlers: %2'
            },
            PURPOSE: [
              'ARIA widget roles describe the user options and actions, or more generally, the expected behavior, of interactive elements to users of assistive technologies.',
              'Standard HTML form controls and links have default widget roles that describe their behavior.',
              'When UI event handlers are used to create user options and actions that change the expected behavior of an interactive element, ensure that the appropriate widget role is assigned to the element.',
              'Conversely, ensure that the event handlers are adding appropriate behaviors that align with the ARIA widget role.'
            ],
            TECHNIQUES: [
              'Use the @role@ attribute with an ARIA widget role value to describe the user options, actions and expected behavior of custom interactive elements.',
              'Use ARIA property and state attributes to describe the features of each widget role. Note that some widget roles have required properties and states.',
              'Ensure that all options and actions of interactive elements are available through keyboard-only interaction.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: INPUT element widget role semantics',
                url:   'https://www.w3.org/TR/html51/sec-forms.html#state-of-the-type-attribute'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: SELECT element widget role semantics',
                url:   'https://www.w3.org/TR/html51/sec-forms.html#the-select-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: TEXTAREA element widget role semantics',
                url:   'https://www.w3.org/TR/html51/sec-forms.html#the-textarea-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: BUTTON element widget role semantics',
                url:   'https://www.w3.org/TR/html51/sec-forms.html#the-button-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML5: A element widget role semantics',
                url:   'https://www.w3.org/TR/html51/textlevel-semantics.html#the-a-element'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'UI Events Specification',
                url:   'https://www.w3.org/TR/DOM-Level-3-Events/'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes.',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              }
            ]
        },
        WIDGET_12: {
            ID:         'Widget 12',
            DEFINITION: 'The label for elements with a widget roles on a page %s sufficiently describe its purpose.',
            SUMMARY:    'Widget labels %s be descriptive',
            TARGET_RESOURCES_DESC: 'Elements with widget roles on a page',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'To the element with widget role missing a label, add a label that describes its purpose.',
              FAIL_P:   'To each of the %N_F element with widget roles missing labels, add a label that uniquely describes its purpose.',
              MANUAL_CHECK_S: 'Verify that the label uniquely describes the purpose of the element with widget role.',
              MANUAL_CHECK_P: 'Verify that the label for each of the %N_MC element with widget roles uniquely describes its purpose.',
              HIDDEN_S: 'The control element that is hidden was not evaluated.',
              HIDDEN_P: 'The %N_H control elements that are hidden were not evaluated.',
              NOT_APPLICABLE: 'No element with widget roles on this page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_MC_1:     'Verify the label "%1" for the @%2@ element with @%3@ widget role describes its purpose.',
              ELEMENT_MC_2:     'Verify the @%1@ element with @%2@ widget role does not need a label, a label is only needed  if it clarifies the purpose of the widget on the page.',
              ELEMENT_FAIL_1:   'Add a label to the @%1@ element with @%2@ widget role.',
              ELEMENT_HIDDEN_1: '@%1@ element with the %2@ widget role was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Labels that are sufficiently descriptive make it possible for people to understand the purposes of elements with widget roles on the page.'
            ],
            TECHNIQUES: [
              'In some cases the child text nodes and @alt@ from descendant image elements will be used as the label for elements with widget roles.',
              'Use @aria-labelledby@ attribute to reference the id(s) of the elements on the page to label elements with widget roles.',
              'Use @aria-label@ attribute to provide a explicit label for an element with a widget role.',
              'Elements with grouping widget roles may not receive keyboard focus, but giving them a label provides users of assistive technologies a more accurate description of the purpose of the widget'
            ],
            MANUAL_CHECKS: [
              'Good labels are both concise and descriptive of the element with widget role purpose.',
              'If element with widget roles are arranged in groups, make sure labels include grouping information.',
              'Consider using @aria-describedby@ to provide references to instructions or error information.',
              'When there is more than one widget of the same type on a page, they need an label for users to uniquely identify the form control.'
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @label@ element',
                url:   'https://www.w3.org/TR/html4/interact/forms.html#edef-LABEL'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-label@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-label'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.0: The @aria-labelledby@ attribute',
                url:   'https://www.w3.org/TR/wai-aria/#aria-labelledby'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'HTML 4.01 Specification: The @title@ attribute',
                url:   'https://www.w3.org/TR/html4/struct/global.html#adef-title'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H65: Using the title attribute to identify form controls when the label element cannot be used',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H65'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA6: Using aria-label to provide labels for objects',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA6'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'ARIA9: Using aria-labelledby to concatenate a label from several text nodes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/ARIA9'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'H71: Providing a description for groups of form controls using fieldset and legend elements',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/H71'
              },
              { type:  OpenAjax.a11y.REFERENCES.TECHNIQUE,
                title: 'iCITA Best Practices: Labels for Form Controls Overview',
                url:   'https://html.cita.illinois.edu/nav/form/'
              }
            ]
        },
        WIDGET_13: {
            ID:                    'Widget 13',
            DEFINITION:            'Widget roles %s be removed until the ARIA properties, states, focus management and keyboard support for widgets is fully understood by the developer.',
            SUMMARY:               'Remove widget roles',
            TARGET_RESOURCES_DESC: 'Elements widget roles',
            RULE_RESULT_MESSAGES: {
              FAIL_S:   'Remove widget role from element until you are confident that you understand the ARIA properties, states, focus management and keyboard support needed by the widget.',
              FAIL_P:   'Remove widget role from the %N_F elements until you are confident that you understand the ARIA properties, states, focus management and keyboard support needed by the widget.',
              HIDDEN_S: 'The element with an widget role that is hidden and was not evaluated.',
              HIDDEN_P: '%N_H elements with widget roles that are hidden were not evaluated.',
              NOT_APPLICABLE:  'No elements with widget toles on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:    'Remove @%1@ widget role from the %2 element.',
              ELEMENT_HIDDEN_1:  '@%1[role="%2"]@ was not tested because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'Developers who are new to ARIA and do not completely understand how ARIA technologies can enhancing accessibility may.',
              'The improper use of ARIA roles leads to less accessibility due to conflicting accessibility information being represented in the accessibility APIs.',
              'The intention of the rule to discourage web developers form using widget roles until they fully understand how to use ARIA roles, properties, states, focus management and keyboard support.',
              'Once a developer is confident they understand how to implement ARIA enabled widgets that should use the WCAG + ARIA ruleset to evaluate the accessibility of their pages.'
            ],
            TECHNIQUES: [
              'Remove widget roles from elements, until the developer fully understands who to create accessibility widgets with ARIA roles, properties, states, focus management and keyboard support.',
              'Widget from javascript libraries that claim to support ARIA should be tested for correct use of ARIA roles, properties, states, focus management and keyboard support, since many javascript libraries using ARIA may be using it incorrectly, or updated to previously accessible libraries may have broken accessibility features.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Widget Roles',
                url:   'https://www.w3.org/TR/wai-aria/#widget_roles'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'WAI-ARIA 1.0 Authoring Practices: Tabindex for managing focus',
                url:   'https://www.w3.org/TR/2010/WD-wai-aria-practices-20100916/#kbd_focus'
              },
              { type:  OpenAjax.a11y.REFERENCES.WCAG_TECHNIQUE,
                title: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes',
                url:   'https://www.w3.org/TR/WCAG20-TECHS/G108'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'OAA Web Accessibility ARIA Examples',
                url:   'https://oaa-accessibility.org/examples/'
              },
              { type:  OpenAjax.a11y.REFERENCES.EXAMPLE,
                title: 'Accessible jQuery-ui Components Demonstration',
                url:   'https://ecd.clark.edu/_resources/js/jquery/ui-accessable/#goto_slider'
              }
            ]
        },
        WIDGET_14: {
            ID:                    'Widget 14',
            DEFINITION:            'Verify the live region has the appropriate ARIA markup to indicate whether or how the screen reader will interrupt the user with a change notification.',
            SUMMARY:               'Verify appropriate use of live region',
            TARGET_RESOURCES_DESC: 'Elements with @alert@, @log@ or @status@ roles or the @aria-live@ attribute',
            RULE_RESULT_MESSAGES: {
              FAIL_S:          'One element identified as a live region has a conflict between the implied attribute values of the role and the defined attribute values.',
              FAIL_P:          'The %N_F elements identified as live regions have conflicts between the implied attribute values of their roles and the defined attribute values.',
              HIDDEN_S:        'One element identified as a live region is hidden and was not evaluated.',
              MANUAL_CHECK_S:  'Verify the element identified as a live region has the appropriate ARIA markup for the type of informational change that can occur.',
              MANUAL_CHECK_P:  'Verify the %N_MC elements identified as live regions have the appropriate ARIA markup for the type of informational changes that can occur in those regions.',
              HIDDEN_P:        '%N_H elements identified as live regions are hidden and were not evaluated.',
              NOT_APPLICABLE:  'No elements were identified as live regions on the page.'
            },
            NODE_RESULT_MESSAGES: {
              ELEMENT_FAIL_1:     'The @aria-live@ attribute value of @%1@ conflicts with the default value of @%2@ for the @aria-live@ property of the @%3@ role.',
              ELEMENT_FAIL_2:     'The @aria-atomic@ attribute value of @false@ conflicts with the default value of @true@ for the @aria-atomic@ property of the @%1@ role.',
              ELEMENT_MC_1:       'Verify the @aria-live@ attribute value of @%1@ is appropriate for the type of informational change that can occur in the region.',
              ELEMENT_MC_2:       'Verify the @alert@ role identifies a live region with critical time-sensitive information.',
              ELEMENT_MC_3:       'Verify the @log@ role identifies a live region where new information added and deleted in a meaningful order.',
              ELEMENT_MC_4:       'Verify the @alert@ role identifies a live region with advisory information.',
              ELEMENT_HIDDEN_1:   '@%1[arial-live="%2"]@ was not evaluated because it is hidden from assistive technologies.',
              ELEMENT_HIDDEN_2:   '@%1[role="%2"]@ was not evaluated because it is hidden from assistive technologies.'
            },
            PURPOSE: [
              'ARIA live regions provide a mechanism for displaying dynamic text content on a page such that changes in the content will be automatically announced to screen reader users while they are focusing on other parts of the page.',
              'The manner in which informational changes in live regions are announced to screen reader users is controlled by three separate ARIA roles that may be assigned to the region: @alert@, @log@ and @status@.',
              'In general, live regions should be used sparingly, since live regions that are constantly announcing changes become distracting, and may prevent the user from completing the task they are working on.',
              'A common misuse of live regions is to announce the opening of pull down menus or dialog boxes: These types of announcements are better handled through the appropriate use of other ARIA markup such as the @menu@ and @dialog@ roles.'
            ],
            TECHNIQUES: [
              'The @alert@ role identifies a live region with very important, and usually time-sensitive, information. When the information changes in this type of live region, a message is typically sent that interrupts the current speech being spoken by a screen reader. Examples includes transaction errors that are cancelling or impeding the progress of completing a financial transaction.',
              'The @log@ role identifies a type of live region where new information is added in a meaningful order and old information may disappear. Examples include chat logs, messaging history, game log, or an error log.',
              'The @status@ role identifies a live region that contains an advisory message, but one that is not important enough to justify an @alert@ role. This type of region is often, but not necessarily, presented as a status bar, and announcements of informational changes are typically delayed until a break occurs in the current speech being read by the screen reader software.',
              'When the @aria-atomic@ attribute is specified for a live region, it indicates to assistive technologies that when a change occurs, it should re-render all of the content or just the changes.',
              'The optional @aria-relevant@ attribute on a live region indicates what types of informational changes should be communicated to the user (e.g. @additions@, @deletions@, @text@ and @all@).',
              'The @aria-live@ attribute can be used to create custom live regions, with possible values of @polite@, @assertive@ and @off@. When used in conjunction with the ARIA @alert@, @log@ or @status@ roles, care must be taken in order to avoid conflicts with the default properties of those roles.'
            ],
            MANUAL_CHECKS: [
            ],
            INFORMATIONAL_LINKS: [
              { type:  OpenAjax.a11y.REFERENCES.OTHER,
                title: 'Mozilla Developer Network: ARIA Live Regions',
                url:   'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Alert Role',
                url:   'https://www.w3.org/TR/wai-aria/roles#alert'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Log Role',
                url:   'https://www.w3.org/TR/wai-aria/roles#log'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: Status Role',
                url:   'https://www.w3.org/TR/wai-aria/roles#status'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: aria-live',
                url:   'https://www.w3.org/TR/wai-aria/states_and_properties#aria-live'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: aria-atomic',
                url:   'https://www.w3.org/TR/wai-aria/states_and_properties#aria-atomic'
              },
              { type:  OpenAjax.a11y.REFERENCES.SPECIFICATION,
                title: 'Accessible Rich Internet Applications (WAI-ARIA) 1.1 Specification: aria-relevant',
                url:   'https://www.w3.org/TR/wai-aria/states_and_properties#aria-relevant'
              }

            ]
        }
    }
});
/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Media Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object AUDIO_1
 *
 * @desc Audio elements must have captions or text transcripts
 */

{ rule_id             : 'AUDIO_1',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.1',
  wcag_related_ids    : ['1.2.2', '1.2.4', '1.2.9'],
  target_resources    : ['audio', 'track'],
  primary_property    : 'type',
  resource_properties : ['controls', 'autoplay', 'name', 'src', 'label'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var audio_elements     = dom_cache.media_cache.audio_elements;
    var audio_elements_len = audio_elements.length;

    for (var i = 0; i < audio_elements_len; i++) {
      var ae = audio_elements[i];
      var de = ae.dom_element;
      var cs = de.computed_style;

      if ((cs.is_visible_to_at === VISIBILITY.VISIBLE) ||
          (ae.has_autoplay)) {
        if (ae.getTextTracks().length) rule_result.addResult(TEST_RESULT.PASS, ae, 'ELEMENT_PASS_1', []);
        else if (de.has_aria_describedby) rule_result.addResult(TEST_RESULT.PASS, ae, 'ELEMENT_PASS_2', []);
        else rule_result.addResult(TEST_RESULT.FAIL, ae, 'ELEMENT_FAIL_1', []);
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, ae, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object AUDIO_2
 *
 * @desc If object element is used for audio only, object must have captions or text transcript
 */

{ rule_id             : 'AUDIO_2',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.1',
  wcag_related_ids    : ['1.2.2', '1.2.4', '1.2.9'],
  target_resources    : ['object', 'param'],
  primary_property    : 'type',
  resource_properties : ['data', 'name', 'value', 'valuetype'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var object_elements     = dom_cache.media_cache.object_elements;
    var object_elements_len = object_elements.length;

    for (var i = 0; i < object_elements_len; i++) {
      var oe = object_elements[i];
      var de = oe.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (de.has_aria_describedby) {
          rule_result.addResult(TEST_RESULT.PASS, oe, 'ELEMENT_PASS_1', []);
        }
        else {
          if ((typeof oe.type === 'string') &&
               (oe.type.indexOf('audio') >= 0)) {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_1', []);
          }
          else {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_2', []);
          }
        }
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, oe, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object AUDIO_3
 *
 * @desc If embed element is used for audio only, embed  must have captions or text transcript
 */

{ rule_id             : 'AUDIO_3',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.1',
  wcag_related_ids    : ['1.2.2', '1.2.4', '1.2.9'],
  target_resources    : ['embed'],
  primary_property    : 'type',
  resource_properties : ['src'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var embed_elements     = dom_cache.media_cache.embed_elements;
    var embed_elements_len = embed_elements.length;

    for (var i = 0; i < embed_elements_len; i++) {
      var ee = embed_elements[i];
      var de = ee.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (de.has_aria_describedby) {
          rule_result.addResult(TEST_RESULT.PASS, ee, 'ELEMENT_PASS_1', []);
        }
        else {
          if ((typeof ee.type === 'string') &&
              (ee.type.indexOf('audio') >= 0)) {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ee, 'ELEMENT_MC_1', []);
          }
          else {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ee, 'ELEMENT_MC_2', []);
          }
        }
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, ee, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

  /**
   * @object AUDIO_4
   *
   * @desc  Audio automatically starts
   */

{ rule_id             : 'AUDIO_4',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.4.2',
  wcag_related_ids    : [],
  target_resources    : [],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

      var page_element = dom_cache.media_cache.page_element;

      if (page_element) {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
       }

    } // end validate function
  }

]);
/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance List Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object BYPASS_1
 *
 * @desc Looking for links or that support bypassing blocks of content
*/

{ rule_id             : 'BYPASS_1',
  last_updated        : '2015-02-19',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.KEYBOARD_SUPPORT,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.4.1',
  wcag_related_ids    : ['2.4.4'],
  target_resources    : ['a'],
  primary_property    : 'accessible_name',
  resource_properties : ['class_name', 'id', 'href', 'name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var link_elements     = dom_cache.links_cache.link_elements;
    var link_elements_len = link_elements.length;

    var control_elements     = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var bypass_links = [];
    var bypass_link = false;
    var skipto_link = false;
    var focusable   = false;
    var missing     = false;

    var i, ce, cs, de, le, id;

    for (i = 0; i < control_elements_len; i++) {

      ce = control_elements[i];
      de = ce.dom_element;

      if ((de.role === 'button') && (de.class_name !== '') && (de.class_name.toLowerCase().indexOf('skipto') >= 0)) {
        bypass_links.push(ce);
        rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', []);
        skipto_link = true;
        break;
      }
    }

    for (i = 0; (!skipto_link && (i < link_elements_len) && (i < 2)); i++) {

      le = link_elements[i];
      de = le.dom_element;
      cs = de.computed_style;

      if (le.href && le.href.length && (le.href.indexOf('#') >= 0 )) {
        id = le.href.substring((le.href.indexOf('#')+1), le.href.length);

        if (id.length) {
          bypass_link = true;

          // check for id first
          de = dom_cache.element_with_id_cache.getDOMElementById(id);

          // check for name second
          if (!de) de = dom_cache.element_cache.getDOMElementByName(id);

          if (de) {
            if (cs.is_visible_to_at == VISIBILITY.VISIBLE) {
              if ((de.tab_index >= 0) || de.has_tabindex || de.is_interactive) {
                bypass_links.push(le);
                rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);

//                OpenAjax.a11y.logger.debug("[BYPASS 1] tag: " + de.tag_name + " tabindex: " + de.tab_index  + " has tabindex: " + de.has_tabindex + " has href: " + de.has_href );

                if ((de.tag_name !== 'a') ||
                    (de.tab_index < 0) ||
                    (de.tab_index > 0) ||
                     de.has_href) {
                  focusable = true;
                  rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_3', []);
                }
                else {
                  rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', []);
                }
              }
              else {
                rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', [id]);
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', []);
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', []);
            }
          }
          else {
            missing = true;
            rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [id]);
          }
        }
      }
    }

    if (skipto_link || (bypass_link && focusable)) {
      rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', []);
    }
    else {
      if (missing) rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_1', []);
      else if (bypass_link) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
      else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_2', []);
    }

  } // end validation function  }
}
]);

//
// OpenAjax Alliance Rules
// Rule group: Styling Rules
//
OpenAjax.a11y.RuleManager.addRulesFromJSON([

  /**
   * @object COLOR_1
   *
   * @desc  Color contrast ratio must be > 4.5 for normal text, or > 3.1 for large text
   */

  { rule_id             : 'COLOR_1',
    last_updated        : '2014-11-21',
    rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
    rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
    rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
    wcag_primary_id     : '1.4.3',
    wcag_related_ids    : ['1.4.1','1.4.6'],
    target_resources    : ['textnodes'],
    primary_property    : 'color_contrast_ratio',
    resource_properties : ['color_hex', 'background_color_hex', 'background_image', 'is_large_font'],
    language_dependency : "",
    validate            : function (dom_cache, rule_result) {

      var MIN_CCR_NORMAL_FONT = 4.5;
      var MIN_CCR_LARGE_FONT  = 3.1;

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
      var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

      var cc_items     = dom_cache.text_cache.text_nodes;
      var cc_items_len = cc_items.length;

      for (var i = 0; i < cc_items_len; i++) {

        var test_result = TEST_RESULT.PASS;
        var message_id = '';
        var args = [];

        var cc_item = cc_items[i];
        var pe = cc_item.parent_element;
        var cs = pe.computed_style;

        // if color contrast raio is undefined, skip this item
        if (!cs.color_contrast_ratio) continue;

        if (cs.is_visible_onscreen === VISIBILITY.VISIBLE) {

          if (!cs.is_large_font) {
            if (cs.color_contrast_ratio >= MIN_CCR_NORMAL_FONT) {
              // Passes color contrast requirements
              if (cs.background_image != "none") {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, cc_item, 'ELEMENT_MC_1', [cs.color_contrast_ratio]);
              }
              else {
                rule_result.addResult(TEST_RESULT.PASS, cc_item, 'ELEMENT_PASS_1', [cs.color_contrast_ratio]);
              }
            }
            else {

              // Fails color contrast requirements
              if (cs.background_image === "none") {
                rule_result.addResult(TEST_RESULT.FAIL, cc_item, 'ELEMENT_FAIL_1', [cs.color_contrast_ratio]);
              }
              else {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, cc_item, 'ELEMENT_MC_2', [cs.color_contrast_ratio]);
              }
            }
          }
          else {
            if (cs.color_contrast_ratio >= MIN_CCR_LARGE_FONT) {
              // Passes color contrast requirements
              if (cs.background_image != "none") {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, cc_item, 'ELEMENT_MC_3', [cs.color_contrast_ratio]);
              }
              else {
                rule_result.addResult(TEST_RESULT.PASS, cc_item, 'ELEMENT_PASS_2', [cs.color_contrast_ratio]);
              }
            }
            else {
              // Fails color contrast requirements
              if (cs.background_image === "none") {
                rule_result.addResult(TEST_RESULT.FAIL, cc_item, 'ELEMENT_FAIL_2', [cs.color_contrast_ratio]);
              }
              else {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, cc_item, 'ELEMENT_MC_4', [cs.color_contrast_ratio]);
              }
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, cc_item, 'ELEMENT_HIDDEN_1', []);
        }

      } // end loop

    } // end validate function
  },

  /**
   * @object COLOR_1
   *
   * @desc  Use of color
   */

  { rule_id             : 'COLOR_2',
    last_updated        : '2014-04-04',
    rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
    rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
    rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
    wcag_primary_id     : '1.4.1',
    wcag_related_ids    : [],
    target_resources    : [],
    primary_property    : '',
    resource_properties : [],
    language_dependency : "",
    validate            : function (dom_cache, rule_result) {

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

      var page_element = dom_cache.headings_landmarks_cache.page_element;

      if (page_element) {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
       }

    } // end validate function
  }

]);



/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Control Rules                                 */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object ERROR_1
 *
 * @desc Identify form controls with invalid values
 *
 */

{ rule_id             : 'ERROR_1',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.3.1',
  wcag_related_ids    : [],
  target_resources    : ['input[type="checkbox"]', 'input[type="date"]', 'input[type="file"]', 'input[type="radio"]', 'input[type="number"]', 'input[type="password"]', 'input[type="tel"]' , 'input[type="text"]', 'input[type="url"]', 'select', 'textarea', 'meter', 'progress'],
  primary_property    : 'aria-invalid',
  resource_properties : ['validity', 'validation_message', 'pattern'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY = OpenAjax.a11y.VISIBILITY;

    var control_elements   = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;
    var ces   = [];

    // Check to see if valid cache reference
    if (control_elements && control_elements_len) {

      // collect all the visible controls
      for (var i = 0; i < control_elements_len; i++) {
        var ce = control_elements[i];
        var de = ce.dom_element;
        var cs = de.computed_style;

        if (ce.has_validity) {
          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
            if (!ce.is_valid) {
              if (de.has_aria_invalid) {
                if (de.aria_invalid) rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', [ce.toString()]);
                else rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_1', [ce.toString()]);
              }
              else {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_1', [ce.toString()]);
              }
            }
            else {
              if (de.has_aria_invalid) {
                if (de.aria_invalid) rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_2', [ce.toString()]);
                else rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_2', [ce.toString()]);
              }
              else {
                if (ce.has_pattern) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_2', [ce.toString()]);
                else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_3', [ce.toString()]);
              }
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [ce].toString());
          }
        }
      } // end loop
    }
  } // end validate function
},

/**
 * @object ERROR_2
 *
 * @desc Use required attribute on required standard form controls
 *
 */

{ rule_id             : 'ERROR_2',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.3.3',
  wcag_related_ids    : [],
  target_resources    : ['input[type="text"]', 'input[type="date"]', 'input[type="file"]', 'input[type="number"]', 'input[type="password"]', 'input[type="tel"]' , 'input[type="text"]', 'input[type="url"]', 'select', 'textarea'],
  primary_property    : 'has_required',
  resource_properties : ['has_aria_required', 'aria_required'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY = OpenAjax.a11y.VISIBILITY;

    var control_elements   = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;

    // collect all the visible controls
    for (var i = 0; i < control_elements_len; i++) {
      var ce = control_elements[i];
      var de = ce.dom_element;
      var cs = de.computed_style;

      var control_type = ce.control_type;

      if (control_type === OpenAjax.a11y.CONTROL_TYPE.CHECKBOX  ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.DATE      ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.EMAIL     ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.FILE      ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.NUMBER    ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.PASSWORD  ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.RADIO     ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.TEL       ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.TEXT      ||
          control_type === OpenAjax.a11y.CONTROL_TYPE.URL ) {

        var input_type = de.node.getAttribute('type');

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if (de.has_required || de.has_aria_required) {
            if (de.has_required && de.has_aria_required && !de.aria_required) {
              rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_1', [input_type]);
            }
            else {
              if (de.has_required) rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', [input_type]);
              else rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_2', [input_type]);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_1', [input_type]);
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [input_type]);
        }
      }
      else {
        if ((control_type === OpenAjax.a11y.CONTROL_TYPE.TEXTAREA) ||
            (control_type === OpenAjax.a11y.CONTROL_TYPE.SELECT)) {

          var tag_name = de.tag_name;

          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
            if (de.has_required || de.has_aria_required) {
              if (de.has_required && de.has_aria_required && !de.aria_required) {
                rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_2', [tag_name]);
              }
              else {
                if (de.has_required) rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_3', [tag_name]);
                else rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_4', [tag_name]);
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_2', [tag_name]);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_2', [de.tag_name]);
          }
        }
      }
    }

  } // end validate function
},

/**
 * @object ERROR_3
 *
 * @desc Use aria-required attribute widgets
 *
 */

{ rule_id             : 'ERROR_3',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.3.3',
  wcag_related_ids    : [],
  target_resources    : ['[role=""],'],
  primary_property    : 'has_aria_required',
  resource_properties : ['aria_required'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY = OpenAjax.a11y.VISIBILITY;

    var widget_elements     = dom_cache.controls_cache.widget_elements;
    var widget_elements_len = widget_elements.length;

    // collect all the visible controls
    for (var i = 0; i < widget_elements_len; i++) {
      var we = widget_elements[i];
      var de = we.dom_element;
      var cs = de.computed_style;

      var role = de.role;

      if (role === 'combobox'     ||
          role === 'gridcell'     ||
          role === 'listbox'      ||
          role === 'radiogroup'   ||
          role === 'spinbutton'   ||
          role === 'textarea'     ||
          role === 'tree'         ||
          role === 'textbox'    ||
          role === 'treegrid') {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if (de.has_aria_required) {
            rule_result.addResult(TEST_RESULT.PASS, we, 'ELEMENT_PASS_1', [de.tag_name, role]);
          }
          else {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_1', [de.tag_name, role]);
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, we, 'ELEMENT_HIDDEN_1', [de.tag_name, role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ERROR_4
 *
 * @desc Provide correction suggestions
 *
 */

{ rule_id             : 'ERROR_4',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.3.3',
  wcag_related_ids    : [],
  target_resources    : ['input[type="text"]', 'input[type="date"]', 'input[type="file"]', 'input[type="number"]', 'input[type="password"]', 'input[type="tel"]' , 'input[type="text"]', 'input[type="url"]', 'select', 'textarea', '[role="textbox"]', '[role="combobox"]', '[role="gridcell"]'],
  primary_property    : 'aria-invalid',
  resource_properties : ['validity', 'validation_message', 'pattern'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY = OpenAjax.a11y.VISIBILITY;

    var control_elements   = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;

    var widget_elements     = dom_cache.controls_cache.widget_elements;
    var widget_elements_len = widget_elements.length;

    var target_controls = [];

    // collect all the visible controls
    for (var i = 0; i < control_elements_len; i++) {
      var ce = control_elements[i];
      var de = ce.dom_element;
      var cs = de.computed_style;

      var control_type = ce.control_type;

      if (control_type === OpenAjax.a11y.CONTROL_TYPE.DATE        ||
            control_type === OpenAjax.a11y.CONTROL_TYPE.EMAIL     ||
            control_type === OpenAjax.a11y.CONTROL_TYPE.FILE      ||
            control_type === OpenAjax.a11y.CONTROL_TYPE.NUMBER    ||
            control_type === OpenAjax.a11y.CONTROL_TYPE.PASSWORD  ||
            control_type === OpenAjax.a11y.CONTROL_TYPE.TEL       ||
            control_type === OpenAjax.a11y.CONTROL_TYPE.TEXT      ||
            control_type === OpenAjax.a11y.CONTROL_TYPE.URL ) {
        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_1', [de.node.getAttribute('type')]);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [de.node.getAttribute('type')]);
        }
      }
      else {
        if ((control_type === OpenAjax.a11y.CONTROL_TYPE.TEXTAREA) ||
            (control_type === OpenAjax.a11y.CONTROL_TYPE.SELECT)) {
          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_2', [de.tag_name]);
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_2', [de.tag_name]);
          }
        }
      }
    }

  } // end validate function
},

/**
 * @object ERROR_5
 *
 * @desc Provide error prevention
 *
 */

{ rule_id             : 'ERROR_5',
  last_updated        : '2015-04-09',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.3.4',
  wcag_related_ids    : [],
  target_resources    : ['input[type="text"]', 'input[type="date"]', 'input[type="file"]', 'input[type="number"]', 'input[type="password"]', 'input[type="tel"]' , 'input[type="text"]', 'input[type="url"]', 'select', 'textarea', '[role="textbox"]', '[role="combobox"]', '[role="gridcell"]'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY = OpenAjax.a11y.VISIBILITY;

    var control_elements     = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;

    var control_count = 0;

    for (var i = 0; i < control_elements_len; i++) {
      var ce = control_elements[i];
      var de = ce.dom_element;
      var cs = de.computed_style;

      var control_type = ce.control_type;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_1', [de.node.getAttribute('type')]);
        control_count += 1;
      }
      else {
        rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [de.node.getAttribute('type')]);
      }
    }

    if (control_elements_len) {
      var page_element = dom_cache.headings_landmarks_cache.page_element;
      if (page_element && control_count) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
    }

  } // end validate function
}

]);



/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Control Rules                                 */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object FOCUS_1
 *
 * @desc Focus order
 */

{ rule_id             : 'FOCUS_1',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.KEYBOARD_SUPPORT,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.4.3',
  wcag_related_ids    : ['2.1.1', '2.1.2', '2.4.7', '3.2.1'],
  target_resources    : ['Page', 'a', 'applet', 'area', 'button', 'input', 'object', 'select', 'area', 'widgets'],
  primary_property    : 'tabindex',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var page_element = dom_cache.keyboard_focus_cache.page_element;

//     OpenAjax.a11y.logger.debug(" Page Element: " + page_element + "  " + page_element.dom_element);

     var interactive_elements     = dom_cache.keyboard_focus_cache.interactive_elements;
     var interactive_elements_len = interactive_elements.length;

     var tab_count = 0;
     var visible_count = 0;

     for (var i = 0; i < interactive_elements_len; i++) {

       var ie = interactive_elements[i];

       var de = ie.dom_element;
       if (!de) de =ie;

       var cs = de.computed_style;

       if ((cs.is_visible_to_at    === VISIBILITY.VISIBLE) ||
           (cs.is_visible_onscreen === VISIBILITY.VISIBLE)) {

         visible_count++;

         if (de.tab_index >= 0) {
           if (de.is_widget) {
             // only include widgets that can be part of the tab order
             if (de.is_tab_stoppable) {
                tab_count++;
               rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_1', [de.tag_name, de.role]);
             }
           }
           else {
             tab_count++;
             rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_2', [de.tag_name]);
           }
         }
         else {
           if (de.is_widget) {
             // only include widgets that can be part of the tab order
             if (de.is_tab_stoppable) {
               rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_3', [de.tag_name, de.role, de.tab_index]);
             }
           }
           else {
             rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_4', [de.tag_name, de.tab_index]);
           }
         }

       }
       else {

         if (de.is_widget) {
           // only include widgets that can be part of the tab order
           if (de.is_tab_stoppable) {
             rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [de.tag_name, de.role]);
           }
         }
         else {
           rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_2', [de.tag_name]);
         }
       }
     }  // endfor

 //    OpenAjax.a11y.logger.debug(" Visible count: " + visible_count + "  Tab count: " + tab_count);

     if (visible_count > 1) {

       if (tab_count === visible_count) {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', [tab_count]);
       }
       else {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_2', [tab_count, (visible_count-tab_count)]);
       }

     }

   } // end validation function
},

/**
 * @object FOCUS_2
 *
 * @desc Focus style
 */

{ rule_id             : 'FOCUS_2',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.KEYBOARD_SUPPORT,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.4.7',
  wcag_related_ids    : ['2.1.1', '2.1.2',  '2.4.3', '3.2.1'],
  target_resources    : ['Page', 'a', 'applet', 'area', 'button', 'input', 'object', 'select', 'area', 'widgets'],
  primary_property    : 'has_outline',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var page_element = dom_cache.keyboard_focus_cache.page_element;

//     OpenAjax.a11y.logger.debug(" Page Element: " + page_element + "  " + page_element.dom_element);

     var interactive_elements     = dom_cache.keyboard_focus_cache.interactive_elements;
     var interactive_elements_len = interactive_elements.length;

     var visible_interactive_count = 0;

     for (var i = 0; i < interactive_elements_len; i++) {

       var ie = interactive_elements[i];

       var de = ie.dom_element;
       if (!de) de =ie;

       var cs = de.computed_style;

       if (cs.is_visible_onscreen === VISIBILITY.VISIBLE) {

         visible_interactive_count++;

         if (de.is_widget) {
           rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_1', [de.tag_name, de.role]);
         }
         else {
           rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_2', [de.tag_name]);
         }

       }
       else {

         if (de.is_widget) {
           rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [de.tag_name, de.role]);
         }
         else {
           rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_2', [de.tag_name]);
         }

       }
     }  // endfor

//     OpenAjax.a11y.logger.debug(" Visible Interactive Count: " + visible_interactive_count);

     if (visible_interactive_count > 1) {

       if (visible_interactive_count === interactive_elements_len) {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', [interactive_elements_len]);
       }
       else {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_2', [visible_interactive_count, (interactive_elements_len - visible_interactive_count)]);
       }

     }

   } // end validation function

},

/**
 * @object FOCUS_3
 *
 * @desc Target of a link does not go to a page with popup windows
 */

{ rule_id             : 'FOCUS_3',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LINKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.2.1',
  wcag_related_ids    : ['2.1.1', '2.1.2',  '2.4.3', '2.4.7'],
  target_resources    : ['a', 'area', 'select'],
  primary_property    : 'href',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

//     OpenAjax.a11y.logger.debug(" Page Element: " + page_element + "  " + page_element.dom_element);

     var link_elements     = dom_cache.links_cache.link_elements;
     var link_elements_len = link_elements.length;

     var visible_interactive_count = 0;

     for (var i = 0; i < link_elements_len; i++) {

       var le = link_elements[i];

       var de = le.dom_element;
       if (!de) de =le;

       var cs = de.computed_style;

       if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', [de.tag_name]);

       }
       else {
         rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name, de.role]);
       }
     }  // endfor

   } // end validation function
},

/**
 * @object FOCUS_4
 *
 * @desc Select elements with onchange events
 */

{ rule_id             : 'FOCUS_4',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '3.2.2',
  wcag_related_ids    : ['2.1.1', '2.1.2',  '2.4.3', '2.4.7'],
  target_resources    : ['select'],
  primary_property    : 'events.has_change',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

//     OpenAjax.a11y.logger.debug(" Page Element: " + page_element + "  " + page_element.dom_element);

     var control_elements     = dom_cache.controls_cache.control_elements;
     var control_elements_len = control_elements.length;

     for (var i = 0; i < control_elements_len; i++) {

       var ce = control_elements[i];

       var de = ce.dom_element;

       var cs = de.computed_style;

       if ((de.tag_name === 'select') &&
            de.events.has_change) {

         if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
           rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_1', [de.tag_name]);
         }
         else {
           rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [de.tag_name, de.role]);
         }
       }
     }  // endfor

   } // end validation function
},

/**
 * @object FOCUS_5
 *
 * @desc Form include a submit button
 *
 */

{ rule_id             : 'FOCUS_5',
  last_updated        : '2014-11-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '3.2.2',
  wcag_related_ids    : [],
  target_resources    : ['form', 'input[type="submit"]', 'input[type="button"]', 'input[type="image"]', 'button', '[role="button"]'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    function has_submit_button(control) {

      var cce = control.child_cache_elements;
      var cce_len = cce.length;

      var has_submit = false;

      for(var i = 0; i < cce_len; i++) {
        var ce = cce[i];
        var de = ce.dom_element;
        var cs = de.computed_style;

        if(ce.control_type === OpenAjax.a11y.CONTROL_TYPE.SUBMIT) {
          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
            rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_2', []);
            has_submit = true;
          }
          else {
           rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_2', []);                          }
        }

        if (ce.child_cache_elements && ce.child_cache_elements.length) {
          has_submit = has_submit || has_submit_button(ce);
        }

      }

      return has_submit;

    }

    function has_other_button(control, count) {

      var cee = control.child_cache_elements;
      var cee_len = cee.length;

      for(var i = 0; i < cee_len; i++) {
        var ce = cee[i];
        var de = ce.dom_element;
        var cs = de.computed_style;

//        OpenAjax.a11y.logger.debug("Control: " + ce + " de: " + de + " cs: " + cs);

        if (ce.control_type === CONTROL_TYPE.BUTTON_INPUT) {
          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_3', ['button']);
            count += 1;
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_3', ['button']);
          }
        }
        else {
           if (ce.control_type === CONTROL_TYPE.IMAGE) {
             if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
               rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_3', ['image']);
               count += 1;
             }
             else {
               rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_3', ['image']);
             }
           }
           else {
             if (ce.control_type === CONTROL_TYPE.BUTTON_ELEMENT) {
               if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
                 rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_4', []);
                 count += 1;
               }
               else {
                 rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_4', []);
               }
             }
             else {
               if (de.has_role && (de.role === 'button')) {
                 if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
                  rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_5', [de.tag_name]);
                   count += 1;
                 }
                 else {
                  rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_5', [de.tag_name]);
                 }
               }
             }
           }
        }

        if (ce.child_cache_elements && ce.child_cache_elements.length) {
          count += has_other_button(ce, count);
        }

      }

      return count;

    }

    function hasVisibleFormControls(controls) {

      for (var i = 0; i < controls.length; i++) {

        var ce = controls[i];
        if (ce.control_type === CONTROL_TYPE.LABEL) continue;

        var de = ce.dom_element;
        var cs = de.computed_style;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          return true;
        }
        else {
          if (ce.child_cache_elements && ce.child_cache_elements.length) {
            var result = hasVisibleFormControls(ce.child_cache_elements);
            if (result) return true;
          }
        }
      }

      return false;
    }

    var TEST_RESULT  = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY   = OpenAjax.a11y.VISIBILITY;
    var CONTROL_TYPE =  OpenAjax.a11y.CONTROL_TYPE;

    var form_elements   = dom_cache.controls_cache.form_elements;
    var form_elements_len = form_elements.length;
    var fes   = [];

    // Check to see if valid cache reference
    if (form_elements && form_elements_len) {

      // collect all the visible controls
      for (var i = 0; i < form_elements_len; i++) {
        var fe = form_elements[i];
        var de = fe.dom_element;
        var cs = de.computed_style;

        var control_type = fe.control_type;

//        OpenAjax.a11y.logger.debug("Form: " + fe + " controls: " + fe.number_of_controls + " cache elements: " + fe.child_cache_elements);

        if ((control_type === CONTROL_TYPE.FORM) &&
            (fe.number_of_controls > 0) &&
            (hasVisibleFormControls(fe.child_cache_elements))) {

          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

            if (has_submit_button(fe)) {
              rule_result.addResult(TEST_RESULT.PASS, fe, 'ELEMENT_PASS_1', []);
            }
            else {
              var button_count = has_other_button(fe, 0);

              if (button_count === 1) {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, fe, 'ELEMENT_MC_1', []);
              }
              else {
                if (button_count > 1) {
                  rule_result.addResult(TEST_RESULT.MANUAL_CHECK, fe, 'ELEMENT_MC_2', [button_count]);
                }
                else {
                  rule_result.addResult(TEST_RESULT.FAIL, fe, 'ELEMENT_FAIL_1', []);
                }
              }
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, fe, 'ELEMENT_HIDDEN_1', []);
          }
        }
      } // end loop
    }
  } // end validate function
},

/**
 * @object FOCUS_6
 *
 * @desc Checkbox and radio button events cause a change in context
 *
 */

{ rule_id             : 'FOCUS_6',
  last_updated        : '2014-08-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '3.2.2',
  wcag_related_ids    : [],
  target_resources    : ['input[type="submit"]'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT  = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY   = OpenAjax.a11y.VISIBILITY;
    var CONTROL_TYPE =  OpenAjax.a11y.CONTROL_TYPE;

    var control_elements   = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;
    var ces   = [];

    // Check to see if valid cache reference
    if (control_elements && control_elements_len) {

      // collect all the visible controls
      for (var i = 0; i < control_elements_len; i++) {
        var ce = control_elements[i];
        var de = ce.dom_element;
        var cs = de.computed_style;

        var control_type = ce.control_type;

//        OpenAjax.a11y.logger.debug(fe);

        if ((control_type === OpenAjax.a11y.CONTROL_TYPE.CHECKBOX) ||
            (control_type === OpenAjax.a11y.CONTROL_TYPE.RADIO)) {

          if ((de.role === 'checkbox') || (de.role === 'radio')) {
            if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_2', [de.tag_name, de.role]);
            }
            else {
              rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_2', [de.tag_name, de.role]);
            }
          }
          else {
            if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_1', [ce.type]);
            }
            else {
              rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [ce.type]);
            }
          }
        }
      } // end loop
    }
  } // end validate function
}

]);



/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Control Rules                                 */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object CONTROL_1
 *
 * @desc textarea, select and input elements of type text,
 *       password, checkbox, radio and file must have an
 *       accessible label
 *
 */

{ rule_id             : 'CONTROL_1',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '3.3.2',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['input[type="checkbox"]', 'input[type="date"]', 'input[type="file"]', 'input[type="radio"]', 'input[type="number"]', 'input[type="password"]', 'input[type="tel"]' , 'input[type="text"]', 'input[type="url"]', 'select', 'textarea', 'meter', 'progress'],
  primary_property    : 'computed_label',
  resource_properties : ['computed_label_source', 'name_attribute', 'fieldset_element'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

    var tag_name;
    var type;

    var control_elements   = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;

    // Check to see if valid cache reference
    if (control_elements && control_elements_len) {

      for (var i = 0; i < control_elements_len; i++) {
        var ce = control_elements[i];

        var control_type = ce.control_type;

        if (ce.needs_label) {

          if (ce.dom_element.computed_style.is_visible_to_at == OpenAjax.a11y.VISIBILITY.VISIBLE) {

            if (ce.computed_label && ce.computed_label.length) {
              rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', [ce.toString(), ce.computed_label]);
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_1', [ce.toString()]);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [ce.toString()]);
          }
        }
      } // end loop
    }
  } // end validation function
},

/**
 * @object CONTROL_2
 *
 * @desc Every input type image must have an accessible name attribute with content
 */

{ rule_id             : 'CONTROL_2',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '3.3.2',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['input[type="image"]'],
  primary_property    : 'computed_label',
  resource_properties : ['computed_label_source', 'alt', 'aria_label', 'aria_labelledby', 'title'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

    var tag_name;

    var control_elements   = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;

    // Check to see if valid cache reference
    if (control_elements && control_elements_len) {

      for (var i = 0; i < control_elements_len; i++) {
        var ce = control_elements[i];
        var de = ce.dom_element;

        var type = control_elements[i].type;

        if (type === 'image') {

          if (de.computed_style.is_visible_to_at == OpenAjax.a11y.VISIBILITY.VISIBLE) {

            if (ce.computed_label) {
              if (ce.computed_label.length) {
                rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', [ce.computed_label]);
              }
              else {
                rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_2', []);
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_1', []);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', []);
          }
        }
      } // end loop
    }
  } // end validation function
 },

/**
 * @object CONTROL_3
 *
 * @desc Groups of radio buttons should be contained in fieldset/legend or have some other group label
 */
{ rule_id             : 'CONTROL_3',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '3.3.2',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['input[type="radio"]'],
  primary_property    : 'grouping_element',
  resource_properties : [''],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var control_elements   = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;

    // Check to see if valid cache reference
    if (control_elements && control_elements_len) {

      for (var i = 0; i < control_elements_len; i++) {
        var ce = control_elements[i];
        var de = ce.dom_element;
        var cs = de.computed_style;

        var type = control_elements[i].control_type;

        if (type == OpenAjax.a11y.CONTROL_TYPE.RADIO) {

          if (cs.is_visible_to_at == VISIBILITY.VISIBLE) {

            if (ce.grouping_element) {
              var ge = ce.grouping_element;
              var dge = ge.dom_element;

              if (ge.control_type === OpenAjax.a11y.CONTROL_TYPE.FIELDSET) {
                if (ge.legend_element &&
                    ge.legend_element.computed_label &&
                    ge.legend_element.computed_label.length) {
                  rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', [ge.legend_element.computed_label]);
                }
                else {
                  rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_2', []);
                }
              }
              else {
                if (ge.computed_label &&
                    ge.computed_label.length) {
                  rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_2', [dge.tag_name, ce.grouping_element.computed_label]);
                }
                else {
                  rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_3', [dge.tag_name]);
                }
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_1', []);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', []);
          }
        }
      } // end loop
    }
  } // end validate function
},

/**
 * @object CONTROL_4
 *
 * @desc Button elements must have text content and input type button must have a value attribute with content
 */
{ rule_id             : 'CONTROL_4',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '3.3.2',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['button'],
  primary_property    : 'computed_label',
  resource_properties : ['computed_label_source'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT  = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY   = OpenAjax.a11y.VISIBILITY;
    var CONTROL_TYPE = OpenAjax.a11y.CONTROL_TYPE;

    var control_elements     = dom_cache.controls_cache.control_elements;
    var control_elements_len = control_elements.length;

    // Check to see if valid cache reference
    if (control_elements && control_elements_len) {

      for (var i = 0; i < control_elements_len; i++) {
        var ce = control_elements[i];
        var de = ce.dom_element;
        var cs = de.computed_style;

        if (ce.control_type === CONTROL_TYPE.BUTTON_ELEMENT) {

          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

            if (ce.computed_label_for_comparison.length > 0) {
              rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', []);
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_1', []);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', []);
          }

        }
        else {

          if (ce.control_type === CONTROL_TYPE.BUTTON_INPUT) {

            if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

              if (ce.value && (ce.value.length > 0)) {
                rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', []);
              }
              else {
                rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_1', []);
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', []);
            }
          }
        }

      } // end loop
    }

  } // end validate function
},

/**
 * @object CONTROL_5
 *
 * @desc Ids on form controls must be unique
 *
 * @note Do not need to test for invisible elements, since getElementById searches all elements int he DOM
 */
{ rule_id             : 'CONTROL_5',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '4.1.1',
  wcag_related_ids    : ['3.3.2', '1.3.1', '2.4.6'],
  target_resources    : ['input[type="checkbox"]', 'input[type="radio"]', 'input[type="text"]', 'input[type="password"]', 'input[type="file"]', 'select', 'textarea'],
  primary_property    : 'id',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var ID          = OpenAjax.a11y.ID;

    var control_elements      = dom_cache.controls_cache.control_elements;
    var control_elements_len  = control_elements.length;

    // Check to see if valid cache reference
    if (control_elements && control_elements_len) {

      for (var i = 0; i < control_elements_len; i++) {
        var ce = control_elements[i];
        var de = ce.dom_element;
        var cs = de.computed_style;

        switch (de.id_unique) {
        case ID.NOT_UNIQUE:
          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
            rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_1', [de.tag_name, de.id]);
          }
          else {
            rule_result.addResult(TEST_RESULT.FAIL, ce, 'ELEMENT_FAIL_2', [de.tag_name, de.id]);
          }
          break;

        case ID.UNIQUE:
          rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', [de.id]);
          break;

        default:
          break;
        } // end switch

     } // end loop
   }
  } // end validate function
},

/**
 * @object CONTROL_6
 *
 * @desc Label element with a for attribute reference does not reference a form control
 */
{ rule_id             : 'CONTROL_6',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.3.2',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['label'],
  primary_property    : 'for',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

   var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
   var VISIBILITY = OpenAjax.a11y.VISIBILITY;

   var label_elements      = dom_cache.controls_cache.label_elements;
   var label_elements_len  = label_elements.length;

   // Check to see if valid cache reference
   if (label_elements && label_elements_len) {

     for (var i = 0; i < label_elements_len; i++) {
       var le = label_elements[i];
       var de = le.dom_element;
       var cs = de.computed_style;

       if (le.for_id && le.for_id.length) {

         if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
           if (le.unused_label) {
              rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [le.for_id]);
           }
           else {
              if (le.duplicate_label) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', [le.for_id]);
              else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [le.for_id]);
           }
         }
         else {
           rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', []);
         }
      }
     } // end loop
   }
  } // end validate function
},

/**
 * @object CONTROL_7
 *
 * @desc Label or legend element must contain content
 */

{ rule_id             : 'CONTROL_7',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.3.2',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['label', 'legend'],
  primary_property    : 'computed_label',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

   var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
   var VISIBILITY = OpenAjax.a11y.VISIBILITY;

   var label_elements      = dom_cache.controls_cache.label_elements;
   var label_elements_len  = label_elements.length;

   // Check to see if valid cache reference
   if (label_elements && label_elements_len) {

     for (var i = 0; i < label_elements_len; i++) {
       var le = label_elements[i];
       var de = le.dom_element;
       var cs = de.computed_style;

       if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

         if (le.computed_label_for_comparison.length === 0) {
           rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [le.tag_name]);
         }
         else {
           rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [le.tag_name]);
         }
       }
       else {
         rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [le.tag_name]);
       }
     } // end loop
   }
  } // end validate function
},

/**
 * @object CONTROL 8
 *
 * @desc Fieldset must contain exactly one legend element
 */

{ rule_id             : 'CONTROL_8',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '3.3.2',
  wcag_related_ids    : ['1.3.1', '2.4.6', '4.1.1'],
  target_resources    : ['fieldset'],
  primary_property    : 'legend_count',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

   var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
   var VISIBILITY = OpenAjax.a11y.VISIBILITY;

   var grouping_elements      = dom_cache.controls_cache.grouping_elements;
   var grouping_elements_len  = grouping_elements.length;

   // Check to see if valid cache reference
   if (grouping_elements && grouping_elements_len) {

     for (var i = 0; i < grouping_elements_len; i++) {
       var fe = grouping_elements[i];

       if (fe.control_type !== OpenAjax.a11y.CONTROL_TYPE.FIELDSET) continue;

       var de = fe.dom_element;

       if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {

         if (fe.legend_count === 0 || !fe.legend_element ) {
           rule_result.addResult(TEST_RESULT.FAIL, fe, 'ELEMENT_FAIL_1', []);
         }
         else {
           if (fe.legend_count > 1) {
             rule_result.addResult(TEST_RESULT.FAIL, fe, 'ELEMENT_FAIL_2', [(fe.legend_count-1)]);
           }
           else {
             de = fe.legend_element.dom_element;

             if (de.computed_style.is_visible_to_at == VISIBILITY.VISIBLE) {
               rule_result.addResult(TEST_RESULT.PASS, fe, 'ELEMENT_PASS_1', []);
             }
             else {
               rule_result.addResult(TEST_RESULT.FAIL, fe, 'ELEMENT_FAIL_3', []);
             }
           }
         }
       }
       else {
         rule_result.addResult(TEST_RESULT.HIDDEN, fe, 'ELEMENT_HIDDEN_1', []);
       }
     } // end loop
   }

  } // end validate function
},

/**
 * @object CONTROL_9
 *
 * @desc Check form controls labeled using the TITLE attribute for accessible name
 */

{ rule_id             : 'CONTROL_9',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.3.2',
  wcag_related_ids    : ['4.1.1'],
  target_resources    : ['input', 'select', 'textarea'],
  primary_property    : 'title',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

   var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
   var VISIBILITY = OpenAjax.a11y.VISIBILITY;

   var control_elements      = dom_cache.controls_cache.control_elements;
   var control_elements_len  = control_elements.length;

   // Check to see if valid cache reference
   if (control_elements && control_elements_len) {

     for (var i = 0; i < control_elements_len; i++) {
       var ce = control_elements[i];
       var de = ce.dom_element;

       if (ce.computed_label_source === OpenAjax.a11y.SOURCE.TITLE_ATTRIBUTE) {
          if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
           rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ce, 'ELEMENT_MC_1', [de.tag_name]);
         }
         else {
           rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [de.tag_name]);
         }
       }
     } // end loop
   }

  } // end validate function
},

/**
 * @object CONTROL_10
 *
 * @desc Accessible labels must be unique for every textarea,
 *       select and input element of type text, password, radio,
 *       and checkbox on a page
 */

{ rule_id             : 'CONTROL_10',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.4.6',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['input[type="checkbox"]', 'input[type="radio"]', 'input[type="text"]', 'input[type="password"]', 'input[type="file"]', 'select', 'textarea'],
  primary_property    : 'computed_label',
  resource_properties : ['computed_label', 'fieldset_element', 'computed_label_source', 'name_attribute'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

   var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
   var VISIBILITY = OpenAjax.a11y.VISIBILITY;

   var control_elements   = dom_cache.controls_cache.control_elements;
   var control_elements_len = control_elements.length;
   var ces   = [];
   var ces_len = 0;
   var i, j;

   // Check to see if valid cache reference
   if (control_elements && control_elements_len) {

     // collect all the visible controls
     for (i = 0; i < control_elements_len; i++) {
       var ce = control_elements[i];
       var de = ce.dom_element;

       if (ce.needs_label) {

         var control_type = ce.toString();

         if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
           // Only test form controls with labels
           if (ce.computed_label && ce.computed_label.length) {
             ces.push(ce);
           }
         }
         else {
           rule_result.addResult(TEST_RESULT.HIDDEN, ce, 'ELEMENT_HIDDEN_1', [control_type]);
         }
       }
     } // end loop

     // sort labels

     ces = dom_cache.sortArrayOfObjects(ces,'computed_label_for_comparison', true);
     ces = dom_cache.getDuplicateObjects(ces,'computed_label_for_comparison');

     for (i = 0; i < ces.length; i++) {
       ces_len = ces[i].length;

       ce      = ces[i][0];
       de      = ce.dom_element;

//       console.debug("ROLE: " + ce.computed_label_for_comparison + " " + ces_len + " TEST 1: " + (ces_len === 1) + " TEST 2: " + ((ces_len === 2) && ((de.role === 'tab') || (de.role === 'tabpanel'))));

       if ((ces_len === 1) ||
           ((ces_len === 2) && ((de.role === 'tab') || (de.role === 'tabpanel')))) {
         rule_result.addResult(TEST_RESULT.PASS, ce, 'ELEMENT_PASS_1', []);
         if (ces_len === 2) rule_result.addResult(TEST_RESULT.PASS, ces[i][1], 'ELEMENT_PASS_1', []);
       }
       else {
         for (j = 0; j < ces_len; j++) {
           rule_result.addResult(TEST_RESULT.FAIL, ces[i][j], 'ELEMENT_FAIL_1', []);
         }
       }
     }

   }
  } // end validate function
},

/**
 * @object CONTROL_11
 *
 * @desc If there is more than one form on page, input element of type
 *       submit and reset must have unique labels in each form using the value attribute
 *
 */

{ rule_id             : 'CONTROL_11',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.6',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['input[type="submit"]', 'input[type="reset"]'],
  primary_property    : 'computed_label',
  resource_properties : ['value'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

   function get_input_by_type(list, form, type) {

   }

   var TEST_RESULT  = OpenAjax.a11y.TEST_RESULT;
   var VISIBILITY   = OpenAjax.a11y.VISIBILITY;
   var CONTROL_TYPE =  OpenAjax.a11y.CONTROL_TYPE;

   var form_elements   = dom_cache.controls_cache.form_elements;
   var form_elements_len = form_elements.length;
   var fes   = [];

   var input_submit_info = [];
   var input_reset_info  = [];

   // Check to see if valid cache reference
   if (form_elements && form_elements_len) {

     // collect all the visible submit and reset buttons controls
     for (var i = 0; i < form_elements_len; i++) {
       var fe = form_elements[i];
       var de = fe.dom_element;
       var cs = de.computed_style;

       var control_type = fe.control_type;

       if (control_type === OpenAjax.a11y.CONTROL_TYPE.FORM) {

         if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

           get_input_by_type(input_submit_info, fe, 'submit');
           get_input_by_type(input_reset_info, fe, 'reset');

         }
       }
     } // end loop
   }
  } // end validate function

}
]);



//
// OpenAjax Alliance Rules
// Rule group: Styling Rules
//
OpenAjax.a11y.RuleManager.addRulesFromJSON([

  /**
   * @object FRAME_1
   *
   * @desc  Evaluate frame elements for a title attribute
   */

  { rule_id             : 'FRAME_1',
    last_updated        : '2015-07-31',
    rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
    rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
    rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
    wcag_primary_id     : '2.4.1',
    wcag_related_ids    : [],
    target_resources    : ['frame'],
    primary_property    : 'title',
    resource_properties : ['accessible_name'],
    language_dependency : "",
    validate            : function (dom_cache, rule_result) {

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
      var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

      var frame_elements     = dom_cache.frames_cache.frame_elements;
      var frame_elements_len = frame_elements.length;

      // Check to see if valid cache reference
      if (frame_elements && frame_elements_len) {

        for (var i = 0; i < frame_elements_len; i++) {
          var fe = frame_elements[i];
          var de = fe.dom_element;
          var cs = de.computed_style;

          // if no content in frame ignore
          if (fe.src.length === 0) continue;

          if ((cs.is_visible_to_at === VISIBILITY.VISIBLE) &&
              (cs.is_visible_onscreen === VISIBILITY.VISIBLE)){

            if (de.has_title && de.title.length) {
              rule_result.addResult(TEST_RESULT.PASS, fe, 'ELEMENT_PASS_1', [de.title]);
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, fe, 'ELEMENT_FAIL_1', []);
            }

          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, fe, 'ELEMENT_HIDDEN_1', []);
          }
        } // end loop
      }

    } // end validate function
  },

  /**
   * @object FRAME_2
   *
   * @desc  Evaluate iframe elements for an accessible name
   */

  { rule_id             : 'FRAME_2',
    last_updated        : '2015-07-31',
    rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
    rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
    rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
    wcag_primary_id     : '2.4.1',
    wcag_related_ids    : [],
    target_resources    : ['iframe'],
    primary_property    : 'accessible_name',
    resource_properties : ['title', 'aria_label', 'aria_labelledby'],
    language_dependency : "",
    validate            : function (dom_cache, rule_result) {

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
      var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

      var iframe_elements     = dom_cache.frames_cache.iframe_elements;
      var iframe_elements_len = iframe_elements.length;

      // Check to see if valid cache reference
      if (iframe_elements && iframe_elements_len) {

        for (var i = 0; i < iframe_elements_len; i++) {
          var fe = iframe_elements[i];
          var de = fe.dom_element;

          // if no content in frame ignore
          if (fe.src.length === 0) continue;

          if ((fe.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) &&
              (fe.dom_element.computed_style.is_visible_onscreen === VISIBILITY.VISIBLE)){

            if (fe.computed_label.length) {
              rule_result.addResult(TEST_RESULT.PASS, fe, 'ELEMENT_PASS_1', [fe.computed_label]);
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, fe, 'ELEMENT_FAIL_1', []);
            }

          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, fe, 'ELEMENT_HIDDEN_1', []);
          }
        } // end loop
      }

    } // end validate function
  }

]);



/* ---------------------------------------------------------------- */
/* OpenAjax Alliance IMG and AREA element Rules                     */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object IMAGE_1
 *
 * @desc Images must have a source for an accessible name or be identified as decorative
 */

{ rule_id             : 'IMAGE_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.IMAGES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.1.1',
  wcag_related_ids    : [],
  target_resources    : ['img', 'area', '[role="img"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['accessible_name_source', 'alt', 'aria_label', 'aria_labelledby', 'title', 'is_visible_to_at', 'role'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var image_elements   = dom_cache.images_cache.image_elements;
    var image_elements_len = image_elements.length;

    // Check to see if valid cache reference
    if (image_elements && image_elements_len) {

      for (var i = 0; i < image_elements_len; i++) {
        var ie = image_elements[i];
        var de = ie.dom_element;

        if (de.tag_name === 'area') continue;

//        OpenAjax.a11y.logger.debug("Image is visibile to AT: " + de.computed_style.is_visible_to_at);

        if ((de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE ) &&
            (!de.has_role || (de.role !== 'presentation'))){

          if (ie.accessible_name_source !== SOURCE.NONE) {
            if (ie.accessible_name_source === SOURCE.ALT_ATTRIBUTE) {
              if (de.tag_name === "img") rule_result.addResult(TEST_RESULT.PASS, ie, 'ELEMENT_PASS_1', [de.tag_name]);
              else rule_result.addResult(TEST_RESULT.FAIL, ie, 'ELEMENT_FAIL_2', [de.tag_name]);
            } else if (ie.accessible_name_source === SOURCE.ARIA_LABELLEDBY) rule_result.addResult(TEST_RESULT.PASS, ie, 'ELEMENT_PASS_2', [de.tag_name]);
            else if (ie.accessible_name_source === SOURCE.ARIA_LABEL)      rule_result.addResult(TEST_RESULT.PASS, ie, 'ELEMENT_PASS_3', [de.tag_name]);
            else rule_result.addResult(TEST_RESULT.PASS, ie, 'ELEMENT_PASS_4', [de.tag_name]);
          }
          else {
            rule_result.addResult(TEST_RESULT.FAIL, ie, 'ELEMENT_FAIL_1', [de.tag_name]);
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [de.tag_name]);
        }
      } // end loop
    }
  } // end validation function
},

/**
 * @object IMAGE_2
 *
 * @desc Text alternatives accurately describe images
 */
{ rule_id             : 'IMAGE_2',
  last_updated        : '2015-09-11',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.IMAGES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.1.1',
  wcag_related_ids    : [],
  target_resources    : ['img', '[role="img"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'alt', 'title', 'role', 'is_visible_to_at'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;

    var image_elements   = dom_cache.images_cache.image_elements;
    var image_elements_len = image_elements.length;

    // Check to see if valid cache reference
    if (image_elements && image_elements_len) {

      for (var i = 0; i < image_elements_len; i++) {
        var ie = image_elements[i];
        var de = ie.dom_element;
        var cs = de.computed_style;

        if (ie.is_presentation || (ie.accessible_name_length === 0)) continue;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_1', [], ie.toString('short'));
          else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_2', [de.tag_name], ie.toString('short'));
        }
        else {
          if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [], ie.toString('short'));
          else rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_2', [de.tag_name], ie.toString('short'));
        }
      } // end loop
    }
  } // end validation function
},

/**
 * @object IMAGE_3
 *
 * @desc The file name of the image should not be part of the accessible name content (it must have an image file extension)
 */
{ rule_id             : 'IMAGE_3',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.IMAGES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.1.1',
  wcag_related_ids    : [],
  target_resources    : ['img', '[role="img"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['file_name', 'is_visible_to_at'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var image_elements   = dom_cache.images_cache.image_elements;
    var image_elements_len = image_elements.length;

    // Check to see if valid cache reference
    if (image_elements && image_elements_len) {

      for (var i = 0; i < image_elements_len; i++) {
        var ie = image_elements[i];
        var de = ie.dom_element;

        if (ie.accessible_name_source !== SOURCE.NONE && (ie.accessible_name_for_comparison.length > 0)) {

          if ((de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) &&
              (!de.has_role || (de.role !== 'presentation'))){

            // make sure it has a file extension, will assume extension is for an image
            if (ie.file_name.indexOf('.') >= 0) {

              if (ie.accessible_name_for_comparison.indexOf(ie.file_name) >= 0 ) {
                rule_result.addResult(TEST_RESULT.FAIL, ie, 'ELEMENT_FAIL_1', [], ie.toString('short'));
              }
              else {
                rule_result.addResult(TEST_RESULT.PASS, ie, 'ELEMENT_PASS_1', [], ie.toString('short'));
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.PASS, ie, 'ELEMENT_PASS_1', [], ie.toString('short'));
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [de.tag_name], ie.toString('short'));
          }
        }
      } // end loop
    }
  } // end validation function
 },

/**
 * @object IMAGE_4_EN (English)
 *
 * @desc If the accessible name contains content, it should be less than 100 characters long, longer descriptions should use long description techniques (English only)
 */
{ rule_id             : 'IMAGE_4_EN',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.IMAGES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.1.1',
  wcag_related_ids    : [],
  target_resources    : ['img', 'area'],
  primary_property    : 'accessible_name_length',
  resource_properties : ['accessible_name', 'is_visible_to_at'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var MAX_ACCESSIBLE_NAME_LENGTH = 100;

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var image_elements   = dom_cache.images_cache.image_elements;
    var image_elements_len = image_elements.length;

    // Check to see if valid cache reference
    if (image_elements && image_elements_len) {

      for (var i = 0; i < image_elements_len; i++) {
        var ie = image_elements[i];
        var de = ie.dom_element;

        if (ie.accessible_name_source !== SOURCE.NONE && (ie.accessible_name_for_comparison.length > 0)) {

          if ((de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) &&
              (!de.has_role || (de.role !== 'presentation'))){

            if (ie.accessible_name_for_comparison.length > MAX_ACCESSIBLE_NAME_LENGTH) {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_1', [ie.accessible_name_for_comparison.length], ie.toString('short'));
            }
            else {
              rule_result.addResult(TEST_RESULT.PASS, ie, 'ELEMENT_PASS_1', [ie.accessible_name_for_comparison.length], ie.toString('short'));
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [de.tag_name], ie.toString('short'));
          }
        }
      } // end loop
    }
  } // end validation function
},

/**
 * @object IMAGE_5
 *
 * @desc Verify the image is decorative
 */
{ rule_id             : 'IMAGE_5',
  last_updated        : '2015-09-11',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.IMAGES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.1.1',
  wcag_related_ids    : [],
  target_resources    : ['img', '[role="img"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'alt', 'role', 'is_visible_to_at'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;

    var image_elements   = dom_cache.images_cache.image_elements;
    var image_elements_len = image_elements.length;

    // Check to see if valid cache reference
    if (image_elements && image_elements_len) {

      for (var i = 0; i < image_elements_len; i++) {
        var ie = image_elements[i];
        var de = ie.dom_element;
        var cs = de.computed_style;

        if (ie.accessible_name_source !== OpenAjax.a11y.SOURCE.NONE || ie.is_presentation) {
          if (ie.accessible_name_for_comparison.length === 0 || ie.is_presentation) {
            if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
              if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_1', []);
              else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_2', [de.tag_name]);
            }
            else {
              if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', []);
              else rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_2', [de.tag_name]);
            }
          }
        }
      } // end loop
    }
  } // end validation function
},

/**
 * @object IMAGE_6
 *
 * @desc For complex images, charts or graphs provide long description
 */
{ rule_id             : 'IMAGE_6',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.IMAGES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.1.1',
  wcag_related_ids    : [],
  target_resources    : ['img', '[role="img"]'],
  primary_property    : 'accessible_description',
  resource_properties : ['tag_name', 'longdesc', 'aria_describedby', 'title', 'calculated_aria_description', 'undefined_aria_describedby_ids', 'is_visible_to_at'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    function isSimilar(alt, title) {

      if (typeof alt   !== 'string') return false;
      if (typeof title !== 'string') return false;

      alt   = OpenAjax.a11y.util.normalizeSpace(alt.toLowerCase());
      title = OpenAjax.a11y.util.normalizeSpace(title.toLowerCase());

      if (alt === title) return true;

      if ((alt.length >= title.length) &&
          (alt.indexOf(title) >= 0)) return true;

      return false;
    }

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;

    var image_elements   = dom_cache.images_cache.image_elements;
    var image_elements_len = image_elements.length;

    // Check to see if valid cache reference
    if (image_elements && image_elements_len) {

      for (var i = 0; i < image_elements_len; i++) {
        var ie = image_elements[i];
        var de = ie.dom_element;
        var cs = de.computed_style;

        if (ie.is_presentation || (ie.accessible_name_length === 0) || ie.accessible_name_source === OpenAjax.a11y.SOURCE.NONE) continue;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if (de.has_aria_describedby) {
            if (de.undefined_aria_describedby_ids && de.undefined_aria_describedby_ids.length) {
              rule_result.addResult(TEST_RESULT.FAIL, ie, 'ELEMENT_FAIL_1', [de.undefined_aria_describedby_ids], ie.toString('long'));
            }
            else {
              if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_1', [de.aria_describedby], ie.toString('long'));
              else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_2', [de.tag_name, de.aria_describedby], ie.toString('long'));
            }
          } else if (de.has_title && (ie.accessible_name_source !== OpenAjax.a11y.SOURCE.TITLE)) {
              if (de.tag_name === 'img') {
                if (isSimilar(de.alt, de.title)) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_3A', [], ie.toString('long'));
                else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_3', [de.title], ie.toString('long'));
              } else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_4', [de.tag_name, de.title], ie.toString('long'));
            }
            else if (ie.has_longdesc) {
              if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_5', [ie.longdesc], ie.toString('long'));
              else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_6', [de.tag_name. ie.longdesc], ie.toString('long'));
            }
          else {
            if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_7', [], ie.toString('long'));
            else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_8', [de.tag_name], ie.toString('long'));
          }
        }
        else {
          if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [], ie.toString('long'));
          else rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_2', [de.tag_name], ie.toString('long'));
        }
      } // end loop
    }
  } // end validation function
},

/**
 * @object IMAGE_7
 *
 * @desc MathML for mathematical expressions
 */
{ rule_id             : 'IMAGE_7',
  last_updated        : '2015-09-15',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.IMAGES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.1.1',
  wcag_related_ids    : [],
  target_resources    : ['img', '[role="img"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'alt', 'role', 'is_visible_to_at'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;

    var image_elements   = dom_cache.images_cache.image_elements;
    var image_elements_len = image_elements.length;

    // Check to see if valid cache reference
    if (image_elements && image_elements_len) {

      for (var i = 0; i < image_elements_len; i++) {
        var ie = image_elements[i];
        var de = ie.dom_element;
        var cs = de.computed_style;

        if (ie.is_presentation || (ie.accessible_name_length === 0)) continue;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_1', [], ie.toString('short'));
          else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_2', [de.tag_name], ie.toString('short'));
        }
        else {
          if (de.tag_name === 'img') rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [], ie.toString('short'));
          else rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_2', [de.tag_name], ie.toString('short'));
        }
      } // end loop
    }
  } // end validation function
}]);

/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Heading and Landmark Rules                    */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object HEADING_1
 *
 * @desc Page contains at least one H1 element and each H1 element has content
 */
{ rule_id             : 'HEADING_1',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.HEADINGS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.4.1',
  wcag_related_ids    : ['1.3.1', '2.4.2', '2.4.6', '2.4.10'],
  target_resources    : ['Page', 'h1'],
  primary_property    : 'name',
  resource_properties : ['tag_name', 'name_length'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
      var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

      var h1_elements     = dom_cache.headings_landmarks_cache.h1_elements;
      var h1_elements_len = h1_elements.length;

      var page_element = dom_cache.headings_landmarks_cache.page_element;

      var h1_count = 0;

      if (h1_elements && h1_elements_len) {

        for (var i = 0; i < h1_elements_len; i++ ) {
          var he = h1_elements[i];

          if (he.dom_element.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
            rule_result.addResult(TEST_RESULT.HIDDEN, he, 'ELEMENT_HIDDEN_1', []);
          }
          else {
            if (he.name && he.name.length) {
              rule_result.addResult(TEST_RESULT.PASS, he, 'ELEMENT_PASS_1', []);
              h1_count++;
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_1', []);
            }
          }
        }
      }

     if (page_element) {
       // Test if no h1s
       if (h1_count === 0) rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_1', []);
       else rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', []);
     }
  } // end validate function
},

/**
 * @object HEADING_2
 *
 * @desc If there are main and/or banner landmarks and H1 elements,
 *       H1 elements should be children of main or banner landmarks
 *
 */
{ rule_id             : 'HEADING_2',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.HEADINGS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.4.6',
  wcag_related_ids    : ['1.3.1', '2.4.1', '2.4.2', '2.4.10'],
  target_resources    : ['h1'],
  primary_property    : 'parent_landmark',
  resource_properties : ['tag_name', 'name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    function checkForAnscetorRole(he, landmark) {
      var pl = he.dom_element.parent_landmark;

      while (pl) {
         if (pl.landmark === landmark) return true;
         pl = pl.dom_element.parent_landmark;
      }

      return false;
    }

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var h1_elements     = dom_cache.headings_landmarks_cache.h1_elements;
    var h1_elements_len = h1_elements.length;

    var main_elements     = dom_cache.headings_landmarks_cache.main_elements;
    var main_elements_len = main_elements.length;

    if (main_elements && h1_elements && main_elements_len && h1_elements_len) {

      for (var i = 0; i < h1_elements_len; i++) {
        var he = h1_elements[i];
        var de = he.dom_element;
        var cs = de.computed_style;

        if (cs.is_visible_to_at === VISIBILITY.HIDDEN) {
          rule_result.addResult(TEST_RESULT.HIDDEN, he, 'ELEMENT_HIDDEN_1', []);
        }
        else {
          if (checkForAnscetorRole(he, 'main')) {
            rule_result.addResult(TEST_RESULT.PASS, he, 'ELEMENT_PASS_1', []);
          }
          else {
            if (checkForAnscetorRole(he, 'banner')) {
              rule_result.addResult(TEST_RESULT.PASS, he, 'ELEMENT_PASS_2', []);
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_1', []);
            }
          }
        }

      }
    }
  } // end validate function
},

/**
 * @object HEADING_3
 *
 * @desc Sibling headings of the same level that share the same parent heading should be unique
 *       This rule applies only when there are no main landmarks on the page and at least one
 *       sibling heading
 *
 */
{ rule_id             : 'HEADING_3',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.HEADINGS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.6',
  wcag_related_ids    : ['1.3.1', '2.4.10'],
  target_resources    : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  primary_property    : 'name',
  resource_properties : ['tag_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    function getSiblingHeadings(index, heading_element) {

      var list = [];
      var flag = true;

      tested_list.push(heading_element);

      for (var i = (index+1); i < heading_elements_len; i++) {

        var he = heading_elements[i];

        if (he.dom_element.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
          tested_list.push(he);
          continue;
        }

        if (heading_element.level > he.level) return list;

        if (heading_element.level === he.level) {
          if (flag) list.push(heading_element);
          flag = false;

          list.push(he);
          tested_list.push(he);
        }

      }

      if (list.length > 1) return list;
      else return[];

    }

    function notInTestedList(he) {

      for (var i = 0; i < tested_list.length; i++) {
        if (tested_list[i] === he) return false;
      }

      return true;
    }

    function notInDoneList(he) {

      for (var i = 0; i < done_list.length; i++) {
        if (done_list[i] === he) return false;
      }

      return true;
    }

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var heading_elements     = dom_cache.headings_landmarks_cache.heading_elements;
    var heading_elements_len = heading_elements.length;

    var main_elements     = dom_cache.headings_landmarks_cache.main_elements;
    var main_elements_len = main_elements.length;

    var tested_list = [];
    var done_list   = [];
    var i, j, k;
    var sibling_headings = [];
    var sibling_headings_len = 0;

//    if (main_elements_len === 0 && heading_elements_len > 1) {
    if (heading_elements_len > 1) {

      for (i = 0; i < (heading_elements_len-1); i++) {

        var he = heading_elements[i];

        if (notInTestedList(he)) sibling_headings = getSiblingHeadings(i, he);

        sibling_headings_len = sibling_headings.length;

        if (sibling_headings_len > 1) {

          for (j = 0; j < (sibling_headings_len-1); j++) {

            var sh1 = sibling_headings[j];
            var first_flag = true;

            if (notInDoneList(sh1) && sh1.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {

              for (k = j+1; k < sibling_headings_len; k++) {
                var sh2 = sibling_headings[k];

                if (sh1.name_for_comparison === sh2.name_for_comparison) {
                  if (first_flag) {
                    rule_result.addResult(TEST_RESULT.FAIL, sh1, 'ELEMENT_FAIL_1', [sh1.dom_element.tag_name]);
                    done_list.push(sh1);
                  }
                  rule_result.addResult(TEST_RESULT.FAIL, sh2, 'ELEMENT_FAIL_1', [sh2.dom_element.tag_name]);
                  done_list.push(sh2);
                  first_flag = false;
                }
              }
            }
          }

          for (j = 0; j < sibling_headings_len; j++) {
            var sh = sibling_headings[j];
            if (notInDoneList(sh)) {
              if (sh.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
                rule_result.addResult(TEST_RESULT.PASS, sh, 'ELEMENT_PASS_1', [sh.dom_element.tag_name]);
              }
              done_list.push(sh);
            }
          }
        }
      }
    }
  } // end validate function
},

/**
 * @object HEADING_5
 *
 * @desc Headings must be properly nested
 *
 */
{ rule_id             : 'HEADING_5',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.HEADINGS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6', '2.4.10'],
  target_resources    : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  primary_property    : 'level',
  resource_properties : ['tag_name', 'name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var heading_elements     = dom_cache.headings_landmarks_cache.heading_elements;
    var heading_elements_len = heading_elements.length;

    for (var i = 0; i < heading_elements_len; i++) {

      var he = heading_elements[i];
      var tag_name = he.dom_element.tag_name;

      if (he.is_visible) {
        if (he.has_content) {
          if ((he.nesting_parent_heading === he.last_parent_heading)) {
            if (!he.nesting_parent_heading ||
                (he.nesting_parent_heading &&
                he.nesting_parent_heading.global_properly_nested)) {
              rule_result.addResult(TEST_RESULT.PASS, he, 'ELEMENT_PASS_1', [tag_name]);
              he.global_properly_nested = true;
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_1', [tag_name]);
              he.global_properly_nested = false;
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_1', [tag_name]);
            he.global_properly_nested = false;
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, he, 'ELEMENT_HIDDEN_2', [tag_name]);
        }
      }
      else {
        rule_result.addResult(TEST_RESULT.HIDDEN, he, 'ELEMENT_HIDDEN_1', [tag_name]);
      }
    }

//    var page_element = dom_cache.headings_landmarks_cache.page_element;
//
//      if (heading_fail === 0) rule_result.addResult(TEST_RESULT.PASS, page_element, 'ELEMENT_PASS_2', []);
//      else if (heading_fail === 1) rule_result.addResult(TEST_RESULT.FAIL, page_element, 'ELEMENT_FAIL_3', []);
//      else rule_result.addResult(TEST_RESULT.FAIL, page_element, 'ELEMENT_FAIL_4', [heading_fail]);
  } // end validate function
},

/**
 * @object HEADING_6
 *
 * @desc Headings should not consist only of image content
 *
 */
{ rule_id             : 'HEADING_6',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.HEADINGS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6', '2.4.10'],
  target_resources    : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  primary_property    : 'text_only_from_image',
  resource_properties : ['tag_name', 'name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var heading_elements     = dom_cache.headings_landmarks_cache.heading_elements;
    var heading_elements_len = heading_elements.length;

    for (var i = 0; i < heading_elements_len; i++ ) {
      var  he = heading_elements[i];
      var de = he.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.HIDDEN) {
        rule_result.addResult(TEST_RESULT.HIDDEN, he, 'ELEMENT_HIDDEN_1', [de.tag_name]);
      }
      else {
        if (he.name.length) {
          if (he.text_only_from_image) rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.PASS, he, 'ELEMENT_PASS_1', [de.tag_name]);
        }
        else {
          rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_2', [de.tag_name]);
        }
      }
    }
  } // end validate function
},

/**
 * @object HEADING_7
 *
 * @desc First heading in contentinfo, complementary, form, navigation and search landmark must be an h2, except main landmark h1
 */
{ rule_id             : 'HEADING_7',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.HEADINGS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['h2', '[role="banner"]', '[role="contentinfo"]', '[role="complementary"]', '[role="form"]', '[role="navigation"]', '[role="search"]'],
  primary_property    : 'parent_landmark',
  resource_properties : ['tag_name', 'name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var cs = le.dom_element.computed_style;

      if ((le.landmark === 'contentinfo') ||
          (le.landmark === 'complementary') ||
          (le.landmark === 'form') ||
          (le.landmark === 'navigation') ||
          (le.landmark === 'search')) {

        if (cs.is_visible_to_at) {

          var heading_elements = le.getHeadings();
          var heading_elements_len = heading_elements.length;

          if (heading_elements.length) {
            var he = heading_elements[0];
            if (he.level === 2) {
//              rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [le.landmark]);
              rule_result.addResult(TEST_RESULT.PASS, he, 'ELEMENT_PASS_1', [le.landmark]);
            }
            else {
//              rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [le.landmark, he.level]);
              rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_1', [le.landmark, he.level]);
            }
          }
        }
      }
    }
  } // end validate function
},

/**
 * @object HEADING_8
 *
 * @desc Headings should be properly nested in a landmark
 */
{ rule_id             : 'HEADING_8',
  last_updated        : '2014-11-25',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.HEADINGS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  primary_property    : 'parent_landmark',
  resource_properties : ['tag_name', 'name' ],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var cs = le.dom_element.computed_style;

      if (cs.is_visible_to_at) {

        var heading_elements = le.getHeadings();
        var heading_elements_len = heading_elements.length;

        for (var j = 0; j < heading_elements_len; j++) {

          var he = heading_elements[j];
          var tag_name = he.dom_element.tag_name;

          if (he.is_visible) {

//            OpenAjax.a11y.logger.debug(" Heading: " + he + " (" + le + ")");
//            OpenAjax.a11y.logger.debug("  LPH: " + he.landmark_parent_heading + "  LLPH: " + he.last_landmark_parent_heading);
//            if (he.landmark_parent_heading) OpenAjax.a11y.logger.debug("  LPH nested: " + he.landmark_parent_heading.landmark_properly_nested );

            if (he.has_content) {

              if (he.landmark_parent_heading === he.last_landmark_parent_heading) {

                if (!he.last_landmark_parent_heading ||
                    (he.landmark_parent_heading &&
                     he.landmark_parent_heading.landmark_properly_nested)) {
                  rule_result.addResult(TEST_RESULT.PASS, he, 'ELEMENT_PASS_1', [tag_name, le.toString()]);
                  he.landmark_properly_nested = true;
                }
                else {
                  rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_1', [tag_name, le.toString()]);
                  he.landmark_properly_nested = false;
                }
              }
              else {
                rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_1', [tag_name, le.toString()]);
                he.landmark_properly_nested = false;
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, he, 'ELEMENT_FAIL_2', [tag_name, le.toString()]);
              he.landmark_properly_nested = false;
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, he, 'ELEMENT_HIDDEN_1', [tag_name, le.toString()]);
          }
        }
      }
      else {
        rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', [le.toString()]);
      }
    }
  } // end validate function
}

]);



/**
 * Copyright 2011-2018  OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Media Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

{ rule_id             : 'HTML_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '4.1.1',
  wcag_related_ids    : [],
  target_resources    : ['b', 'i'],
  primary_property    : 'tag_name',
  resource_properties : [],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];

      if (de.tag_name === 'b') {
        if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE ) {
           rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.tag_name, de.lang]);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name, de.lang]);
        }
      }
      else {
        if (de.tag_name === 'i') {
          if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE ) {
             rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_2', [de.tag_name, de.lang]);
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_2', [de.tag_name, de.lang]);
          }
        }
      }
    }

  } // end validate function
},

/**
 * @object HTML_2
 *
 * @desc Change marquee elements to use accessible techniques
 */

{ rule_id             : 'HTML_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.3.1',
  wcag_related_ids    : ['2.2.2', '4.1.1'],
  target_resources    : ['marquee'],
  primary_property    : 'tag_name',
  resource_properties : [],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];

      if (de.tag_name === 'marquee') {
        if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE ) {
           rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.tag_name, de.lang]);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name, de.lang]);
        }
      }
    }

  } // end validate function
}
]);
/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Control Rules                                 */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object KEYBOARD_1
 *
 * @desc Widget elements on non-interactive elements or that override the default role of an interactive element
 *       need keyboard event handlers on the widget element or a parent element of the widget
 */

{ rule_id             : 'KEYBOARD_1',
  last_updated        : '2017-02-08',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.KEYBOARD_SUPPORT,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '2.1.1',
  wcag_related_ids    : ['4.1.2'],
  target_resources    : ['widgets'],
  primary_property    : 'role',
  resource_properties : ['tab_index', 'is_owned', 'has_key_down', 'has_key_press', 'has_key_up', 'ancestor_has_key_down', 'ancestor_has_key_press', 'ancestor_has_key_up'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    function checkForKeyboardOnRequiredChildren(widget) {

      function checkChildren(children) {

        if (!children || !children.length) return false;

        var children_len = children.length;

        for (var i = 0; (i < children_len); i++) {

          var we = children[i];
          var de = we.dom_element;

          kbd_events = getEventsOnElementOrAncestors(de);

          if (kbd_events.length) return kbd_events;

//           OpenAjax.a11y.logger.debug("[checkForKeyboardOnRequiredChildren] " + widget + ": " + we + " ("+ flag + ")");

          if (de.role_info && de.role_info.reqChildren && de.role_info.reqChildren.length) {
            kbd_events = checkChildren(we.child_cache_elements);
            if (kbd_events.length) return kbd_events;
          }
        }
        return "";
      }

      return checkChildren(widget.child_cache_elements);
    }

    function getEventsOnElement(de) {

      var kbd_events = "";

      if (de.events.has_key_down)  kbd_events = "keydown ";
      if (de.events.has_key_press) kbd_events += "keypress ";
      if (de.events.has_key_up)    kbd_events += "keyup ";

      return kbd_events.trim();
    }

    function getEventsOnElementAncestors(de) {

      var kbd_events = "";

      if (de.events.ancestor_has_key_down)  kbd_events = "keydown ";
      if (de.events.ancestor_has_key_press) kbd_events += "keypress ";
      if (de.events.ancestor_has_key_up)    kbd_events += "keyup ";

      return kbd_events.trim();
    }

    function getEventsOnElementOrAncestors(de) {

      var kbd_events = "";

      if (de.events.has_key_down  || de.events.ancestor_has_key_down)  kbd_events = "keydown ";
      if (de.events.has_key_press || de.events.ancestor_has_key_press) kbd_events += "keypress ";
      if (de.events.has_key_up    || de.events.ancestor_has_key_up)    kbd_events += "keyup ";

      return kbd_events.trim();
    }

    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

    var widget_elements     = dom_cache.controls_cache.widget_elements;
    var widget_elements_len = widget_elements.length;

    if (widget_elements && widget_elements) {

      for (var i = 0; i < widget_elements_len; i++) {
        var we = widget_elements[i];
        var de = we.dom_element;
        var style = de.computed_style;

        var kbd_events = "";

//         OpenAjax.a11y.logger.debug("  KEYBOARD RULE 1: " + de.role + " ("+ we.toString() + ")");

        if (de.role_info.roleType === 'widget') {

          if (style.is_visible_to_at === VISIBILITY.VISIBLE) {

            kbd_events = getEventsOnElement(de);

            if (kbd_events.length) {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_1', [kbd_events, de.role]);
            }
            else {

              kbd_events = getEventsOnElementAncestors(de);

              if (kbd_events.length) {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_2', [kbd_events, de.role]);
              }
              else {
                if (we.parent_widget && we.parent_widget.dom_element) {
                  kbd_events = getEventsOnElementOrAncestors(we.parent_widget.dom_element);
                  if (kbd_events.length) {
                    rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_3', [kbd_events, we.parent_widget.dom_element.toString(), de.role]);
                    continue;
                  }
                }

                kbd_events = checkForKeyboardOnRequiredChildren(we);

                if (kbd_events.length) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_4', [kbd_events, de.role]);
                else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_5', [de.role]);

              }
            }
          }
          else {
             rule_result.addResult(TEST_RESULT.HIDDEN, we, 'ELEMENT_HIDDEN_1', [we.toString()]);
          }
        }
      } // end loop
    }
  } // end validation function

},
/**
 * @object KEYBOARD_2
 *
 * @desc All operations available through the keyboard
 */

{ rule_id             : 'KEYBOARD_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.KEYBOARD_SUPPORT,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.1.1',
  wcag_related_ids    : ['2.1.2', '2.4.3',  '2.4.7', '3.2.1'],
  target_resources    : ['Page', 'applet', 'object', 'widgets'],
  primary_property    : 'tab_index',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var page_element = dom_cache.keyboard_focus_cache.page_element;

//     OpenAjax.a11y.logger.debug(" Page Element: " + page_element + "  " + page_element.dom_element);

     var interactive_elements      = dom_cache.controls_cache.interactive_elements;
     var interactive_elements_len  = interactive_elements.length;

     var interactive_count = 0;

     for (var i = 0; i < interactive_elements_len; i++) {

//       OpenAjax.a11y.logger.debug(" Interactive element: " + interactive_elements[i] + " (" + i + ")");

       var ie =interactive_elements[i];
       var de = ie.dom_element;
       var cs = de.computed_style;
       var tab_index = parseInt(de.tab_index,10);

       if ((cs.is_visible_to_at    === VISIBILITY.VISIBLE) ||
           (cs.is_visible_onscreen === VISIBILITY.VISIBLE)) {

         if (de.hasEvents() || de.has_tabindex || ie.is_embedded_app) {
           interactive_count++;
           if (de.hasEvents()) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_1', [de.tag_name]);
           else if (de.has_tabindex) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_2', [de.tab_index, de.tag_name]);
           else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ie, 'ELEMENT_MC_3', [de.tag_name]);
         }
         else {
           rule_result.addResult(TEST_RESULT.PASS, ie, 'ELEMENT_PASS_1', [de.tag_name]);
         }
       }
       else {
         rule_result.addResult(TEST_RESULT.HIDDEN, ie, 'ELEMENT_HIDDEN_1', [de.tag_name]);
       }
     }  // endfor

//     OpenAjax.a11y.logger.debug(" Interactive count: " + interactive_count + " (" + interactive_elements_len + ")");

     if (interactive_count > 1) {
       if (interactive_count === 1) {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
       }
       else {
         if (interactive_count >1) {
           rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_2', [interactive_count]);
         }
         else {
           if (interactive_elements_len > 0) {
             if (interactive_elements_len === 1) {
               rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', []);
             }
             else {
               rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_2', [interactive_elements_len]);
             }
           }
         }
       }
     }

   } // end validation function
},

/**
 * @object KEYBOARD_3
 *
 * @desc No keyboard trap
 */

{ rule_id             : 'KEYBOARD_3',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.KEYBOARD_SUPPORT,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.1.2',
  wcag_related_ids    : ['2.1.1', '2.4.3',  '2.4.7', '3.2.1'],
  target_resources    : ['object', 'applet'],
  primary_property    : 'tab_index',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

//     OpenAjax.a11y.logger.debug(" Page Element: " + page_element + "  " + page_element.dom_element);

     var media_elements      = dom_cache.media_cache.media_elements;
     var media_elements_len  = media_elements.length;

     for (var i = 0; i < media_elements_len; i++) {

       var me = media_elements[i];

       var de = me.dom_element;
       if (!de) de =me;

       var cs = de.computed_style;

       if ((cs.is_visible_to_at    === VISIBILITY.VISIBLE) ||
           (cs.is_visible_onscreen === VISIBILITY.VISIBLE)) {
         rule_result.addResult(TEST_RESULT.MANUAL_CHECK, me, 'ELEMENT_MC_1', [me.tag_name]);
       }
       else {
         rule_result.addResult(TEST_RESULT.HIDDEN, me, 'ELEMENT_HIDDEN_1', [me.tag_name]);
       }
     }  // endfor

   } // end validation function
}

]);



/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Heading and Landmark Rules                    */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object LANDMARK_1
 *
 * @desc Each page should have at least one main landmark
 *
 */
{ rule_id             : 'LANDMARK_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.1',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['main', '[role="main"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'role'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var main_elements     = dom_cache.headings_landmarks_cache.main_elements;
    var main_elements_len = main_elements.length;

    var main_count = 0;

    for (var i = 0; i < main_elements_len; i++ ) {
      var me = main_elements[i];
      var de = me.dom_element;

      if (me.dom_element.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
        if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, me, 'ELEMENT_HIDDEN_1', [de.tag_name]);
        else rule_result.addResult(TEST_RESULT.HIDDEN, me, 'ELEMENT_HIDDEN_2', []);
      }
      else {
        if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, me, 'ELEMENT_PASS_1', [de.tag_name]);
        else rule_result.addResult(TEST_RESULT.PASS, me, 'ELEMENT_PASS_2', []);
        main_count++;
      }
    }

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    if (page_element) {
      // Test if no h1s
      if (main_count === 0) rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_1', []);
      else if (main_count === 1) rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', []);
      else rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_2', [main_count]);
    }

  } // end validate function
},

/**
 * @object LANDMARK_2
 *
 * @desc All rendered content should be contained in a landmark
 */
{ rule_id             : 'LANDMARK_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['Page', 'all'],
  primary_property    : 'parent_landmark',
  resource_properties : ['tag_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var elements_with_content    = dom_cache.headings_landmarks_cache.elements_with_content;
    var elements_with_content_len = elements_with_content.length;

    var pass_count   = 0;
    var fail_count   = 0;
    var mc_count     = 0;

    var tag_name = "";

    for (var i = 0; i < elements_with_content_len; i++ ) {
      var de =elements_with_content[i];

      if (de.tag_name) tag_name = de.tag_name;
      else tag_name = de.parent_element.tag_name;

//      OpenAjax.a11y.logger.debug("  Content: " + de.toString()  +  " " + de.may_have_renderable_content);

      if (de.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
        rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [tag_name]);
      }
      else {
        if (de.parent_landmark) {
          rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [tag_name, de.parent_landmark.landmark]);
          pass_count++;
        }
        else {
          if (de.may_have_renderable_content) {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', [tag_name]);
            mc_count++;
          }
          else {
            rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [tag_name]);
            fail_count++;
          }
        }
      }
    }

  } // end validate function
},

/**
 * @object LANDMARK_3
 *
 * @desc Each page within a website should have at least one navigation landmark
 *
 */
{ rule_id             : 'LANDMARK_3',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.WEBSITE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.1',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['nav', '[role="navigation"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'role'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var container_elements     = dom_cache.lists_cache.container_elements;
    var container_elements_len = container_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var i, ci, le, de, cs, li;

    var navigation_count = 0;

    for (i = 0; i < landmark_elements_len; i++ ) {
      le = landmark_elements[i];
      de = le.dom_element;
      cs = de.computed_style;

      var tag_name = le.dom_element.tag_name;

      if (le.landmark === 'navigation') {
        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          navigation_count++;
          if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
        }
        else {
         rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [tag_name]);
        }
      }
    }

    if (page_element) {
      // Test if no navigation landmarks
      if (navigation_count === 0) {

        var list_of_links_count = 0;

        var MINIMUM_LINKS = 4;

        for (i = 0; i < container_elements_len; i++) {
          ci = container_elements[i];
          de = ci.dom_element;
          cs = de.computed_style;

          var li_count       = ci.getListItemCount();
          var one_link_count = ci.getListItemCountOneLink();
          var sublist_count  = ci.getSublistCount();

          if (li_count <= (1 + one_link_count + sublist_count)) {
            if (!ci.parent_landmark && (one_link_count > MINIMUM_LINKS)) {
              list_of_links_count += 1;
              rule_result.addResult(TEST_RESULT.FAIL, ci, 'ELEMENT_FAIL_1', [de.tag_name, one_link_count]);
            }
          }
        }

        // Are there any list of links on the page
        if (list_of_links_count > 0) {
          rule_result.addResult(TEST_RESULT.FAIL, page_element, 'WEBSITE_FAIL_1', []);
        }
      }
      else {
        if (navigation_count === 1) rule_result.addResult(TEST_RESULT.PASS, page_element, 'WEBSITE_PASS_1', []);
        else rule_result.addResult(TEST_RESULT.PASS, page_element, 'WEBSITE_PASS_2', [navigation_count]);
      }
    }

  } // end validate function
},

/**
 * @object LANDMARK_4
 *
 * @desc Each page may have one banner landmark
 *
 */

{ rule_id             : 'LANDMARK_4',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.WEBSITE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.1',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['header', '[role="banner"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'role'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var landmark_count = 0;
    var les = [];

    var le, de, cs, tag_name;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      le = landmark_elements[i];
      de = le.dom_element;
      cs = de.computed_style;
      tag_name = de.tag_name;

      if (le.landmark === 'banner') {
        if (cs.is_visible_to_at === VISIBILITY.HIDDEN) {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
        else {
          landmark_count++;
          les.push(le);
        }
      }
    }

    if (page_element) {
      // Test if no banner landmarks
      if (landmark_count === 0) {
        rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'WEBSITE_MC_1', []);
      }
      else {
        if (landmark_count === 1) {
          rule_result.addResult(TEST_RESULT.PASS, page_element, 'WEBSITE_PASS_1', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.PASS, page_element, 'WEBSITE_PASS_2', [landmark_count]);
        }
        for (i = 0; i < les.length; i++) {
          le = les[i];
          de = le.dom_element;
          if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
        }
      }
    }

  } // end validate function
},

/**
 * @object LANDMARK_5
 *
 * @desc Each page may have only one banner landmark
 *
 */

{ rule_id             : 'LANDMARK_5',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.1',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['header', '[role="banner"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'role', 'accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var landmark_count = 0;
    var les = [];

    var le, de, cs, tag_name;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      le = landmark_elements[i];
      de = le.dom_element;
      cs = de.computed_style;
      tag_name = de.tag_name;

      if (le.landmark === 'banner') {
        if (cs.is_visible_to_at === VISIBILITY.HIDDEN) {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
        else {
          if (!de.body_element) {
            landmark_count++;
            les.push(le);
          }
        }
      }
    }

    if (page_element) {
      if (landmark_count > 1) {
        rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_1', [landmark_count]);
        for (i = 0; i < les.length; i++) {
          le = les[i];
          de = le.dom_element;
          if (de.has_role) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', []);
        }
      }
      else {
        if (landmark_count === 1) {
          rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', []);

          le = les[0];
          de = le.dom_element;
          if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
        }
      }
    }

  } // end validate function
},

/**
 * @object LANDMARK_6
 *
 * @desc Each page may have one contentinfo landmark
 *
 */
{ rule_id             : 'LANDMARK_6',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.WEBSITE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.1',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['footer', '[role="contentinfo"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'role'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var landmark_count = 0;
    var les = [];

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;
      var tag_name = de.tag_name;

      if (le.landmark === 'contentinfo') {
        if (cs.is_visible_to_at === VISIBILITY.HIDDEN) {
          if(de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
        else {
          landmark_count++;
          les.push(le);
        }
      }
    }

    if (page_element) {
      // Test if no contentinfo landmarks
      if (landmark_count === 0) {
        rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'WEBSITE_MC_1', []);
      }
      else {
        if (landmark_count === 1) {
          de = les[0].dom_element;
          rule_result.addResult(TEST_RESULT.PASS, page_element, 'WEBSITE_PASS_1', []);
          if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, les[0], 'ELEMENT_PASS_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.PASS, les[0], 'ELEMENT_PASS_2', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.PASS, page_element, 'WEBSITE_PASS_2', [landmark_count]);
          for (i = 0; i < les.length; i++) {
            le = les[i];
            de = les[i].dom_element;
            if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [tag_name]);
            else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
          }
        }
      }
    }

  } // end validate function
},

/**
 * @object LANDMARK_7
 *
 * @desc Each page may have only one contentinfo landmark
 *
 */
{ rule_id             : 'LANDMARK_7',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.1',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['footer', '[role="contentinfo"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'role'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var landmark_count = 0;
    var les = [];

    var LANDMARK_ROLE = 'contentinfo';

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;
      var tag_name = de.tag_name;

      if (le.landmark === 'contentinfo') {
        if (cs.is_visible_to_at === VISIBILITY.HIDDEN) {
          if(de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
        else {
          if (!de.body_element) {
            landmark_count++;
            les.push(le);
          }
        }
      }
    }

    if (page_element) {
      // Test if no contentinfo landmarks
      if (landmark_count > 1) {
        rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_1', [landmark_count]);
        for (i = 0; i < les.length; i++) {
          le = les[i];
          de = le.dom_element;
          if (de.has_role) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', []);
        }
      }
      else {
        if (landmark_count === 1) {
          rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', []);

          le = les[0];
          de = le.dom_element;
          if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [tag_name]);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
        }
      }
    }

  } // end validate function
},

/**
 * @object LANDMARK_8
 *
 * @desc banner landmark must be a top level landmark
 */
{ rule_id             : 'LANDMARK_8',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['header', '[role="banner"]'],
  primary_property    : 'parent_landmark',
  resource_properties : ['role', 'tag_name', 'accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'banner') {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          if (de.parent_landmark === null) {
            if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [de.tag_name]);
            else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', []);
          }
          else {

            var de1 = de.parent_landmark.dom_element;

            if (de1 && (de.body_element !== de1.body_element)) {
              if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', [de.tag_name]);
              else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', []);
            }
            else {
              if (de.has_role) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [de.tag_name, de.parent_landmark.landmark]);
              else  rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', [de.parent_landmark.landmark]);
            }
          }

        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_9
 *
 * @desc Banner landmark should only contain only search and navigation landmarks
 */
{ rule_id             : 'LANDMARK_9',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['header', '[role="banner"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['role', 'tag_name', 'parent_landmark'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    function checkLandmarkChildren(landmark) {

      var cces     = landmark.child_cache_elements;
      var cces_len = cces.length;
      var fail_count = 0;

      for (var i = 0; i < cces_len; i++) {

        var cce = cces[i];
        var de = cce.dom_element;
        var cs = de.computed_style;
        landmark_count++;

        if (!cce.landmark) continue;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if ((cce.landmark === 'navigation') ||
              (cce.landmark === 'region') ||
              (cce.landmark === 'search')||
              (cce.landmark === 'application')) {
            if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, cce, 'ELEMENT_PASS_1', [de.role]);
            else rule_result.addResult(TEST_RESULT.PASS, cce, 'ELEMENT_PASS_1', [de.tag_name]);
            pass_list += ' ' + cce.landmark;
          }
          else {
            if (de.has_role) rule_result.addResult(TEST_RESULT.FAIL, cce, 'ELEMENT_FAIL_1', [de.role]);
            else rule_result.addResult(TEST_RESULT.FAIL, cce, 'ELEMENT_FAIL_1', [de.tag_name]);
            fail_count++;
            fail_list += ' ' + cce.landmark;
          }
          if (cce.landmark) fail_count += checkLandmarkChildren(cce);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, cce, 'ELEMENT_HIDDEN_1', [de.tag_name]);
        }
      }

      return fail_count;
    }

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;
    var fail_count = 0;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'banner') {

        var fail_list = '';
        var pass_list = '';
        var landmark_count = 0;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          fail_count = checkLandmarkChildren(le);

          if (fail_count === 1) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', [fail_list.toUpperCase()]);
          else if (fail_count > 1) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_3', [fail_count, fail_list.toUpperCase()]);
          else if (landmark_count === 0) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
          else if (landmark_count === 1) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', [pass_list.toUpperCase()]);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', [landmark_count, pass_list.toUpperCase()]);
        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', [de.tag_name]);
        }
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_10
 *
 * @desc Navigation landmark should only contain only region and search landmarks
 */
{ rule_id             : 'LANDMARK_10',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['nav', '[role="naviation"]'],
  primary_property    : 'parent_landmark',
  resource_properties : ['role', 'tag_name', 'accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    function checkLandmarkChildren(landmark) {

      var cces     = landmark.child_cache_elements;
      var cces_len = cces.length;
      var fail_count = 0;

      for (var i = 0; i < cces_len; i++) {
        var cce = cces[i];
        var de = cce.dom_element;
        var cs = de.computed_style;

        if (!cce.landmark) continue;

        landmark_count++;

//        OpenAjax.a11y.logger.debug("Landmarks: " +  landmark.landmark + " -> " + cce.landmark);

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if ((cce.landmark === 'region') ||
              (cce.landmark === 'search')||
              (cce.landmark === 'application')) {
             rule_result.addResult(TEST_RESULT.PASS, cce, 'ELEMENT_PASS_1', [cce.landmark]);
             pass_list += ' ' + cce.landmark;
          }
          else {
            rule_result.addResult(TEST_RESULT.FAIL, cce, 'ELEMENT_FAIL_1', [cce.landmark]);
            fail_count++;
            fail_list += ' ' + cce.landmark;
          }
          fail_count += checkLandmarkChildren(cce);
        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', [de.tag_name]);
        }
      }

      return fail_count;
    }

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;
    var fail_count = 0;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'navigation') {

        var fail_list = '';
        var pass_list = '';
        var landmark_count = 0;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          fail_count = checkLandmarkChildren(le);

          if (fail_count === 1) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', [fail_list.toUpperCase()]);
          else if (fail_count > 1) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_3', [fail_count, fail_list.toUpperCase()]);
          else if (landmark_count === 0) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
          else if (landmark_count === 1) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', [pass_list.toUpperCase()]);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', [landmark_count, pass_list.toUpperCase()]);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
        }
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_11
 *
 * @desc Main landmark must be a top level lanmark
 */
{ rule_id             : 'LANDMARK_11',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['main', '[role="main"]'],
  primary_property    : 'parent_landmark',
  resource_properties : ['role', 'tag_name', 'accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'main') {
        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          if (de.parent_landmark) {
            var de1 = de.parent_landmark.dom_element;

            if (de1 && (de.body_element !== de1.body_element)) {
              if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', [de.tag_name]);
              else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', []);
            }
            else {
              if (de.has_role) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [de.tag_name, de.parent_landmark.landmark]);
              else rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', [de.parent_landmark.landmark]);
            }
          }
          else {
            if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [de.tag_name]);
            else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', []);
          }
        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_12
 *
 * @desc Contentinfo landmark must be a top level landmark
 */
{ rule_id             : 'LANDMARK_12',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['footer', '[role="contentinfo"]'],
  primary_property    : 'parent_landmark',
  resource_properties : ['role', 'tag_name', 'accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'contentinfo') {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          if (de.parent_landmark === null) {
            if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [de.tag_name]);
            else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', []);
          }
          else {

            var de1 = de.parent_landmark.dom_element;

            if (de1 && (de.body_element !== de1.body_element)) {
              if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', [de.tag_name]);
              else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', []);
            }
            else {
              if (de.has_role) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [de.tag_name, de.parent_landmark.landmark]);
              else  rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', [de.parent_landmark.landmark]);
            }
          }

        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_13
 *
 * @desc Contentinfo landmark should only contain only search, region and navigation landmarks
 */
{ rule_id             : 'LANDMARK_13',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['header', '[role="banner"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['role', 'tag_name', 'parent_landmark'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    function checkLandmarkChildren(landmark) {

      var cces     = landmark.child_cache_elements;
      var cces_len = cces.length;
      var fail_count = 0;

      for (var i = 0; i < cces_len; i++) {

        var cce = cces[i];
        var de = cce.dom_element;
        var cs = de.computed_style;
        landmark_count++;

        if (!cce.landmark) continue;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if ((cce.landmark === 'navigation') ||
              (cce.landmark === 'region') ||
              (cce.landmark === 'search') ||
              (cce.landmark === 'application')) {
            if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, cce, 'ELEMENT_PASS_1', [de.role]);
            else rule_result.addResult(TEST_RESULT.PASS, cce, 'ELEMENT_PASS_1', [de.tag_name]);
            pass_list += ' ' + cce.landmark;
          }
          else {
            if (de.has_role) rule_result.addResult(TEST_RESULT.FAIL, cce, 'ELEMENT_FAIL_1', [de.role]);
            else rule_result.addResult(TEST_RESULT.FAIL, cce, 'ELEMENT_FAIL_1', [de.tag_name]);
            fail_count++;
            fail_list += ' ' + cce.landmark;
          }
          if (cce.landmark) fail_count += checkLandmarkChildren(cce);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, cce, 'ELEMENT_HIDDEN_1', [de.tag_name]);
        }
      }

      return fail_count;
    }

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;
    var fail_count = 0;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'contentinfo') {

        var fail_list = '';
        var pass_list = '';
        var landmark_count = 0;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          fail_count = checkLandmarkChildren(le);

          if (fail_count === 1) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', [fail_list.toUpperCase()]);
          else if (fail_count > 1) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_3', [fail_count, fail_list.toUpperCase()]);
          else if (landmark_count === 0) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
          else if (landmark_count === 1) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', [pass_list.toUpperCase()]);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', [landmark_count, pass_list.toUpperCase()]);
        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', [de.tag_name]);
        }
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_14
 *
 * @desc Search landmark should only contain only region landmarks
 */
{ rule_id             : 'LANDMARK_14',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['[role="search"]'],
  primary_property    : 'parent_landmark',
  resource_properties : ['role', 'tag_name', 'accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    function checkLandmarkChildren(landmark) {

      var cces     = landmark.child_cache_elements;
      var cces_len = cces.length;
      var fail_count = 0;

      for (var i = 0; i < cces_len; i++) {

        var cce = cces[i];
        var de = cce.dom_element;
        var cs = de.computed_style;

        if (!cce.landmark) continue;

        landmark_count++;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if ((cce.landmark === 'region') ||
              (cce.landmark === 'application')) {
             rule_result.addResult(TEST_RESULT.PASS, cce, 'ELEMENT_PASS_1', [cce.landmark]);

             pass_list += ' ' + cce.landmark;
          }
          else {
            rule_result.addResult(TEST_RESULT.FAIL, cce, 'ELEMENT_FAIL_1', [cce.landmark]);
            fail_count++;
            fail_list += ' ' + cce.landmark;
          }
          fail_count += checkLandmarkChildren(cce);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, cce, 'ELEMENT_HIDDEN_2', [de.tag_name, de.landmark]);
        }
      }

      return fail_count;
    }

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;
    var fail_count = 0;

//    OpenAjax.a11y.logger.debug("  LANDMARK 14 Rule");

    for (var i = 0; i < landmark_elements_len; i++ ) {

      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'search') {

        var fail_list = '';
        var pass_list = '';
        var landmark_count = 0;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          fail_count = checkLandmarkChildren(le);

          if (fail_count === 1) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', [fail_list.toUpperCase()]);
          else if (fail_count > 1) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_3', [fail_count, fail_list.toUpperCase()]);
          else if (landmark_count === 0) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
          else if (landmark_count === 1) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', [pass_list.toUpperCase()]);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', [landmark_count, pass_list.toUpperCase()]);

        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
        }
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_15
 *
 * @desc Form landmark should only contain only region landmarks
 */
{ rule_id             : 'LANDMARK_15',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['[role="form"]'],
  primary_property    : 'parent_landmark',
  resource_properties : ['role', 'tag_name', 'accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    function checkLandmarkChildren(landmark) {

      var cces     = landmark.child_cache_elements;
      var cces_len = cces.length;
      var fail_count = 0;

      for (var i = 0; i < cces_len; i++) {

        var cce = cces[i];
        var de = cce.dom_element;
        var cs = de.computed_style;

        if (!cce.landmark) continue;

        landmark_count++;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if ((cce.landmark === 'region') ||
              (cce.landmark === 'application')) {
             rule_result.addResult(TEST_RESULT.PASS, cce, 'ELEMENT_PASS_1', [cce.landmark]);
          }
          else {
            rule_result.addResult(TEST_RESULT.FAIL, cce, 'ELEMENT_FAIL_1', [cce.landmark]);
            fail_count++;
          }
          fail_count += checkLandmarkChildren(cce);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, cce, 'ELEMENT_HIDDEN_3', [cce.dom_element.tag_name, cce.landmark]);
        }
      }

      return fail_count;
    }

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;
    var fail_count = 0;

    for (var i = 0; i < landmark_elements_len; i++ ) {

      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'form') {

        var landmark_count = 0;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          fail_count = checkLandmarkChildren(le);

//          OpenAjax.a11y.logger.debug("  Search: " + fail_count);

          if (fail_count > 0) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', []);
          else if (landmark_count === 0) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
          else if (landmark_count === 1) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', []);
          else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', [landmark_count]);
        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_16
 *
 * @desc Elements with the role=region must have accessible name to be considered a landmark
 */
{ rule_id             : 'LANDMARK_16',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['[role="region"]'],
  primary_property    : 'computed_label',
  resource_properties : ['tag_name', 'role', 'computed_label_source', 'aria-label', 'aria-labelledby', 'title'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;
    var fail_count = 0;

    for (var i = 0; i < landmark_elements_len; i++ ) {

      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'region') {

//        OpenAjax.a11y.logger.debug("  Region: " + fail_count);

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          if ((le.computed_label_source !== OpenAjax.a11y.SOURCE.NONE) &&
              (le.computed_label.length > 0)) {
            if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [ de.tag_name]);
            else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', []);
          }
          else {
            if (de.has_role) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', [de.tag_name]);
            else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_2', []);
          }
        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
      }
    }

    var section_elements     = dom_cache.headings_landmarks_cache.all_section_elements;
    var section_elements_len = section_elements.length;

    for (i = 0; i < section_elements_len; i++ ) {

      le = section_elements[i];
      de = le.dom_element;
      cs = de.computed_style;

//       OpenAjax.a11y.logger.debug("TAG NAME: " + de.tag_name);

      if (de.tag_name === 'section' &&
          !de.has_role &&
          !de.has_aria_labelledby &&
          !de.has_aria_label &&
          !de.has_title) {
        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_2', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
      }
    }

  } // end validate function
},

/**
 * @object LANDMARK_17
 *
 * @desc Landmark must have unique labels
 */

{ rule_id             : 'LANDMARK_17',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['main', 'nav', 'header', 'footer', 'section', 'aside', '[role="application"]','[role="banner"]', '[role="complementary"]','[role="contentinfo"]','[role="form"]','[role="main"]','[role="navigation"]','[role="region"]','[role="search"]'],
  primary_property    : 'computed_label',
  resource_properties : ['tag_name', 'role', 'computed_label_source', 'aria-label', 'aria-labelledby', 'title'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var i;
    var les   = [];

    for (i = 0; i < landmark_elements_len; i++ ) {

      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) les.push(le);
      else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name, de.landmark]);

    } // end loop

    // sort labels

    les = dom_cache.sortArrayOfObjects(les,'computed_label_for_comparison', true);

    for (i = 0; i < les.length; i++) {

      le = les[i];

      if (le.duplicate) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [le.computed_label, le.landmark]);
      else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [le.landmark]);

    }

  } // end validate function
},

{ rule_id             : 'LANDMARK_18',
  last_updated        : '2015-08-07',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['main', 'nav', 'header', 'footer', 'section', 'aside', '[role="application"]','[role="banner"]', '[role="complementary"]','[role="contentinfo"]','[role="form"]','[role="main"]','[role="navigation"]','[role="region"]','[role="search"]'],
  primary_property    : 'computed_label',
  resource_properties : ['tag_name', 'role', 'computed_label_source', 'aria-label', 'aria-labelledby', 'title'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      if (de.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
        rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [le.landmark]);
      }
      else {
        rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', [le.landmark, le.computed_label]);
      }
    }
  } // end validate function
},

/**
 * @object LANDMARK_19
 *
 * @desc Complementary landmark must be a top level landmark
 */
{ rule_id             : 'LANDMARK_19',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LANDMARKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1', '2.4.6', '2.4.10'],
  target_resources    : ['aside', '[role="complementary"]'],
  primary_property    : 'parent_landmark',
  resource_properties : ['role', 'tag_name', 'accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var de = le.dom_element;
      var cs = de.computed_style;

      if (le.landmark === 'complementary') {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          if (!de.parent_landmark) {
            if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_1', [de.tag_name]);
            else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_3', []);
          }
          else {
            var de1 = de.parent_landmark.dom_element;

            if (de1 && (de.body_element !== de1.body_element)) {
              if (de.has_role) rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_2', [de.tag_name]);
              else rule_result.addResult(TEST_RESULT.PASS, le, 'ELEMENT_PASS_4', []);
            }
            else {
              if (de.has_role) rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [de.tag_name, de.parent_landmark.landmark]);
              else rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_2', [de.parent_landmark.landmark]);
            }
          }
        }
        else {
          if (de.has_role) rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          else rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_2', []);
        }
      }
    }
  } // end validate function
}

]);
/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Control Rules                                 */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object LANGUAGE_1
 *
 * @desc HTML element must have a lang attribute
 */

{ rule_id             : 'LANGUAGE_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.1.1',
  wcag_related_ids    : [],
  target_resources    : ['html'],
  primary_property    : 'lang',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;

//    OpenAjax.a11y.logger.debug( "Language Codes: " + typeof OpenAjax.a11y.LANGUAGE_CODES);

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    if (page_element) {
       if (dom_cache.lang && dom_cache.lang.length) {
         if (OpenAjax.a11y.util.validLanguageCode(dom_cache.lang)) {
           rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', [dom_cache.lang]);
         }
         else {
           rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_2', [dom_cache.lang]);
         }
       }
       else {
         rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_1', []);
       }
    }

  } // end validation function
},

/**
 * @object LANGUAGE_2
 *
 * @desc Identify the elements on the page where the text content is different language from the primary content
 */

{ rule_id             : 'LANGUAGE_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.1.2',
  wcag_related_ids    : ['3.1.1'],
  target_resources    : ['[lang]'],
  primary_property    : 'lang',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.languages_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

//
//    OpenAjax.a11y.logger.debug("[Language Rule 2]  Language 2: " + dom_elements_len);
    var fail_count = 0;
    var pass_count = 0;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];

      if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE ) {

         if (OpenAjax.a11y.util.validLanguageCode(de.lang)) {
           rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.tag_name, de.lang]);
           pass_count++;
         }
         else {
           rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.tag_name, de.lang]);
           fail_count++;
         }

      }
      else {
        rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name, de.lang]);
      }
    }

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    if (page_element) {
      if (fail_count === 1) rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_1', []);
      else if (fail_count > 1) rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_2', [fail_count]);
      else if (pass_count === 1) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
      else if (pass_count > 1) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_2', [pass_count]);
      else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_3', []);
    }

  } // end validation function
}
]);



/**
 * Copyright 2011-2017  OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*      OpenAjax Alliance Table Rules                               */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**

   **
 * @object LAYOUT_1
 *
 * @desc     Make sure content is in a meaningful sequence
 *           tables used for layout must be checked for
 *           maintaining meanful sequence
 */
{ rule_id             : 'LAYOUT_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.2',
  wcag_related_ids    : ['1.3.1'],
  target_resources    : ['Page', 'table'],
  primary_property    : 'is_data_table',
  resource_properties : ['max_column', 'max_row', 'nesting_level'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function getNestingLevel(table_element, level) {

       var l = level;
       var pte = table_element.parent_table_element;

       if (pte) {
         if ((pte.table_role === OpenAjax.a11y.TABLE_ROLE.DATA) || pte.max_column == 1) {
           l = getNestingLevel(pte, level);
         }
         else {
           l = getNestingLevel(pte, (level+1));
         }
       }
       return l;
     }

     var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
     var VISIBILITY    = OpenAjax.a11y.VISIBILITY;

     var table_elements     = dom_cache.tables_cache.table_elements;
     var table_elements_len = table_elements.length;

     var page_element = dom_cache.headings_landmarks_cache.page_element;
     var layout_pass = 0;
     var layout_mc   = 0;
     var layout_fail = 0;

     // Check to see if valid cache reference
     if (table_elements && table_elements_len) {

       for (var i = 0; i < table_elements_len; i++) {

         var te = table_elements[i];
         var de = te.dom_element;
         var cs = de.computed_style;

         if (te.table_role === OpenAjax.a11y.TABLE_ROLE.LAYOUT) {

           if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

             var nesting_level = getNestingLevel(te, 0);

             te.nesting_level = nesting_level;

             if (te.max_column === 1)  {
               rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_1', []);
               layout_pass++;
             }
             else {

               if (nesting_level === 0) {
                 rule_result.addResult(TEST_RESULT.MANUAL_CHECK, te, 'ELEMENT_MC_2', [te.max_row, te.max_column]);
                 layout_mc++;
               }
               else {
                 rule_result.addResult(TEST_RESULT.MANUAL_CHECK, te, 'ELEMENT_MC_3', [te.nesting_level]);
                 layout_mc++;
               }
             }
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, te, 'ELEMENT_HIDDEN_1', []);
           }
         }
       } // end loop
     }

     if (layout_mc) {
       rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
     }
     else {
       if (layout_pass) {
         rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', []);
       }
     }

   }  // end validation function
 },

/**
 * @object LAYOUT_2
 *
 * @desc     Do not use nested tables more than 1 column wide for positioning content
 *           Fails with one or more one levels of nesting.
 */
{ rule_id             : 'LAYOUT_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.2',
  wcag_related_ids    : [],
  target_resources    : ['table'],
  primary_property    : 'nesting_level',
  resource_properties : ['is_data_table', 'max_column', 'max_row'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

     var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
     var VISIBILITY    = OpenAjax.a11y.VISIBILITY;

     var i;
     var te;
     var nesting_level;

     var table_elements     = dom_cache.tables_cache.table_elements;
     var table_elements_len = table_elements.length;

     // Check to see if valid cache reference
     if (table_elements && table_elements_len) {

       for (i=0; i < table_elements_len; i++) {

         te = table_elements[i];

         if (te.table_role === OpenAjax.a11y.TABLE_ROLE.LAYOUT) {

           if (te.dom_element.computed_style.is_visible_to_at == VISIBILITY.VISIBLE) {

             if (te.max_column > 1) {

               if (te.nesting_level > 0) rule_result.addResult(TEST_RESULT.FAIL, te, 'ELEMENT_FAIL_1', [te.max_row, te.max_column, te.nesting_level]);
               else rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_1', []);
             }
             else {
               rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_2', []);
             }
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, te, 'ELEMENT_HIDDEN_1', []);
           }
         }
       } // end loop
     }
  } // end validation function
},

/**
 * @object LAYOUT_3
 *
 * @desc     Check to see if aria-flowto property ordering makes sense to AT users.
 */
{ rule_id             : 'LAYOUT_3',
  last_updated        : '2017-01-17',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.2',
  wcag_related_ids    : [],
  target_resources    : ['[aria_flowto]'],
  primary_property    : 'aria_flowto',
  resource_properties : ['aria_flowto'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++ ) {

      var de =dom_elements[i];

      if (de.type != Node.ELEMENT_NODE) continue;

//      OpenAjax.a11y.logger.debug('[RULE][LAYOUT 3]: ' + de.tag_name + ' (' + de.has_aria_flowto + ')');

      if (de.has_aria_flowto) {
        if (de.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name]);
        }
        else {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', [de.tag_name]);
        }
      }
    }
  } // end validation function
}
]);/**
 * Copyright 2011-2017  OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Link Rules                          */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object LINK_1
 *
 * @desc Link should describe the target of a link
 */

{ rule_id             : 'LINK_1',
  last_updated        : '2012-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LINKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.4',
  wcag_related_ids    : ['2.4.9'],
  target_resources    : ['a', 'area', '[role=link]'],
  primary_property    : 'accessible_name',
  resource_properties : ['accessible_name_source', 'href', 'accessible_description'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var link_elements     = dom_cache.links_cache.link_elements;
    var link_elements_len = link_elements.length;

    var visible_link_elements = [];

    for (var i = 0; i < link_elements_len; i++) {

      var le = link_elements[i];
      var tag_name = le.dom_element.tag_name;

      if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE &&
          le.is_link) {
        visible_link_elements.push(le);
      }
      else {
        rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [tag_name]);
      }

    }

    var visible_link_elements_len = visible_link_elements.length;

    for (i = 0; i < visible_link_elements_len; i++) {

      le = visible_link_elements[i];

      var name        = le.accessible_name_for_comparison;
      var description = le.accessible_description_for_comparison;
      tag_name        = le.dom_element.tag_name;

      if (name.length) {
        if (description.length) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_2', [tag_name, name, description]);
        else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', [tag_name, name]);
      }
      else {
        rule_result.addResult(TEST_RESULT.FAIL, le, 'ELEMENT_FAIL_1', [tag_name]);
      }

    }  // end loop

  } // end valifdation function
},

/**
 * @object LINK_2
 *
 * @desc Links with the different HREFs should have the unique accessible names
 */

{ rule_id             : 'LINK_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LINKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.4',
  wcag_related_ids    : ['2.4.9'],

  target_resources    : ['a', 'area', '[role=link]'],
  primary_property    : 'href',
  resource_properties : ['accessible_name', 'accessible_description', 'accessible_name_source'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    function updateResults(links, test_result, message) {

      for (var i = 0; i < links.length; i++) {

        var le = links[i];
        var links_len = links[i].length;

//        OpenAjax.a11y.logger.debug("  Update Item: " + i + " of " + end + " le: " + le.toString());

        var tag_name  = le.dom_element.tag_name;

        rule_result.addResult(test_result, le,  message, [tag_name, links_len]);
      }

    }

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

    var same_names     = dom_cache.links_cache.getLinksThatShareTheSameName();
    var same_names_len = same_names.length;

    for (var i = 0; i < same_names_len; i++) {

      var same_name = same_names[i];

      if (same_name.same_hrefs) {
        updateResults(same_name.links, TEST_RESULT.PASS, 'ELEMENT_PASS_1');
      } else {
        if (same_name.unique_descriptions) {
          updateResults(same_name.links, TEST_RESULT.PASS, 'ELEMENT_PASS_2');
        } else {
          updateResults(same_name.links, TEST_RESULT.FAIL, 'ELEMENT_FAIL_1');
        }
      }
    }  // end loop

  } // end validate function
 }

]);



/**
 * Copyright 2011-2017  OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance List Rules                          */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object LIST_1
 *
 * @desc Verify list elements are used semantically
*/

{ rule_id             : 'LIST_1',
  last_updated        : '2015-08-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : [],
  target_resources    : ['ul', 'ol', 'li', 'dl', 'dt', 'dd', '[role="list"]', '[role="listitem"]', '[role="group"]'],
  primary_property    : 'tag_name',
  resource_properties : ['accessible_name'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
      var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

      var page_element = dom_cache.keyboard_focus_cache.page_element;

      var list_elements     = dom_cache.lists_cache.list_elements;
      var list_elements_len = list_elements.length; // loop control

      for (var i = 0; i < list_elements_len; i++) {
        var le = list_elements[i];
        var de = le.dom_element;
        var cs = de.computed_style;

        var tag_name = de.tag_name;
        if (de.has_role) tag_name += '[role=' + de.role + ']';

        if (cs.is_visible_to_at  === VISIBILITY.VISIBLE) {
          if (le.list_type === OpenAjax.a11y.LIST.CONTAINER) {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', [tag_name]);
          }
          else  {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_2', [tag_name]);
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [tag_name]);
        }

      } // end loop

      if (list_elements_len > 0) {
        rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', [list_elements_len]);
      }

    } // end validate function
  },
/**
 * @object LIST_2
 *
 * @desc Verify list benefits from an accessible name
*/

{ rule_id             : 'LIST_2',
  last_updated        : '2015-08-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.6',
  wcag_related_ids    : ['1.3.1'],
  target_resources    : ['ul', 'ol', '[role="list"]', '[role="group"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['tag_name', 'role', 'computed_label_source'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
      var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

      var container_elements     = dom_cache.lists_cache.container_elements;
      var container_elements_len = container_elements.length; // loop control

      for (var i = 0; i < container_elements_len; i++) {
        var le = container_elements[i];
        var de = le.dom_element;
        var cs = de.computed_style;

        var tag_name = de.tag_name;
        if (de.has_role) tag_name += '[role=' + de.role + ']';

        if (cs.is_visible_to_at  === VISIBILITY.VISIBLE) {
          if (le.accessible_name.length) {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', [le.accessible_name]);
          }
          else {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_2', [tag_name]);
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, le, 'ELEMENT_HIDDEN_1', [tag_name]);
        }

      } // end loop
    } // end validate function
  }
]);

/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Control Rules                                 */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object NAVIGATION_1
 *
 * @desc Page has at least two of the following resources: table of contents, site map,
 *       search, navigation links, sand trail
 */

{ rule_id             : 'NAVIGATION_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.WEBSITE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.SITE_NAVIGATION,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.5',
  wcag_related_ids    : [],
  target_resources    : ['Website', 'role=\'search\'', 'role=\'navigation\''],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var landmark_count = 0;
    var navigation_count = 0;
    var search_count     = 0;

    var LANDMARK_ROLE = 'navigation';

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];
      var tag_name = le.dom_element.tag_name;

      if (le.role === 'navigation') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', []);
          navigation_count++;
        }
      }

      if (le.role === 'search') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_2', []);
          search_count++;
        }
      }

    }

    if (page_element) {
      if ((navigation_count > 0) && (search_count > 0)) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'WEBSITE_MC_1', []);
      else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'WEBSITE_MC_2', []);
    }

  } // end validation function
},

/**
 * @object NAVIGATION_2
 *
 * @desc  Landmarks are in the same relative order when used to identify sections of web pages within the same website
 *
 */

{ rule_id             : 'NAVIGATION_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.WEBSITE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.SITE_NAVIGATION,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.2.3',
  wcag_related_ids    : ['3.2.4'],
  target_resources    : ['Website', 'role=\'main\'', 'role=\'navigation\'', 'role=\'banner\'', 'role=\'contentinfo\'','role=\'search\''],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var main_count          = 0;
    var navigation_count    = 0;
    var banner_count        = 0;
    var contentinfo_count   = 0;
    var search_count        = 0;
    var complementary_count = 0;

    var landmark_count    = 0;

    var les = [];

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];

      if (le.role === 'main') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', []);

          if (main_count === 0) les.push('main');

          main_count += 1;
          landmark_count += 1;
        }
      }

      if (le.role === 'navigation') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_2', []);

          if (navigation_count === 0) les.push('navigation');

          navigation_count += 1;
          landmark_count += 1;
        }
      }

      if (le.role === 'banner') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_3', []);

          if (banner_count === 0) les.push('banner');

          banner_count += 1;
          landmark_count += 1;
        }
      }

      if (le.role === 'contentinfo') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_4', []);

          if (contentinfo_count === 0) les.push('contentinfo');

          contentinfo_count += 1;
          landmark_count += 1;
        }
      }

      if (le.role === 'search') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_5', []);

          if (search_count === 0) les.push('search');

          search_count += 1;
          landmark_count += 1;
        }
      }

      if (le.role === 'complementary') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_6', []);

          if (complementary_count === 0) les.push('complementary');

          complementary_count += 1;
          landmark_count += 1;
        }
      }

    }

    if (page_element) {
      if (landmark_count > 0) {

        var last = les.length - 1;
        var landmark_list = les[0];

        for (i = 1; i < les.length; i++) {
          if (i === last) landmark_list += " and " + les[i];
          else landmark_list += ", " + les[i];
        }
        rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'WEBSITE_MC_1', [landmark_list]);
      }
    }
  } // end validation function
},

/**
 * @object NAVIGATION_3
 *
 * @desc  h2 elements are in the same relative order when used to identify sections of web pages within the same website
 *
 */

{ rule_id             : 'NAVIGATION_3',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.WEBSITE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.SITE_NAVIGATION,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.2.3',
  wcag_related_ids    : ['3.2.4'],
  target_resources    : ['Website', 'h2'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var heading_elements     = dom_cache.headings_landmarks_cache.heading_elements;
    var heading_elements_len = heading_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var heading_count = 0;

    for (var i = 0; i < heading_elements_len; i++ ) {
      var he = heading_elements[i];

      if ((he.level === 1) &&
         (he.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE)) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, he, 'ELEMENT_MC_1', []);
          heading_count += 1;
      }

      if ((he.level === 2) &&
         (he.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE)) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, he, 'ELEMENT_MC_2', []);
          heading_count += 1;
      }
    }

    if (page_element) {
       if (heading_count) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'WEBSITE_MC_1', []);
       else rule_result.addResult(TEST_RESULT.FAIL, page_element, 'WEBSITE_FAIL_1', []);
    }

  } // end validation function
},

/**
 * @object NAVIGATION_4
 *
 * @desc  landmarks identifying the same sections in a website have the same accessible name
 *
 */

{ rule_id             : 'NAVIGATION_4',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.WEBSITE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.SITE_NAVIGATION,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.2.4',
  wcag_related_ids    : ['3.2.3'],
  target_resources    : ['Website', 'role=\'search\'', 'role=\'navigation\'', 'role=\'main\'', 'role=\'banner\'', 'role=\'contentinfo\'', 'h2'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var SOURCE      = OpenAjax.a11y.SOURCE;

    var landmark_elements     = dom_cache.headings_landmarks_cache.landmark_elements;
    var landmark_elements_len = landmark_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var landmark_count = 0;

    for (var i = 0; i < landmark_elements_len; i++ ) {
      var le = landmark_elements[i];

      if (le.role === 'main') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_1', []);
          landmark_count += 1;
        }
      }

      if (le.role === 'navigation') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_2', []);
          landmark_count += 1;
        }
      }

      if (le.role === 'search') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_3', []);
          landmark_count += 1;
        }
      }

      if (le.role === 'banner') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_4', []);
          landmark_count += 1;
        }
      }

      if (le.role === 'contentinfo') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_5', []);
          landmark_count += 1;
        }
      }

      if (le.role === 'complementary') {
        if (le.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, le, 'ELEMENT_MC_6', []);
          landmark_count += 1;
        }
      }

    }

    if (page_element  && landmark_count) {
      rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'WEBSITE_MC_1', []);
    }

  } // end validation function
},

/**
 * @object NAVIGATION_5
 *
 * @desc  h2 elements used to identify sections of web pages within the same accessible name
 *
 */

{ rule_id             : 'NAVIGATION_5',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.WEBSITE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.SITE_NAVIGATION,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '3.2.4',
  wcag_related_ids    : ['3.2.3'],
  target_resources    : ['Website', 'h2'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var heading_elements     = dom_cache.headings_landmarks_cache.heading_elements;
    var heading_elements_len = heading_elements.length;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    var heading_count = 0;

    for (var i = 0; i < heading_elements_len; i++ ) {
      var he = heading_elements[i];

      if ((he.level === 1) &&
         (he.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE)) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, he, 'ELEMENT_MC_1', []);
          heading_count += 1;
      }

      if ((he.level === 2) &&
         (he.dom_element.computed_style.is_visible_to_at === VISIBILITY.VISIBLE)) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, he, 'ELEMENT_MC_2', []);
          heading_count += 1;
      }
    }

    if (page_element) {
       if (heading_count) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'WEBSITE_MC_1', []);
       else rule_result.addResult(TEST_RESULT.FAIL, page_element, 'WEBSITE_FAIL_1', []);
    }

  } // end validation function
}

]);



/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Media Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

  /**
   * @object ORDER_1
   *
   * @desc Reading order is meaningful when content is positioned using CSS
   */

{ rule_id             : 'ORDER_1',
  last_updated        : '2015-08-15',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.2',
  wcag_related_ids    : [],
  target_resources    : [],
  primary_property    : 'position',
  resource_properties : ['display', 'height', 'width', 'area'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {

      var de = dom_elements[i];
      var cs = de.computed_style;
      var tag_name = de.tag_name;

      if (cs.position === 'absolute' || cs.position === 'relative' || cs.position === 'fixed') {

        if (cs.is_visible_to_at  === VISIBILITY.VISIBLE) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', [de.tag_name, cs.position]);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name, cs.position]);
        }

      }

    }

  } // end validate function
}

]);
/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Media Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object RESIZE_1
 *
 * @desc Timing adjustable for pages with interactive elements
 */

{ rule_id             : 'RESIZE_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '1.4.4',
  wcag_related_ids    : [],
  target_resources    : [],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

    var page_element = dom_cache.timing_cache.page_element;

//    OpenAjax.a11y.logger.debug("  [Resize 1][page_element][dom_element]: " + page_element.dom_element);

    if (page_element) {
      rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
    }

  } // end validate function
}

]);
/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Media Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object ROLE_1
 *
 * @desc main element may only have roles 'main' or 'presentation'
 */

{ rule_id             : 'ROLE_1',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['main'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];

      if (de.tag_name === 'main') {

        if (de.computed_style.is_visible_to_at === VISIBILITY.VISIBLE ) {

           if (de.role && de.role.length > 0) {
             if (de.role.indexOf('presentation') >= 0) {
               rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', []);
             }
             else {
               if (de.role.indexOf('main') < 0) {
//                 OpenAjax.a11y.logger.debug("FAIL 1: " + de.role );
                 rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role]);
               }
             }
           }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', []);
        }
      }
    }

  } // end validate function
},

/**
 * @object ROLE_2
 *
 * @desc body element role restrictions
 */

{ rule_id             : 'ROLE_2',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['body'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var section_elements     = dom_cache.headings_landmarks_cache.getListOfSectionElements();
    var section_elements_len = section_elements.length;

//   OpenAjax.a11y.logger.debug("Section Elements: " + section_elements_len );

    for (var i = 0; i < section_elements_len; i++) {
      var se = section_elements[i];
      var de = se.dom_element;

//      OpenAjax.a11y.logger.debug("ROLE 2: " + de.tag_name + "[" + de.has_role + "]");

      if (de.has_role && de.tag_name === 'body') {

        var role = de.role;

        if ((role !== 'application') && (role !== 'document')) {
          rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ROLE_3
 *
 * @desc List container element role restrictions
 */

{ rule_id             : 'ROLE_3',
  last_updated        : '2015-05-04',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['4.1.1'],
  target_resources    : ['ul', 'ol'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];
      var cs = de.computed_style;

      if ((de.tag_name === 'ul' || de.tag_name === 'ol') && de.has_role) {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE ) {

          if (de.role && de.role.length > 0) {
            if (de.role.indexOf('presentation') >= 0) {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', [de.tag_name]);
            }
            else {
              if ('directory group listbox menu menubar presentation radiogroup tablist toolbar tree '.indexOf(de.role + ' ') < 0) {
                rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.tag_name, de.role]);
              }
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name]);
        }
      }
    }

  } // end validate function
},

/**
 * @object ROLE_4
 *
 * @desc article element role restrictions
 */

{ rule_id             : 'ROLE_4',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['article'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var section_elements     = dom_cache.headings_landmarks_cache.getListOfSectionElements();
    var section_elements_len = section_elements.length;

//   OpenAjax.a11y.logger.debug("Section Elements: " + section_elements_len );

    for (var i = 0; i < section_elements_len; i++) {
      var se = section_elements[i];
      var de = se.dom_element;

//      OpenAjax.a11y.logger.debug("ROLE 4: " + de.tag_name + "[" + de.has_role + "]");

      if (de.tag_name === 'article' && de.has_role) {

        var role = de.role;
        var cs   = de.computed_style;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
          if ('application article document main region '.indexOf(role + ' ') < 0) {
            rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [role]);
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ROLE_5
 *
 * @desc section element role restrictions
 */

{ rule_id             : 'ROLE_5',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['section'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var section_elements     = dom_cache.headings_landmarks_cache.getListOfSectionElements();
    var section_elements_len = section_elements.length;

    for (var i = 0; i < section_elements_len; i++) {
      var se = section_elements[i];
      var de = se.dom_element;

//      OpenAjax.a11y.logger.debug("ROLE 5: " + de.tag_name + "[" + de.has_role + "]");

      if (de.has_role && de.tag_name === 'section') {

        var role = de.role;
        var cs   = de.computed_style;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          if ((role !== 'alert'       ) &&
              (role !== 'alertdialog' ) &&
              (role !== 'application' ) &&
              (role !== 'contentinfo' ) &&
              (role !== 'dialog'      ) &&
              (role !== 'document'    ) &&
              (role !== 'log'         ) &&
              (role !== 'main'        ) &&
              (role !== 'marquee'     ) &&
              (role !== 'presentation') &&
              (role !== 'region'      ) &&
              (role !== 'search'      ) &&
              (role !== 'status'      )) {
            rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [role]);
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ROLE_6
 *
 * @desc nav element role restrictions
 */

{ rule_id             : 'ROLE_6',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['nav'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var section_elements     = dom_cache.headings_landmarks_cache.getListOfSectionElements();
    var section_elements_len = section_elements.length;

    for (var i = 0; i < section_elements_len; i++) {
      var se = section_elements[i];
      var de = se.dom_element;

//      OpenAjax.a11y.logger.debug("ROLE 6: " + de.tag_name + "[" + de.has_role + "]");

      if (de.tag_name === 'nav' && de.has_role) {
        var cs   = de.computed_style;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          var role = de.role;

          if (role === 'presentation') {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', []);
          }
          else {
            if (role !== 'navigation') {
              rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [role]);
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ROLE_7
 *
 * @desc aside element role restrictions
 */

{ rule_id             : 'ROLE_7',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['aside'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var section_elements     = dom_cache.headings_landmarks_cache.getListOfSectionElements();
    var section_elements_len = section_elements.length;

    for (var i = 0; i < section_elements_len; i++) {
      var se = section_elements[i];
      var de = se.dom_element;

//      OpenAjax.a11y.logger.debug("ROLE 7: " + de.tag_name + "[" + de.has_role + "]");

      if (de.has_role && de.tag_name === 'aside') {

        var cs   = de.computed_style;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          var role = de.role;

          if ((role !== 'complementary') &&
              (role !== 'region'       ) &&
              (role !== 'note'         ) &&
              (role !== 'search'       ) &&
              (role !== 'presentation' )) {
            rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [role]);
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ROLE_8
 *
 * @desc header element role restrictions
 */

{ rule_id             : 'ROLE_8',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['header'],
  primary_property    : 'role',
  resource_properties : ['role'],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var section_elements     = dom_cache.headings_landmarks_cache.getListOfSectionElements();
    var section_elements_len = section_elements.length;

    for (var i = 0; i < section_elements_len; i++) {
      var se = section_elements[i];
      var de = se.dom_element;

//      OpenAjax.a11y.logger.debug("[ROLE RULE 8] tag: " + de.tag_name + "[" + de.has_role + "]");

      if (de.has_role && de.tag_name === 'header') {

        var cs   = de.computed_style;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          if (de.has_role) {
            var role = de.role;

            if (role === 'presentation') {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', []);
            }
            else {
              if (role !== 'banner') {
                rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [role]);
              }
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ROLE_9
 *
 * @desc footer element role restrictions
 */

{ rule_id             : 'ROLE_9',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['footer'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var section_elements     = dom_cache.headings_landmarks_cache.getListOfSectionElements();
    var section_elements_len = section_elements.length;

    for (var i = 0; i < section_elements_len; i++) {
      var se = section_elements[i];
      var de = se.dom_element;

//      OpenAjax.a11y.logger.debug("ROLE 9: " + de.tag_name + "[" + de.has_role + "]");

      if (de.has_role && de.tag_name === 'footer') {

        var cs   = de.computed_style;

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          if (de.has_role) {
            var role = de.role;

            if (role === 'presentation') {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', []);
            }
            else {
              if (role !== 'contentinfo' ) {
                rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [role]);
              }
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ROLE_10
 *
 * @desc h1, h2, h3, h4, h5 and h6 element role restrictions
 */

{ rule_id             : 'ROLE_10',
  last_updated        : '2015-05-14',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.HEADINGS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.1','2.4.6', '4.1.1', '4.1.2'],
  target_resources    : ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];
      var cs = de.computed_style;

      if (de.has_role && ('h1 h2 h3 h4 h5 h6 '.indexOf(de.tag_name + ' ') >= 0)) {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

          var role = de.role;

          if (role === 'presentation') {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', [de.tag_name]);
          }
          else {
            if ((role !== 'heading') &&
                (role !== 'tab'    )) {
              rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.tag_name, role]);
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name, role]);
        }
      }
    }
  } // end validate function
},

/**
 * @object ROLE_11
 *
 * @desc List element role restrictions
 */

{ rule_id             : 'ROLE_11',
  last_updated        : '2015-05-04',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['4.1.1'],
  target_resources    : ['li'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];
      var cs = de.computed_style;

      if ((de.tag_name === 'li') && de.has_role) {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE ) {

          if (de.role && de.role.length > 0) {
            if (de.role.indexOf('presentation') >= 0) {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', []);
            }
            else {
              if ('listitem menuitem menuitemcheckbox menuitemradio option tab treeitem '.indexOf(de.role + ' ') < 0) {
                rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role]);
              }
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.role]);
        }
      }
    }

  } // end validate function
},

/**
 * @object ROLE_12
 *
 * @desc a element role semantic restrictions
 */

{ rule_id             : 'ROLE_12',
  last_updated        : '2015-05-04',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.LINKS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['4.1.1'],
  target_resources    : ['a'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];
      var cs = de.computed_style;

      if ((de.tag_name === 'a') && de.has_href && de.has_role) {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE ) {

          if (de.role && de.role.length > 0) {
            if (' button checkbox link menuitem menuitemcheckbox menuitemradio tab switch treeitem '.indexOf(' ' + de.role + ' ') < 0) {
              rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role]);
            }
            else {
              rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.role]);
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.role]);
        }
      }
    }

  } // end validate function
},

/**
 * @object ROLE_13
 *
 * @desc select element role semantic restrictions
 */

{ rule_id             : 'ROLE_13',
  last_updated        : '2016-05-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['4.1.1'],
  target_resources    : ['select'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];
      var cs = de.computed_style;

      if ((de.tag_name === 'select') && de.has_role) {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE ) {

          if (de.role && de.role.length > 0) {
            if (' listbox menu '.indexOf(' ' + de.role + ' ') < 0) {
              rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role]);
            }
            else {
              rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.role]);
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.role]);
        }
      }
    }

  } // end validate function
},

/**
 * @object ROLE_14
 *
 * @desc textarea element role semantic restrictions
 */

{ rule_id             : 'ROLE_14',
  last_updated        : '2016-05-21',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.FORMS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['4.1.1'],
  target_resources    : ['textarea'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : '',
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT    = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY     = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++) {
      var de = dom_elements[i];
      var cs = de.computed_style;

      if ((de.tag_name === 'textarea') && de.has_role) {

        if (cs.is_visible_to_at === VISIBILITY.VISIBLE ) {

          if (de.role && de.role.length > 0) {
            if (' textbox '.indexOf(' ' + de.role + ' ') < 0) {
              rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role]);
            }
            else {
              rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.role]);
            }
          }
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.role]);
        }
      }
    }

  } // end validate function
}




]);
/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Media Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

  /**
   * @object SENSORY_1
   *
   * @desc Content does not rely solely on sensory characteristics
   */

{ rule_id             : 'SENSORY_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.STYLES_READABILITY,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.3',
  wcag_related_ids    : [],
  target_resources    : [],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

    var page_element = dom_cache.headings_landmarks_cache.page_element;

    if (page_element) {
      rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MANUAL_CHECK_1', []);
    }
  } // end validate function
}

]);
/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*      OpenAjax Alliance Table Rules                               */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object TABLE_1
 *
 * @desc If a table is a data table, if each data cell has headers
 */
{ rule_id             : 'TABLE_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6'],
  target_resources    : ['td'],
  primary_property    : 'header_content',
  resource_properties : ['headers', 'header_source'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    function allReadyDone(span_cell) {

      var span_cells_len = span_cells.length;

      for (var i = 0; i < span_cells_len; i++) {
        if (span_cell === span_cells[i]) return true;
      }

      span_cells.push(span_cell);
      return false;
    }

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var HEADER_SOURCE = OpenAjax.a11y.HEADER_SOURCE;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;
    var TABLE_ROLE    = OpenAjax.a11y.TABLE_ROLE;

    var span_cells = [];

    var info_row;
    var info_column;

    var table_elements   = dom_cache.tables_cache.table_elements;
    var table_elements_len = table_elements.length;

//     OpenAjax.a11y.logger.debug("[Table Rule 1] Table Elements on page: " + table_elements_len);

    // Check to see if valid cache reference
    if (table_elements && table_elements_len) {

      for (var i=0; i < table_elements_len; i++) {
        var te = table_elements[i];
        var is_visible_to_at = te.dom_element.computed_style.is_visible_to_at;

//         OpenAjax.a11y.logger.debug("[Table Rule 1] Table Element: " + te + "   is data table: " + te.table_role);

        if (te.table_role === TABLE_ROLE.DATA) {

          var max_row    = te.max_row;
          var max_column = te.max_column;
          var cells      = te.cells;

          for (var r = 0; r < max_row; r++) {
            for (var c = 0; c < max_column; c++) {

              var cell = cells[r][c];

              if (cell &&
                  (cell.table_type === OpenAjax.a11y.TABLE.TD_ELEMENT)) {

                if (is_visible_to_at == VISIBILITY.VISIBLE) {

                  if(cell.has_spans && allReadyDone(cell)) continue;

                  if (!cell.has_content) {
                    rule_result.addResult(TEST_RESULT.MANUAL_CHECK, cell, 'ELEMENT_MC_1', []);
                  }
                  else {
                    if (cell.header_content.length > 0) {
                      rule_result.addResult(TEST_RESULT.PASS, cell, 'ELEMENT_PASS_1', []);
                    }
                    else {
                      if (cell.header_source === HEADER_SOURCE.ROW_OR_COLUMN_HEADERS) {
                        rule_result.addResult(TEST_RESULT.FAIL, cell, 'ELEMENT_FAIL_1', []);
                      }
                      else {
                        rule_result.addResult(TEST_RESULT.FAIL, cell, 'ELEMENT_FAIL_2', []);
                      }
                    }
                  }
                }
                else {
                 rule_result.addResult(TEST_RESULT.HIDDEN, cell, 'ELEMENT_HIDDEN_1', []);
                }
              }
            }
          }
        }
      } // end loop
    }
  } // end validation function
 },

/**
 * @object TABLE_2
 *
 * @desc Data table %s have an accessible name
 */
{ rule_id             : 'TABLE_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.6',
  wcag_related_ids    : ['1.3.1'],
  target_resources    : ['table', 'caption'],
  primary_property    : 'accessible_name',
  resource_properties : ['accessible_name_source', 'accessible_description', 'summary', 'title', 'aria-label', 'aria-labelledby'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var SOURCE      = OpenAjax.a11y.SOURCE;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var table_elements     = dom_cache.tables_cache.table_elements;
    var table_elements_len = table_elements.length;

    var data_tables = [];
    var visible_data_tables = 0;

    var i, te, de, cs;

//     OpenAjax.a11y.logger.debug("[Table Rule 2] Number of tables: " + table_elements_len);

    // Check to see if valid cache reference
    if (table_elements && table_elements_len) {

      for (i = 0; i < table_elements_len; i++) {
        te = table_elements[i];
        de = te.dom_element;
        cs = de.computed_style;

        if ((te.table_role === OpenAjax.a11y.TABLE_ROLE.DATA) ||
            (te.table_role === OpenAjax.a11y.TABLE_ROLE.COMPLEX)) {
          data_tables.push(te);
          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) visible_data_tables += 1;
        }
      } // end loop

      if (visible_data_tables > 0) {

        for (i = 0; i < data_tables.length; i++) {
          te = table_elements[i];
          de = te.dom_element;
          cs = de.computed_style;

          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {

            if (te.accessible_name.length > 0) {

               switch (te.accessible_name_source) {

               case SOURCE.TABLE_CAPTION:
                  rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_1', [te.accessible_name]);
                  break;

               case SOURCE.TABLE_SUMMARY:
                  rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_2', [te.aaccessible_name]);
                  break;

               case SOURCE.ARIA_LABEL:
                  rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_3', [te.accessible_name]);
                  break;

               case SOURCE.ARIA_LABELLEDBY:
                  rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_4', [te.accessible_name]);
                  break;

               case SOURCE.TITLE_ATTRIBUTE:
                  rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_5', [te.accessible_name]);
                  break;
               default:

                  break;
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, te, 'ELEMENT_FAIL_1', []);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, te, 'ELEMENT_HIDDEN_1', []);
          }
        } // end loop
      }
    }
  } // end validation function
 },

/**
 * @object TABLE_3
 *
 * @desc  Complex data tables should have a text description or summary of data in the table
 */

{ rule_id             : 'TABLE_3',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6'],
  target_resources    : ['table'],
  primary_property    : 'accessible_description',
  resource_properties : ['accessible_description_source', 'accessible_name', 'summary', 'title', 'aria-describedby'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT        = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY         = OpenAjax.a11y.VISIBILITY;
    var DESCRIPTION_SOURCE = OpenAjax.a11y.DESCRIPTION_SOURCE;
    var TABLE_ROLE         = OpenAjax.a11y.TABLE_ROLE;

    var LARGE_TABLE_CELL_COUNT = 64;

    var table_elements     = dom_cache.tables_cache.table_elements;
    var table_elements_len = table_elements.length;

    // Check to see if valid cache reference
    if (table_elements && table_elements_len) {

      for (var i = 0; i < table_elements_len; i++) {
        var te = table_elements[i];
        var is_visible_to_at = te.dom_element.computed_style.is_visible_to_at;

        if ((te.table_role === OpenAjax.a11y.TABLE_ROLE.DATA) ||
            (te.table_role === OpenAjax.a11y.TABLE_ROLE.COMPLEX)) {

          if (is_visible_to_at == VISIBILITY.VISIBLE) {

            if (te.accessible_description.length > 0) {

              switch (te.accessible_description_source) {

              case DESCRIPTION_SOURCE.TABLE_SUMMARY:
                rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_1', []);
                break;

              case DESCRIPTION_SOURCE.ARIA_DESCRIBEDBY:
                rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_2', []);
                break;

              default:
                rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_3', []);
                break;
              }
            }
            else {
              if (te.table_role === TABLE_ROLE.COMPLEX) {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, te, 'ELEMENT_MC_2', []);
              }
              else {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, te, 'ELEMENT_MC_1', []);
              }
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, te, 'ELEMENT_HIDDEN_1', []);
          }
        }
      } // end loop
    }
  } // end validation function
 },

/**
 * @object TABLE_4
 *
 * @desc   Data tables with accessible names must be unique
 */

{ rule_id             : 'TABLE_4',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6'],
  target_resources    : ['table'],
  primary_property    : 'accessible_name',
  resource_properties : ['accessible_name_source', 'accessible_name_for_comparison'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;

    var span_cells = [];

    var info_row;
    var info_column;

    var table_elements   = dom_cache.tables_cache.table_elements;
    var table_elements_len = table_elements.length;

    var table_visible = [];
    var i;
    var j;

    // Check to see if valid cache reference
    if (table_elements && table_elements_len) {

      for (i = 0; i < table_elements_len; i++) {
        var te = table_elements[i];
        var is_visible_to_at = te.dom_element.computed_style.is_visible_to_at;

        if (((te.table_role === OpenAjax.a11y.TABLE_ROLE.DATA) ||
             (te.table_role === OpenAjax.a11y.TABLE_ROLE.COMPLEX)) &&
             te.accessible_name_length) {
          if (is_visible_to_at == VISIBILITY.VISIBLE) {
            if (te.accessible_name_for_comparison.length) {
              table_visible.push(te);
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, te, 'ELEMENT_FAIL_2', []);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, te, 'ELEMENT_HIDDEN_1', []);
          }
        }
      } // end loop

      for (i = 0; i < table_visible.length; i++) {
        var te1 = table_visible[i];
        var count = 0;

        for(j = 0; j < table_visible.length; j++) {

          var te2 = table_visible[j];

          if (te1.accessible_name_for_comparison === te2.accessible_name_for_comparison) {
            count += 1;
            if (count > 1) break;
          }
        }

//        OpenAjax.a11y.logger.debug("[Table Rule 4]: " + te1.accessible_name + " '" + te1.accessible_name_for_comparison + "' " + te1.accessible_name_for_comparison.length + " "+ count);

        if (count < 2) {
          rule_result.addResult(TEST_RESULT.PASS, te1, 'ELEMENT_PASS_1', [te1.accessible_name]);
        }
        else {
            rule_result.addResult(TEST_RESULT.FAIL, te1, 'ELEMENT_FAIL_1', [te1.accessible_name]);
        }
      }
    }
  } // end validation function
},

/**
 * @object TABLE_5
 *
 * @desc  Identifies a table is being used for layout or tabular data, or cannot be determined form markup
 */

 { rule_id             : 'TABLE_5',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6'],
  target_resources    : ['table'],
  primary_property    : 'table_role',
  resource_properties : ['accessible_name', 'accessible_description'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var table_elements     = dom_cache.tables_cache.table_elements;
    var table_elements_len = table_elements.length;

    // Check to see if valid cache reference
    if (table_elements && table_elements_len) {

      for (var i = 0; i < table_elements_len; i++) {
        var te = table_elements[i];
        var es = te.effective_summary_for_comparison;
        var ec = te.effective_caption_for_comparison;
        var is_visible_to_at = te.dom_element.computed_style.is_visible_to_at;

        if (is_visible_to_at == VISIBILITY.VISIBLE) {

          if (te.table_role === OpenAjax.a11y.TABLE_ROLE.DATA) rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_1', []);
          else if (te.table_role === OpenAjax.a11y.TABLE_ROLE.COMPLEX) rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_3', []);
          else if (te.table_role === OpenAjax.a11y.TABLE_ROLE.LAYOUT)  rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_2', []);
          else if (te.max_row    < 2) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, te, 'ELEMENT_MC_1', []);
          else if (te.max_column < 2) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, te, 'ELEMENT_MC_2', []);
          else rule_result.addResult(TEST_RESULT.FAIL, te, 'ELEMENT_FAIL_1', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.HIDDEN, te, 'ELEMENT_HIDDEN_1', []);
        }
      } // end loop
    }
  } // end validation function
 },

/**
 * @object TABLE_6
 *
 * @desc    Tests if table headers use TH elements instead of TD with SCOPE
 */

{ rule_id             : 'TABLE_6',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6'],
  target_resources    : ['td[scope]'],
  primary_property    : 'tag_name',
  resource_properties : ['scope'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    function allReadyDone(span_cell) {

      var span_cells_len = span_cells.length;

      for (var i = 0; i < span_cells_len; i++) {
        if (span_cell === span_cells[i]) return true;
      }

      span_cells.push(span_cell);
      return false;
    }

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;

    var span_cells = [];

    var info_row;
    var info_column;

    var table_elements   = dom_cache.tables_cache.table_elements;
    var table_elements_len = table_elements.length;

    // Check to see if valid cache reference
    if (table_elements && table_elements_len) {

      for (var i=0; i < table_elements_len; i++) {
        var te = table_elements[i];
        var is_visible_to_at = te.dom_element.computed_style.is_visible_to_at;

        if ((te.table_role === OpenAjax.a11y.TABLE_ROLE.DATA) ||
            (te.table_role === OpenAjax.a11y.TABLE_ROLE.COMPLEX)) {

          var max_row    = te.max_row;
          var max_column = te.max_column;
          var cells      = te.cells;

          for (var r = 0; r < max_row; r++) {
            for (var c = 0; c < max_column; c++) {

              var cell = cells[r][c];

              if (cell && cell.table_type  === OpenAjax.a11y.TABLE.TH_ELEMENT) {

                if (is_visible_to_at == VISIBILITY.VISIBLE) {

                  if(cell.has_spans && allReadyDone(cell)) continue;

                  if(cell.dom_element.tag_name === 'th') rule_result.addResult(TEST_RESULT.PASS, cell, 'ELEMENT_PASS_1', []);
                  else rule_result.addResult(TEST_RESULT.FAIL, cell, 'ELEMENT_FAIL_1', []);

                }
                else {
                 rule_result.addResult(TEST_RESULT.HIDDEN, cell, 'ELEMENT_HIDDEN_1', []);
                }
              }
            }
          }
        }
      } // end loop
    }
  } // end validation function
},

/**
 * @object TABLE_7
 *
 * @desc  Data cells in complex table must use headers attributes
 */

{ rule_id             : 'TABLE_7',
  last_updated        : '2015-02-20',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6'],
  target_resources    : ['td'],
  primary_property    : 'header_content',
  resource_properties : ['headers', 'header_source'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    function allReadyDone(span_cell) {

      var span_cells_len = span_cells.length;

      for (var i = 0; i < span_cells_len; i++) {
        if (span_cell === span_cells[i]) return true;
      }

      span_cells.push(span_cell);
      return false;
    }

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var HEADER_SOURCE = OpenAjax.a11y.HEADER_SOURCE;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;
    var TABLE_ROLE    = OpenAjax.a11y.TABLE_ROLE;

    var span_cells = [];

    var info_row;
    var info_column;

    var table_elements   = dom_cache.tables_cache.table_elements;
    var table_elements_len = table_elements.length;

//     OpenAjax.a11y.logger.debug("[Table Rule 7] Table Elements on page: " + table_elements_len);

    // Check to see if valid cache reference
    if (table_elements && table_elements_len) {

      for (var i=0; i < table_elements_len; i++) {
        var te = table_elements[i];
        var is_visible_to_at = te.dom_element.computed_style.is_visible_to_at;

//         OpenAjax.a11y.logger.debug("[Table Rule 1] Table Element: " + te + "   is data table: " + te.table_role);

        if (te.table_role === TABLE_ROLE.COMPLEX) {

          var max_row    = te.max_row;
          var max_column = te.max_column;
          var cells      = te.cells;

//         OpenAjax.a11y.logger.debug("[Table Rule 1] Cell: " + cell + " headers: " + cell.headers);

          for (var r = 0; r < max_row; r++) {
            for (var c = 0; c < max_column; c++) {

              var cell = cells[r][c];

              if (cell &&
                  (cell.table_type === OpenAjax.a11y.TABLE.TD_ELEMENT)) {

                if (is_visible_to_at == VISIBILITY.VISIBLE) {

                  if(cell.has_spans && allReadyDone(cell)) continue;

                  if (!cell.has_content) {
                    rule_result.addResult(TEST_RESULT.MANUAL_CHECK, cell, 'ELEMENT_MC_1', []);
                  }
                  else {
                    if (cell.header_source === HEADER_SOURCE.HEADERS_ATTRIBUTE) {
                      if (cell.has_content) {
                        rule_result.addResult(TEST_RESULT.PASS, cell, 'ELEMENT_PASS_1', [cell.headers]);
                      }
                      else {
                        rule_result.addResult(TEST_RESULT.FAIL, cell, 'ELEMENT_FAIL_1', [cell.headers]);
                      }
                    }
                    else {
                      if (cell.headers && cell.headers.length > 0) {
                        rule_result.addResult(TEST_RESULT.FAIL, cell, 'ELEMENT_FAIL_5', [cell.headers]);
                      }
                      else {
                        rule_result.addResult(TEST_RESULT.FAIL, cell, 'ELEMENT_FAIL_1', []);
                      }
                    }
                  }
                }
                else {
                 rule_result.addResult(TEST_RESULT.HIDDEN, cell, 'ELEMENT_HIDDEN_1', []);
                }
              }
            }
          }
        }
      } // end loop
    }
  }
},

/**
 * @object TABLE_8
 *
 * @desc    Accessible name and description must be different, description longer than name
 */

{ rule_id             : 'TABLE_8',
  last_updated        : '2015-02-20',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TABLES,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '1.3.1',
  wcag_related_ids    : ['2.4.6'],
  target_resources    : ['caption', 'table[summary]', 'table[title]'],
  primary_property    : 'accessible_name',
  resource_properties : ['accessible_name_source', 'accessible_description', 'accessible_description_source'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT   = OpenAjax.a11y.TEST_RESULT;
    var HEADER_SOURCE = OpenAjax.a11y.HEADER_SOURCE;
    var VISIBILITY    = OpenAjax.a11y.VISIBILITY;
    var TABLE_ROLE    = OpenAjax.a11y.TABLE_ROLE;

    var span_cells = [];

    var info_row;
    var info_column;

    var table_elements   = dom_cache.tables_cache.table_elements;
    var table_elements_len = table_elements.length;

    // Check to see if valid cache reference
    if (table_elements && table_elements_len) {

      for (var i=0; i < table_elements_len; i++) {
        var te = table_elements[i];
        var is_visible_to_at = te.dom_element.computed_style.is_visible_to_at;

//        OpenAjax.a11y.logger.debug("[Table Rule 8]          Table Element: " + te);
//        OpenAjax.a11y.logger.debug("[Table Rule 8]        Accessible Name: " + te.accessible_name_for_comparison);
//        OpenAjax.a11y.logger.debug("[Table Rule 8] Accessible Description: " + te.accessible_description_for_comparison);

        if (((te.table_role === TABLE_ROLE.DATA) ||
             (te.table_role === TABLE_ROLE.COMPLEX)) &&
            te.accessible_name_for_comparison.length &&
            te.accessible_description_for_comparison.length) {

          if (is_visible_to_at === VISIBILITY.VISIBLE) {
            if (te.accessible_name_for_comparison === te.accessible_description_for_comparison ) {
              rule_result.addResult(TEST_RESULT.FAIL, te, 'ELEMENT_FAIL_1', []);
            }
            else {
              if (te.accessible_name_for_comparison.length >= te.accessible_description_for_comparison.length) {
                rule_result.addResult(TEST_RESULT.MANUAL_CHECK, te, 'ELEMENT_MC_1', []);
              }
              else {
                rule_result.addResult(TEST_RESULT.PASS, te, 'ELEMENT_PASS_1', []);
              }
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, te, 'ELEMENT_HIDDEN_1', []);
          }
        }
      }
    }
  } // end validation function
}
]);



/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Media Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object TIMING_1
 *
 * @desc Timing adjustable for pages with interactive elements
 */

{ rule_id             : 'TIMING_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TIMING,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.2.1',
  wcag_related_ids    : [],
  target_resources    : ['a', 'input', 'button', 'wdiget'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

    var page_element = dom_cache.timing_cache.page_element;

    rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);

  } // end validate function
},

/**
 * @object TIMING_2
 *
 * @desc Stop, puase or hide content that is moving, scrolling, flashing or auto updating
 */

{ rule_id             : 'TIMING_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TIMING,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.2.2',
  wcag_related_ids    : [],
  target_resources    : ['applet', 'canvas', 'embed', 'img', 'object', 'svg'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var timing_elements     = dom_cache.timing_cache.timing_elements;
    var timing_elements_len = timing_elements.length;

    var page_element = dom_cache.timing_cache.page_element;

    for (var i = 0; i < timing_elements_len; i++) {
      var mbe = timing_elements[i];
      var de = mbe.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        rule_result.addResult(TEST_RESULT.MANUAL_CHECK, mbe, 'ELEMENT_MC_1', [de.tag_name]);
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, mbe, 'ELEMENT_HIDDEN_1', [de.tag_name]);
      }
    }

    rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);

  } // end validate function
},

/**
 * @object TIMING_3
 *
 * @desc Web pages do not contain anything that flashes more than three times in any one second period
 */

{ rule_id             : 'TIMING_3',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.TIMING,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.3.1',
  wcag_related_ids    : [],
  target_resources    : ['applet', 'canvas', 'embed', 'img', 'object', 'svg'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var timing_elements     = dom_cache.timing_cache.timing_elements;
    var timing_elements_len = timing_elements.length;

    var page_element = dom_cache.timing_cache.page_element;

    for (var i = 0; i < timing_elements_len; i++) {
      var mbe = timing_elements[i];
      var de = mbe.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        rule_result.addResult(TEST_RESULT.MANUAL_CHECK, mbe, 'ELEMENT_MC_1', [de.tag_name]);
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, mbe, 'ELEMENT_HIDDEN_1', [de.tag_name]);
      }
    }

    rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);

  } // end validate function
}

]);
/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Heading and Landmark Rules                    */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object TITLE_1
 *
 * @desc the title element text content must describe the purpose or content of the page
 */

{ rule_id             : 'TITLE_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.SITE_NAVIGATION,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '2.4.2',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['Page', 'title'],
  primary_property    : 'name',
  resource_properties : ['tag_name', 'name_for_comparison'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

      var title_element  = dom_cache.headings_landmarks_cache.title_element;

      if (dom_cache.document_has_title) {

        if (title_element.name_for_comparison.length) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, title_element, 'PAGE_MC_1', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.FAIL, title_element, 'PAGE_FAIL_1', []);
        }
      }
      else {
        rule_result.addResult(TEST_RESULT.FAIL, title_element, 'PAGE_FAIL_2', []);
      }

    } // end validate function
},

/**
 * @object TITLE_2
 *
 * @desc The words in the @h1@ content must be part of the title element text content.
 *
 */

{ rule_id             : 'TITLE_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.PAGE,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.SITE_NAVIGATION,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.2',
  wcag_related_ids    : ['1.3.1', '2.4.6'],
  target_resources    : ['Page', 'title', 'h1'],
  primary_property    : 'name',
  resource_properties : ['tag_name', 'name_for_comparison'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

      function compareTextContent(s1, s2) {

        var words = s2.split(' ');
        var words_len = words.length;
        var words_match = 0;
        var words_not_matched = 0;
        var characters_match = 0;
        var characters_not_matched = 0;

//        OpenAjax.a11y.logger.debug("Comparison: " + s1 + "/" + s2);

        for (var i = 0; i < words_len; i++) {
          var w = words[i];
          if (s1.indexOf(w) >= 0) {
            characters_match += w.length;
            words_match++;
          }
          else {
            characters_not_matched += w.length;
            words_not_matched++;
          }
        }

//        OpenAjax.a11y.logger.debug("Match Information: " + (characters_match * words_match) + "/" + (characters_not_matched * words_not_matched));

        if (characters_not_matched === 0) return true;

        var p = (100 * characters_match * words_match) / ((characters_match  * words_match) + (characters_not_matched * words_not_matched ));

//        OpenAjax.a11y.logger.debug("Match Percentage: " + p);

        if (p > 80) return true;

        return false;
      }

      var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
      var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

      var title_element  = dom_cache.headings_landmarks_cache.title_element;
      var page_element   = dom_cache.headings_landmarks_cache.page_element;
      var h1_elements    = dom_cache.headings_landmarks_cache.h1_elements;
      var visible_h1_element_count = 0;
      var passed_h1_element_count  = 0;
      var i, h1, de, cs;

//      OpenAjax.a11y.logger.debug('[RULE][TITLE 2] Title: ' + title_element.name_for_comparison + '(' + title_element.name_for_comparison.length + ')');

      if (title_element.name_for_comparison.length === 0) {
        rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_1', []);
      }
      else {

        var h1_count = h1_elements.length;

        for(i = 0; i < h1_count; i++) {
          h1 = h1_elements[i];
          de = h1.dom_element;
          cs = de.computed_style;
          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) visible_h1_element_count += 1;
        }

        for(i = 0; i < h1_count; i++) {
          h1 = h1_elements[i];
          de = h1.dom_element;
          cs = de.computed_style;

//          OpenAjax.a11y.logger.debug('[RULE][TITLE 2] H1: ' + h1.name_for_comparison + '(' + h1.name_for_comparison.length + ')');

          if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
            if (h1.name_for_comparison.length) {
              if (compareTextContent(title_element.name_for_comparison, h1.name_for_comparison)) {
                rule_result.addResult(TEST_RESULT.PASS, h1, 'ELEMENT_PASS_1', []);
                passed_h1_element_count++;
              }
              else {
                if (visible_h1_element_count > 2) {
                  rule_result.addResult(TEST_RESULT.MANUAL_CHECK, h1, 'ELEMENT_MC_1', []);
                }
                else {
                  rule_result.addResult(TEST_RESULT.FAIL, h1, 'ELEMENT_FAIL_1', []);
                }
              }
            }
            else {
              rule_result.addResult(TEST_RESULT.FAIL, h1, 'ELEMENT_FAIL_2', []);
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, h1, 'ELEMENT_HIDDEN_1', []);
          }
        }

        if (visible_h1_element_count === 0) rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_2', []);
        else if (visible_h1_element_count > 2) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, page_element, 'PAGE_MC_1', []);
        else if (visible_h1_element_count !== passed_h1_element_count) rule_result.addResult(TEST_RESULT.FAIL, page_element, 'PAGE_FAIL_4', []);
        else if (visible_h1_element_count === 1) rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_1', []);
        else rule_result.addResult(TEST_RESULT.PASS, page_element, 'PAGE_PASS_2', []);
      }
    } // end validate function
  }
 ]);
/**
 * Copyright 2011-2018 OpenAjax Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* ---------------------------------------------------------------- */
/*            OpenAjax Alliance Media Rules                         */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object VIDEO_1
 *
 * @desc Video elements used for prerecorded video only content using the video element must have text or audio description
 */

{ rule_id             : 'VIDEO_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.1',
  wcag_related_ids    : ['1.2.2', '1.2.4'],
  target_resources    : ['video', 'track'],
  primary_property    : '',
  resource_properties : ['controls', 'autoplay', 'name', 'type', 'src', 'label'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var video_elements     = dom_cache.media_cache.video_elements;
    var video_elements_len = video_elements.length;

    for (var i = 0; i < video_elements_len; i++) {
      var ve = video_elements[i];
      var de = ve.dom_element;
      var cs = de.computed_style;

      if ((cs.is_visible_to_at === VISIBILITY.VISIBLE) ||
          (ve.has_autoplay)) {
        if (ve.getTextTracks().length) rule_result.addResult(TEST_RESULT.PASS, ve, 'ELEMENT_PASS_1', []);
        else if (de.has_aria_describedby) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ve, 'ELEMENT_MC_1', []);
        else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ve, 'ELEMENT_MC_2', []);
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, ve, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object VIDEO_2
 *
 * @desc Video elements used for prerecorded video only content using the object element must have text or audio description
 */

{ rule_id             : 'VIDEO_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.1',
  wcag_related_ids    : ['1.2.2', '1.2.4'],
  target_resources    : ['object', 'param'],
  primary_property    : '',
  resource_properties : ['data', 'type', 'name', 'value', 'valuetype'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var object_elements     = dom_cache.media_cache.object_elements;
    var object_elements_len = object_elements.length;

    for (var i = 0; i < object_elements_len; i++) {
      var oe = object_elements[i];
      var de = oe.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (oe.isTypeVideo()) {
          if (de.has_aria_describedby) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_1', []);
          else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_2', []);
        }
        else {
          if (de.has_aria_describedby) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_3', []);
          else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_4', []);
        }
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, oe, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object VIDEO_3
 *
 * @desc Video elements used for prerecorded video only content using the embed element must have text or audio description
 */

{ rule_id             : 'VIDEO_3',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.1',
  wcag_related_ids    : ['1.2.2', '1.2.4'],
  target_resources    : ['embed'],
  primary_property    : '',
  resource_properties : ['src', 'type'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var embed_elements     = dom_cache.media_cache.embed_elements;
    var embed_elements_len = embed_elements.length;

    for (var i = 0; i < embed_elements_len; i++) {
      var ee = embed_elements[i];
      var de = ee.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (ee.isTypeVideo()) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ee, 'ELEMENT_MC_1', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ee, 'ELEMENT_MC_2', []);
        }
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, ee, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object VIDEO_4
 *
 * @desc Live and prerecorded video with synchronized audio (i.e. movie, lecture) using the video element must have captions
 */

{ rule_id             : 'VIDEO_4',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.2',
  wcag_related_ids    : ['1.2.4'],
  target_resources    : ['video', 'track'],
  primary_property    : '',
  resource_properties : ['controls', 'autoplay', 'name', 'type', 'src', 'label'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var video_elements     = dom_cache.media_cache.video_elements;
    var video_elements_len = video_elements.length;

    for (var i = 0; i < video_elements_len; i++) {
      var ve = video_elements[i];
      var de = ve.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (ve.hasCaptionTrack() || ve.hasSubtitleTrack()) rule_result.addResult(TEST_RESULT.PASS, ve, 'ELEMENT_PASS_1', []);
        else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ve, 'ELEMENT_MC_1', []);
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, ve, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object VIDEO_5
 *
 * @desc Live and prerecorded video with synchronized audio (i.e. movie, lecture) using the object element must have captions
 */

{ rule_id             : 'VIDEO_5',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.2',
  wcag_related_ids    : ['1.2.4'],
  target_resources    : ['object', 'param'],
  primary_property    : '',
  resource_properties : ['data', 'type', 'name', 'value', 'valuetype'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var object_elements     = dom_cache.media_cache.object_elements;
    var object_elements_len = object_elements.length;

    for (var i = 0; i < object_elements_len; i++) {
      var oe = object_elements[i];
      var de = oe.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (oe.isTypeVideo()) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_1', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_2', []);
        }
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, oe, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object VIDEO_6
 *
 * @desc Live and prerecorded video with synchronized audio (i.e. movie, lecture) using the embed element must have captions
 */

{ rule_id             : 'VIDEO_6',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.2',
  wcag_related_ids    : ['1.2.1', '1.2.4'],
  target_resources    : ['embed'],
  primary_property    : '',
  resource_properties : ['src', 'type'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var embed_elements     = dom_cache.media_cache.embed_elements;
    var embed_elements_len = embed_elements.length;

    for (var i = 0; i < embed_elements_len; i++) {
      var ee = embed_elements[i];
      var de = ee.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (ee.isTypeVideo()) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ee, 'ELEMENT_MC_1', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ee, 'ELEMENT_MC_2', []);
        }
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, ee, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object VIDEO_7
 *
 * @desc Prerecorded video with synchronized audio (i.e. movie) using the video element must have audio description
 */

{ rule_id             : 'VIDEO_7',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.3',
  wcag_related_ids    : ['1.2.5'],
  target_resources    : ['video', 'track'],
  primary_property    : '',
  resource_properties : ['controls', 'autoplay', 'name', 'type', 'src', 'label'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var video_elements     = dom_cache.media_cache.video_elements;
    var video_elements_len = video_elements.length;

    for (var i = 0; i < video_elements_len; i++) {
      var ve = video_elements[i];
      var de = ve.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (ve.hasDescriptionTrack()) rule_result.addResult(TEST_RESULT.PASS, ve, 'ELEMENT_PASS_1', []);
        else rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ve, 'ELEMENT_MC_1', []);
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, ve, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object VIDEO_8
 *
 * @desc Prerecorded video with synchronized audio (i.e. movie) using the object element must have audio description
 */

{ rule_id             : 'VIDEO_8',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.3',
  wcag_related_ids    : ['1.2.1', '1.2.5'],
  target_resources    : ['object', 'param'],
  primary_property    : '',
  resource_properties : ['data', 'type', 'name', 'value', 'valuetype'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var object_elements     = dom_cache.media_cache.object_elements;
    var object_elements_len = object_elements.length;

    for (var i = 0; i < object_elements_len; i++) {
      var oe = object_elements[i];
      var de = oe.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (oe.isTypeVideo()) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_1', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, oe, 'ELEMENT_MC_2', []);
        }
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, oe, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
},

/**
 * @object VIDEO_9
 *
 * @desc Prerecorded video with synchronized audio (i.e. movie) using the embed element must have audio description
 */

{ rule_id             : 'VIDEO_9',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.AUDIO_VIDEO,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP1,
  wcag_primary_id     : '1.2.3',
  wcag_related_ids    : ['1.2.1', '1.2.5'],
  target_resources    : ['embed'],
  primary_property    : '',
  resource_properties : ['src', 'type'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var MEDIA       = OpenAjax.a11y.MEDIA;

    var embed_elements     = dom_cache.media_cache.embed_elements;
    var embed_elements_len = embed_elements.length;

    for (var i = 0; i < embed_elements_len; i++) {
      var ee = embed_elements[i];
      var de = ee.dom_element;
      var cs = de.computed_style;

      if (cs.is_visible_to_at === VISIBILITY.VISIBLE) {
        if (ee.isTypeVideo()) {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ee, 'ELEMENT_MC_1', []);
        }
        else {
          rule_result.addResult(TEST_RESULT.MANUAL_CHECK, ee, 'ELEMENT_MC_2', []);
        }
      }
      else {
       rule_result.addResult(TEST_RESULT.HIDDEN, ee, 'ELEMENT_HIDDEN_1', []);
      }
    }
  } // end validate function
}

]);
/* ---------------------------------------------------------------- */
/*  OpenAjax Alliance Control Rules                                 */
/* ---------------------------------------------------------------- */

OpenAjax.a11y.RuleManager.addRulesFromJSON([

/**
 * @object WIDGET_1
 *
 * @desc ARIA Widgets must have accessible names
 */

{ rule_id             : 'WIDGET_1',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[role="widget"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['accessible_description', 'computed_label_source'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var widgets     = dom_cache.controls_cache.widget_elements;
     var widgets_len = widgets.length;

     // Check to see if valid cache reference
     if (widgets && widgets_len) {

       for (var i = 0; i < widgets_len; i++) {
         var we = widgets[i];
         var de = we.dom_element;

         if (de.is_widget) {

           if (de.computed_style.is_visible_to_at == VISIBILITY.VISIBLE) {

             if (we.computed_label && we.computed_label.length) {
               rule_result.addResult(TEST_RESULT.PASS, we, 'ELEMENT_PASS_1', [de.tag_name, de.role, we.computed_label]);
             }
             else {
               if (!de.role_info.reqName) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_1', [de.tag_name, de.role]);
               else rule_result.addResult(TEST_RESULT.FAIL, we, 'ELEMENT_FAIL_1', [de.tag_name, de.role]);
             }
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, we, 'ELEMENT_HIDDEN_1', [de.tag_name, de.role]);
           }
         }
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_2
 *
 * @desc Elements with onClick event handlers event handlers need role
 */

{ rule_id             : 'WIDGET_2',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[onClick]'],
  primary_property    : 'has_click',
  resource_properties : ['tag_name', 'role', 'is_widget'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function hasDecendantWidgetRole(dom_element) {

       function checkChildren(list) {

         if (!list) return false;

         var flag = false;

         for (var i = 0; (i < list.length) && !flag; i++) {

           var de = list[i];

           if (de.type != Node.ELEMENT_NODE) continue;

           if (de.is_widget ||
               "input textarea button select".indexOf(de.tag_name) ||
               de.tag_name === "a" ||
               de.tag_name === "area") return true;

           if (de.child_dom_elements.length) flag = checkChildren(de.child_dom_elements);

         }

         return flag;

       }

       return checkChildren(dom_element.child_dom_elements);
     }

    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    if (dom_elements && dom_elements_len) {

      for (var i = 0; i < dom_elements_len; i++) {
        var de = dom_elements[i];
        var style = de.computed_style;

        if (de.events.has_click &&
            ((de.tag_name !== 'body') &&
             (de.tag_name !== 'frame') &&
             (de.tag_name !== 'iframe') &&
             (de.tag_name !== 'embed') &&
             (de.tag_name !== 'object') &&
             (de.tag_name !== 'applet'))) {

          if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {

            if (de.is_widget) {
              rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.tag_name]);
            }
            else {
              if ("input textarea button select".indexOf(de.tag_name) >= 0) {
                rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_2', [de.tag_name]);
              }
              else {
                if ("a area".indexOf(de.tag_name) >= 0) {
                  rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_3', [de.tag_name]);
                }
                else {
                  if (hasDecendantWidgetRole(de)) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', [de.tag_name]);
                  else rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.tag_name]);
                }
              }
            }
          }
          else {
            rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name]);
          }
        }
      } // end loop
    }
  } // end validation function
},

/**
 * @object WIDGET_3
 *
 * @desc Elements with role values must have valid widget or landmark roles
 */

{ rule_id             : 'WIDGET_3',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[role]'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var elements_with_role     = dom_cache.controls_cache.elements_with_role;
     var elements_with_role_len = elements_with_role.length;

     if (elements_with_role && elements_with_role_len) {

       for (var i = 0; i < elements_with_role_len; i++) {
         var de = elements_with_role[i];
         var style = de.computed_style;

         if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {

           if (de.is_widget) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.role]);
           else if (de.is_landmark) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_2', [de.role]);
           else if (de.is_live) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_3', [de.role]);
           else if (de.is_section) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_4', [de.role]);
           else if (de.is_abstract) rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role]);
           else if (de.role.length === 0) rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_2', []);
           else rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_3', [de.role]);
         }
         else {
           rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name, de.role]);
         }
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_4
 *
 * @desc Elements with ARIA attributes have valid values
 */

{ rule_id             : 'WIDGET_4',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[aria-atomic]',
                         '[aria-autocomplete]',
                         '[aria-busy]',
                         '[aria-checked]',
                         '[aria-colcount]',
                         '[aria-colindex]',
                         '[aria-colspan]',
                         '[aria-current]',
                         '[aria-disabled]',
                         '[aria-dropeffect]',
                         '[aria-expanded]',
                         '[aria-grabbed]',
                         '[aria-haspopup]',
                         '[aria-hidden]',
                         '[aria-invalid]',
                         '[aria-label]',
                         '[aria-labelledby]',
                         '[aria-live]',
                         '[aria-modal]',
                         '[aria-multiline]',
                         '[aria-multiselectable]',
                         '[aria-orientation]',
                         '[aria-pressed]',
                         '[aria-readonly]',
                         '[aria-relevant]',
                         '[aria-required]',
                         '[aria-rowcount]',
                         '[aria-rowindex]',
                         '[aria-rowspan]',
                         '[aria-selected]',
                         '[aria-sort]'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function makeProp(label, value) {

       var p = {};

       p.label = label;
       p.value = value;
       p.description = "";

       return p;

     }

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var elements_with_aria_attributes     = dom_cache.controls_cache.elements_with_aria_attributes;
     var elements_with_aria_attributes_len = elements_with_aria_attributes.length;

     if (elements_with_aria_attributes && elements_with_aria_attributes_len) {

       for (var i = 0; i < elements_with_aria_attributes_len; i++) {
         var de = elements_with_aria_attributes[i];
         var style = de.computed_style;
         var aria_attrs = de.aria_attributes;
         var aria_attrs_len = aria_attrs.length;

         for (var j = 0; j < aria_attrs_len; j++) {

           var attr = aria_attrs[j];

           var prop = makeProp(attr.name, attr.value);

           if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {

             if (attr.is_value_valid && attr.tokens) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [attr.name, attr.value], [prop]);
             else if (attr.is_value_valid) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_2', [attr.name, attr.value, attr.type], [prop]);
             else if (attr.type === 'nmtoken' || attr.type === 'boolean') rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [attr.name, attr.value, attr.tokens], [prop]);
             else if (attr.type === 'nmtokens') rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_2', [attr.name, attr.value, attr.tokens], [prop]);
             else rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_3', [attr.name, attr.value, attr.type], [prop]);

           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [attr.name, attr.value], [prop]);
           }

         } // end loop
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_5
 *
 * @desc Elements with ARIA attributes have valid values
 */

{ rule_id             : 'WIDGET_5',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[aria-atomic]',
                         '[aria-autocomplete]',
                         '[aria-busy]',
                         '[aria-checked]',
                         '[aria-controls]',
                         '[aria-describedby]',
                         '[aria-disabled]',
                         '[aria-dropeffect]',
                         '[aria-expanded]',
                         '[aria-flowto]',
                         '[aria-grabbed]',
                         '[aria-haspopup]',
                         '[aria-hidden]',
                         '[aria-invalid]',
                         '[aria-label]',
                         '[aria-labelledby]',
                         '[aria-level]',
                         '[aria-live]',
                         '[aria-multiline]',
                         '[aria-multiselectable]',
                         '[aria-orientation]',
                         '[aria-owns]',
                         '[aria-pressed]',
                         '[aria-readonly]',
                         '[aria-relevant]',
                         '[aria-required]',
                         '[aria-selected]',
                         '[aria-sort]',
                         '[aria-valuemax]',
                         '[aria-valuemin]',
                         '[aria-valuenow]',
                         '[aria-valuetext]'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function makeProp(label, value) {

       var p = {};

       p.label = label;
       p.value = value;
       p.description = "";

       return p;

     }

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var elements_with_aria_attributes     = dom_cache.controls_cache.elements_with_aria_attributes;
     var elements_with_aria_attributes_len = elements_with_aria_attributes.length;

     if (elements_with_aria_attributes && elements_with_aria_attributes_len) {

       for (var i = 0; i < elements_with_aria_attributes_len; i++) {
         var de = elements_with_aria_attributes[i];
         var style = de.computed_style;
         var aria_attrs = de.aria_attributes;
         var aria_attrs_len = aria_attrs.length;

         for (var j = 0; j < aria_attrs_len; j++) {

           var attr = aria_attrs[j];

           var prop = makeProp(attr.name, attr.value);

           if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {

             if (attr.is_valid_attribute) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [attr.name], [prop]);
             else rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [attr.name], [prop]);

           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [attr.name, attr.value], [prop]);
           }

         } // end loop
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_6
 *
 * @desc Widgets must have required properties
 */

{ rule_id             : 'WIDGET_6',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[role]'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function getRequiredPropertiesAndValues(dom_element, required_props) {

       var rps = [];

       var attrs     = dom_element.aria_attributes;
       var attrs_len = attrs.length;

       for (var i = 0; i < required_props.length; i++) {

         var prop = required_props[i];

         var flag = false;

         for (var j = 0; j <attrs_len; j++) {
           if (prop === attrs[j].name) {
             flag = true;
             break;
           }
         }

         var rp = {};
         rp.label = prop;
         rp.description = "";
         rp.defined = flag;

         if (flag) {
           rp.value  = attrs[j].value;
         }
         else {
           rp.value  = "undefined";
         }

         rps.push(rp);

       }

       return rps;

     }

     function getPropsString(props) {

       var str = "";
       var prop_max = props.length - 1;

       for (var i = 0; i < props.length; i++ ) {
         str += props[i];
         if (i !== prop_max) str += ", ";
       }

       return str;

     }

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var widget_elements     = dom_cache.controls_cache.widget_elements;
     var widget_elements_len = widget_elements.length;

     if (widget_elements && widget_elements) {

       for (var i = 0; i < widget_elements_len; i++) {
         var we = widget_elements[i];
         var de = we.dom_element;
         var style = de.computed_style;

//         OpenAjax.a11y.logger.debug("  RULE WIDGET 6: " + de.role + " ("+ de.role_info + ")");

         var required_properties = de.role_info.reqProps;

         if (required_properties) {

           if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {

             var props_string   = getPropsString(required_properties);
             var required_props = getRequiredPropertiesAndValues(de, required_properties);

             var flag = true;

             for (var j = 0; (j < required_props.length) && flag; j++) flag = flag && required_props[j].defined;

             if (flag) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.role, props_string], required_props);
             else rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role, props_string], required_props);
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.role]);
           }
         }
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_7
 *
 * @desc Widgets must have required owned elements
 */

{ rule_id             : 'WIDGET_7',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[role]'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function getRequiredChildRolesString(required_children) {

       var str = "";
       var required_children_max = required_children.length - 1;

       for (var i = 0; i < required_children.length; i++ ) {
         str += required_children[i];
         if (i !== required_children_max) str += ", ";
       }

       return str;

     }

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var widget_elements     = dom_cache.controls_cache.widget_elements;
     var widget_elements_len = widget_elements.length;

     if (widget_elements && widget_elements) {

       for (var i = 0; i < widget_elements_len; i++) {
         var we = widget_elements[i];
         var de = we.dom_element;
         var style = de.computed_style;

         var required_child_roles = de.role_info.reqChildren;

         if (required_child_roles) {

           if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {

             var flag = false;

             for (var j = 0; (j < required_child_roles.length) && !flag; j++) {

               var role = required_child_roles[j];

               flag = we.hasChildRole(role);

             }

             var required_child_roles_string = getRequiredChildRolesString(required_child_roles);

             if (flag) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.role, required_child_roles_string]);
             else rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role, required_child_roles_string]);
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.role]);
           }
         }
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_8
 *
 * @desc Widgets must have required parent roles
 */

{ rule_id             : 'WIDGET_8',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[role]'],
  primary_property    : 'role',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function getRequiredRolesString(required_roles) {

       var str = "";
       var required_roles_max = required_roles.length - 1;

       for (var i = 0; i < required_roles.length; i++ ) {
         str += required_roles[i];
         if (i !== required_roles_max) str += ", ";
       }

       return str;

     }

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var widget_elements     = dom_cache.controls_cache.widget_elements;
     var widget_elements_len = widget_elements.length;

     if (widget_elements && widget_elements) {

       for (var i = 0; i < widget_elements_len; i++) {
         var we = widget_elements[i];
         var de = we.dom_element;
         var style = de.computed_style;

         var required_parent_roles = de.role_info.container;

         if (required_parent_roles) {

           if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {

             var flag = false;

             for (var j = 0; (j < required_parent_roles.length) && !flag; j++) {

               var role = required_parent_roles[j];

               flag = we.hasParentRole(role);

             }

             var required_roles_string = getRequiredRolesString(required_parent_roles);

             if (flag) rule_result.addResult(TEST_RESULT.PASS, de, 'ELEMENT_PASS_1', [de.role, role]);
             else rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [required_roles_string, de.role]);
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.role]);
           }
         }
       } // end loop
     }
   } // end validation function
},
/**
 * @object WIDGET_9
 *
 * @desc Widgets cannot be owned by more than one widget
 */

{ rule_id             : 'WIDGET_9',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[aria-owns]', '[aria-owns]'],
  primary_property    : 'is_owned',
  resource_properties : ['owner_controls'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function getParentWidgetString(list) {

       var str = "";
       list_max = list.length - 1;

       for (var i = 0; i < list.length; i++ ) {
         str += list[i].toString();
         if (i !== list_max) str += "; ";
       }

       return str;

     }

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var widget_elements     = dom_cache.controls_cache.widget_elements;
     var widget_elements_len = widget_elements.length;

     if (widget_elements && widget_elements) {

       for (var i = 0; i < widget_elements_len; i++) {
         var we = widget_elements[i];
         var de = we.dom_element;
         var style = de.computed_style;

         if (we.is_owned) {

           if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {

             var parent_string = getParentWidgetString(we.owner_controls);

             if (we.owner_controls.length === 1) rule_result.addResult(TEST_RESULT.PASS, we, 'ELEMENT_PASS_1', [we.toString(), parent_string]);
             else if (we.owner_controls.length > 1) rule_result.addResult(TEST_RESULT.FAIL, we, 'ELEMENT_FAIL_1', [parent_string, we.toString()]);
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, we, 'ELEMENT_HIDDEN_1', [we.toString()]);
           }
         }
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_10
 *
 * @desc Range widgets with ariavaluenow mut be in range of aria-valuemin and aria-valuemax
 */

{ rule_id             : 'WIDGET_10',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[role="slider"]','[role="progress"]','[role="scrollbar"]','[role="spinbutton"]'],
  primary_property    : '',
  resource_properties : ['aria-valuemin', 'aria-valuenow', 'aria-valuemax'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function getNotNumbersString() {

       var str = "";

       if (isNaN(min)) str += 'aria-valuemin';

       if (isNaN(max)) {
         if (str.length > 0) str += ", ";
         str += 'aria-valuemax';
       }

       if (isNaN(value)) {
         if (str.length > 0) str += ", ";
         str += 'aria-valuenow';
       }

       return str;
     }

     function getNumberCount() {

       var count = 0;

       if (!isNaN(min)) count++;
       if (!isNaN(max)) count++;
       if (!isNaN(value)) count++;

       return count;
     }

     function hasMaxMin() {

       var count = 0;

       if (!isNaN(min)) count++;
       if (!isNaN(max)) count++;

       return count === 2;
     }

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var widget_elements     = dom_cache.controls_cache.widget_elements;
     var widget_elements_len = widget_elements.length;

     if (widget_elements && widget_elements) {

       for (var i = 0; i < widget_elements_len; i++) {
         var we = widget_elements[i];
         var de = we.dom_element;
         var style = de.computed_style;

         if (de.has_range) {

           if (style.is_visible_to_at === VISIBILITY.VISIBLE) {

             var valuetext = de.node.getAttribute('aria-valuetext');
             var min       = parseInt(de.node.getAttribute('aria-valuemin'), 10);
             var max       = parseInt(de.node.getAttribute('aria-valuemax'), 10);
             var value     = parseInt(de.node.getAttribute('aria-valuenow'), 10);
             var number_count = getNumberCount();
             var has_max_min  = hasMaxMin();

             if (typeof valuetext === 'string' && (valuetext.length > 0)) {
               rule_result.addResult(TEST_RESULT.PASS, we, 'ELEMENT_PASS_1', [we, valuetext]);
             }
             else {
               if (number_count === 3 || (de.role === 'progressbar' && has_max_min)) {
                 if (min < max) {
                   if ((min <= value) && (value <= max)) rule_result.addResult(TEST_RESULT.PASS, we, 'ELEMENT_PASS_2', [we, value, min, max]);
                   else if (de.role === 'progressbar' && has_max_min)  rule_result.addResult(TEST_RESULT.PASS, we, 'ELEMENT_PASS_3', [min, max]);
                   else rule_result.addResult(TEST_RESULT.FAIL, we, 'ELEMENT_FAIL_1', [value, min, max]);
                 }
                 else {
                   rule_result.addResult(TEST_RESULT.FAIL, we, 'ELEMENT_FAIL_2', [min, max]);
                 }
               }
               else {

                  if (de.role === 'progressbar' && !has_max_min) {
                    rule_result.addResult(TEST_RESULT.FAIL, we, 'ELEMENT_FAIL_3', [value, min, max]);
                  }
                  else {
                    var not_numbers_string = getNotNumbersString();

                   if (number_count === 1) rule_result.addResult(TEST_RESULT.FAIL, we, 'ELEMENT_FAIL_4', [not_numbers_string]);
                   else rule_result.addResult(TEST_RESULT.FAIL, we, 'ELEMENT_FAIL_5', [not_numbers_string]);
                 }
               }
             }
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, we, 'ELEMENT_HIDDEN_1', [we.toString()]);
           }
         }
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_11
 *
 * @desc Elements with mouse down, mouse move and mouse up events must have roles
 */

{ rule_id             : 'WIDGET_11',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[onmousedown]', '[onmouseup]', '[onmousemove]', '[onkeydown]', '[onkeyup]', '[onkeypress]', '[onclick]', '[ondbclick]', '[ondrag]', '[ondragstart]', '[ondragend]', '[ondragover]', '[onenter]', '[ondragleave]', '[ondrop]'],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     function getUIEvents(dom_element) {

        var events = dom_element.getMouseEvents();
        events += dom_element.getClickEvents();
        events += dom_element.getDragEvents();
        events += dom_element.getKeyboardEvents();

        return events;
     }

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var dom_elements_with_events     = dom_cache.controls_cache.elements_with_events;
     var dom_elements_with_events_len = dom_elements_with_events.length;

     if (dom_elements_with_events_len) {

       for (var i = 0; i < dom_elements_with_events_len; i++) {
         var de = dom_elements_with_events[i];

         var style = de.computed_style;
         var events = getUIEvents(de);

         if (events.length &&
             (de.tag_name !== 'embed') &&
             (de.tag_name !== 'applet') &&
             (de.tag_name !== 'object') &&
             (de.tag_name !== 'video') &&
             (de.tag_name !== 'audio')) {

           if (style.is_visible_to_at === VISIBILITY.VISIBLE) {

             if (de.is_widget) {
               rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MANUAL_CHECK_1', [de.role, events]);
             }
             else {
               if (de.is_interactive) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MANUAL_CHECK_2', [de.tag_name, events]);
               else if (de.containsInteractiveElements()) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MANUAL_CHECK_3', [de.tag_name, events]);
               else rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.tag_name, events]);
             }
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name]);
           }
         }
       } // end loop
     }
   } // end validation function
},
/**
 * @object WIDGET_12
 *
 * @desc Element with widget role label should describe the purpose of the widget
 *
 */

{ rule_id             : 'WIDGET_12',
  last_updated        : '2015-08-10',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '2.4.6',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : ['[role="widget"]'],
  primary_property    : 'accessible_name',
  resource_properties : ['accessible_description', 'computed_label_source'],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var widgets     = dom_cache.controls_cache.widget_elements;
     var widgets_len = widgets.length;

     // Check to see if valid cache reference
     if (widgets && widgets_len) {

       for (var i = 0; i < widgets_len; i++) {
         var we = widgets[i];
         var de = we.dom_element;

         if (de.is_widget) {

           if (de.computed_style.is_visible_to_at == VISIBILITY.VISIBLE) {

             if (we.computed_label && we.computed_label.length) {
               rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_1', [we.computed_label, de.tag_name, de.role]);
             }
             else {
               if (!de.role_info.reqName) rule_result.addResult(TEST_RESULT.MANUAL_CHECK, we, 'ELEMENT_MC_2', [de.tag_name, de.role]);
               else rule_result.addResult(TEST_RESULT.FAIL, we, 'ELEMENT_FAIL_1', [de.tag_name, de.role]);
             }
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, we, 'ELEMENT_HIDDEN_1', [de.tag_name, de.role]);
           }
         }
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_13
 *
 * @desc Warning about using widget roles
 */

{ rule_id             : 'WIDGET_13',
  last_updated        : '2014-11-28',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP3,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : ['1.3.1', '3.3.2'],
  target_resources    : [],
  primary_property    : '',
  resource_properties : [],
  language_dependency : "",
  validate            : function (dom_cache, rule_result) {

     var VISIBILITY  = OpenAjax.a11y.VISIBILITY;
     var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;

     var elements_with_role     = dom_cache.controls_cache.elements_with_role;
     var elements_with_role_len = elements_with_role.length;

     if (elements_with_role && elements_with_role_len) {

       for (var i = 0; i < elements_with_role_len; i++) {
         var de = elements_with_role[i];
         var style = de.computed_style;

         if (de.is_widget) {
           if (style.is_visible_to_at == VISIBILITY.VISIBLE || style.is_visible_onscreen == VISIBILITY.VISIBLE ) {
             rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', [de.role, de.tag_name]);
           }
           else {
             rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name, de.role]);
           }
         }
       } // end loop
     }
   } // end validation function
},

/**
 * @object WIDGET_14
 *
 * @desc     Verify live regions are being used properly
 */
{ rule_id             : 'WIDGET_14',
  last_updated        : '2017-02-08',
  rule_scope          : OpenAjax.a11y.RULE_SCOPE.ELEMENT,
  rule_category       : OpenAjax.a11y.RULE_CATEGORIES.WIDGETS_SCRIPTS,
  rule_group          : OpenAjax.a11y.RULE_GROUP.GROUP2,
  wcag_primary_id     : '4.1.2',
  wcag_related_ids    : [],
  target_resources    : ['[role="alert"]','[role="log"]','[role="status"]','[aria-live]'],
  primary_property    : 'is_live',
  resource_properties : ['is_live', 'role','aria_live', 'aria_atomic', 'aria_busy', 'aria_relavent'],
  language_dependency : "",
  validate          : function (dom_cache, rule_result) {

    var TEST_RESULT = OpenAjax.a11y.TEST_RESULT;
    var VISIBILITY  = OpenAjax.a11y.VISIBILITY;

    var dom_elements     = dom_cache.element_cache.dom_elements;
    var dom_elements_len = dom_elements.length;

    for (var i = 0; i < dom_elements_len; i++ ) {

      var de =dom_elements[i];

      if (de.type != Node.ELEMENT_NODE || !de.is_live || (de.aria_live === 'off')) continue;

      var has_failure = false;

      var has_live_role =  de.role && de.role.length && (" alert log status".indexOf(de.role) > 0);

      if (de.has_aria_live) {
        if (de.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
          rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_1', [de.tag_name, de.aria_live]);
        }
        else {
          if (has_live_role) {

            switch (de.role) {

              case 'alert':
                if (de.aria_live === 'polite') {
                  rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', ['polite', 'assertive',  de.role]);
                  has_failure = true;
                }
                break;

              case 'log':
              case 'status':
                if (de.aria_live === 'assertive') {
                  rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_1', ['assertive', 'polite', de.role]);
                  has_failure = true;
                }
                break;

              default:
                break;

            }
          }
          else {
            rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_1', [de.tag_name, de.aria_live]);
          }
        }
      }

      if (de.has_aria_atomic && has_live_role && (de.role === 'alert' || de.role === 'status')) {

        if (de.aria_atomic === 'false') {
          rule_result.addResult(TEST_RESULT.FAIL, de, 'ELEMENT_FAIL_2', [de.role]);
          has_failure = true;
        }

      }

      if(has_live_role && !has_failure) {

        switch (de.role) {

          case 'alert':
            if (de.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
              rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_2', [de.tag_name, de.role]);
            }
            else {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_2', [de.tag_name]);
            }
            break;

          case 'log':
            if (de.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
              rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_2', [de.tag_name, de.role]);
            }
            else {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_3', [de.tag_name]);
            }
            break;

          case 'status':
            if (de.computed_style.is_visible_to_at === VISIBILITY.HIDDEN) {
              rule_result.addResult(TEST_RESULT.HIDDEN, de, 'ELEMENT_HIDDEN_2', [de.tag_name, de.role]);
            }
            else {
              rule_result.addResult(TEST_RESULT.MANUAL_CHECK, de, 'ELEMENT_MC_4', [de.tag_name]);
            }
            break;

          default:
            break;
        }
      }
    }
  } // end validation function
}
]);
