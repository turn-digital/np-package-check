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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24 14a5.99 5.99 0 00-4.885 9.4712L14 28.5859 15.4141 30l5.1147-5.1147A5.9971 5.9971 0 1024 14zm0 10a4 4 0 114-4A4.0045 4.0045 0 0124 24zM17 12a3 3 0 10-3-3A3.0033 3.0033 0 0017 12zm0-4a1 1 0 11-1 1A1.0009 1.0009 0 0117 8z"></path><path d="M12,24H4V17.9966L9,13l5.5859,5.5859L16,17.168l-5.5859-5.5855a2,2,0,0,0-2.8282,0L4,15.168V4H24v6h2V4a2.0023,2.0023,0,0,0-2-2H4A2.002,2.002,0,0,0,2,4V24a2.0023,2.0023,0,0,0,2,2h8Z"></path></svg>`;
export default svgResultCarbonIcon;
