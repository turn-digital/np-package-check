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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M25,16H17a2.0023,2.0023,0,0,0-2,2v6H4V14H2V30H4V26H28v4h2V21A5.0059,5.0059,0,0,0,25,16Zm3,8H17V18h8a3.0033,3.0033,0,0,1,3,3Z"></path><path d="M9.5 17A1.5 1.5 0 118 18.5 1.5017 1.5017 0 019.5 17m0-2A3.5 3.5 0 1013 18.5 3.5 3.5 0 009.5 15zM21 6L17 6 17 2 15 2 15 6 11 6 11 8 15 8 15 12 17 12 17 8 21 8 21 6z"></path></svg>`;
export default svgResultCarbonIcon;
