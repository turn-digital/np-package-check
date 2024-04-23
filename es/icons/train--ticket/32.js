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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29.1257,7.125a1.125,1.125,0,1,1,0-2.25h.875V2h-12V4.875h.875a1.125,1.125,0,0,1,0,2.25h-.875V10h12V7.125Z"></path><path d="M22.0007,13v3h-16V10h9V8H6.185A2.9948,2.9948,0,0,1,9.0007,6h6V4h-6a5.0057,5.0057,0,0,0-5,5V21a4.99,4.99,0,0,0,3.582,4.77L5.77,30H7.9458L9.66,26h8.6812l1.7143,4h2.1758l-1.8127-4.23A4.99,4.99,0,0,0,24.0007,21V13Zm0,7h-3v2h2.8157a2.9948,2.9948,0,0,1-2.8157,2h-10A2.9948,2.9948,0,0,1,6.185,22H9.0007V20h-3V18h16Z"></path></svg>`;
export default svgResultCarbonIcon;
