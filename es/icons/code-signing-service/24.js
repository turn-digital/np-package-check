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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="25" cy="20" r="1"></circle><path d="M19.4141 30H15V25.5857l5.0337-5.0337A4.6069 4.6069 0 0120 20a5 5 0 114.4478 4.9663zM17 28h1.5859l5.2061-5.2063.5395.1238a3.0351 3.0351 0 10-2.249-2.2488l.1236.5393L17 26.4143zM6 8H8V16H6zM2 8H4V16H2zM18 8H20V14H18zM14 16H12a2 2 0 01-2-2V10a2 2 0 012-2h2a2 2 0 012 2v4A2 2 0 0114 16zm-2-2h2V10H12zM2 18H4V26H2zM14 18H16V22H14zM10 26H8a2 2 0 01-2-2V20a2 2 0 012-2h2a2 2 0 012 2v4A2 2 0 0110 26zM8 24h2V20H8zM2 2H4V6H2zM14 2H16V6H14zM18 2H20V6H18zM10 6H8A2 2 0 016 4V2H8V4h2V2h2V4A2 2 0 0110 6z"></path></svg>`;
export default svgResultCarbonIcon;
