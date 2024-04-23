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
import styles from "././header-title.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Related documents.
 *
 * @element cds-header-title
 */
let CDSHeaderTitle = _decorate([customElement(`${prefix}-header-title`)], function (_initialize, _LitElement) {
  class CDSHeaderTitle extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderTitle,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "title",
      value() {
        return 'Default Header Title';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <h1 class="title">${0}</h1> `), this.title);
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
export default CDSHeaderTitle;
//# sourceMappingURL=header-title.js.map
