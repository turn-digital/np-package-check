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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22,24c-0.2,0-0.3,0-0.5,0L18.2,18c0.5-0.5,0.8-1.2,0.8-2c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,0.8,0.3,1.5,0.8,2L10.5,24	c-0.2,0-0.3,0-0.5,0c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3c0-0.8-0.3-1.5-0.8-2l3.3-6.1c0.2,0,0.3,0,0.5,0s0.3,0,0.5,0l3.3,6.1	c-0.5,0.5-0.8,1.2-0.8,2c0,1.7,1.3,3,3,3s3-1.3,3-3S23.7,24,22,24z M16,15c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S15.4,15,16,15z M10,28c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,28,10,28z M22,28c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S22.6,28,22,28z"></path><path d="M24.8,9.1C23.9,5,20.3,2,16,2S8.1,5,7.2,9.1C4.2,9.7,2,12.4,2,15.5C2,19.1,4.9,22,8.5,22H9v-2H8.5C6,20,4,18,4,15.5	c0-2.3,1.8-4.3,4.1-4.5L9,11l0.1-0.8C9.5,6.6,12.5,4,16,4c3.5,0,6.5,2.6,6.9,6.1L23,11l0.8,0.1c2.3,0.2,4.1,2.2,4.1,4.5	c0,2.5-2,4.5-4.5,4.5H23v2h0.5c3.6,0,6.5-2.9,6.5-6.5C30,12.4,27.8,9.7,24.8,9.1z"></path></svg>`;
export default svgResultCarbonIcon;
