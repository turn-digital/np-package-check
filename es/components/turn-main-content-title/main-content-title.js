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
import styles from "././main-content-title.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Related documents.
 *
 * @element cds-main-content-title
 */
let CDSMainContentTitle = _decorate([customElement(`${prefix}-main-content-title`)], function (_initialize, _LitElement) {
  class CDSMainContentTitle extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSMainContentTitle,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "title",
      value() {
        return 'Default page title';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="container">
        <h1 class="title">${0}</h1>
      </div>
    `), this.title);
      }
    }]
  };
}, LitElement);
export default CDSMainContentTitle;
//# sourceMappingURL=main-content-title.js.map
