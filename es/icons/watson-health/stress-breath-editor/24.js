/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M20 4a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0020 2zM30 30H28V25a5 5 0 00-5-5H17a5 5 0 00-5 5v5H10V25a7 7 0 017-7h6a7 7 0 017 7zM11 8H5A3 3 0 012 5V3H4V5A1 1 0 005 6h6zM4 15H2V13a3 3 0 013-3h6v2H5a1 1 0 00-1 1z"></path></svg>`;
export default svgResultCarbonIcon;