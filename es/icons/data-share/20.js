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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M5 25V15.8281l-3.5859 3.586L0 18l6-6 6 6-1.4141 1.4141L7 15.8281V25H19v2H7A2.0024 2.0024 0 015 25zM24 22h4a2.002 2.002 0 012 2v4a2.002 2.002 0 01-2 2H24a2.002 2.002 0 01-2-2V24A2.002 2.002 0 0124 22zm4 6V24H23.9985L24 28zM27 6v9.1719l3.5859-3.586L32 13l-6 6-6-6 1.4141-1.4141L25 15.1719V6H13V4H25A2.0024 2.0024 0 0127 6zM2 6H8V8H2zM2 2H10V4H2z"></path></svg>`;
export default svgResultCarbonIcon;
