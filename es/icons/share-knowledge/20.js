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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27 25H21a3 3 0 00-3 3v2h2V28a1 1 0 011-1h6a1 1 0 011 1v2h2V28A3 3 0 0027 25zM20 20a4 4 0 104-4A4 4 0 0020 20zm6 0a2 2 0 11-2-2A2 2 0 0126 20zM6 21V20H4v1a7 7 0 007 7h3V26H11A5 5 0 016 21zM19 10H26V12H19zM19 6H29V8H19zM19 2H29V4H19zM11 11H5a3 3 0 00-3 3v2H4V14a1 1 0 011-1h6a1 1 0 011 1v2h2V14A3 3 0 0011 11zM8 10A4 4 0 104 6 4 4 0 008 10zM8 4A2 2 0 116 6 2 2 0 018 4z"></path></svg>`;
export default svgResultCarbonIcon;
