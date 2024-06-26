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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path fill-rule="evenodd" d="M11,7 L11,9 L13,9 C13.5522847,9 14,9.44771525 14,10 L14,10 L14,13 C14,13.5522847 13.5522847,14 13,14 L13,14 L10,14 L10,7 L11,7 Z M5,9 C5.55228475,9 6,9.44771525 6,10 L6,10 L6,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,13 L2,12 C2,11.4477153 2.44771525,11 3,11 L3,11 L5,11 L5,10 L2.5,10 L2.5,9 Z M13,10 L11,10 L11,13 L13,13 L13,10 Z M5,12 L3,12 L3,13 L5,13 L5,12 Z M7.912,2 L7.834,3.911 L9.628,3.248 L9.914,4.119 L8.068,4.626 L9.251,6.134 L8.523,6.667 L7.457,5.068 L6.391,6.667 L5.663,6.134 L6.846,4.626 L5,4.119 L5.286,3.248 L7.08,3.911 L7.002,2 L7.912,2 Z"></path></svg>`;
export default svgResultCarbonIcon;
