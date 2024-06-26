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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 25L2 25 2 27 4 27 4 29 6 29 6 27 11 27 11 29 13 29 13 27 18 27 18 29 20 29 20 27 25 27 25 29 27 29 27 27 30 27 30 25zM8 16H2V14H8V12H2V10H8a2.0021 2.0021 0 012 2v2A2.0021 2.0021 0 018 16z"></path><path d="M28.55,14.2305,19.97,6.3657A8.9775,8.9775,0,0,0,13.8882,4H2V6H12v4a2.0023,2.0023,0,0,0,2,2h9.1565l4.0417,3.7051A2.4723,2.4723,0,0,1,25.5273,20H2v2H25.5273a4.4726,4.4726,0,0,0,3.0225-7.77ZM14,10V6.0054A6.9774,6.9774,0,0,1,18.6182,7.84L20.9746,10Z"></path></svg>`;
export default svgResultCarbonIcon;
