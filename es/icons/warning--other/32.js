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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M18 20H30V22H18zM18 24H30V26H18zM18 28H30V30H18zM14 18a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0014 18zM13 7H15V16H13z"></path><path d="M14,4A10.0111,10.0111,0,0,1,24,14h2A12,12,0,1,0,14,26V24A10,10,0,0,1,14,4Z"></path></svg>`;
export default svgResultCarbonIcon;
