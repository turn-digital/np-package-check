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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 18H22V14H20V28h6a2.0027 2.0027 0 002-2V20A2.0023 2.0023 0 0026 18zm-4 8V20h4v6zM20 6.076L19.256 4.219 16 5.522 16 2 14 2 14 5.523 10.744 4.22 10 6.077 13.417 7.444 10.9 10.8 12.5 12 15 8.667 17.5 12 19.1 10.8 16.583 7.443 20 6.076zM10 18H5v2h5v2H6a2 2 0 00-2 2v2a2 2 0 002 2h6V20A2.0023 2.0023 0 0010 18zm0 8H6V24h4z"></path></svg>`;
export default svgResultCarbonIcon;
