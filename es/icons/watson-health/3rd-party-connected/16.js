/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26,22a3.86,3.86,0,0,0-2,.57l-3.09-3.1a6,6,0,0,0,0-6.94L24,9.43A3.86,3.86,0,0,0,26,10a4,4,0,1,0-4-4,3.86,3.86,0,0,0,.57,2l-3.1,3.09a6,6,0,0,0-6.94,0L9.43,8A3.86,3.86,0,0,0,10,6a4,4,0,1,0-4,4,3.86,3.86,0,0,0,2-.57l3.09,3.1a6,6,0,0,0,0,6.94L8,22.57A3.86,3.86,0,0,0,6,22a4,4,0,1,0,4,4,3.86,3.86,0,0,0-.57-2l3.1-3.09a6,6,0,0,0,6.94,0L22.57,24A3.86,3.86,0,0,0,22,26a4,4,0,1,0,4-4ZM16,20a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path></svg>`;
export default svgResultCarbonIcon;
