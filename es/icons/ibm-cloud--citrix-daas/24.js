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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M19 23H23V27H19zM26 23H30V27H26zM19 16H23V20H19zM26 16H30V20H26z"></path><path d="M16,4c-4.3,0-7.9,3-8.8,7.1c-3,0.6-5.2,3.3-5.2,6.4C2,21.1,4.9,24,8.5,24H16v-2H8.5C6,22,4,20,4,17.5c0-2.3,1.8-4.3,4.1-4.5	L9,13l0.1-0.8C9.5,8.6,12.5,6,16,6c3.9,0,7,3.1,7,7h2C25,8,21,4,16,4z"></path></svg>`;
export default svgResultCarbonIcon;
