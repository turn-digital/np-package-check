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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22.7373,25A14.3093,14.3093,0,0,0,27,15C27,8.42,22.58,4,16,4S5,8.42,5,15A14.3093,14.3093,0,0,0,9.2627,25H4v2h8V24.7617A12.5683,12.5683,0,0,1,7,15c0-5.4673,3.5327-9,9-9s9,3.5327,9,9a12.5683,12.5683,0,0,1-5,9.7617V27h8V25Z"></path></svg>`;
export default svgResultCarbonIcon;
