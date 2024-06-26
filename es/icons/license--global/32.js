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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 14a8 8 0 108 8A8.0092 8.0092 0 0022 14zm5.91 7H25.9563a12.03 12.03 0 00-1.2183-4.3325A6.01 6.01 0 0127.91 21zm-7.8545 0A10.0135 10.0135 0 0122 16.0146 10.0121 10.0121 0 0123.9448 21zm3.89 2A10.01 10.01 0 0122 27.9854 10.0121 10.0121 0 0120.0552 23zm-4.6831-6.332A12.0265 12.0265 0 0018.0435 21H16.09A6.01 6.01 0 0119.2617 16.668zM16.09 23h1.9532a12.0265 12.0265 0 001.2182 4.332A6.01 6.01 0 0116.09 23zm8.6482 4.332A12.0242 12.0242 0 0025.9565 23H27.91A6.0088 6.0088 0 0124.7385 27.332zM6 14H12V16H6zM6 6H18V8H6zM6 10H18V12H6zM6 24H12V26H6z"></path><path d="M12,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H20a2.0021,2.0021,0,0,1,2,2v8H20V4H4V28h8Z"></path></svg>`;
export default svgResultCarbonIcon;
