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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,2H16a2.002,2.002,0,0,0-2,2V14H4a2.002,2.002,0,0,0-2,2V30H30V4A2.0023,2.0023,0,0,0,28,2ZM9,28V21h4v7Zm19,0H15V20a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v8H4V16H16V4H28Z"></path><path d="M18 8H20V10H18zM24 8H26V10H24zM18 14H20V16H18zM24 14H26V16H24zM18 20H20V22H18zM24 20H26V22H24zM2 10H7V12H2zM10 2H12V7H10z"></path><path d="M5.5 3.964H7.5V9.035H5.5z" transform="rotate(-45 6.5 6.5)"></path></svg>`;
export default svgResultCarbonIcon;
