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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23.6 21.4L27.2 25 27.2 25 23.6 28.6 25 30 30 25 25 20zM20.4 21.4L16.8 25 16.8 25 20.4 28.6 19 30 14 25 19 20z"></path><path d="M28,8H16l-3.4-3.4C12.2,4.2,11.7,4,11.2,4H4C2.9,4,2,4.9,2,6v20c0,1.1,0.9,2,2,2h7v-2H4V6h7.2l3.4,3.4l0.6,0.6H28v8h2v-8	C30,8.9,29.1,8,28,8z"></path></svg>`;
export default svgResultCarbonIcon;
