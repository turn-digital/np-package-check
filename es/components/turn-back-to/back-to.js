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
import styles from "././back-to.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import ArrowLeft from "../../icons/arrow--left/32";

/**
 * Related documents.
 *
 * @element cds-back-to
 */ /**
     * Related documents.
     *
     * @element cds-back-to
     */
let CDSBackTo = _decorate([customElement(`${prefix}-back-to`)], function (_initialize, _LitElement) {
  class CDSBackTo extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSBackTo,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "title",
      value() {
        return 'Back to';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "link",
      value() {
        return '#';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="container">
        <a href="${0}" class="link">
          ${0}
        </a>
        <p class="title">${0}</p>
      </div>
    `), this.link, ArrowLeft({
          slot: 'icon',
          fill: 'black'
        }), this.title);
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
export default CDSBackTo;
//# sourceMappingURL=back-to.js.map
