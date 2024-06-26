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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22 26H20V17.76l-3.23 3.88a1 1 0 01-1.54 0L12 17.76V26H10V15a1 1 0 01.66-.94 1 1 0 011.11.3L16 19.44l4.23-5.08a1 1 0 011.11-.3A1 1 0 0122 15zM4.16 14.65l-3-1.75a.76.76 0 10-.76 1.32L3.4 16a.76.76 0 10.76-1.31zM8.29 10.52a.73.73 0 001 .27.75.75 0 00.28-1l-1.74-3a.76.76 0 10-1.32.76zM16 9a.76.76 0 00.76-.76V4.76a.76.76 0 10-1.52 0V8.25A.76.76 0 0016 9zM22.68 10.79a.75.75 0 00.37.11.76.76 0 00.66-.38l1.75-3a.76.76 0 00-1.32-.76l-1.74 3A.75.75 0 0022.68 10.79zM31.9 13.18a.76.76 0 00-1-.28l-3 1.75A.76.76 0 0028.6 16l3-1.74A.77.77 0 0031.9 13.18z"></path></svg>`;
export default svgResultCarbonIcon;
