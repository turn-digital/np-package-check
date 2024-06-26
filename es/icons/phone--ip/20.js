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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16 14H18V16H16zM20 14H22V16H20zM24 14H26V16H24zM16 18H18V20H16zM20 18H22V20H20zM24 18H26V20H24zM16 22H18V24H16zM20 22H22V24H20zM24 22H26V24H24zM16 10H26V12H16z"></path><path d="M28,6H14V5a2.0025,2.0025,0,0,0-2-2H8A2.0025,2.0025,0,0,0,6,5V6H4A2.0025,2.0025,0,0,0,2,8V26a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V8A2.0025,2.0025,0,0,0,28,6ZM8,5h4V22H8ZM28,26H4V8H6V22a2.0025,2.0025,0,0,0,2,2h4a2.0025,2.0025,0,0,0,2-2V8H28Z"></path></svg>`;
export default svgResultCarbonIcon;
