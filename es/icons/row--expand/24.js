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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M4 18L15 18 15 24.172 12.414 21.586 11 23 16 28 21 23 19.586 21.586 17 24.172 17 18 28 18 28 16 4 16 4 18zM26 4H6A2 2 0 004 6v4a2 2 0 002 2H26a2 2 0 002-2V6A2 2 0 0026 4zm0 6H6V6H26z"></path></svg>`;
export default svgResultCarbonIcon;
