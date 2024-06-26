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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M2 7L2 9 9 9 9 25 11 25 11 9 18 9 18 7 2 7zM30 11.076L29.256 9.219 26 10.522 26 7 24 7 24 10.523 20.744 9.22 20 11.077 23.417 12.444 20.9 15.8 22.5 17 25 13.667 27.5 17 29.1 15.8 26.583 12.443 30 11.076z"></path></svg>`;
export default svgResultCarbonIcon;
