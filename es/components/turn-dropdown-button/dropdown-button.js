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
import styles from "././dropdown-button.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import { property } from 'lit/decorators';

/**
 * Related documents.
 *
 * @element cds-dropdown-button
 */
let CDSDropdownButtonTest = _decorate([customElement(`${prefix}-dropdown-button`)], function (_initialize, _LitElement) {
  class CDSDropdownButtonTest extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSDropdownButtonTest,
    d: [{
      kind: "field",
      decorators: [property({
        type: Array
      })],
      key: "statusArray",
      value() {
        return [{
          value: String,
          text: String
        }];
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Function
      })],
      key: "dropdownHandler",
      value() {
        return () => {};
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
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$statusArray;
        return html(_t || (_t = _`
      <div class="dropdown-container">
        <cds-dropdown
          class="cds-theme-zone-turn-dropdown-button"
          label="Mainīt statusu"
          @cds-dropdown-selected="${0}">
          ${0}
        </cds-dropdown>
      </div>
    `), this.dropdownHandler, (_this$statusArray = this.statusArray) === null || _this$statusArray === void 0 ? void 0 : _this$statusArray.map(item => html(_t2 || (_t2 = _`
              <cds-dropdown-item
                class="cds-theme-zone-turn-dropdown-button-test"
                value="${0}"
                >${0}</cds-dropdown-item
              >
            `), item.value, item.text)));
      }
    }]
  };
}, LitElement);
export default CDSDropdownButtonTest;
//# sourceMappingURL=dropdown-button.js.map
