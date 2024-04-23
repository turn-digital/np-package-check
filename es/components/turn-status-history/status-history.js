import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3;
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
import styles from "././status-history.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Related documents.
 *
 * @element cds-status-history
 */
let CDSStatusHistory = _decorate([customElement(`${prefix}-status-history`)], function (_initialize, _LitElement) {
  class CDSStatusHistory extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSStatusHistory,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "currenStatusColor",
      value() {
        return 'green';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "currenStatusTitle",
      value() {
        return 'CFLA pārdomas';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "currenStatusDate",
      value() {
        return '25.10.2019 10:34';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Array
      })],
      key: "statusHistoryItems",
      value() {
        return [{
          date: '25.10.2019 10:34',
          status: 'Atgriezta precizēšanai 1',
          author: 'Elīne Millere',
          pamatojums: 'Pamatojums 1',
          id: '1'
        }, {
          date: '25.09.2019 16:13',
          status: 'Atgriezta precizēšanai 2',
          author: 'Test author',
          pamatojums: 'Pamatojums 2',
          id: '2'
        }];
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "modalContent",
      value() {
        return {
          date: '25.10.2019 10:34',
          status: 'Atgriezta precizēšanai',
          author: 'Elīne Millere',
          pamatojums: 'Pamatojums test',
          id: '1'
        };
      }
    }, {
      kind: "field",
      key: "statusHistoryInfoModalOpen",
      value() {
        return item => {
          this.modalContent = item;
          //@ts-ignore
          this.shadowRoot.getElementById('status-history-info-modal').open = true;
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="container">
        <div class="container__current-status">
          <cds-tag
            type="${0}"
            title="${0}"
            >${0}
          </cds-tag>
          <p class="container__current-status--date">
            ${0}
          </p>
        </div>
        <div class="container__status-history">
          <cds-accordion alignment="start">
            <cds-accordion-item title="Statusu vēsture">
              ${0}
            </cds-accordion-item>
            <cds-divider size="2"></cds-divider>
          </cds-accordion>
        </div>
      </div>
      <cds-modal id="status-history-info-modal">
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-label>Statusu vēsture</cds-modal-label>
          <cds-modal-heading>Statusa maiņas pamatojums</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-divider size="4"></cds-divider>
          <cds-label-value label="Statuss" value="${0}">
          </cds-label-value>
          <cds-divider size="4"></cds-divider>
          <cds-label-value
            label="Statusa datums un laiks"
            value="${0}">
          </cds-label-value
          ><cds-divider size="4"></cds-divider>
          <cds-label-value
            label="Statusa autors"
            value="${0}">
          </cds-label-value
          ><cds-divider size="4"></cds-divider>
          <cds-label-value
            label="Pamatojums"
            value="${0}">
          </cds-label-value
        ></cds-modal-body>
      </cds-modal>
    `), this.currenStatusColor, this.currenStatusTitle, this.currenStatusTitle, this.currenStatusDate, this.statusHistoryItems.map(item => html(_t2 || (_t2 = _`
                  <p id="${0}">
                    ${0} ${0}
                    ${0}
                    ${0}
                  </p>
                  <cds-divider size="2"></cds-divider>
                `), item.id, item.date, item.status, item.author ? ' — ' + item.author : '', item.pamatojums && item.pamatojums.length > 0 ? html(_t3 || (_t3 = _`
                          <cds-link
                            style="cursor: pointer;"
                            @click=${0}
                            >Pamatojums</cds-link
                          >
                        `), () => this.statusHistoryInfoModalOpen(item)) : '')), this.modalContent.status, this.modalContent.date, this.modalContent.author, this.modalContent.pamatojums);
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
export default CDSStatusHistory;
//# sourceMappingURL=status-history.js.map
