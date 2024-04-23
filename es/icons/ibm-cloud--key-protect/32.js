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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26,14.1V2h-5v2h3v2h-3v2h3v6.1c-1.7,0.4-3,2-3,3.9c0,2.2,1.8,4,4,4s4-1.8,4-4C29,16.1,27.7,14.6,26,14.1z M25,20	c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C27,19.1,26.1,20,25,20z"></path><path d="M15,31l-5.5-3.2c-3.4-2-5.5-5.6-5.5-9.5V4c0-1.1,0.9-2,2-2h12v2H6v14.3c0,3.2,1.7,6.2,4.5,7.8l4.5,2.7l4.5-2.7	c1.1-0.7,2.1-1.5,2.8-2.6l1.6,1.1c-0.9,1.3-2.1,2.4-3.5,3.2L15,31z"></path></svg>`;
export default svgResultCarbonIcon;
