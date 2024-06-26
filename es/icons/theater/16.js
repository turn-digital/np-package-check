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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20 25a6.9908 6.9908 0 01-5.833-3.1287l1.666-1.1074a5.0007 5.0007 0 008.334 0l1.666 1.1074A6.9908 6.9908 0 0120 25zM24 14a2 2 0 102 2A1.9806 1.9806 0 0024 14zM16 14a2 2 0 102 2A1.9806 1.9806 0 0016 14z"></path><path d="M28,8H22V4a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,4V14a10.01,10.01,0,0,0,8.8027,9.9214A9.9989,9.9989,0,0,0,30,20V10A2.0023,2.0023,0,0,0,28,8ZM4,14V4H20V8H12a2.0023,2.0023,0,0,0-2,2V20a9.9628,9.9628,0,0,0,.168,1.78A8.0081,8.0081,0,0,1,4,14Zm24,6a8,8,0,0,1-16,0V10H28Z"></path></svg>`;
export default svgResultCarbonIcon;
