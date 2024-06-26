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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30 24a6 6 0 10-6 6A6.0066 6.0066 0 0030 24zm-2 0a3.9521 3.9521 0 01-.5669 2.019L21.981 20.5669A3.9529 3.9529 0 0124 20 4.0045 4.0045 0 0128 24zm-8 0a3.9521 3.9521 0 01.5669-2.019l5.4521 5.4521A3.9529 3.9529 0 0124 28 4.0045 4.0045 0 0120 24zM8 16H18V18H8zM8 10H20V12H8z"></path><path d="M14,27.7334l-5.2344-2.791A8.9858,8.9858,0,0,1,4,17V4H24l0,11h2L26,4a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,4V17a10.9814,10.9814,0,0,0,5.8242,9.707L14,30Z"></path></svg>`;
export default svgResultCarbonIcon;
