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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M6.9692,25H9.0308l-.75-3H23.7192l-.75,3h2.0616l.9394-3.7578A1,1,0,0,0,25,20H20V17h5a1,1,0,0,0,.9082-1.4189l-6-13a1.0006,1.0006,0,0,0-1.7021-.19L8.2075,15.3906A1,1,0,0,0,9,17h9v3H7a1,1,0,0,0-.97,1.2422ZM20,7.5527,23.437,15H20ZM11.0308,15,18,5.94V15Z"></path><path d="M26.9058,25.751A2.998,2.998,0,0,1,24,28a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,20,25a.9894.9894,0,0,0-.9468.6787A3.44,3.44,0,0,1,16,28a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,12,25a.971.971,0,0,0-.9468.6787A3.44,3.44,0,0,1,8,28a2.998,2.998,0,0,1-2.9058-2.249l-1.9365.498A4.9965,4.9965,0,0,0,8,30a4.9316,4.9316,0,0,0,4-1.9873,5.0192,5.0192,0,0,0,8,0A4.9316,4.9316,0,0,0,24,30a4.9965,4.9965,0,0,0,4.8423-3.751Z"></path></svg>`;
export default svgResultCarbonIcon;
