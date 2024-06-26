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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29.707 19.293l-3-3a.9994.9994 0 00-1.414 0L16 25.5859V30h4.4141l9.2929-9.293A.9994.9994 0 0029.707 19.293zM19.5859 28H18V26.4141l5-5L24.5859 23zM26 21.5859L24.4141 20 26 18.4141 27.5859 20zM30 4H23V6h3.5859L19 13.5859 14.707 9.293a1 1 0 00-1.414 0L6 16.5859 7.4141 18 14 11.4141l4.293 4.2929a1 1 0 001.414 0L28 7.4141V11h2z"></path><path d="M4,2H2V28a2,2,0,0,0,2,2h8V28H4Z"></path></svg>`;
export default svgResultCarbonIcon;
