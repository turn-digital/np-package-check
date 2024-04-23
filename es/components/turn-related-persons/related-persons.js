import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
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
import styles from "././related-persons.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import UserAvatar16 from "../../icons/user--avatar/16";
import UserAdmin16 from "../../icons/user--admin/16";
import UserProfile16 from "../../icons/user--profile/16";

/**
 * Related documents.
 *
 * @element cds-related-persons
 */ /**
     * Related documents.
     *
     * @element cds-related-persons
     */

const iconMap = new Map([['1', UserAvatar16], ['2', UserAdmin16], ['3', UserProfile16]]);
let CDSRelatedPersons = _decorate([customElement(`${prefix}-related-persons`)], function (_initialize, _LitElement) {
  class CDSRelatedPersons extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSRelatedPersons,
    d: [{
      kind: "field",
      decorators: [property({
        type: Array
      })],
      key: "statusHistoryPersons",
      value() {
        return [{
          shortRole: 'PV',
          personName: 'Vards Uzvards',
          iconType: '1'
        }, {
          shortRole: 'AV',
          personName: 'Vards Uzvards',
          iconType: '2'
        }, {
          shortRole: 'BN',
          personName: 'Vards Uzvards',
          iconType: '3'
        }];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="container">
        ${0}
      </div>
    `), this.statusHistoryPersons.map(person => html(_t2 || (_t2 = _`
            <span class="container__related-person">
              ${0}
              ${0}: ${0}
            </span>
          `), iconMap.get(person === null || person === void 0 ? void 0 : person.iconType)({
          slot: 'icon'
        }), person === null || person === void 0 ? void 0 : person.shortRole, person === null || person === void 0 ? void 0 : person.personName)));
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
export default CDSRelatedPersons;
//# sourceMappingURL=related-persons.js.map
