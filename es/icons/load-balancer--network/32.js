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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25 16H17V12H15v4H7a2.0023 2.0023 0 00-2 2v4H7V18h8v4h2V18h8v4h2V18A2.0023 2.0023 0 0025 16zM20 10V2H12v8h8zM14 8V4h4V8zM26 24a2.9948 2.9948 0 00-2.8157 2H18.8157a2.982 2.982 0 00-5.6314 0H8.8157a3 3 0 100 2h4.3686a2.982 2.982 0 005.6314 0h4.3686A2.9947 2.9947 0 1026 24zM6 28a1 1 0 111-1A1.0009 1.0009 0 016 28zm10 0a1 1 0 111-1A1.0009 1.0009 0 0116 28zm10 0a1 1 0 111-1A1.0009 1.0009 0 0126 28z"></path></svg>`;
export default svgResultCarbonIcon;
