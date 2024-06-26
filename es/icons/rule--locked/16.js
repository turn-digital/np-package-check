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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 22v-3c0-2.2-1.8-4-4-4s-4 1.8-4 4v3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5C30 22.9 29.1 22 28 22zM22 19c0-1.1.9-2 2-2s2 .9 2 2v3h-4V19zM20 29v-5h8v5H20zM8 16H14V18H8zM8 10H20V12H8z"></path><path d="M26,4c0-1.1-0.9-2-2-2H4C2.9,2,2,2.9,2,4v13c0,4.1,2.2,7.8,5.8,9.7l5.2,2.8v-2.3l-4.2-2.3C5.8,23.4,4,20.3,4,17V4h20v8h2V4z"></path></svg>`;
export default svgResultCarbonIcon;
