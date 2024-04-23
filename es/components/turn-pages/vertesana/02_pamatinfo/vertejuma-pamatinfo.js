import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../../../globals/settings';
import styles from "././vertejuma-pamatinfo.css.js";
import { carbonElement as customElement } from '../../../../globals/decorators/carbon-element';

/**
 *
 * VĒRTĒJUMA PĀRSKATĪŠANA
 *
 */
let CDSPValuationReview = _decorate([customElement(`${prefix}-page-pamatinfo`)], function (_initialize, _LitElement) {
  class CDSPValuationReview extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSPValuationReview,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />
      <cds-main-content-block storybook>
        <cds-back-to
          class="cds--css-grid-column cds--col-span-100 cds--grid-column"
          title="Uz sarakstu"
          link="#"></cds-back-to>
        <cds-main-content-title
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang"
          title="Vērtējuma pārskatīšanas izveidosāna">
        </cds-main-content-title>
        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 cds--grid-column-hang">
          <cds-progress-indicator space-equally>
            <cds-progress-step
              style="max-inline-size: none;"
              label="Pārskatīšanas veids"
              description="Step 1: Register a onChange event"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Pamatinfo"
              description="The progress indicator will listen for clicks on the steps"
              state="current"></cds-progress-step>
            <cds-progress-step
              label="Priekšskatījums"
              description="The progress indicator will listen for clicks on the steps"
              state="incomplete"></cds-progress-step>
          </cds-progress-indicator>
        </div>
        <cds-main-content-item
          size="08"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 cds--grid-column-hang">
          <cds-date-picker
            id="datePicker"
            date-format="d.m.Y"
            .locale=${0}>
            <cds-date-picker-input
              size="lg"
              style="width: 100%"
              label-text="Pārskatīšanas/Apstrīdējuma iesnieguma saņemšanas datums"
              placeholder="mm.dd.gggg">
            </cds-date-picker-input>
          </cds-date-picker>
          <cds-main-content-item
            size="08"
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 ">
            <div>
              <cds-file-uploader
                label-description="Max file size is 500kb. Supported file types are .jpg and .png."
                label-title="Augšupielādēt pārskatīšanas/apstrīdējuma iesniegumu">
                <cds-file-uploader-drop-container
                  accept="image/jpeg image/png"
                  name=""
                  slot="drop-container">
                  Ievelciet un nometiet failus šeit vai spiediet, lai
                  augšupielādētu
                </cds-file-uploader-drop-container>
              </cds-file-uploader>
              <cds-file-uploader-item state="edit">
                Filename.png
              </cds-file-uploader-item>
            </div>
          </cds-main-content-item>
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 ">
            <cds-text-editor
              editorId="editor_pamatinfo"
              editorConfig='{
          "editorTitle": "Pārskatīšanas būtība",
          "max_char_length": 100,
          "request_obj": {
            "urlToRequest": "https://jsonplaceholder.typicode.com/posts",
            "requestMethod": "POST",
            "requestValueKey": "value",
            "verificationToken": "token",
            "errorAlertMessage": "Error occurred while fetching data"
            }
        }'></cds-text-editor>
          </div>
        </cds-main-content-item>
        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-button-set>
            <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
            <cds-button href="https://www.ibm.com">Izveidot</cds-button>
          </cds-button-set>
        </div>
      </cds-main-content-block>
    `), {
          firstDayOfWeek: 1,
          weekdays: {
            shorthand: ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se'],
            longhand: ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena']
          },
          months: {
            shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jūn', 'Jūl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
            longhand: ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris']
          },
          rangeSeparator: ' līdz ',
          time_24hr: true
        });
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }]
  };
}, LitElement);
export default CDSPValuationReview;
//# sourceMappingURL=vertejuma-pamatinfo.js.map
