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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 19L28 11 26 11 26 21 32 21 32 19 28 19zM24 11L22 11 20.5 15 19 11 17 11 17 21 19 21 19 14 20.5 18 22 14 22 21 24 21 24 11zM9 13L11 13 11 21 13 21 13 13 15 13 15 11 9 11 9 13zM5 11L5 15 2 15 2 11 0 11 0 21 2 21 2 17 5 17 5 21 7 21 7 11 5 11z"></path></svg>`;
export default svgResultCarbonIcon;
