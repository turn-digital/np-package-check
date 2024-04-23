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
import styles from "././project-card.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import Calendar from "../../icons/calendar/16";
import ShoppingCart from "../../icons/shopping--cart/16";

/**
 * Related documents.
 *
 * @element cds-project-card
 */ /**
     * Related documents.
     *
     * @element cds-project-card
     */
let ProjectCard = _decorate([customElement(`${prefix}-project-card`)], function (_initialize, _LitElement) {
  class ProjectCard extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: ProjectCard,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "projectId",
      value() {
        return '1.1.1.1/16/A/004';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "tagTitle",
      value() {
        return 'Apstiprināts ar nosacījumu';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "supervisorAuthority",
      value() {
        return 'CFLA';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "cardTitle",
      value() {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utcondimentum diam id diam blandit congue.';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "tagType",
      value() {
        return 'purple';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "projectDateTitle",
      value() {
        return 'Projekta īstenošanas termiņš';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "projectDateInfo",
      value() {
        return '05.01.2021 - 30.05.2028';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "projectCostTitle",
      value() {
        return 'Projekta kopējas izmaksas EUR';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "projectCostInfo",
      value() {
        return '500 345';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          projectId,
          tagType,
          tagTitle,
          cardTitle,
          projectDateInfo,
          projectCostInfo,
          projectCostTitle,
          projectDateTitle,
          supervisorAuthority
        } = this;
        return html(_t || (_t = _`
      <div class="project-card-container">
        <div class="project-card-header">
          <div class="project-card-projects">
            <span class="project-header-id">Projekts - ${0}</span>
            <cds-tag
              type="${0}"
              title="${0}"
              class="project-header-tag">
              ${0}
            </cds-tag>
          </div>
          <div>${0}</div>
        </div>
        <p class="project-card-desc">${0}</p>
        <div class="project-card-info">
          <div class="project-card-info-section">
            <div class="project-card-info-image">
              ${0}
            </div>
            <div class="project-card-info-item">
              <p>${0}</p>
              <h3>${0}</h3>
            </div>
          </div>
          <div class="project-card-info-section">
            <div class="project-card-info-image">
              ${0}
            </div>
            <div class="project-card-info-item">
              <p>${0}</p>
              <h3>${0}</h3>
            </div>
          </div>
        </div>
      </div>
    `), projectId, tagType, tagTitle, tagTitle, supervisorAuthority, cardTitle, Calendar({
          slot: 'icon',
          fill: 'black'
        }), projectDateTitle, projectDateInfo, ShoppingCart({
          slot: 'icon',
          fill: 'black'
        }), projectCostTitle, projectCostInfo);
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
export default ProjectCard;
//# sourceMappingURL=project-card.js.map
