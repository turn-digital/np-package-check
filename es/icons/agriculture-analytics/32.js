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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24.251 21.3691l2.1943 1.4629A1 1 0 0027.8 22.6l3-4-1.6-1.2-2.4326 3.2437L24.5547 19.168a1 1 0 00-1.3687.2509L20 23.8789V16H18V26a2.0023 2.0023 0 002 2H30V26H20.9434zM2 21H16V23H2zM2 26H16V28H2zM11 16V11h1a4.0046 4.0046 0 004-4V4H13a3.9782 3.9782 0 00-2.7468 1.1066A6.0033 6.0033 0 005 2H2V5a6.0066 6.0066 0 006 6H9v5H2v2H16V16zM13 6h1V7a2.002 2.002 0 01-2 2H11V8A2.0019 2.0019 0 0113 6zM8 9A4.0046 4.0046 0 014 5V4H5A4.0045 4.0045 0 019 8V9z"></path></svg>`;
export default svgResultCarbonIcon;
