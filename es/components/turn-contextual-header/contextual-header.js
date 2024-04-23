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
import styles from "././contextual-header.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Related documents.
 *
 * @element cds-contextual-header
 */
let CDSHeaderProjectBlock = _decorate([customElement(`${prefix}-contextual-header`)], function (_initialize, _LitElement) {
  class CDSHeaderProjectBlock extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderProjectBlock,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "title",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="container">
        <cds-accordion
          alignment="start"
          class="cds--css-grid-column cds--col-span-100">
          <cds-accordion-item title="${0}">
            <slot></slot>
          </cds-accordion-item>
        </cds-accordion>
      </div>
    `), this.title);
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
export default CDSHeaderProjectBlock;
//# sourceMappingURL=contextual-header.js.map
