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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="16" cy="25" r="2"></circle><path d="M30 3.4141L28.5859 2 2 28.5859 3.4141 30 14.0962 19.3179a5.9359 5.9359 0 016.01 1.3193L21.52 19.2236a7.9669 7.9669 0 00-5.125-2.2041l3.3875-3.3877a11.9908 11.9908 0 014.5647 2.7647L25.76 14.9829A13.975 13.975 0 0021.334 12.08L24.3308 9.083a17.9364 17.9364 0 014.2546 3.0747L30 10.7432v-.002a20.02 20.02 0 00-4.1895-3.1377zM14.68 13.0776l2.0415-2.0415C16.481 11.0234 16.2437 11 16 11a13.9447 13.9447 0 00-9.771 3.9927l1.4136 1.4136A11.97 11.97 0 0114.68 13.0776zM16 7a17.87 17.87 0 014.2324.5254L21.875 5.8828A19.9537 19.9537 0 002 10.7412v.0225L3.4043 12.168A17.9193 17.9193 0 0116 7z"></path></svg>`;
export default svgResultCarbonIcon;
