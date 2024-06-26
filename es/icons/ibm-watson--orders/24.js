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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28 13h-2v-2c0-2.8-2.2-5-5-5h-3V4h3c3.9 0 7 3.1 7 7V13zM22 20H25V22H22zM22 24H25V26H22z"></path><path d="M27 30h-5v-2h5V18h-7v9c0 1.7-1.3 3-3 3s-3-1.3-3-3v-3h2v3c0 .6.4 1 1 1s1-.4 1-1V16h11v12C29 29.1 28.1 30 27 30zM12 28h-1c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h1V28zM11 10v2h3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4C2.9 2 2 2.9 2 4v6c0 1.1.9 2 2 2h2.4l1.7 3 1.7-1-2.3-4H4V4h10v6H11z"></path></svg>`;
export default svgResultCarbonIcon;
