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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M14 11L12 11 12 22 14 22 14 11 14 11zM20 11L18 11 18 22 20 22 20 11 20 11z"></path><path d="M16,2A13.9158,13.9158,0,0,0,6,6.2343V2H4v8h8V8H7.0783A11.9818,11.9818,0,1,1,4,16H2A14,14,0,1,0,16,2Z"></path></svg>`;
export default svgResultCarbonIcon;
