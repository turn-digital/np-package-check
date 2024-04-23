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
import styles from "././label-value-horizontal.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Divider
 *
 * @element cds-label-value-horizontal
 */
let CDSTurnLabelValueHorizontal = _decorate([customElement(`${prefix}-label-value-horizontal`)], function (_initialize, _FocusMixin) {
  class CDSTurnLabelValueHorizontal extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTurnLabelValueHorizontal,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "label",
      value() {
        return "Atlases nosaukums";
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="label-value-horizontal">
        <div class="label-value-horizontal__item">
          <div class="label-value-horizontal__label">
            ${0}: 
          </div>
          <div class="label-value-horizontal__slot">
            <slot></slot>
          </div>
        </div>
      </div>
    `), this.label);
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
export default CDSTurnLabelValueHorizontal;
//# sourceMappingURL=label-value-horizontal.js.map
