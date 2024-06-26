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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21,12V10H17V7H15v3H13a2.002,2.002,0,0,0-2,2v3a2.002,2.002,0,0,0,2,2h6v3H11v2h4v3h2V22h2a2.0023,2.0023,0,0,0,2-2V17a2.002,2.002,0,0,0-2-2H13V12Z"></path><path d="M16,4A12,12,0,1,1,4,16,12.0353,12.0353,0,0,1,16,4m0-2A14,14,0,1,0,30,16,14.0412,14.0412,0,0,0,16,2Z"></path></svg>`;
export default svgResultCarbonIcon;
