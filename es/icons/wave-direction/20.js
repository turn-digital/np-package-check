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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22,30H17a7.0078,7.0078,0,0,1-7-7,6.6832,6.6832,0,0,1,2.0244-4.6967A6.7126,6.7126,0,0,0,10.0093,18C5.0425,18.0466,4,24.5513,4,30H2C2,18.4907,6.3452,16.0342,9.9907,16a10.0962,10.0962,0,0,1,4.4785,1.117,1,1,0,0,1,.0616,1.73A4.8773,4.8773,0,0,0,17,28h5Z"></path><path d="M18,24V22a8,8,0,1,0-8-8H8A10,10,0,1,1,18,24Z"></path><circle cx="18" cy="8" r="1"></circle><path d="M23,17.5859l-2.3-2.3007A2.9665,2.9665,0,0,0,21,14a3.0033,3.0033,0,0,0-3-3,2.9609,2.9609,0,0,0-1.2854.3008L14.4141,9,13,10.4141l2.3,2.3007A2.9665,2.9665,0,0,0,15,14a3.0033,3.0033,0,0,0,3,3,2.9609,2.9609,0,0,0,1.2854-.3008L21.5859,19ZM17,14a1,1,0,1,1,1,1A1.0009,1.0009,0,0,1,17,14Z"></path></svg>`;
export default svgResultCarbonIcon;
