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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23,2,17,8l1.4146,1.4023L22,5.8184V28H6V12H4V28a2.0025,2.0025,0,0,0,2,2H22a2.0025,2.0025,0,0,0,2-2V5.8154l3.5859,3.5869L29,8Z"></path><path d="M16,24H12a2.0023,2.0023,0,0,1-2-2V18a2.0023,2.0023,0,0,1,2-2h4a2.0023,2.0023,0,0,1,2,2v4A2.0023,2.0023,0,0,1,16,24Zm-4-6v4h4V18Z"></path></svg>`;
export default svgResultCarbonIcon;
