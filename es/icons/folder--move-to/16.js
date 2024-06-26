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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M18 13L16.59 14.41 19.17 17 10 17 10 19 19.17 19 16.59 21.59 18 23 23 18 18 13z"></path><path d="M11.1716,6l3.4142,3.4142L15.1716,10H28V26H4V6h7.1716m0-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2H16L12.5858,4.5858A2,2,0,0,0,11.1716,4Z"></path></svg>`;
export default svgResultCarbonIcon;
