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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M2 22H30V24H2zM2 26H30V28H2zM24 10a2 2 0 102 2 2 2 0 00-2-2zM16 16a4 4 0 114-4A4.0045 4.0045 0 0116 16zm0-6a2 2 0 102 2A2.002 2.002 0 0016 10zM8 10a2 2 0 102 2 2 2 0 00-2-2z"></path><path d="M28,20H4a2.0051,2.0051,0,0,1-2-2V6A2.0051,2.0051,0,0,1,4,4H28a2.0051,2.0051,0,0,1,2,2V18A2.0027,2.0027,0,0,1,28,20ZM28,6H4V18H28Z"></path></svg>`;
export default svgResultCarbonIcon;
