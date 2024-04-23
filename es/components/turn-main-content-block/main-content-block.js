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
import styles from "././main-content-block.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import { property } from 'lit/decorators';

/**
 * Related documents.
 *
 * @element cds-main-content-block
 */
let CDSMainContentBlock = _decorate([customElement(`${prefix}-main-content-block`)], function (_initialize, _LitElement) {
  class CDSMainContentBlock extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSMainContentBlock,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "storybook",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />
      <main class="${0}">
        <div class="cds--css-grid  cds--css-grid--narrow">
          <slot></slot>
        </div>
      </main>
    `), this.storybook === false ? 'page_main' : '');
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
export default CDSMainContentBlock;
//# sourceMappingURL=main-content-block.js.map
