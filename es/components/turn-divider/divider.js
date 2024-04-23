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
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././divider.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Divider
 *
 * @element cds-divider
 */
let CDSTurnDivider = _decorate([customElement(`${prefix}-divider`)], function (_initialize, _FocusMixin) {
  class CDSTurnDivider extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTurnDivider,
    d: [{
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "size",
      value() {
        return 5;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Can be one of: 1-13. Sets margin-bottom using carbon $spacing.
       */

      function render() {
        return html(_t || (_t = _`
      <hr class="divider divider--${0}"></hr>
    `), this.size);
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
}, FocusMixin(LitElement));
export default CDSTurnDivider;
//# sourceMappingURL=divider.js.map
