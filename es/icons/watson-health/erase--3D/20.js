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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30.4148 16.5132L22.488 8.5859a2.0014 2.0014 0 00-2.8291 0L5.6208 22.624a2.0024 2.0024 0 000 2.8291L10.1663 30h9.5908L30.4148 19.3413A2.001 2.001 0 0030.4148 16.5132zM18.929 28H10.9949l-3.96-3.9619 6.3123-6.3118 7.9276 7.9276zm3.76-3.76l-7.9276-7.9276L21.074 10l7.9267 7.9272zM11 12H8V2h3a3.0033 3.0033 0 013 3V9A3.0033 3.0033 0 0111 12zm-1-2h1a1.0009 1.0009 0 001-1V5a1.0009 1.0009 0 00-1-1H10zM4 2H0V4H4V6H1V8H4v2H0v2H4a2.0027 2.0027 0 002-2V4A2.0023 2.0023 0 004 2z"></path></svg>`;
export default svgResultCarbonIcon;
