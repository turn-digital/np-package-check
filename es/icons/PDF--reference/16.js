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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM22 16L24 16 24 10 29 10 29 8 24 8 24 4 30 4 30 2 22 2 22 16zM16 2H12V16h4a4 4 0 004-4V6A4 4 0 0016 2zm2 10a2 2 0 01-2 2H14V4h2a2 2 0 012 2zM8 2H2V16H4V11H8a2 2 0 002-2V4A2 2 0 008 2zM8 9H4V4H8z"></path></svg>`;
export default svgResultCarbonIcon;
