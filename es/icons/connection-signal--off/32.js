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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26,13a8.9089,8.9089,0,0,1-2.5249,6.2339l1.4133,1.4131A10.9795,10.9795,0,0,0,23.6006,4.2l-1.2012,1.6A8.932,8.932,0,0,1,26,13Z"></path><path d="M21 13a5.0022 5.0022 0 01-.9023 2.8564l1.4277 1.4278a6.9831 6.9831 0 00-.8584-9.5015l-1.334 1.49A5.0077 5.0077 0 0121 13zM30 28.5859L3.4143 2 2 3.4141l3.71 3.71A10.9824 10.9824 0 008.3994 21.8008l1.2012-1.6A8.9678 8.9678 0 017.1714 8.5854l2.1963 2.1963a6.9664 6.9664 0 001.9648 7.4351l1.334-1.49A5.0072 5.0072 0 0111 13a4.8854 4.8854 0 01.0393-.5464L15 16.4141V30h2V18.4141L28.5857 30z"></path></svg>`;
export default svgResultCarbonIcon;
