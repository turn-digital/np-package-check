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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20,18a3.9962,3.9962,0,0,1-3,3.8579V17h2V15H17V13.8159a3.0007,3.0007,0,1,0-2,0V15H13v2h2v4.8579A3.9962,3.9962,0,0,1,12,18H10a6,6,0,0,0,12,0Zm-4-8a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,16,10Z"></path><path d="M30,14H27.8193A12.0112,12.0112,0,0,0,18,4.1807V2H14V4.1807A12.0112,12.0112,0,0,0,4.1807,14H2v4H4.1807A12.0112,12.0112,0,0,0,14,27.8193V30h4V27.8193A12.0112,12.0112,0,0,0,27.8193,18H30ZM16,26A10,10,0,1,1,26,16,10.0114,10.0114,0,0,1,16,26Z"></path></svg>`;
export default svgResultCarbonIcon;
