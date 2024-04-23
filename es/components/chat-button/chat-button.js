import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import '../button/button';
import { CHAT_BUTTON_SIZE, CHAT_BUTTON_KIND } from './defs';
import styles from "././chat-button.css.js";
export { CHAT_BUTTON_SIZE, CHAT_BUTTON_KIND };

/**
 * Icon Button
 *
 */
let CDSChatButton = _decorate([customElement(`${prefix}-chat-button`)], function (_initialize, _LitElement) {
  class CDSChatButton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSChatButton,
    d: [{
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
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "kind",
      value() {
        return CHAT_BUTTON_KIND.PRIMARY;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return CHAT_BUTTON_SIZE.LARGE;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'is-quick-action',
        type: Boolean
      })],
      key: "isQuickAction",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'is-selected',
        type: Boolean
      })],
      key: "isSelected",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if the button should be disabled.
       */

      /**
       *  Specify whether the `ChatButton` should be disabled
       */

      /**
       * Chat button size.
       */

      /**
       * Specify whether the `ChatButton` should be rendered as a quick action button
       */

      /**
       * Specify whether the quick action `ChatButton` should be rendered as selected. This disables the input
       */

      function render() {
        const allowedSizes = [CHAT_BUTTON_SIZE.SMALL, CHAT_BUTTON_SIZE.MEDIUM, CHAT_BUTTON_SIZE.LARGE];
        if (this.isQuickAction) {
          this.kind = CHAT_BUTTON_KIND.GHOST;
          this.size = CHAT_BUTTON_SIZE.SMALL;
        } else {
          // Do not allow size larger than `lg`
          this.size = allowedSizes.includes(this.size) ? this.size : CHAT_BUTTON_SIZE.LARGE;
        }
        let classes = `${prefix}--chat-btn`;
        classes += this.isQuickAction ? ` ${prefix}--chat-btn--quick-action` : '';
        classes += this.isSelected ? ` ${prefix}--chat-btn--quick-action--selected` : '';
        return html(_t || (_t = _`
      <cds-button
        button-class-name="${0}"
        size="${0}"
        kind="${0}"
        ?disabled="${0}">
        <slot></slot><slot name="icon" slot="icon"></slot>
      </cds-button>
    `), classes, this.size, this.kind, this.disabled);
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
export default CDSChatButton;
//# sourceMappingURL=chat-button.js.map
