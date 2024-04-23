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
import styles from "././empty-state.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Divider
 *
 * @element cds-empty-state
 */
let CDSTurnEmptyState = _decorate([customElement(`${prefix}-empty-state`)], function (_initialize, _FocusMixin) {
  class CDSTurnEmptyState extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTurnEmptyState,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "text",
      value() {
        return "Šobrīd nav veikti līguma grozījumi";
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "linkUrl",
      value() {
        return "#";
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "linkText",
      value() {
        return "Pievienot";
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_renderBlock",
      value:
      /**
        * add attibute "disabled" if block should be disabled.
      */

      function _renderBlock() {
        const {
          text,
          linkUrl,
          linkText
        } = this;
        return html(_t || (_t = _`
      <div class="empty-doc">
        <div class="empty-doc__text">${0}</div>
        <div class="empty-doc__link">
          <cds-link href="${0}">
            ${0}
          </cds-link>
        </div>
      </div>
    `), text, linkUrl, linkText);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled
        } = this;
        return disabled ? "" : this._renderBlock();
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
export default CDSTurnEmptyState;
//# sourceMappingURL=empty-state.js.map
