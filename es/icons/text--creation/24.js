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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M27,22.14V9.86A4,4,0,1,0,22.14,5H9.86A4,4,0,1,0,5,9.86V22.14A4,4,0,1,0,9.86,27H22.14A4,4,0,1,0,27,22.14ZM26,4a2,2,0,1,1-2,2A2,2,0,0,1,26,4ZM4,6A2,2,0,1,1,6,8,2,2,0,0,1,4,6ZM6,28a2,2,0,1,1,2-2A2,2,0,0,1,6,28Zm16.14-3H9.86A4,4,0,0,0,7,22.14V9.86A4,4,0,0,0,9.86,7H22.14A4,4,0,0,0,25,9.86V22.14A4,4,0,0,0,22.14,25ZM26,28a2,2,0,1,1,2-2A2,2,0,0,1,26,28Z"></path><path d="M21 11L11 11 11 13 15 13 15 22 17 22 17 13 21 13 21 11z"></path></svg>`;
export default svgResultCarbonIcon;
