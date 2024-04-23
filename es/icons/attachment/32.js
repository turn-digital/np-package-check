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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28.1,18.9L13.1,3.9c-2.5-2.6-6.6-2.6-9.2-0.1S1.3,10.5,3.9,13c0,0,0.1,0.1,0.1,0.1L6.8,16l1.4-1.4l-2.9-2.9	C3.6,10,3.6,7.1,5.3,5.4s4.6-1.8,6.3-0.1c0,0,0,0,0.1,0.1l14.9,14.9c1.8,1.7,1.8,4.6,0.1,6.3c-1.7,1.8-4.6,1.8-6.3,0.1	c0,0,0,0-0.1-0.1l-7.4-7.4c-1-1-0.9-2.6,0-3.5c1-0.9,2.5-0.9,3.5,0l4.1,4.1l1.4-1.4c0,0-4.2-4.2-4.2-4.2c-1.8-1.7-4.6-1.6-6.3,0.2	c-1.6,1.7-1.6,4.4,0,6.2l7.5,7.5c2.5,2.6,6.6,2.6,9.2,0.1S30.7,21.5,28.1,18.9C28.1,19,28.1,18.9,28.1,18.9L28.1,18.9z"></path></svg>`;
export default svgResultCarbonIcon;
