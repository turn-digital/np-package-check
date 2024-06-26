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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M8 8H10V12H8zM8 14H10V18H8zM14 8H16V12H14zM14 14H16V18H14zM8 20H10V24H8zM14 20H16V24H14zM30 22L21.83 22 24.41 24.59 23 26 18 21 23 16 24.41 17.41 21.83 20 30 20 30 22zM19 12L27.17 12 24.59 14.59 26 16 31 11 26 6 24.59 7.41 27.17 10 19 10 19 12z"></path><path d="M28,26v2H4V4H20V6h2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V30H30V26Z"></path></svg>`;
export default svgResultCarbonIcon;
