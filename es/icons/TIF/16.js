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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 11L30 9 22 9 22 23 24 23 24 17 29 17 29 15 24 15 24 11 30 11zM12 11L15 11 15 21 12 21 12 23 20 23 20 21 17 21 17 11 20 11 20 9 12 9 12 11zM2 11L5 11 5 23 7 23 7 11 10 11 10 9 2 9 2 11z"></path></svg>`;
export default svgResultCarbonIcon;
