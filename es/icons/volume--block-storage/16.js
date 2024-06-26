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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M17 21H10V14h7zm-5-2h3V16H12zM17 30H10V23h7zm-5-2h3V25H12zM26 21H19V14h7zm-5-2h3V16H21zM26 30H19V23h7zm-5-2h3V25H21z"></path><path d="M8,28H4a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,4,4h7.5857A1.9865,1.9865,0,0,1,13,4.5859L16.4143,8H28a2.0023,2.0023,0,0,1,2,2v8H28V10H15.5857l-4-4H4V26H8Z"></path></svg>`;
export default svgResultCarbonIcon;
