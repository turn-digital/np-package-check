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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M32 23L27 28 25.6 26.6 28.2 24 20 24 20 22 28.2 22 25.6 19.4 27 18z"></path><path d="M25.5,2.7C25.1,2.3,24.6,2,24,2h-2.7c-0.6,0-1.1,0.3-1.3,0.8L19.4,4H18V3.5C18,2.7,17.3,2,16.5,2h-5C10.7,2,10,2.7,10,3.5V4	H8.6L8,2.8C7.8,2.3,7.3,2,6.7,2H4C3.4,2,2.9,2.3,2.5,2.7C2.1,3.2,1.9,3.8,2,4.4l0.7,4.1C3,9.9,4.2,11,5.7,11H6v12c-1.7,0-3,1.3-3,3	v4h19v-2h-5v-7c0-1.7-1.3-3-3-3s-3,1.3-3,3v7H5v-2c0-0.6,0.4-1,1-1h2V11h12v7h2v-7h0.3c1.5,0,2.7-1.1,3-2.5L26,4.4	C26.1,3.8,25.9,3.2,25.5,2.7z M13,21c0-0.6,0.4-1,1-1s1,0.4,1,1v7h-2V21z M23.3,8.2c-0.1,0.5-0.5,0.8-1,0.8H5.7	c-0.5,0-0.9-0.4-1-0.8L4,4h2.4l1,2H12V4h4v2h4.6l1-2L24,4L23.3,8.2z"></path></svg>`;
export default svgResultCarbonIcon;
