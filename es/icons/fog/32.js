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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24.8008,11.1382a8.9938,8.9938,0,0,0-17.6006,0A6.533,6.533,0,0,0,2,17.5H2V19a1,1,0,0,0,1,1H15a1,1,0,0,0,0-2H4v-.4966H4a4.5176,4.5176,0,0,1,4.144-4.4819l.8155-.064.0991-.812a6.9936,6.9936,0,0,1,13.8838,0l.0986.812.8154.064A4.4962,4.4962,0,0,1,23.5,22H7a1,1,0,0,0,0,2H23.5a6.4963,6.4963,0,0,0,1.3008-12.8618Z"></path><rect width="18" height="2" x="2" y="26" rx="1"></rect></svg>`;
export default svgResultCarbonIcon;
