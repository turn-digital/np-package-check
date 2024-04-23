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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="24.5" cy="9.5" r="1.5"></circle><path d="M17.4143,22H12V16.5857l6.03-6.03A5.3518,5.3518,0,0,1,18,10a6,6,0,1,1,6,6,5.3583,5.3583,0,0,1-.5559-.03ZM14,20h2.5857l6.1706-6.1709.5174.0957A3.935,3.935,0,0,0,24,14a4.0507,4.0507,0,1,0-3.925-3.2729l.0952.5166L14,17.4143Z"></path><path d="M28,18v8H10V6h4V4H4A2.0025,2.0025,0,0,0,2,6V26a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V18ZM4,6H8V26H4Z"></path></svg>`;
export default svgResultCarbonIcon;
