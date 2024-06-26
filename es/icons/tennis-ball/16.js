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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M19,4a8.9812,8.9812,0,0,0-8.1687,12.7549L2,25.5859,3.4141,27l8.4873-8.4873a9.0408,9.0408,0,0,0,1.5859,1.5859L10,23.5859,11.4141,25l3.8313-3.8311A8.9959,8.9959,0,1,0,19,4Zm6.9058,7.9058a7.005,7.005,0,0,1-5.8116-5.8116A7.005,7.005,0,0,1,25.9058,11.9058ZM12.0942,14.0942a7.005,7.005,0,0,1,5.8116,5.8116A7.005,7.005,0,0,1,12.0942,14.0942ZM19.93,19.9307a9.01,9.01,0,0,0-7.8611-7.8614,7.004,7.004,0,0,1,6-6,9.01,9.01,0,0,0,7.8611,7.8614A7.004,7.004,0,0,1,19.93,19.9307Z"></path></svg>`;
export default svgResultCarbonIcon;
