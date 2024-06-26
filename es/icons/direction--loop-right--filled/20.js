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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path fill="none" d="M16,26H14V18h2ZM21,8,19.5859,9.4141,24.1719,14H11a3,3,0,1,1,3-3v1h2V11a5,5,0,1,0-5,5H24.1719l-4.586,4.5859L21,22l7-7Z" data-icon-path="inner-path"></path><path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM16,26H14V18h2Zm5-4-1.4141-1.4141L24.1719,16H11a5,5,0,1,1,5-5v1H14V11a3,3,0,1,0-3,3H24.1719l-4.586-4.5859L21,8l7,7Z"></path></svg>`;
export default svgResultCarbonIcon;
