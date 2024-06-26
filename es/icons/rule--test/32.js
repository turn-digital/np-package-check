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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23,30a7,7,0,1,1,7-7A7.0078,7.0078,0,0,1,23,30Zm0-12a5,5,0,1,0,5,5A5.0055,5.0055,0,0,0,23,18Z"></path><path d="M26 24.586L24 22.586 24 20 22 20 22 23.414 24.586 26 26 24.586zM8 16H14V18H8zM8 10H20V12H8z"></path><path d="M26,4a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,4V17a10.9814,10.9814,0,0,0,5.8242,9.707L13,29.4668V27.2L8.7656,24.9424A8.9858,8.9858,0,0,1,4,17V4H24v9h2Z"></path></svg>`;
export default svgResultCarbonIcon;
