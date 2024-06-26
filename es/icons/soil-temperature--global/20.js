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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25 30a4.9863 4.9863 0 01-3-8.98V15a3 3 0 016 0v6.02A4.9863 4.9863 0 0125 30zm0-16a1.0011 1.0011 0 00-1 1v7.13l-.4971.2893A2.9676 2.9676 0 0022 25a3 3 0 006 0 2.9676 2.9676 0 00-1.5029-2.5811L26 22.13V15A1.0011 1.0011 0 0025 14zM16 24H14a11.89 11.89 0 013.7642-8.7271l1.373 1.4542A9.909 9.909 0 0016 24z"></path><path d="M11,24H9A17.0192,17.0192,0,0,1,26,7h4V9H26A15.017,15.017,0,0,0,11,24Z"></path><path d="M26,2A21.8625,21.8625,0,0,0,13.9993,5.5757,21.856,21.856,0,0,0,2,2V4A19.8735,19.8735,0,0,1,12.2622,6.835,22.1514,22.1514,0,0,0,9.9475,8.979,17.001,17.001,0,0,0,2,7V9a15.0142,15.0142,0,0,1,6.6191,1.5366,22.0768,22.0768,0,0,0-1.7016,2.5371A12.0319,12.0319,0,0,0,2,12v2a9.8838,9.8838,0,0,1,4.0007.8506A21.861,21.861,0,0,0,4,24H6A20.0226,20.0226,0,0,1,26,4h4V2Z"></path></svg>`;
export default svgResultCarbonIcon;
