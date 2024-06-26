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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26.5859,6.5859A1.9862,1.9862,0,0,0,25.1719,6H17V2H15V12H6.8281a1.9862,1.9862,0,0,0-1.414.5859L2,16l3.4141,3.4141A1.9862,1.9862,0,0,0,6.8281,20H15V30h2V14h8.1719a1.9862,1.9862,0,0,0,1.414-.5859L30,10ZM6.8281,18l-2-2,2-2H15v4Zm18.3438-6H17V8h8.1719l2,2Z"></path></svg>`;
export default svgResultCarbonIcon;
