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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27.303 12a2.6616 2.6616 0 00-1.9079.8058l-.3932.4054-.397-.4054a2.6615 2.6615 0 00-3.8157 0 2.7992 2.7992 0 000 3.8964L25.0019 21l4.2089-4.2978a2.7992 2.7992 0 000-3.8964A2.6616 2.6616 0 0027.303 12zM2 30H4V25a5.0059 5.0059 0 015-5h6a5.0059 5.0059 0 015 5v5h2V25a7.0082 7.0082 0 00-7-7H9a7.0082 7.0082 0 00-7 7zM12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2z"></path></svg>`;
export default svgResultCarbonIcon;
