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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M31,8c0-0.4-0.2-0.7-0.5-0.9l-7-4C23.3,3,23.2,3,23,3s-0.3,0-0.5,0.1L16,6.8L9.5,3.1C9.3,3,9.2,3,9,3S8.7,3,8.5,3.1l-7,4	C1.2,7.3,1,7.6,1,8v20c0,0.6,0.4,1,1,1c0.2,0,0.3-0.1,0.5-0.1l0,0L9,25.2l6.5,3.7C15.7,29,15.8,29,16,29s0.3,0,0.5-0.1l6.5-3.7	l6.5,3.7l0,0c0.1,0.1,0.3,0.1,0.5,0.1c0.6,0,1-0.4,1-1V8z M3,8.6l5-2.9v17.7l-5,2.9V8.6z M15,26.3l-5-2.9V5.7l5,2.9V26.3z M22,23.4	l-5,2.9V8.6l5-2.9V23.4z M24,23.4V5.7l5,2.9l0,17.7L24,23.4z"></path></svg>`;
export default svgResultCarbonIcon;
