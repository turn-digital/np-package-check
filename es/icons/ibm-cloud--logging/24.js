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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24.4,10c0.3,0.5,0.7,0.9,1.3,1.2l1.3,0.6l1.3-0.6c1-0.5,1.7-1.6,1.7-2.7V4h-3V2h5v6.5c0,1.9-1.1,3.7-2.9,4.5l-2.2,1l-2.1-1	c-1.3-0.6-2.2-1.7-2.6-3H24.4z"></path><path d="M16 6H24V8H16zM16 2H24V4H16z"></path><path d="M28,16v6H4V6h10V4H4C2.9,4,2,4.9,2,6v16c0,1.1,0.9,2,2,2h8v4H8v2h16v-2h-4v-4h8c1.1,0,2-0.9,2-2v-6H28z M18,28h-4v-4h4V28z"></path></svg>`;
export default svgResultCarbonIcon;
