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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M10.5 9A3.5 3.5 0 1114 5.5 3.5042 3.5042 0 0110.5 9zm0-5A1.5 1.5 0 1012 5.5 1.5017 1.5017 0 0010.5 4zM22.4739 31.313L19.34 24H12.2385a4.0072 4.0072 0 01-3.8662-2.9707l-1.6338-6.126a3.8988 3.8988 0 017.5342-2.0092L15.1008 16H21v2H13.5637l-1.2226-4.5908a1.9 1.9 0 00-3.6709.979l1.6338 6.1255A2.0051 2.0051 0 0012.2385 22h8.42l3.6543 8.5254zM30 6L26 6 26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6z"></path><path d="M18,28H7.7676A2.0025,2.0025,0,0,1,5.835,26.5151L2.033,12.2576l1.9326-.5152L7.7676,26H18Z"></path></svg>`;
export default svgResultCarbonIcon;
