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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm-4.5,9h0A2.5,2.5,0,1,1,9,13.5,2.48,2.48,0,0,1,11.54,11Zm9.64,12.92a6,6,0,0,0-10.28,0l-1.71-1a8,8,0,0,1,13.7,0ZM20.5,16a2.5,2.5,0,0,1,0-5h0a2.5,2.5,0,0,1,0,5Z"></path></svg>`;
export default svgResultCarbonIcon;
