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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,18H22a2.0023,2.0023,0,0,0-2,2v2H14.4141L10,17.5859V12h2a2.0023,2.0023,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4v6a2.0023,2.0023,0,0,0,2,2H8v5.5859L3.293,22.293a.9994.9994,0,0,0,0,1.414l5,5a.9995.9995,0,0,0,1.414,0L14.4141,24H20v2a2.0023,2.0023,0,0,0,2,2h6a2.0023,2.0023,0,0,0,2-2V20A2.0023,2.0023,0,0,0,28,18ZM6,4h6v6H6ZM9,26.5859,5.4141,23,9,19.4141,12.5859,23ZM22,26V20h6v6Z"></path></svg>`;
export default svgResultCarbonIcon;
