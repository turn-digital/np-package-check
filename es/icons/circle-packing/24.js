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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm7.5,7A3.5,3.5,0,1,1,20,12.5,3.5041,3.5041,0,0,1,23.5,9Zm.4348-1.978C23.791,7.0107,23.6467,7,23.5,7a5.4826,5.4826,0,0,0-4.1323,1.8784,8.0109,8.0109,0,0,0-5.5664-4.6675A11.8554,11.8554,0,0,1,23.9348,7.022ZM16,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,28ZM12,18a6,6,0,1,1,6-6A6.0067,6.0067,0,0,1,12,18ZM4,16a11.97,11.97,0,0,1,.2112-2.1987,7.9921,7.9921,0,0,0,7.3459,6.1762,5.9581,5.9581,0,0,0-.89,6.7564A12.0025,12.0025,0,0,1,4,16ZM21.3325,26.7339a5.9834,5.9834,0,0,0-4.1782-8.6206,8.02,8.02,0,0,0,1.9126-2.3672,5.4883,5.4883,0,0,0,8.9167-.0679c.003.1079.0164.2134.0164.3218A12.0025,12.0025,0,0,1,21.3325,26.7339Z"></path></svg>`;
export default svgResultCarbonIcon;
