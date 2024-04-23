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
import styles from "././related-documents.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Related documents.
 *
 * @element cds-related-documents
 */
let CDSRelatedDocuments = _decorate([customElement(`${prefix}-related-documents`)], function (_initialize, _FocusMixin) {
  class CDSRelatedDocuments extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSRelatedDocuments,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "title",
      value() {
        return 'Saistītie dokumenti';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        // const { _handleSlotChange: handleSlotChange } = this;
        return html(_t || (_t = _`
      <div class="related-documents">
        <p class="related-documents__title">${0}</p>
        <ul class="related-documents__links">
          <slot></slot>
        </ul>
      </div>
    `), this.title);
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
export default CDSRelatedDocuments;
//# sourceMappingURL=related-documents.js.map
