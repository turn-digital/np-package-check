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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M6 21V20H4v1a7 7 0 007 7h3V26H11A5 5 0 016 21zM24 11v1h2V11a7 7 0 00-7-7H16V6h3A5 5 0 0124 11zM11 11H5a3 3 0 00-3 3v2H4V14a1 1 0 011-1h6a1 1 0 011 1v2h2V14A3 3 0 0011 11zM8 10A4 4 0 104 6 4 4 0 008 10zM8 4A2 2 0 116 6 2 2 0 018 4zM27 25H21a3 3 0 00-3 3v2h2V28a1 1 0 011-1h6a1 1 0 011 1v2h2V28A3 3 0 0027 25zM20 20a4 4 0 104-4A4 4 0 0020 20zm6 0a2 2 0 11-2-2A2 2 0 0126 20z"></path></svg>`;
export default svgResultCarbonIcon;
