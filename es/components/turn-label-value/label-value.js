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
import styles from "././label-value.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Related documents.
 *
 * @element cds-label-value
 */
let CDSLabelValue = _decorate([customElement(`${prefix}-label-value`)], function (_initialize, _LitElement) {
  class CDSLabelValue extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSLabelValue,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "label",
      value() {
        return 'Default label!';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "value",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "size",
      value() {
        return 'sm';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="container container--${0}">
        <div class="label">${0}</div>
        ${0}
        <slot></slot>
      </div>
    `), this.size, this.label, this.value.length > 0 ? html(_t2 || (_t2 = _`<div class="value">${0}</div>`), this.value) : html(_t3 || (_t3 = _``)));
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
export default CDSLabelValue;
//# sourceMappingURL=label-value.js.map
