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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,2H16a2.002,2.002,0,0,0-2,2V14H4a2.002,2.002,0,0,0-2,2V30H30V4A2.0023,2.0023,0,0,0,28,2ZM9,28V21h4v7Zm19,0H15V20a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v8H4V16H16V4H28Z"></path><path d="M18 8H20V10H18zM24 8H26V10H24zM18 14H20V16H18zM24 14H26V16H24zM18 20H20V22H18zM24 20H26V22H24zM5.5 12a3.5 3.5 0 010-7h.627A4.0062 4.0062 0 0110 2h2V4L10 4A2.0023 2.0023 0 008 6V7H5.5a1.5 1.5 0 000 3H12v2z"></path></svg>`;
export default svgResultCarbonIcon;
