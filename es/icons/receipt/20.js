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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M21 16H23V18H21zM9 16H17V18H9zM21 12H23V14H21zM9 12H17V14H9zM9 8H23V10H9z"></path><path d="M25,2H7A2.002,2.002,0,0,0,5,4V29a1,1,0,0,0,1,1H7a.9987.9987,0,0,0,.8-.4L10,26.667,12.2,29.6a1.0353,1.0353,0,0,0,1.6,0L16,26.667,18.2,29.6a1.0353,1.0353,0,0,0,1.6,0L22,26.667,24.2,29.6a.9993.9993,0,0,0,.8.4h1a1,1,0,0,0,1-1V4A2.0023,2.0023,0,0,0,25,2Zm0,25.333L22.8,24.4a1.0353,1.0353,0,0,0-1.6,0L19,27.333,16.8,24.4a1.0353,1.0353,0,0,0-1.6,0L13,27.333,10.8,24.4a1.0353,1.0353,0,0,0-1.6,0L7,27.333V4H25Z"></path></svg>`;
export default svgResultCarbonIcon;
