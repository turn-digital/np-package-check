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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M8 6H10V8H8zM12 6H14V8H12zM20 6H22V8H20zM24 6H26V8H24zM28 6H30V8H28z"></path><path d="M27.989,28l-.0271-.1631C26.5105,19.0742,24.0662,9.0894,18,8.0889V6H16V8.085c-6.084.978-8.533,10.9775-9.9863,19.7519L5.9866,28H4V8H6V6H4V2H2V28a2,2,0,0,0,2,2H30V28ZM8.0151,28c2.024-12.1084,4.959-18,8.9727-18s6.9487,5.8916,8.9726,18Z"></path></svg>`;
export default svgResultCarbonIcon;
