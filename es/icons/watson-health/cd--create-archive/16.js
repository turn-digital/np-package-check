/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M14,20a6,6,0,1,1,6-6A6,6,0,0,1,14,20Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,14,10Z"></path><circle cx="14" cy="14" r="2"></circle><path d="M17,23.54A10,10,0,1,1,24,14c0,.34,0,.67-.05,1h2c0-.33.05-.66.05-1A12,12,0,1,0,14,26a12.33,12.33,0,0,0,3-.39Z"></path><path d="M25,30l-2.14-1A5,5,0,0,1,20,24.47V18H30v6.47A5,5,0,0,1,27.14,29ZM22,20v4.47a3,3,0,0,0,1.72,2.71l1.28.61,1.28-.61A3,3,0,0,0,28,24.47V20Z"></path></svg>`;
export default svgResultCarbonIcon;
