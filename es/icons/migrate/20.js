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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 2H6A2 2 0 004 4V8a2 2 0 002 2h9v6.17l-2.59-2.58L11 15l5 5 5-5-1.41-1.41L17 16.17V10h9a2 2 0 002-2V4A2 2 0 0026 2zM6 4h4V8H6zM26 8H12V4H26zM26 22H6a2 2 0 00-2 2v4a2 2 0 002 2H26a2 2 0 002-2V24A2 2 0 0026 22zM6 24H20v4H6zm20 4H22V24h4z"></path></svg>`;
export default svgResultCarbonIcon;
