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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27.34,12.06l-22-8A1,1,0,0,0,4.06,5.34l8,22A1,1,0,0,0,13,28h0a1,1,0,0,0,.93-.63l3.84-9.6,9.6-3.84a1,1,0,0,0,0-1.87Zm-10.71,4h0l-.4.16-.16.4h0L13,24.2,6.67,6.67,24.2,13Z"></path></svg>`;
export default svgResultCarbonIcon;
