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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20 24H11.8625a4.13 4.13 0 00-.4284-1.02L21.98 12.4343A3.9943 3.9943 0 1020.1414 8H14v2h6.1414a3.96 3.96 0 00.4243 1.02L10.02 21.5656A3.9943 3.9943 0 1011.8587 26H20v3h8V21H20zM24 7a2 2 0 11-2 2A2.0023 2.0023 0 0124 7zM8 27a2 2 0 112-2A2.0023 2.0023 0 018 27zm14-4h4v4H22zM9.6929 12.7505a5 5 0 01-.0005-7.5L11.0166 6.75a3 3 0 00-.0005 4.501z"></path><path d="M7.0474,15.751a9,9,0,0,1,0-13.501l1.3232,1.5a7,7,0,0,0,0,10.501Z"></path></svg>`;
export default svgResultCarbonIcon;
