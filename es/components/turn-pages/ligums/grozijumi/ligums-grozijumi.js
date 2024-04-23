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
import { prefix } from '../../../../globals/settings';
import styles from "././ligums-grozijumi.css.js";
import { carbonElement as customElement } from '../../../../globals/decorators/carbon-element';
import OverflowMenuVertical16 from "../../../../icons/overflow-menu--vertical/16";
let CDSPValuationList = _decorate([customElement(`${prefix}-ligums-grozijumi`)], function (_initialize, _LitElement) {
  class CDSPValuationList extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSPValuationList,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />

      <cds-main-content-block storybook>
        <cds-contextual-header
          class="cds--css-grid-column cds--col-span-100"
          title="Projekta iesniegums: 3.1.1.5/19/A/A/A/A/A">
          <cds-label-value-horizontal label="Atlases nosaukums">
            <cds-link href="#"
              >Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
            </cds-link>
          </cds-label-value-horizontal>
          <cds-label-value-horizontal label="Atlases nosaukums">
            <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Atlases nosaukums">
            <cds-link href="#">1.1 </cds-link>
          </cds-label-value-horizontal>
        </cds-contextual-header>
        <cds-main-content-title
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang"
          title="Līgums un grozījumi"></cds-main-content-title>
        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-16">
          <cds-table>
            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>Projekta ID</cds-table-header-cell>
                <cds-table-header-cell
                  >Projekta nosaukums</cds-table-header-cell
                >
                <cds-table-header-cell
                  >Iestādes nosaukums</cds-table-header-cell
                >
                <cds-table-header-cell>Projekta st.</cds-table-header-cell>
                <cds-table-header-cell>Līguma stat.</cds-table-header-cell>
                <cds-table-header-cell></cds-table-header-cell>
              </cds-table-header-row>
            </cds-table-head>
            <cds-table-body>
              <cds-table-row>
                <cds-table-cell>1.1.1.1/16/A</cds-table-cell>
                <cds-table-cell
                  >Neironu tīkli fleksīvo dabisko valodu
                  apstrādei</cds-table-cell
                >
                <cds-table-cell>Latvijas Universitāte</cds-table-cell>
                <cds-table-cell>Sagatavošanā</cds-table-cell>
                <cds-table-cell>Neizveidots</cds-table-cell>
                <cds-table-cell>
                  <cds-overflow-menu>
                    ${0}
                    <span slot="tooltip-content"> Options </span>
                    <cds-overflow-menu-body>
                      <cds-overflow-menu-item>Izveidot</cds-overflow-menu-item>
                      <cds-overflow-menu-item>Atvērt</cds-overflow-menu-item>
                      <cds-overflow-menu-item divider danger
                        >Izdzēst</cds-overflow-menu-item
                      >
                    </cds-overflow-menu-body>
                  </cds-overflow-menu>
                </cds-table-cell>
              </cds-table-row>
            </cds-table-body>
          </cds-table>
        </div>
      </cds-main-content-block>
    `), OverflowMenuVertical16({
          class: `${prefix}--overflow-menu__icon`,
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
export default CDSPValuationList;
//# sourceMappingURL=ligums-grozijumi.js.map
