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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M19 16L19 14 26.171 14 23.878 11.707 25.292 10.293 30 15 25.292 19.707 23.878 18.293 26.171 16 19 16zM17 12L15 12 15 5.828 12.707 8.121 11.293 6.707 16 2 20.707 6.707 19.293 8.121 17 5.828 17 12zM17 20.1011V18a4.0045 4.0045 0 00-4-4H5.8281l2.293-2.293L6.707 10.293 2 15l4.707 4.707 1.4141-1.414L5.8281 16H13a2.0025 2.0025 0 012 2v2.1011a5 5 0 102 0zM16 28a3 3 0 113-3A3.0033 3.0033 0 0116 28z"></path></svg>`;
export default svgResultCarbonIcon;
