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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 22H30V30H28zM24 18H26V30H24zM20 26H22V30H20zM9 16a7 7 0 107 7A7.0078 7.0078 0 009 16zm4.8989 6H10V18.1011A5.0145 5.0145 0 0113.8989 22zM9 28a5 5 0 01-1-9.8989V22a2 2 0 002 2h3.8989A5.0081 5.0081 0 019 28zM22.5352 12l4-6H30V4H25.4648l-4 6H18V2H16V14a2 2 0 002 2H30V14H18V12z"></path><circle cx="11" cy="7" r="1"></circle><circle cx="9" cy="11" r="1"></circle><circle cx="7" cy="5" r="1"></circle><circle cx="5" cy="9" r="1"></circle><circle cx="3" cy="13" r="1"></circle></svg>`;
export default svgResultCarbonIcon;
