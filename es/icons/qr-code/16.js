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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24 26H26V28H24z" transform="rotate(-90 25 27)"></path><path d="M18 22H20V24H18z" transform="rotate(-90 19 23)"></path><path d="M18 30L22 30 22 28 20 28 20 26 18 26 18 30z"></path><path d="M25 23H29V25H25z" transform="rotate(-90 27 24)"></path><path d="M28 26L30 26 30 30 26 30 26 28 28 28 28 26zM26 20L26 18 30 18 30 22 28 22 28 20 26 20zM24 20L22 20 22 24 20 24 20 26 24 26 24 20z"></path><path d="M19 17H21V21H19z" transform="rotate(-90 20 19)"></path><path d="M6 22H10V26H6z"></path><path d="M14 30H2V18H14zM4 28h8V20H4zM22 6H26V10H22z"></path><path d="M30 14H18V2H30zM20 12h8V4H20zM6 6H10V10H6z"></path><path d="M14,14H2V2H14ZM4,12h8V4H4Z"></path></svg>`;
export default svgResultCarbonIcon;
