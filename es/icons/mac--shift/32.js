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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M21,28H11a2.0023,2.0023,0,0,1-2-2V16H4a1,1,0,0,1-.707-1.707l12-12a.9994.9994,0,0,1,1.414,0l12,12A1,1,0,0,1,28,16H23V26A2.0027,2.0027,0,0,1,21,28ZM6.4141,14H11V26H21V14h4.5859L16,4.4141Z"></path></svg>`;
export default svgResultCarbonIcon;
