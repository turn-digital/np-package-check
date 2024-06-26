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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,.0005,4,5.9784V20.0443a12,12,0,0,0,24,0V5.9784Zm6.83,27.3138L16,23.9119V26.14l5.0361,2.5088A10.0025,10.0025,0,0,1,6,20.0443V7.21L16,2.2284,26,7.21v3.75L16,5.9783V8.2062l10,4.9816v3.75L16,11.9562v2.2279l10,4.9815v.8787a9.9045,9.9045,0,0,1-.37,2.6871L16,17.934v2.2279l8.8952,4.4313A10.0252,10.0252,0,0,1,22.83,27.3143Z"></path></svg>`;
export default svgResultCarbonIcon;
