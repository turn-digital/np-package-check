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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28.7663 4.2558A4.2121 4.2121 0 0023 4.0321a4.2121 4.2121 0 00-5.7663.2237 4.319 4.319 0 000 6.0447L22.998 16.14 23 16.1376l.002.0019 5.7643-5.839A4.319 4.319 0 0028.7663 4.2558zM27.342 8.8948l-4.34 4.3973L23 13.29l-.002.002-4.34-4.3973a2.3085 2.3085 0 010-3.2338 2.2639 2.2639 0 013.1561 0l1.181 1.2074L23 6.8634l.0049.005 1.181-1.2074a2.2639 2.2639 0 013.1561 0A2.3085 2.3085 0 0127.342 8.8948zM16 30H14V25a3.0033 3.0033 0 00-3-3H7a3.0033 3.0033 0 00-3 3v5H2V25a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM9 10a3 3 0 11-3 3 3 3 0 013-3M9 8a5 5 0 105 5A5 5 0 009 8z"></path></svg>`;
export default svgResultCarbonIcon;
