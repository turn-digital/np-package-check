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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M25 12L25 3 23 3 23 5 20 5 20 7 23 7 23 12 20 12 20 14 28 14 28 12 25 12zM8.5 5c1.9299 0 3.5 1.5701 3.5 3.5s-1.5701 3.5-3.5 3.5-3.5-1.5701-3.5-3.5 1.5701-3.5 3.5-3.5m0-2c-3.0376 0-5.5 2.4624-5.5 5.5s2.4624 5.5 5.5 5.5 5.5-2.4624 5.5-5.5-2.4624-5.5-5.5-5.5h0zM23.5 20c1.9299 0 3.5 1.5701 3.5 3.5s-1.5701 3.5-3.5 3.5-3.5-1.5701-3.5-3.5 1.5701-3.5 3.5-3.5m0-2c-3.0376 0-5.5 2.4624-5.5 5.5s2.4624 5.5 5.5 5.5 5.5-2.4624 5.5-5.5-2.4624-5.5-5.5-5.5h0zM6 19L6 21 9.5859 21 4 26.5859 5.4141 28 11 22.4141 11 26 13 26 13 19 6 19z"></path></svg>`;
export default svgResultCarbonIcon;
