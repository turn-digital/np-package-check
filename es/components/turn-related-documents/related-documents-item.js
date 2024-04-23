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
import styles from "././related-documents.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

//icons
//icons
import Launch16 from "../../icons/launch/16";

//libs for cleaning html
//libs for cleaning html
import DOMPurify from 'dompurify';

/**
 * Related documents item.
 *
 * @element cds-related-documents-item
 */
let CDSRelatedDocumentsItem = _decorate([customElement(`${prefix}-related-documents-item`)], function (_initialize, _LitElement) {
  class CDSRelatedDocumentsItem extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSRelatedDocumentsItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "linkTitle",
      value() {
        return 'Saistītas PI';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "linkUrl",
      value() {
        return 'https://www.google.com';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "target",
      value() {
        return '_blank';
      }
    }, {
      kind: "method",
      key: "sanitizeIcon",
      value:
      /**
       * Can be one of: _blank, _self
       */

      function sanitizeIcon(icon) {
        return DOMPurify.sanitize(icon, {
          ADD_TAGS: ['svg'],
          ADD_ATTR: ['xmlns']
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          linkTitle,
          linkUrl,
          target
        } = this;
        return html(_t || (_t = _`
      <li class="related-documents__links-item">
        <slot class="related-documents__link-icon" name="icon"></slot>
        <cds-link href="${0}" target="${0}">
          ${0} ${0}
        </cds-link>
      </li>
    `), linkUrl, target || '_blank', linkTitle, target === '_self' ? '' : Launch16({
          slot: 'icon'
        }));
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
export default CDSRelatedDocumentsItem;
//# sourceMappingURL=related-documents-item.js.map
