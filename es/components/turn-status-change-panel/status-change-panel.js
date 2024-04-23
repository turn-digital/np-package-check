import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from "././status-change-panel.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Related documents.
 *
 * @element cds-status-change-panel
 */
let CDSStatusChangePanel = _decorate([customElement(`${prefix}-status-change-panel`)], function (_initialize, _LitElement) {
  class CDSStatusChangePanel extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSStatusChangePanel,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "projectId",
      value() {
        return '1.1.1.1/16/A/004';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "saveButtonText",
      value() {
        return 'Saglabāt';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "saveButtonType",
      value() {
        return 'Primary';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "dropdownButtonText",
      value() {
        return 'Mainīt statusu';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Array
      })],
      key: "statusItems",
      value() {
        return [{
          value: 'String',
          text: 'Status'
        }];
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "selectedStatus",
      value() {
        return '';
      }
    }, {
      kind: "field",
      key: "itemSelectedHandler",
      value() {
        return event => {
          this.selectedStatus = event.detail.item.__value;
          //@ts-ignore
          // this.shadowRoot.getElementById('status-change-modal').open = true;

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
        var _this$statusItems;
        return html(_t || (_t = _`
      <div class="container">
        <div>
          <cds-button
            size="md"
            type="${0}"
            @click="${0}"
            >${0}</cds-button
          >
        </div>
        <div class="right-button">
          <div class="dropdown-container">
            <cds-dropdown
              class="cds-theme-zone-turn-dropdown-button"
              label="${0}"
              @cds-dropdown-selected="${0}">
              ${0}
            </cds-dropdown>
          </div>
        </div>
      </div>

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
            editorId="editor_status_modal_${0}"
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
    `), this.saveButtonType, this.saveButtonHandler, this.saveButtonText, this.dropdownButtonText, this.itemSelectedHandler, (_this$statusItems = this.statusItems) === null || _this$statusItems === void 0 ? void 0 : _this$statusItems.map(item => html(_t2 || (_t2 = _`
                  <cds-dropdown-item
                    class="cds-theme-zone-turn-dropdown-button-test"
                    value="${0}"
                    >${0}</cds-dropdown-item
                  >
                `), item === null || item === void 0 ? void 0 : item.value, item === null || item === void 0 ? void 0 : item.text)), this.selectedStatus);
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
export default CDSStatusChangePanel;
//# sourceMappingURL=status-change-panel.js.map
