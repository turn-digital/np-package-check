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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,26H4a2,2,0,0,1-2-2V10A2,2,0,0,1,4,8H28a2,2,0,0,1,2,2V24A2,2,0,0,1,28,26ZM4,10V24H28V10Z"></path><path d="M10 20H21V22H10zM6 12H8V14H6zM10 12H12V14H10zM14 12H16V14H14zM18 12H20V14H18zM6 20H8V22H6zM6 16H8V18H6zM10 16H12V18H10zM14 16H16V18H14zM22 12H26V14H22zM22 16H26V18H22zM18 16H20V18H18zM23 20H26V22H23z"></path></svg>`;
export default svgResultCarbonIcon;
