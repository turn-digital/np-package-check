/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22,2V1H20V2a7.04,7.04,0,0,1-.08,1H12.08A7.04,7.04,0,0,1,12,2V1H10V2c0,3.7549,1.9707,5.6035,4.1008,7C11.9707,10.3965,10,12.2451,10,16s1.9707,5.6035,4.1008,7C11.9707,24.3965,10,26.2451,10,30v1h2V30a7.04,7.04,0,0,1,.08-1H19.92A7.04,7.04,0,0,1,20,30v1h2V30c0-3.7549-1.9707-5.6035-4.1008-7C20.0293,21.6035,22,19.7549,22,16s-1.9707-5.6035-4.1008-7C20.0293,7.6035,22,5.7549,22,2ZM20,16a7.04,7.04,0,0,1-.08,1H12.08a6.3212,6.3212,0,0,1,0-2H19.92A7.04,7.04,0,0,1,20,16Zm-.7559,11H12.7559A8.9078,8.9078,0,0,1,16,24.17,8.9078,8.9078,0,0,1,19.2441,27ZM16,21.83A8.9078,8.9078,0,0,1,12.7559,19h6.4882A8.9078,8.9078,0,0,1,16,21.83ZM19.2441,13H12.7559A8.9078,8.9078,0,0,1,16,10.17,8.9078,8.9078,0,0,1,19.2441,13ZM16,7.83A8.9078,8.9078,0,0,1,12.7559,5h6.4882A8.9078,8.9078,0,0,1,16,7.83Z"></path></svg>`;
export default svgResultCarbonIcon;
