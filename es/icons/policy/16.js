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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 18A6 6 0 1020 22.46v7.54l4-1.8926 4 1.8926V22.46A5.98 5.98 0 0030 18zm-4 8.84l-2-.9467L22 26.84V23.65a5.8877 5.8877 0 004 0zM24 22a4 4 0 114-4A4.0045 4.0045 0 0124 22zM9 14H16V16H9zM9 8H19V10H9z"></path><path d="M6,30a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V8H22V4H6V28H16v2Z"></path></svg>`;
export default svgResultCarbonIcon;
