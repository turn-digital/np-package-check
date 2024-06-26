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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 16a9.9283 9.9283 0 00-1.1392-4.6182l-1.4961 1.4961A7.9483 7.9483 0 0124 16zM23.4141 10L22 8.5859l-4.7147 4.7147A2.9659 2.9659 0 0016 13a3 3 0 103 3 2.9659 2.9659 0 00-.3006-1.2853zM16 17a1 1 0 111-1A1.0013 1.0013 0 0116 17zM16 8a7.9515 7.9515 0 013.1223.6353l1.4961-1.4961A9.9864 9.9864 0 006 16H8A8.0092 8.0092 0 0116 8z"></path><path d="M16,30A14,14,0,1,1,30,16,14.0158,14.0158,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12.0137,12.0137,0,0,0,16,4Z"></path></svg>`;
export default svgResultCarbonIcon;
