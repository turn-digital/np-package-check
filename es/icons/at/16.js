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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,3A12.92,12.92,0,0,0,3,16v1A13,13,0,0,0,16,30h7V28H16A11,11,0,0,1,5,17V16A10.94,10.94,0,0,1,16,5,10.64,10.64,0,0,1,27,16c0,3.59-1.4,5-3.66,5C21.76,21,21,19.71,21,18V10H19v1.94A3.84,3.84,0,0,0,15.5,10,5.48,5.48,0,0,0,10,15.44v2.12A5.48,5.48,0,0,0,15.5,23a4.28,4.28,0,0,0,4-2.46A4.35,4.35,0,0,0,23.41,23C26.48,23,29,21,29,16A12.72,12.72,0,0,0,16,3Zm3,14.56a3.5,3.5,0,0,1-7,0V15.44a3.5,3.5,0,0,1,7,0Z"></path></svg>`;
export default svgResultCarbonIcon;
