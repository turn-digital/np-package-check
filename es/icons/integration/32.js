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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29.88,15.52l-6-11A1,1,0,0,0,23,4H9a1,1,0,0,0-.88.52l-6,11a1,1,0,0,0,0,1l6,11A1,1,0,0,0,9,28H23a1,1,0,0,0,.88-.52l6-11A1,1,0,0,0,29.88,15.52ZM22.93,7l4.39,8h-9.5ZM16,14.14,10.82,6H21.18ZM9.07,7l5.11,8H4.68ZM4.68,17h9.5L9.07,25ZM16,17.86,21.18,26H10.82ZM22.93,25l-5.11-8h9.5Z"></path></svg>`;
export default svgResultCarbonIcon;
