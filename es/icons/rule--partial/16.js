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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23 16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7S26.9 16 23 16zM23 28V18c2.8 0 5 2.2 5 5S25.8 28 23 28zM8 16H14V18H8zM8 10H20V12H8z"></path><path d="M26,4c0-1.1-0.9-2-2-2H4C2.9,2,2,2.9,2,4v13c0,4.1,2.2,7.8,5.8,9.7l5.2,2.8v-2.3l-4.2-2.3C5.8,23.4,4,20.3,4,17V4h20v9h2V4z"></path></svg>`;
export default svgResultCarbonIcon;
