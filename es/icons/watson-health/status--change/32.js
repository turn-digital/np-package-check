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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M7 30a5 5 0 115-5A5.0057 5.0057 0 017 30zm0-8a3 3 0 103 3A3.0033 3.0033 0 007 22zM23 30a5 5 0 115-5A5.0057 5.0057 0 0123 30zm0-8a3 3 0 103 3A3.0033 3.0033 0 0023 22zM24 7v7l3.5859-3.4141L29 12l-6 6-6-6 1.4141-1.4141L22 14V7a1.0009 1.0009 0 00-1-1H9A1.0006 1.0006 0 008 7V18H6V7A3.0033 3.0033 0 019 4H21A3.0033 3.0033 0 0124 7z"></path></svg>`;
export default svgResultCarbonIcon;
