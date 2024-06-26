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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22,14a7.94,7.94,0,0,0-4,1.0825V9A7,7,0,0,0,4,9V23a6.9857,6.9857,0,0,0,12.2756,4.5768A7.9966,7.9966,0,1,0,22,14ZM11,4a5.0059,5.0059,0,0,1,5,5v6H6V9A5.0059,5.0059,0,0,1,11,4Zm0,24a5.0059,5.0059,0,0,1-5-5V17h9.765a7.9564,7.9564,0,0,0-.7239,8.9319A5.0147,5.0147,0,0,1,11,28Zm11,0a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,22,28Z"></path><path d="M19 21H25V23H19z"></path></svg>`;
export default svgResultCarbonIcon;
