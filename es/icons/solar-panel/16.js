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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 26V14H13V26h5v2H2v2H30V28H25V26zm-5-2V21h3v3zm-2-3v3H20V21zm-3-2V16h3v3zm8 0H25V16h3zM18 16v3H15V16zm-3 8V21h3v3zm8 4H20V26h3zM9.3328 14.981A4 4 0 1116 12H14a2 2 0 10-3.3333 1.4907zM11 2H13V6H11zM2 11H6V13H2z"></path><path d="M5.343 4.343H7.343V8.343H5.343z" transform="rotate(-45 6.343 6.343)"></path><path d="M16.657 4.343H18.657V8.343H16.657z" transform="rotate(-135 17.657 6.343)"></path></svg>`;
export default svgResultCarbonIcon;
