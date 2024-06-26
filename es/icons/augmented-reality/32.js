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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M27.4473,9.1055l-6-3a1.0008,1.0008,0,0,0-.8946,0l-6,3A1,1,0,0,0,14,10v7a1,1,0,0,0,.5527.8945l6,3a1.001,1.001,0,0,0,.8946,0l6-3A1,1,0,0,0,28,17V10A1,1,0,0,0,27.4473,9.1055ZM21,8.1182,24.7637,10,21,11.8818,17.2363,10Zm-5,3.5,4,2v4.7636l-4-2Zm6,6.7636V13.6182l4-2v4.7636Z"></path><circle cx="13.5" cy="24.5" r="1.5"></circle><path d="M20,30H7a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,7,2H20V4H7V28H20V24h2v4A2.0023,2.0023,0,0,1,20,30Z"></path></svg>`;
export default svgResultCarbonIcon;
