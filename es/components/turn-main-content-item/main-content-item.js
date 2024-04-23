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
import { prefix } from '../../globals/settings';
import styles from "././main-content-item.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import { property } from 'lit/decorators.js';

/**
 * Related documents.
 *
 * @element cds-main-content-item
 */
let CDSMainContentItem = _decorate([customElement(`${prefix}-main-content-item`)], function (_initialize, _LitElement) {
  class CDSMainContentItem extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSMainContentItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "size",
      value() {
        return '05';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "isStatusChangePanel",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div
        class="size--${0} ${0}">
        <slot></slot>
      </div>
    `), this.size, this.isStatusChangePanel ? 'statusChangePanel' : '');
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
export default CDSMainContentItem;
//# sourceMappingURL=main-content-item.js.map
