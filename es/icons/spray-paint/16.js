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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22.5,23A4.5,4.5,0,1,1,27,18.5,4.505,4.505,0,0,1,22.5,23Zm0-7A2.5,2.5,0,1,0,25,18.5,2.5026,2.5026,0,0,0,22.5,16Z"></path><path d="M28 8H26V3H19V8H17a2.002 2.002 0 00-2 2V28a2.0023 2.0023 0 002 2H28a2.0027 2.0027 0 002-2V10A2.0023 2.0023 0 0028 8zM21 5h3V8H21zM17 28V10H28l.002 18zM2 14H5V17H2zM7 9H10V12H7zM2 9H5V12H2zM12 4H15V7H12zM7 4H10V7H7zM2 4H5V7H2z"></path></svg>`;
export default svgResultCarbonIcon;
