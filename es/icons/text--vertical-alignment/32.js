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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 28H30V30H16zM16 23H30V25H16zM10.8458 30H13L8.64 20H6.36L2 30H4.1542l.8-2h5.0916zM5.7541 26L7.5 21.6347 9.2459 26zM2 15H30V17H2zM16 7H30V9H16zM16 2H30V4H16zM10.8458 12H13L8.64 2H6.36L2 12H4.1542l.8-2h5.0916zM5.7541 8L7.5 3.6347 9.2459 8z"></path></svg>`;
export default svgResultCarbonIcon;
