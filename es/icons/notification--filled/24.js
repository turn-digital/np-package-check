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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28.707,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.293,19.293A.9993.9993,0,0,0,3,20v3a1,1,0,0,0,1,1h7v1a5,5,0,0,0,10,0V24h7a1,1,0,0,0,1-1V20A.9993.9993,0,0,0,28.707,19.293ZM19,25a3,3,0,0,1-6,0V24h6Z"></path></svg>`;
export default svgResultCarbonIcon;
