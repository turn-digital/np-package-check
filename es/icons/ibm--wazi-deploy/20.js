/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="m13.9998,29.991l-10.5037-6.1272c-.3071-.1792-.4961-.5081-.4961-.8638v-14h2v13.4257l10.0076,5.8378-1.0078,1.7275Z"></path><path d="M7 6H9V16H7zM29 13h-2v-3.4257l-11-6.4166-3 1.7499v8.0924h-2V4.3333c0-.3557.189-.6846.4961-.8638l4-2.3333c.1558-.0908.3298-.1362.5039-.1362s.3481.0454.5039.1362l12 7c.3071.1792.4961.5081.4961.8638v4zM27 23l-1.4199 1.4102 1.5898 1.5898h-7.1699v-3.1421c1.7202-.4473 3-1.9995 3-3.8579 0-2.2056-1.7944-4-4-4s-4 1.7944-4 4c0 1.8584 1.2798 3.4106 3 3.8579v3.1421c0 1.1025.8972 2 2 2h7.1699l-1.5798 1.5801 1.4099 1.4199 4-4-4-4zm-10-4c0-1.1025.8972-2 2-2s2 .8975 2 2-.8972 2-2 2-2-.8975-2-2z"></path></svg>`;
export default svgResultCarbonIcon;