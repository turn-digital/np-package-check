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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 26H10a2 2 0 01-2-2V8a2 2 0 012-2H22a2 2 0 012 2V24A2 2 0 0122 26zM10 8V24H22V8zM4 24H0V22H4V10H0V8H4a2 2 0 012 2V22A2 2 0 014 24zM32 24H28a2 2 0 01-2-2V10a2 2 0 012-2h4v2H28V22h4z"></path></svg>`;
export default svgResultCarbonIcon;
