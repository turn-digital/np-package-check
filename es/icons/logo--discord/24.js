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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M25.7,7.1C23.9,6.3,22,5.7,20,5.3c0,0-0.1,0-0.1,0c-0.2,0.4-0.5,1-0.7,1.5c-2.2-0.3-4.3-0.3-6.4,0c-0.2-0.5-0.5-1-0.7-1.5	c0,0-0.1,0-0.1,0c-2,0.3-3.9,0.9-5.7,1.8c0,0,0,0,0,0c-3.6,5.4-4.6,10.7-4.1,15.9c0,0,0,0.1,0,0.1c2.4,1.8,4.7,2.8,7,3.5	c0,0,0.1,0,0.1,0c0.5-0.7,1-1.5,1.4-2.3c0,0,0-0.1,0-0.1c-0.8-0.3-1.5-0.6-2.2-1c-0.1,0-0.1-0.1,0-0.1c0.1-0.1,0.3-0.2,0.4-0.3	c0,0,0.1,0,0.1,0c4.6,2.1,9.5,2.1,14.1,0c0,0,0.1,0,0.1,0c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0,0,0.1,0,0.1c-0.7,0.4-1.4,0.8-2.2,1	c0,0-0.1,0.1,0,0.1c0.4,0.8,0.9,1.6,1.4,2.3c0,0,0.1,0,0.1,0c2.3-0.7,4.6-1.8,7-3.5c0,0,0,0,0-0.1C30.5,17,28.9,11.8,25.7,7.1	C25.7,7.1,25.7,7.1,25.7,7.1z M11.4,19.9c-1.4,0-2.5-1.3-2.5-2.8s1.1-2.8,2.5-2.8c1.4,0,2.5,1.3,2.5,2.8	C13.9,18.6,12.8,19.9,11.4,19.9z M20.7,19.9c-1.4,0-2.5-1.3-2.5-2.8s1.1-2.8,2.5-2.8c1.4,0,2.5,1.3,2.5,2.8	C23.2,18.6,22.1,19.9,20.7,19.9z"></path></svg>`;
export default svgResultCarbonIcon;
