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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24.3 13L23.39 21.61 22 13 20 13 18.61 21.61 17.7 13 16 13 17.36 23 19.64 23 21 14.63 22.36 23 24.64 23 26 13 24.3 13zM12.21 9L11.87 17 11.61 21.54 11.2 18 10.52 12.54 8.5 12.54 7.82 18 7.41 21.54 7.16 17 6.81 9 5.01 9 6.01 23 8.28 23 9.04 18.07 9.5 14 9.51 13.97 9.52 14 9.98 18.07 10.74 23 13.01 23 14.01 9 12.21 9z"></path></svg>`;
export default svgResultCarbonIcon;
