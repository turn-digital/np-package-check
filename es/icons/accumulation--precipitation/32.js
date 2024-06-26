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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 16H18V18H16zM18 18H20V20H18zM20 20H22V22H20zM20 16H22V18H20zM16 20H18V22H16zM20 12a3.8978 3.8978 0 01-4-3.777 3.9017 3.9017 0 01.6533-2.0639L19.17 2.4141a1.0381 1.0381 0 011.6592 0L23.3154 6.11A3.9693 3.9693 0 0124 8.223 3.8978 3.8978 0 0120 12zm0-7.2368L18.3438 7.2257A1.89 1.89 0 0018 8.223 1.9 1.9 0 0020 10a1.9 1.9 0 002-1.777 1.98 1.98 0 00-.375-1.0466z"></path><path d="M28,4a2.0023,2.0023,0,0,0-2,2V26H6V10H8v8l1,2,1-2V10h2v4l1,2,1-2V8H6V6A2.0023,2.0023,0,0,0,4,4H2V6H4V26a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V6h2V4Z"></path></svg>`;
export default svgResultCarbonIcon;
