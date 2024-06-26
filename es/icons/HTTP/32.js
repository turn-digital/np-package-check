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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 11H25V21h2V18h3a2.0027 2.0027 0 002-2V13A2.0023 2.0023 0 0030 11zm-3 5V13h3l.001 3zM10 13L12 13 12 21 14 21 14 13 16 13 16 11 10 11 10 13zM23 11L17 11 17 13 19 13 19 21 21 21 21 13 23 13 23 11zM6 11L6 15 3 15 3 11 1 11 1 21 3 21 3 17 6 17 6 21 8 21 8 11 6 11z"></path></svg>`;
export default svgResultCarbonIcon;
