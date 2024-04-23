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
import styles from "././vertejuma-parskatisana.css.js";
import { carbonElement as customElement } from '../../../../globals/decorators/carbon-element';
import Add16 from "../../../../icons/add/16";
import ToolBox16 from "../../../../icons/tool-box/16";
import CertificateCheck16 from "../../../../icons/certificate--check/16";
import OverflowMenuVertical16 from "../../../../icons/overflow-menu--vertical/16";

/**
 *
 * VĒRTĒJUMA PĀRSKATĪŠANA
 *
 */ /**
     *
     * VĒRTĒJUMA PĀRSKATĪŠANA
     *
     */
let CDSPValuationOpen = _decorate([customElement(`${prefix}-page-valuation-open`)], function (_initialize, _LitElement) {
  class CDSPValuationOpen extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSPValuationOpen,
    d: [{
      kind: "field",
      key: "openModal",
      value() {
        return () => {
          //@ts-ignore
          this.shadowRoot.getElementById('modal-example').open = true;
        };
      }
    }, {
      kind: "field",
      key: "itemSelectedHandler",
      value() {
        return event => {
          //@ts-ignore
          this.selectedStatus = event.detail.item.__value;
          //@ts-ignore
          this.shadowRoot.getElementById('status-change-modal').open = true;
          //@ts-ignore
          console.log('selectedStatus', this.selectedStatus);
        };
      }
    }, {
      kind: "field",
      key: "saveButtonHandler",
      value() {
        return () => {
          console.log('test func');
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const statusArray = [{
          text: 'Status 1',
          value: 'Status 1'
        }, {
          text: 'Status 2',
          value: 'Status 2'
        }, {
          text: 'Status 3',
          value: 'Status 3'
        }];
        const statusHistoryPersons = [{
          shortRole: 'PV',
          personName: 'Vards Uzvards 1',
          iconType: '1'
        }, {
          shortRole: 'AV',
          personName: 'Vards Uzvards 2',
          iconType: '2'
        }, {
          shortRole: 'BN',
          personName: 'Vards Uzvards 3',
          iconType: '3'
        }];
        return html(_t || (_t = _`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />

      <cds-modal id="modal-example">
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-label>Dokumenti</cds-modal-label>
          <cds-modal-heading>Dokumenta pievienošana</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body
          ><cds-file-uploader
            label-description="Faila izmērs nedrīkst būt lielāks par 2MB. Atbalstāmie failu tipi .jpg, .png, .doc, .docx, .xls, .txt"
            label-title="Augšupielādēt failus">
            <cds-file-uploader-drop-container
              accept="image/jpeg image/png"
              name=""
              slot="drop-container">
              Pievienot failu
            </cds-file-uploader-drop-container>
          </cds-file-uploader>
          <cds-text-editor
            editorId="editor1"
            editorConfig='{
"editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
"max_char_length": 200,
"fetch_obj": {
"urlToFetch": "https://jsonplaceholder.typicode.com/posts",
"fetchMethod": "POST",
"errorAlertMessages": "Error occurred while fetching data",
"savedAlertMessages": "All data saved successfully"
}
}'></cds-text-editor>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" data-modal-close
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>

      <cds-modal id="status-change-modal">
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-label>Dokumenti</cds-modal-label>
          <cds-modal-heading>Dokumenta pievienošana</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <p>
            Spiežot “atgriezt nodaļas vadītājam” Jūs... paskaidrot, kādas sekas.
          </p>
          <cds-text-editor
            editorId="editor_status_modal"
            editorConfig='{
        "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes"
        }'></cds-text-editor>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" data-modal-close
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>

      <cds-main-content-block-open>
        <div slot="header" class="cds--css-grid-column cds--col-span-100">
          <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19">
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-link href="#"
                >Zinātnes politikas ieviešana, vadība un kapacitātes
                stiprināšana
              </cds-link>
            </cds-label-value-horizontal>
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
            </cds-label-value-horizontal>
            <cds-divider size="3"></cds-divider>
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-link href="#">1.1 </cds-link>
            </cds-label-value-horizontal>
          </cds-contextual-header>
          <div>
            <cds-divider size="3"></cds-divider>
            <cds-inline-notification
              style="min-width: 100%; margin-bottom: .5rem"
              title="Notification title"
              subtitle="Subtitle text goes here."
              low-contrast>
            </cds-inline-notification>
          </div>

          <div class="cds--css-grid cds--css-grid--narrow">
            <div
              class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--css-grid-column">
              <cds-main-content-item size="07">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </cds-main-content-item>
              <cds-main-content-item size="07">
                <cds-related-persons
                  .statusHistoryPersons=${0}></cds-related-persons>
              </cds-main-content-item>
              <cds-main-content-item size="07">
                <cds-status-history></cds-status-history>
              </cds-main-content-item>
            </div>
            <div
              class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6 cds--css-grid-column">
              <div>
                <cds-main-content-item size="07" isStatusChangePanel>
                  <cds-button
                    size="md"
                    type="Primary"
                    @click="${0}"
                    >Saglabāt</cds-button
                  >
                  <cds-dropdown-button
                    label="Mainīt statusu"
                    .dropdownHandler="${0}"
                    .statusArray="${0}"></cds-dropdown-button>
                </cds-main-content-item>
              </div>
            </div>
          </div>
          <cds-main-content-item size="04">
            <cds-related-documents
              title="Saistītie dokumenti"
              class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
              <cds-related-documents-item
                linkTitle="Saistītais PI"
                linkUrl="https://google.com">
                ${0}
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Vērtēšanas veidlapa"
                linkUrl="https://google.com">
                ${0}
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Iesniegums par pārskatīšanu/apstrīdēšanu"
                target="_self"
                linkUrl="https://google.com">
              </cds-related-documents-item>
            </cds-related-documents>
          </cds-main-content-item>
        </div>

        <div
          slot="content"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10">
          <cds-main-content-title
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang"
            title="Vērtējuma pārskatīšanas izveidosāna">
          </cds-main-content-title>

          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-label-value
              label="Apstrīdēšanas iesnieguma saņemšanas datums"
              value="23.03.2023">
            </cds-label-value>
            <cds-label-value label="Pārskatīšanas veids" value="Tiesvedība">
            </cds-label-value>
          </div>

          <cds-main-content-item
            size="08"
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-radio-button-group
              legend-text="Pārskatīšanas lēmums"
              label-position="right"
              orientation="vertical"
              name="radio-group">
              <cds-radio-button
                label-text="VI Lēmumu atstāj spēkā"
                value="VI Lēmumu atstāj spēkā"></cds-radio-button>
              <cds-radio-button
                label-text="Atcelt lēmumu pilnībā"
                value="Atcelt lēmumu pilnībā"></cds-radio-button>
              <cds-radio-button
                label-text="Atcelt lēmumu kādā daļā"
                value="Atcelt lēmumu kādā daļā"></cds-radio-button>
              <cds-radio-button
                label-text="Lietas izskatīšana izbeigta"
                value="Lietas izskatīšana izbeigta"></cds-radio-button>
              <cds-radio-button
                label-text="Izdot satura ziņā citu lēmumu"
                value="Izdot satura ziņā citu lēmumu"></cds-radio-button>
            </cds-radio-button-group>
          </cds-main-content-item>
          <cds-main-content-item
            size="08"
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-text-editor
              editorId="editor3"
              editorConfig='{
    "editorTitle": "Pārskatīšanas būtība",
    "max_char_length": 200,
    "request_obj": {
        "urlToRequest": "https://jsonplaceholder.typicode.com/posts",
        "requestMethod": "POST",
        "requestValueKey": "value",
        "verificationToken": "token",
        "errorAlertMessage": "Error occurred while fetching data"
        }
  }'></cds-text-editor>
          </cds-main-content-item>
          <cds-main-content-item
            size="08"
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-text-editor
              editorId="editor4"
              editorConfig='{
    "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
    "max_char_length": 200,
    "request_obj": {
        "urlToRequest": "https://jsonplaceholder.typicode.com/posts",
        "requestMethod": "POST",
        "requestValueKey": "value",
        "verificationToken": "token",
        "errorAlertMessage": "Error occurred while fetching data"
        }
  }'></cds-text-editor>
          </cds-main-content-item>
          <cds-main-content-item
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-8 cds--grid-column-hang">
            <div>
              <cds-divider size="3"></cds-divider>
              <cds-inline-notification
                style="min-width: 100%; margin-bottom: .5rem"
                title="Notification title"
                subtitle="Subtitle text goes here."
                low-contrast>
              </cds-inline-notification>
              <cds-divider size="3"></cds-divider>
            </div>
            <cds-table>
              <cds-table-header-title slot="title"
                >Dokumenti</cds-table-header-title
              >
              <cds-table-toolbar slot="toolbar">
                <cds-table-toolbar-content>
                  <cds-button
                    size="lg"
                    kind="secondary"
                    tooltip-alignment=""
                    tooltip-position="top"
                    type="button"
                    id="modal-example-button"
                    @click="${0}"
                    has-main-content="">
                    Pievienot ${0}
                  </cds-button>
                </cds-table-toolbar-content>
              </cds-table-toolbar>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>Nosaukums</cds-table-header-cell>
                  <cds-table-header-cell
                    >Pievienošanas datums</cds-table-header-cell
                  >
                  <cds-table-header-cell>Pievienotājs</cds-table-header-cell>
                  <cds-table-header-cell></cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>
                    <a
                      href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                      download
                      style="text-decoration: none;">
                      vērtējums1.pdf
                    </a>
                  </cds-table-cell>
                  <cds-table-cell>22.03.2023 10:15</cds-table-cell>
                  <cds-table-cell>Anna Bērziņa</cds-table-cell>
                  <cds-table-cell>
                    <cds-overflow-menu>
                      ${0}
                      <span slot="tooltip-content"> Options </span>
                      <cds-overflow-menu-body>
                        <cds-overflow-menu-item
                          >Lejupielādēt</cds-overflow-menu-item
                        >
                        <cds-overflow-menu-item divider danger
                          >Dzēst</cds-overflow-menu-item
                        >
                      </cds-overflow-menu-body>
                    </cds-overflow-menu>
                  </cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>
                    <a
                      href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                      download
                      style="text-decoration: none;">
                      vērtējums2.pdf
                    </a>
                  </cds-table-cell>
                  <cds-table-cell>22.03.2023 10:20</cds-table-cell>
                  <cds-table-cell>Pēteris Jurčenko</cds-table-cell>
                  <cds-table-cell>
                    <cds-overflow-menu>
                      ${0}
                      <span slot="tooltip-content"> Options </span>
                      <cds-overflow-menu-body>
                        <cds-overflow-menu-item
                          >Lejupielādēt</cds-overflow-menu-item
                        >
                        <cds-overflow-menu-item divider danger
                          >Dzēst</cds-overflow-menu-item
                        >
                      </cds-overflow-menu-body>
                    </cds-overflow-menu>
                  </cds-table-cell>
                </cds-table-row>
              </cds-table-body>
            </cds-table>
          </cds-main-content-item>
        </div>
      </cds-main-content-block-open>
    `), statusHistoryPersons, this.saveButtonHandler, this.itemSelectedHandler, statusArray, ToolBox16({
          slot: 'icon'
        }), CertificateCheck16({
          slot: 'icon'
        }), this.openModal, Add16({
          slot: 'icon'
        }), OverflowMenuVertical16({
          class: `${prefix}--overflow-menu__icon`,
          slot: 'icon'
        }), OverflowMenuVertical16({
          class: `${prefix}--overflow-menu__icon`,
          slot: 'icon'
        }));
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
export default CDSPValuationOpen;
//# sourceMappingURL=vertejuma-parskatisana.js.map
