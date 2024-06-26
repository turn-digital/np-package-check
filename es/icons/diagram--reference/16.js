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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z"></path><path d="M15,28V26a9.0133,9.0133,0,0,0,8.9448-8H16a2.0021,2.0021,0,0,1-2-2V8.0552A9.0133,9.0133,0,0,0,6,17H4A11.0125,11.0125,0,0,1,15,6a1,1,0,0,1,1,1v9h9a1,1,0,0,1,1,1A11.0125,11.0125,0,0,1,15,28Z"></path><path d="M29.0057,14H19.995A1.9957,1.9957,0,0,1,18,12V3a1.0083,1.0083,0,0,1,1.02-1A11.0125,11.0125,0,0,1,30,12.98,1.0035,1.0035,0,0,1,29.0057,14ZM20,12h7.9448A9.018,9.018,0,0,0,20,4.0552Z"></path></svg>`;
export default svgResultCarbonIcon;
