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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26,29h-0.2C6.2,27.9,3.4,11.3,3,6.2C2.9,4.6,4.1,3.1,5.8,3C5.8,3,5.9,3,6,3h5.3c0.8,0,1.6,0.5,1.9,1.3L14.6,8	c0.3,0.7,0.1,1.6-0.4,2.2l-2.1,2.1c0.7,3.9,3.7,6.9,7.6,7.6l2.2-2.1c0.6-0.6,1.4-0.7,2.2-0.4l3.8,1.5c0.7,0.3,1.2,1,1.2,1.9V26	C29,27.7,27.7,29,26,29z M6,5C5.4,5,5,5.4,5,6c0,0,0,0.1,0,0.1C5.5,12,8.4,26,25.9,27c0.6,0,1-0.4,1.1-0.9c0,0,0,0,0-0.1v-5.3	l-3.8-1.5l-2.9,2.9L19.9,22c-8.7-1.1-9.9-9.8-9.9-9.9l-0.1-0.5l2.8-2.9L11.3,5H6z"></path><path d="M20 4L20 6 24.6 6 18 12.6 19.4 14 26 7.4 26 12 28 12 28 4z"></path></svg>`;
export default svgResultCarbonIcon;
