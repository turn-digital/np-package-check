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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.4146,19,27.7,17.2852A2.97,2.97,0,0,0,28,16a3,3,0,1,0-3,3,2.97,2.97,0,0,0,1.2864-.3L28,20.4141V28H22V25a7.0078,7.0078,0,0,0-7-7H9a7.008,7.008,0,0,0-7,7v5H30V20.4141A1.988,1.988,0,0,0,29.4146,19ZM4,25a5.006,5.006,0,0,1,5-5h6a5.0059,5.0059,0,0,1,5,5v3H4Z"></path><path d="M12,4A5,5,0,1,1,7,9a5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,12,2Z"></path></svg>`;
export default svgResultCarbonIcon;
