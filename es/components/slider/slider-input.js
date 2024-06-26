import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { prefix } from '../../globals/settings';
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import FocusMixin from '../../globals/mixins/focus';
import styles from "././slider.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * The `<input>` box for slider.
 *
 * @element cds-slider-input
 * @fires cds-slider-input-changed - The custom event fired after the value is changed by user gesture.
 */
let CDSSliderInput = _decorate([customElement(`${prefix}-slider-input`)], function (_initialize, _FocusMixin) {
  class CDSSliderInput extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSliderInput,
    d: [{
      kind: "field",
      key: "_max",
      value() {
        return '100';
      }
    }, {
      kind: "field",
      key: "_min",
      value() {
        return '0';
      }
    }, {
      kind: "field",
      key: "_step",
      value() {
        return '1';
      }
    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * The internal value of `max` property.
       */

      /**
       * The internal value of `min` property.
       */

      /**
       * The internal value of `step` property.
       */

      /**
       * Handles `change` event to fire a normalized custom event.
       */
      function _handleChange({
        target
      }) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: Number(target.value)
          }
        }));
      }

      /**
       * Handles `input` event to fire a normalized custom event.
       */
    }, {
      kind: "method",
      key: "_handleInput",
      value: function _handleInput({
        target
      }) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: Number(target.value),
            intermediate: true
          }
        }));
      }

      /**
       * `true` if the input should be disabled.
       */
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
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "invalid",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "warn",
      value() {
        return false;
      }
    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "max",
      value:
      /**
       * true to specify if the control is invalid.
       */
      /**
       * true to specify if the control should display warn icon and text.
       */
      /**
       * The maximum value.
       */
      function max() {
        return this._max.toString();
      }
    }, {
      kind: "set",
      key: "max",
      value: function max(value) {
        const {
          max: oldMax
        } = this;
        this._max = value;
        this.requestUpdate('max', oldMax);
      }

      /**
       * The minimum value.
       */
    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "min",
      value: function min() {
        return this._min.toString();
      }
    }, {
      kind: "set",
      key: "min",
      value: function min(value) {
        const {
          min: oldMin
        } = this;
        this._min = value;
        this.requestUpdate('min', oldMin);
      }

      /**
       * The snapping step of the value.
       */
    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "step",
      value: function step() {
        return this._step.toString();
      }
    }, {
      kind: "set",
      key: "step",
      value: function step(value) {
        const {
          step: oldStep
        } = this;
        this._step = value;
        this.requestUpdate('step', oldStep);
      }

      /**
       * The type of the `<input>`.
       */
    }, {
      kind: "field",
      decorators: [property()],
      key: "type",
      value() {
        return 'number';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "readonly",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The value.
       */
      /**
       * true` if the input should be readonly.
       */
      function render() {
        const {
          disabled,
          max,
          min,
          readonly,
          step,
          type,
          value,
          invalid,
          warn,
          _handleChange: handleChange,
          _handleInput: handleInput
        } = this;
        const classes = classMap({
          [`${prefix}--text-input`]: true,
          [`${prefix}--slider-text-input`]: true,
          [`${prefix}--text-input--invalid`]: invalid,
          [`${prefix}--slider-text-input--warn`]: warn
        });
        const invalidIcon = WarningFilled16({
          class: `${prefix}--slider__invalid-icon`
        });
        const warnIcon = WarningAltFilled16({
          class: `${prefix}--slider__invalid-icon ${prefix}--slider__invalid-icon--warning`
        });
        return html(_t || (_t = _`
      <input
        ?disabled="${0}"
        ?data-invalid="${0}"
        type="${0}"
        class="${0}"
        max="${0}"
        min="${0}"
        ?readonly="${0}"
        step="${0}"
        .value="${0}"
        @change="${0}"
        @input="${0}" />
      ${0}
      ${0}
    `), disabled, invalid, ifDefined(type), classes, max, min, ifDefined(readonly), step, value, handleChange, handleInput, invalid ? html(_t2 || (_t2 = _`${0}`), invalidIcon) : null, warn ? html(_t3 || (_t3 = _`${0}`), warnIcon) : null);
      }

      /**
       * A selector that will return the parent slider.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorParent",
      value: function selectorParent() {
        return `${prefix}-slider`;
      }

      /**
       * The name of the custom event fired after the value is changed by user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-slider-input-changed`;
      }
    }, {
      kind: "field",
      static: true,
      key: "shadowRootOptions",
      value() {
        return _objectSpread(_objectSpread({}, LitElement.shadowRootOptions), {}, {
          delegatesFocus: true
        });
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
export default CDSSliderInput;
//# sourceMappingURL=slider-input.js.map
