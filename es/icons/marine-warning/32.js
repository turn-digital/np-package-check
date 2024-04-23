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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M12,20H7a1,1,0,0,0-.97,1.2422L6.9692,25H9.0308l-.75-3H23.7192l-.75,3h2.0616l.9394-3.7578A1,1,0,0,0,25,20H14V3a1,1,0,0,0-1.7993-.6011L2.2075,15.3906A1,1,0,0,0,3,17h9ZM5.0308,15,12,5.94V15Z"></path><path d="M26.9058,25.751A2.998,2.998,0,0,1,24,28a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,20,25a.9894.9894,0,0,0-.9468.6787A3.44,3.44,0,0,1,16,28a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,12,25a.971.971,0,0,0-.9468.6787A3.44,3.44,0,0,1,8,28a2.998,2.998,0,0,1-2.9058-2.249l-1.9365.498A4.9965,4.9965,0,0,0,8,30a4.9316,4.9316,0,0,0,4-1.9873,5.0192,5.0192,0,0,0,8,0A4.9316,4.9316,0,0,0,24,30a4.9965,4.9965,0,0,0,4.8423-3.751Z"></path><path fill="none" d="M23.75,10h-1.5V6h1.5ZM23,11a1,1,0,1,0,1,1A1,1,0,0,0,23,11Z"></path><path d="M29.9115,13.9355,23.6284,2.3706a.7181.7181,0,0,0-1.2568,0L16.0885,13.9355A.72.72,0,0,0,16.72,15H29.28A.72.72,0,0,0,29.9115,13.9355ZM22.25,6h1.5v4h-1.5ZM23,13a1,1,0,1,1,1-1A1,1,0,0,1,23,13Z"></path></svg>`;
export default svgResultCarbonIcon;
