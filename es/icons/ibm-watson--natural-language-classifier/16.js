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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h1v4h-3v2h8v-2h-3v-4H28zM24 4h4v6h-4V4zM21 22.4L19.6 21 16 24.6 12.4 21 11 22.4 14.6 26 11 29.6 12.4 31 16 27.4 19.6 31 21 29.6 17.4 26zM12 18L15 18 15 21 17 21 17 18 20 18 20 16 12 16zM10 12V4c0-1.1-.9-2-2-2H3v2h5v2H4C2.9 6 2 6.9 2 8v2c0 1.1.9 2 2 2h1v4H2v2h8v-2H7v-4H10zM4 8h4v2H4V8z"></path></svg>`;
export default svgResultCarbonIcon;
