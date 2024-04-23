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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M27,22c-0.7,0-1.4,0.3-1.9,0.7l-5.2-3.1c0-0.2,0.1-0.4,0.1-0.6s0-0.4-0.1-0.6l5.2-3.1c0.5,0.4,1.2,0.7,1.9,0.7	c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3c0,0.2,0,0.4,0.1,0.6l-5.2,3.1C18.4,16.3,17.7,16,17,16c-1.7,0-3,1.3-3,3s1.3,3,3,3	c0.7,0,1.4-0.3,1.9-0.7l5.2,3.1c0,0.2-0.1,0.4-0.1,0.6c0,1.7,1.3,3,3,3s3-1.3,3-3S28.7,22,27,22z M27,12c0.6,0,1,0.4,1,1s-0.4,1-1,1	s-1-0.4-1-1S26.4,12,27,12z M17,20c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S17.6,20,17,20z M27,26c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S27.6,26,27,26z"></path><path d="M19,25H8.5c-3,0-5.5-2.5-5.5-5.5c0-2.7,1.9-4.9,4.5-5.4l1.3-0.2l0.3-1.3C9.9,8.7,13.2,6,17,6c0.5,0,1,0,1.5,0.1	c1.6,0.3,3,1.1,4.2,2.2l1.4-1.4c-1.4-1.4-3.2-2.4-5.2-2.7C18.3,4.1,17.6,4,17,4c-4.7,0-8.9,3.3-9.8,8.1C3.6,12.8,1,15.9,1,19.5	C1,23.6,4.3,27,8.5,27H19V25z"></path></svg>`;
export default svgResultCarbonIcon;