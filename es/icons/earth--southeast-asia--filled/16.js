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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M17 22H19V24H17zM17 18H19V20H17zM14 24H17V26H14z"></path><path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM4.7,20H6l4.1772,2.6a1,1,0,0,0,1.36-.2939l1.0078-1.5118a1,1,0,0,0-.125-1.2617L10,17.1118,11,14h5.323a1,1,0,0,0,.9285-.6284L18.8333,9.417a1,1,0,0,0-.034-.8189L16.5129,4.0259A11.9652,11.9652,0,0,1,26.3762,22H23a1,1,0,0,0-1,1v3.3765A11.9578,11.9578,0,0,1,4.7,20Z"></path></svg>`;
export default svgResultCarbonIcon;
