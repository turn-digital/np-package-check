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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M6 6H10V10H6zM10 10H14V14H10zM14 6H18V10H14zM22 6H26V10H22zM6 14H10V18H6zM14 14H18V18H14zM22 14H26V18H22zM6 22H10V26H6zM14 22H18V26H14zM22 22H26V26H22zM18 10H22V14H18zM10 18H14V22H10zM18 18H22V22H18z"></path></svg>`;
export default svgResultCarbonIcon;
