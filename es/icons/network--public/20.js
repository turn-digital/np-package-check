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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22.5,13c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S27.2,13,22.5,13z M29,21h-3c0-2-0.3-4-0.9-5.5	C27.2,16.5,28.8,18.5,29,21z M22.5,28C22.5,28,22.5,28,22.5,28c-0.4-0.2-1.3-1.8-1.5-5h2.9C23.7,26.2,22.9,27.8,22.5,28z M21,21	c0.1-3.8,1.1-5.8,1.4-6c0,0,0,0,0,0c0.4,0.2,1.4,2.2,1.5,6H21z M19.9,15.5C19.3,17,19.1,19,19,21h-3C16.2,18.5,17.8,16.5,19.9,15.5z M16.2,23H19c0.1,1.6,0.4,3.2,0.9,4.5C18.1,26.7,16.7,25,16.2,23z M25.1,27.5c0.5-1.3,0.8-2.8,0.9-4.5h2.9	C28.3,25,26.9,26.7,25.1,27.5z"></path><path d="M25.8,10c-0.9-4.6-5-8-9.8-8c-4.8,0-8.9,3.4-9.8,8.1C2.7,10.8,0,13.8,0,17.5C0,21.6,3.4,25,7.5,25H11v-2H7.5	c-3,0-5.5-2.5-5.5-5.5c0-2.9,2.2-5.3,5.1-5.5L8,12L8,11.1C8.5,7.1,11.9,4,16,4c3.7,0,6.8,2.6,7.7,6H25.8z"></path></svg>`;
export default svgResultCarbonIcon;
