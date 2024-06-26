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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20,27H7a2.0059,2.0059,0,0,1-2-2V12H7V25H20Z"></path><path d="M23.4,22l-4-4a3.6057,3.6057,0,0,0,.6-2,4.0118,4.0118,0,0,0-4-4,3.6057,3.6057,0,0,0-2,.6l-4-4V2H2v8H8.6l4,4a3.6057,3.6057,0,0,0-.6,2,4.0118,4.0118,0,0,0,4,4,3.6057,3.6057,0,0,0,2-.6l4,4V30h8V22ZM8,8H4V4H8Zm8,10a2,2,0,1,1,2-2A2.0059,2.0059,0,0,1,16,18ZM28,28H24V24h4Z"></path><path d="M25,20h2V7a2.0059,2.0059,0,0,0-2-2H12V7H25Z"></path></svg>`;
export default svgResultCarbonIcon;
