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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28.6 30L30 28.6 22.4 21 29 21 29 19 19 19 19 29 21 29 21 22.4zM2 28.6L3.4 30 11 22.4 11 29 13 29 13 19 3 19 3 21 9.6 21zM17 2L15 2 15 12.2 10.4 7.6 9 9 16 16 23 9 21.6 7.6 17 12.2z"></path></svg>`;
export default svgResultCarbonIcon;
