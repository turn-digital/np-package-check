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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20,6a9.95,9.95,0,0,0-4.0032.8394,9.9909,9.9909,0,0,1,0,18.3212A9.9988,9.9988,0,1,0,20,6Z"></path><path fill="none" d="M20,16a8.01,8.01,0,0,0-6.2483-7.8008,9.9758,9.9758,0,0,1,2.2451-1.36,9.9909,9.9909,0,0,1,0,18.3212,9.9758,9.9758,0,0,1-2.2451-1.36A8.01,8.01,0,0,0,20,16Z" data-icon-path="inner-path"></path><path d="M10,16a9.9759,9.9759,0,0,0,3.7517,7.8008,7.9937,7.9937,0,0,0,0-15.6016A9.9759,9.9759,0,0,0,10,16Z"></path><path d="M12,24A8,8,0,1,1,13.7517,8.1992a9.9758,9.9758,0,0,1,2.2451-1.36,10,10,0,1,0,0,18.3212,9.9758,9.9758,0,0,1-2.2451-1.36A7.9727,7.9727,0,0,1,12,24Z"></path></svg>`;
export default svgResultCarbonIcon;
