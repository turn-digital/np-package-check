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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27,12v2h1v4a3,3,0,0,1-6,0V14h1V12H20v6a5.0083,5.0083,0,0,0,4,4.8989V24a4,4,0,0,1-8,0V21.8157a3,3,0,1,0-2,0V24a6,6,0,0,0,12,0V22.8989A5.0083,5.0083,0,0,0,30,18V12ZM15,18a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,15,18Z"></path><path d="M26,4H22V2H20V4H12V2H10V4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2l4,0V26L6,26V6h4V8h2V6h8V8h2V6h4v4h2V6A2,2,0,0,0,26,4Z"></path></svg>`;
export default svgResultCarbonIcon;
