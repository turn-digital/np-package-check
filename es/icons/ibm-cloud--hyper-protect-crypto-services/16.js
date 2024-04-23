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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M25,30l-2.1-1c-1.7-0.8-2.9-2.6-2.9-4.5V18h10v6.5c0,1.9-1.1,3.7-2.9,4.5L25,30z M22,20v4.5c0,1.2,0.7,2.2,1.7,2.7l1.3,0.6	l1.3-0.6c1-0.5,1.7-1.6,1.7-2.7V20H22z"></path><circle cx="22" cy="10" r="2"></circle><path d="M21,2c-5,0-9,4-9,9c0,0.9,0.1,1.8,0.4,2.6L2,24v6h6l10-10l-1.4-1.4l-2.8,2.8L12.4,20L11,21.4l1.4,1.4l-1.6,1.6L9.4,23	L8,24.4l1.4,1.4L7.2,28H4v-3.2l9.8-9.8l0.8-0.8L14.3,13c-0.2-0.7-0.3-1.3-0.3-2c0-3.9,3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4h2.3	c0.6-1.2,0.9-2.6,0.9-4C30,6,26,2,21,2z"></path></svg>`;
export default svgResultCarbonIcon;
