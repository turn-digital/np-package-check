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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M10 26a4 4 0 114-4A4.0045 4.0045 0 0110 26zm0-6a2 2 0 102 2A2.0021 2.0021 0 0010 20zM17 20H26V22H17zM17 24H26V26H17z"></path><path d="M20,12h8a2.0023,2.0023,0,0,0,2-2V6a2.0023,2.0023,0,0,0-2-2H20a2.0023,2.0023,0,0,0-2,2V7H12a4.0045,4.0045,0,0,0-4,4v3H6V4H4V14a2.0023,2.0023,0,0,0-2,2V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V16a2.0023,2.0023,0,0,0-2-2H10V11a2.0023,2.0023,0,0,1,2-2h6v1A2.0023,2.0023,0,0,0,20,12Zm4-6h4v4H24ZM20,6h2v4H20Zm8,22H4V16H28Z"></path></svg>`;
export default svgResultCarbonIcon;
