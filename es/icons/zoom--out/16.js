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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M4 6H9V7H4z"></path><path d="M10.7,10C11.5,9,12,7.8,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1.3,0,2.5-0.5,3.5-1.3l3.8,3.8l0.7-0.7	L10.7,10z M6.5,11C4,11,2,9,2,6.5S4,2,6.5,2S11,4,11,6.5S9,11,6.5,11L6.5,11z"></path></svg>`;
export default svgResultCarbonIcon;
