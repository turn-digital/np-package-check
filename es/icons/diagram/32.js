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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13,30A11,11,0,0,1,13,8a1,1,0,0,1,1,1v9h9a1,1,0,0,1,1,1A11,11,0,0,1,13,30ZM12,10.06A9,9,0,1,0,21.94,20H14a2,2,0,0,1-2-2Z"></path><path d="M28,14H19a2,2,0,0,1-2-2V3a1,1,0,0,1,1-1A11,11,0,0,1,29,13,1,1,0,0,1,28,14Zm-9-2h7.94A9,9,0,0,0,19,4.06Z"></path></svg>`;
export default svgResultCarbonIcon;
