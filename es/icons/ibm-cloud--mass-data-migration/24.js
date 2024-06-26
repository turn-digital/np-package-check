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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22 30H10c-1.1 0-2-.9-2-2v-3h2v3h12v-3h2v3C24 29.1 23.1 30 22 30zM15 14.8L15 25 17 25 17 14.8 19.6 17.4 21 16 16 11 11 16 12.4 17.4z"></path><path d="M24.8,9.1C23.9,5,20.3,2,16,2S8.1,5,7.2,9.1C4.2,9.7,2,12.4,2,15.5C2,19.1,4.9,22,8.5,22H12v-2H8.5C6,20,4,18,4,15.5	c0-2.3,1.8-4.3,4.1-4.5L9,11l0.1-0.8C9.5,6.6,12.5,4,16,4c3.5,0,6.5,2.6,6.9,6.1L23,11l0.8,0.1c2.3,0.2,4.1,2.2,4.1,4.5	c0,2.5-2,4.5-4.5,4.5H20v2h3.5c3.6,0,6.5-2.9,6.5-6.5C30,12.4,27.8,9.7,24.8,9.1z"></path></svg>`;
export default svgResultCarbonIcon;
