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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M12 2H14V4H12zM14 4H16V6H14zM16 6H18V8H16zM16 2H18V4H16zM12 6H14V8H12zM14 18H16V20H14zM16 20H18V22H16zM18 22H20V24H18zM18 18H20V20H18zM14 22H16V24H14zM18 10H20V12H18zM20 12H22V14H20zM22 14H24V16H22zM22 10H24V12H22zM18 14H20V16H18z"></path><path d="M28,4a2.0023,2.0023,0,0,0-2,2V26H6V22h4V20H6V16h4V14H6V10h4V8H6V6A2.0023,2.0023,0,0,0,4,4H2V6H4V26a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V6h2V4Z"></path></svg>`;
export default svgResultCarbonIcon;
