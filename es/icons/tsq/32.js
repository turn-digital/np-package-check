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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M19 26H30V28H19zM19 22H30V24H19zM30 20h-11V12h11v8zm-9-2h7v-4h-7v4zM19 8H30V10H19zM19 4H30V6H19zM10.293 18.707L8 16.4143 8 12 10 12 10 15.5857 11.707 17.293 10.293 18.707z"></path><path d="M9,24c-4.4111,0-8-3.5889-8-8s3.5889-8,8-8,8,3.5889,8,8-3.5889,8-8,8Zm0-14c-3.3083,0-6,2.6917-6,6s2.6917,6,6,6,6-2.6917,6-6-2.6917-6-6-6Z"></path></svg>`;
export default svgResultCarbonIcon;
