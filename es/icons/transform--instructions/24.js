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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23,17v-2h-2.1c-0.1-0.6-0.4-1.2-0.7-1.8l1.5-1.5l-1.4-1.4l-1.5,1.5c-0.5-0.3-1.1-0.6-1.8-0.7V9h-2v2.1	c-0.6,0.1-1.2,0.4-1.8,0.7l-1.5-1.5l-1.4,1.4l1.5,1.5c-0.3,0.5-0.6,1.1-0.7,1.8H9v2h2.1c0.1,0.6,0.4,1.2,0.7,1.8l-1.5,1.5l1.4,1.4	l1.5-1.5c0.5,0.3,1.1,0.6,1.8,0.7V23h2v-2.1c0.6-0.1,1.2-0.4,1.8-0.7l1.5,1.5l1.4-1.4l-1.5-1.5c0.3-0.5,0.6-1.1,0.7-1.8H23z M16,19	c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S17.7,19,16,19z"></path><path d="M16 2v2c6.6 0 12 5.4 12 12s-5.4 12-12 12v2c7.7 0 14-6.3 14-14S23.7 2 16 2zM8.2 25.1L7 26.7c1.2 1 2.6 1.9 4.2 2.4l.7-1.9C10.5 26.7 9.3 26 8.2 25.1zM4.2 18l-2 .4C2.5 20 3.1 21.6 3.9 23l1.7-1C4.9 20.8 4.4 19.4 4.2 18zM5.6 10L3.9 9c-.8 1.4-1.4 3-1.6 4.6l2 .3C4.4 12.5 4.9 11.2 5.6 10zM11.8 4.8l-.7-1.9C9.6 3.5 8.2 4.3 7 5.3l1.3 1.5C9.3 6 10.5 5.3 11.8 4.8z"></path></svg>`;
export default svgResultCarbonIcon;
