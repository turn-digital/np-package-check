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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M18 23H16V21a3.0033 3.0033 0 00-3-3H9a3.0033 3.0033 0 00-3 3v2H4V21a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM11 6A3 3 0 118 9a3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0011 4zM2 26H30V28H2zM27.303 8a2.6616 2.6616 0 00-1.9079.8058L25 9.2112l-.3951-.4054a2.6615 2.6615 0 00-3.8157 0 2.7992 2.7992 0 000 3.8964L25 17l4.2108-4.2978a2.7992 2.7992 0 000-3.8964A2.6616 2.6616 0 0027.303 8z"></path></svg>`;
export default svgResultCarbonIcon;
