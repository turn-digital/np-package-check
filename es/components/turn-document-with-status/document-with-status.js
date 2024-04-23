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
import styles from "././document-with-status.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import Circle16 from "../../icons/circle-fill";
import { green, gray, red, yellow } from '@carbon/colors';

/**
 * Related documents.
 *
 * @element cds-document-with-status
 */
let CDSDocumentsWithStatus = _decorate([customElement(`${prefix}-document-with-status`)], function (_initialize, _FocusMixin) {
  class CDSDocumentsWithStatus extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSDocumentsWithStatus,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "title",
      value() {
        return 'Projekta satura izmaiņu salīdzināšana';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "status",
      value() {
        return 'information';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "statusText",
      value() {
        return 'Izmaiņu nav';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "linkUrl",
      value() {
        return 'https://google.com';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "linkText",
      value() {
        return 'Apskatīt';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "isNewWindow",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Can be one of: information, success, error or warning.
       */

      // This can be used to toggle the behavior

      function render() {
        const {
          title,
          status,
          statusText,
          linkUrl,
          linkText,
          isNewWindow
        } = this;
        let fillColor;
        switch (status) {
          case 'success':
            fillColor = green[40];
            break;
          case 'information':
            fillColor = gray[40];
            break;
          case 'error':
            fillColor = red[50];
            break;
          case 'warning':
            fillColor = yellow[30];
            break;
          default:
            fillColor = gray[40];
        }
        const handleLinkClick = e => {
          if (isNewWindow) {
            e.preventDefault(); // Prevent the default link behavior
            // Open in a new window with specific features
            window.open(this.linkUrl, '_blank', 'noreferrer,width=1280,height=800');
          }
        };
        return html(_t || (_t = _`
      <div class="document-with-status">
        <div class="document-with-status__content">
          <p class="document-with-status__title">${0}</p>
          <div class="document-with-status__status">
            <span class="document-with-status__status-icon"
              >${0}</span
            >
            <p class="document-with-status__status-text">${0}</p>
          </div>
        </div>
        <div class="document-with-status__link">
          <cds-link
            href="${0}"
            @click="${0}"
            target="_blank"
            >${0}</cds-link
          >
        </div>
      </div>
    `), title, Circle16({
          fill: fillColor
        }), statusText, linkUrl, handleLinkClick, linkText);
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
export default CDSDocumentsWithStatus;
//# sourceMappingURL=document-with-status.js.map
