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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM6,7.4141,7.4141,6,14,12.5859,12.5859,14ZM26,16H24V9.4141L17.4644,15.95A4.9683,4.9683,0,0,0,16,19.4854V26H14V19.4854a6.954,6.954,0,0,1,2.05-4.95L22.5859,8H16V6H26Z"></path><path fill="none" d="M26,6V16H24V9.4141L17.4644,15.95A4.9683,4.9683,0,0,0,16,19.4854V26H14V19.4854a6.954,6.954,0,0,1,2.05-4.95L22.5859,8H16V6ZM14,12.5859,7.4141,6,6,7.4141,12.5859,14Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
