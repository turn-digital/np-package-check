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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM22,16H20V9.4141L13.4644,15.95A4.9683,4.9683,0,0,0,12,19.4854V26H10V19.4854a6.954,6.954,0,0,1,2.05-4.95L18.5859,8H12V6H22Z"></path><path fill="none" d="M22,16H20V9.4141L13.4644,15.95A4.9683,4.9683,0,0,0,12,19.4854V26H10V19.4854a6.954,6.954,0,0,1,2.05-4.95L18.5859,8H12V6H22Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
