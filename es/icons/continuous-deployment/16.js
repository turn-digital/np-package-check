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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24,2l-6,6l1.4,1.4L23,5.8V19c0,5-4,9-9,9c-1.6,0-3.1-0.4-4.3-1.1C10.1,27,10.5,27,11,27c4.4,0,8-3.6,8-8s-3.6-8-8-8	s-8,3.6-8,8c0,6.1,4.9,11,11,11s11-4.9,11-11V5.8l3.6,3.6L30,8L24,2z M5,19.6c0-0.2,0-0.4,0-0.6c0-3.3,2.7-6,6-6s6,2.7,6,6	s-2.7,6-6,6C7.9,25,5.3,22.6,5,19.6z"></path></svg>`;
export default svgResultCarbonIcon;
