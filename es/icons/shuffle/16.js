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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22.59,19.41,26.17,23H19.55l-4.37-7,4.37-7h6.62l-3.58,3.59L24,14l6-6L24,2,22.59,3.41,26.17,7H19.55a2,2,0,0,0-1.69.94L14,14.11,10.14,7.94A2,2,0,0,0,8.45,7H2V9H8.45l4.37,7L8.45,23H2v2H8.45a2,2,0,0,0,1.69-.94L14,17.89l3.86,6.17a2,2,0,0,0,1.69.94h6.62l-3.58,3.59L24,30l6-6-6-6Z"></path></svg>`;
export default svgResultCarbonIcon;
