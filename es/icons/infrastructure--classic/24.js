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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M18 26H30V28H18zM18 21H30V23H18zM18 16H30V18H18z"></path><path d="M14,25H9.5A7.4964,7.4964,0,0,1,8.1782,10.124,10,10,0,0,1,28,12H26a7.999,7.999,0,0,0-15.9507-.87l-.09.8335L9.123,12.02A5.4962,5.4962,0,0,0,9.5,23H14Z"></path></svg>`;
export default svgResultCarbonIcon;
