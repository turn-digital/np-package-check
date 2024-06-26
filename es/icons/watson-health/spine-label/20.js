/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M3 11L3 13 8.59 13 2.29 19.29 3.71 20.71 10 14.41 10 20 12 20 12 11 3 11zM26 13H23V12H21v1H18a2 2 0 00-2 2v2a2 2 0 002 2h3v1h2V19h3a2 2 0 002-2V15A2 2 0 0026 13zm-8 4V15h8v2zM26 23H23V22H21v1H18a2 2 0 00-2 2v2a2 2 0 002 2h3v1h2V29h3a2 2 0 002-2V25A2 2 0 0026 23zm-8 4V25h8v2zM26 3H23V2H21V3H18a2 2 0 00-2 2V7a2 2 0 002 2h3v1h2V9h3a2 2 0 002-2V5A2 2 0 0026 3zM18 7V5h8V7z"></path></svg>`;
export default svgResultCarbonIcon;
