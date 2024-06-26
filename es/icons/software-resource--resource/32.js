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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M6.9 8.3H11.7V10.3H6.9z" transform="rotate(-45.001 9.293 9.293)"></path><path d="M4.9,19.7l-2.3-2.3C2.2,17,2,16.5,2,16s0.2-1,0.6-1.4l2.3-2.3l1.4,1.4L4,16l2.3,2.3L4.9,19.7z"></path><path d="M8.3 20.3H10.3V25.1H8.3z" transform="rotate(-45.001 9.293 22.707)"></path><path d="M16,30c-0.5,0-1-0.2-1.4-0.6l-2.3-2.3l1.4-1.4L16,28l2.3-2.3l1.4,1.4l-2.3,2.3C17,29.8,16.5,30,16,30z"></path><path d="M20.3 21.7H25.1V23.7H20.3z" transform="rotate(-45.001 22.707 22.707)"></path><path d="M27.1,19.7l-1.4-1.4L28,16l-2.3-2.3l1.4-1.4l2.3,2.3C29.8,15,30,15.5,30,16s-0.2,1-0.6,1.4L27.1,19.7z"></path><path d="M21.7 6.9H23.7V11.7H21.7z" transform="rotate(-45.001 22.707 9.293)"></path><path d="M16,2c-0.5,0-1,0.2-1.4,0.6l-2.3,2.3l1.4,1.4L16,4l2.3,2.3l1.4-1.4l-2.3-2.3C17,2.2,16.5,2,16,2z"></path></svg>`;
export default svgResultCarbonIcon;
