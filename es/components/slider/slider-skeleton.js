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
import styles from "././slider.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton of slider.
 */
let CDSSliderSkeleton = _decorate([customElement(`${prefix}-slider-skeleton`)], function (_initialize, _LitElement) {
  class CDSSliderSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSliderSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <span class="${0}--label ${0}--skeleton"></span>
      <div class="${0}--slider-container ${0}--skeleton">
        <span class="${0}--slider__range-label"></span>
        <div class="${0}--slider">
          <div class="${0}--slider__track"></div>
          <div class="${0}--slider__filled-track"></div>
          <div class="${0}--slider__thumb"></div>
        </div>
        <span class="${0}--slider__range-label"></span>
      </div>
    `), prefix, prefix, prefix, prefix, prefix, prefix, prefix, prefix, prefix, prefix);
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
export default CDSSliderSkeleton;
//# sourceMappingURL=slider-skeleton.js.map
