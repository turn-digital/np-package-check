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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,4a2.0023,2.0023,0,0,0-2,2V8H24a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,20,5a.9894.9894,0,0,0-.9468.6787A3.44,3.44,0,0,1,16,8a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,12,5a.971.971,0,0,0-.9468.6787A3.44,3.44,0,0,1,8,8H6V6A2.0023,2.0023,0,0,0,4,4H2V6H4V26a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V6h2V4ZM6,26V22h4V20H6V16h4V14H6V10H8a4.9316,4.9316,0,0,0,4-1.9873,5.0192,5.0192,0,0,0,8,0A4.9316,4.9316,0,0,0,24,10h2V26Z"></path></svg>`;
export default svgResultCarbonIcon;
