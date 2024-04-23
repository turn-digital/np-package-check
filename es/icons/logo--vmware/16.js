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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M3.4,11C3,10.1,2,9.7,1,10.2s-1.3,1.4-0.9,2.3L4.1,21c0.6,1.3,1.3,2,2.5,2c1.3,0,1.9-0.8,2.5-2c0,0,3.4-7.4,3.4-7.5	c0-0.1,0.1-0.3,0.5-0.3c0.3,0,0.5,0.2,0.5,0.6V21c0,1.1,0.6,2,1.8,2s1.8-0.9,1.8-2V15c0-1.1,0.8-1.9,1.9-1.9c1.1,0,1.9,0.8,1.9,1.9	V21c0,1.1,0.6,2,1.8,2s1.8-0.9,1.8-2V15c0-1.1,0.8-1.9,1.9-1.9c1.1,0,1.9,0.8,1.9,1.9V21c0,1.1,0.6,2,1.8,2s1.8-0.9,1.8-2v-6.8	c0-2.5-2-4.2-4.4-4.2s-3.9,1.7-3.9,1.7c-0.8-1-1.9-1.7-3.8-1.7c-2,0-3.7,1.7-3.7,1.7c-0.8-1-2.2-1.7-3.3-1.7c-1.7,0-3.1,0.8-4,2.7	l-2.5,5.9L3.4,11"></path></svg>`;
export default svgResultCarbonIcon;
