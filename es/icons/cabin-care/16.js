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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27.3022 2a2.6617 2.6617 0 00-1.9079.8059l-.3931.4053-.397-.4053a2.6613 2.6613 0 00-3.8158 0 2.7992 2.7992 0 000 3.8963L25.0012 11 29.21 6.7022a2.7992 2.7992 0 000-3.8963A2.6613 2.6613 0 0027.3022 2zM23.8218 18H15.083L11.8643 5.9653a4 4 0 00-7.7276 2.07L8.5454 24.5168A2 2 0 0010.4775 26H19v2H4v2H19a2 2 0 002-2V26h3a4.0046 4.0046 0 003.98-4.4A4.1214 4.1214 0 0023.8218 18zM24 24H10.4776L6.0686 7.5181A2 2 0 119.9324 6.4829L13.5466 20H24a2 2 0 010 4z"></path></svg>`;
export default svgResultCarbonIcon;
