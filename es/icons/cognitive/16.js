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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,13A11,11,0,0,0,19,2H11a9,9,0,0,0-9,9v3a5,5,0,0,0,5,5H8.1A5,5,0,0,0,13,23h1.38l4,7,1.73-1-4-6.89A2,2,0,0,0,14.38,21H13a3,3,0,0,1,0-6h1V13H13a5,5,0,0,0-4.9,4H7a3,3,0,0,1-3-3V12H6A3,3,0,0,0,9,9V8H7V9a1,1,0,0,1-1,1H4.08A7,7,0,0,1,11,4h6V6a1,1,0,0,1-1,1H14V9h2a3,3,0,0,0,3-3V4a9,9,0,0,1,8.05,5H26a3,3,0,0,0-3,3v1h2V12a1,1,0,0,1,1-1h1.77A8.76,8.76,0,0,1,28,13v1a5,5,0,0,1-5,5H20v2h3a7,7,0,0,0,3-.68V21a3,3,0,0,1-3,3H22v2h1a5,5,0,0,0,5-5V18.89A7,7,0,0,0,30,14Z"></path></svg>`;
export default svgResultCarbonIcon;
