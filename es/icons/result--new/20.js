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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="26" cy="26" r="4"></circle><path d="M10 13H12V15H10zM10 18H12V20H10zM10 23H12V25H10zM14 13H22V15H14zM14 18H22V20H14zM14 23H18V25H14z"></path><path d="M7,28V7h3v3H22V7h3V18h2V7a2,2,0,0,0-2-2H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H18V28ZM12,4h8V8H12Z"></path></svg>`;
export default svgResultCarbonIcon;
