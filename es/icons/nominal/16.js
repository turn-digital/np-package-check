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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M12,8 C13.6568542,8 15,9.34314575 15,11 C15,12.6568542 13.6568542,14 12,14 C10.3431458,14 9,12.6568542 9,11 C9,9.34314575 10.3431458,8 12,8 Z M4,8 C5.65685425,8 7,9.34314575 7,11 C7,12.6568542 5.65685425,14 4,14 C2.34314575,14 1,12.6568542 1,11 C1,9.34314575 2.34314575,8 4,8 Z M12,9 C10.8954305,9 10,9.8954305 10,11 C10,12.1045695 10.8954305,13 12,13 C13.1045695,13 14,12.1045695 14,11 C14,9.8954305 13.1045695,9 12,9 Z M4,9 C2.8954305,9 2,9.8954305 2,11 C2,12.1045695 2.8954305,13 4,13 C5.1045695,13 6,12.1045695 6,11 C6,9.8954305 5.1045695,9 4,9 Z M8,2 C9.65685425,2 11,3.34314575 11,5 C11,6.65685425 9.65685425,8 8,8 C6.34314575,8 5,6.65685425 5,5 C5,3.34314575 6.34314575,2 8,2 Z M8,3 C6.8954305,3 6,3.8954305 6,5 C6,6.1045695 6.8954305,7 8,7 C9.1045695,7 10,6.1045695 10,5 C10,3.8954305 9.1045695,3 8,3 Z"></path></svg>`;
export default svgResultCarbonIcon;
