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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 26.59L21.41 24 20 25.41 24 29.41 31 22.41 29.59 21 24 26.59zM15 23H17V25H15zM9 23H11V25H9zM21 18H23V20H21zM15 18H17V20H15zM9 18H11V20H9zM21 13H23V15H21zM15 13H17V15H15zM9 13H11V15H9zM9 7H23V10H9z"></path><path d="M17,30H6.0046A2.007,2.007,0,0,1,4,27.9951V3.9961A1.9984,1.9984,0,0,1,5.9961,2H26.0037A1.9985,1.9985,0,0,1,28,3.9961V18H26V4H6V28H17Z"></path></svg>`;
export default svgResultCarbonIcon;
