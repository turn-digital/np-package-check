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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23.092 10.3218L30 3.4141 28.5859 2 2 28.5859 3.4141 30l6.9077-6.9077 6.3218 6.3223a2.001 2.001 0 002.8286 0l9.9424-9.9424a2.001 2.001 0 000-2.8286zM18.0579 28l-6.3218-6.3223 9.9419-9.9419L28 18.0576zM10 14a4 4 0 114-4A4.0045 4.0045 0 0110 14zm0-6a2 2 0 101.998 2.0044A2.002 2.002 0 0010 8z"></path><path d="M7.4927,20.2627l1.414-1.4141L4,13.9414V4h9.9417l4.9069,4.9067,1.4141-1.414L15.3555,2.5859A2,2,0,0,0,13.9414,2H4A2,2,0,0,0,2,4v9.9414a2,2,0,0,0,.5857,1.4141Z"></path></svg>`;
export default svgResultCarbonIcon;
