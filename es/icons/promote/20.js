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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16 21L17.4 22.4 14.8 25 23 25 23 27 14.8 27 17.4 29.6 16 31 11 26z"></path><path d="M6.3 19H17.6V21H6.3z" transform="rotate(-45.001 12 20)"></path><path d="M23,22h-2v-5c0-0.3,0.1-0.5,0.3-0.7l4.1-4.1c1.7-1.7,2.6-4,2.6-6.4V4h-1.9c-2.4,0-4.7,0.9-6.4,2.6l-4.1,4.1	C15.5,10.9,15.3,11,15,11H7.5l-2.6,3.3l5.3,0.8l-0.3,2l-7-1c-0.4-0.1-0.7-0.3-0.8-0.6s-0.1-0.7,0.1-1l4-5C6.4,9.1,6.7,9,7,9h7.6	l3.8-3.8C20.4,3.1,23.2,2,26.1,2H28c1.1,0,2,0.9,2,2v1.9c0,2.9-1.1,5.7-3.2,7.8L23,17.4V22z"></path></svg>`;
export default svgResultCarbonIcon;
