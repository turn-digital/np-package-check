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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23,19a6.0066,6.0066,0,0,1-6,6H13V18.1079L21.2139,15V13L13,16.1079v-3L21.2139,10V8L13,11.1079V5H11v6.8647L8,13v2l3-1.1353v3L8,18v2l3-1.1353V27h6a8.0092,8.0092,0,0,0,8-8Z"></path></svg>`;
export default svgResultCarbonIcon;
