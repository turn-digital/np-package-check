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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM27.9493,15.001H21.91a5.9825,5.9825,0,0,0-9.3806-3.8853l-4.27-4.27a11.9783,11.9783,0,0,1,19.69,8.1548ZM16,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,20ZM4,16A11.937,11.937,0,0,1,6.8455,8.26l4.27,4.2695A5.9836,5.9836,0,0,0,15,21.9106v6.04A12.0105,12.0105,0,0,1,4,16ZM17,27.95v-6.04A6.0069,6.0069,0,0,0,21.91,17h6.04A12.0082,12.0082,0,0,1,17,27.95Z"></path></svg>`;
export default svgResultCarbonIcon;
