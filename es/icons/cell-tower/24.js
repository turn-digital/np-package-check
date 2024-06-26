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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M25 11L25 16 17 16 17 11 15 11 15 16 7 16 7 11 5 11 5 23 7 23 7 18 10 18 10 30 12 30 12 18 15 18 15 23 17 23 17 18 20 18 20 30 22 30 22 18 25 18 25 23 27 23 27 11zM16 6c-1.7 0-3.2.7-4.2 1.8l1.4 1.4C13.9 8.4 14.9 8 16 8s2.1.4 2.8 1.2l1.4-1.4C19.2 6.7 17.7 6 16 6z"></path><path d="M8.9,4.9l1.4,1.4C11.8,4.9,13.8,4,16,4s4.2,0.9,5.7,2.3l1.4-1.4C21.3,3.1,18.8,2,16,2S10.7,3.1,8.9,4.9z"></path></svg>`;
export default svgResultCarbonIcon;
