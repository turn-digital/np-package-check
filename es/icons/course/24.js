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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24,30H8a2.0023,2.0023,0,0,1-2-2V4A2.002,2.002,0,0,1,8,2H24a2.0023,2.0023,0,0,1,2,2V20.6182l-5-2.5-5,2.5V4H8V28H24V24h2v4A2.0027,2.0027,0,0,1,24,30ZM21,15.8818l3,1.5V4H18V17.3818Z"></path></svg>`;
export default svgResultCarbonIcon;
