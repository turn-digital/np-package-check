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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20,18v6.5c0,1.9,1.1,3.7,2.9,4.5l2.1,1l2.1-1c1.7-0.8,2.9-2.6,2.9-4.5V18H20z M28,24.5c0,1.2-0.7,2.2-1.7,2.7L25,27.8	l-1.3-0.6c-1-0.5-1.7-1.6-1.7-2.7V20h6V24.5z"></path><path d="M25,2H5C3.9,2,3,2.9,3,4v22c0,1.1,0.9,2,2,2h11V4h9v11h2V4C27,2.9,26.1,2,25,2z M13.6,12.2L5,23.9V5.1L13.6,12.2z M6,26	l8-10.9V26H6z M14,9.9L6.8,4H14V9.9z"></path></svg>`;
export default svgResultCarbonIcon;
