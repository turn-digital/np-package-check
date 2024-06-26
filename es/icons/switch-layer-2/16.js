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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16 26L16 24 5.83 24 8.41 21.41 7 20 2 25 7 30 8.41 28.59 5.83 26 16 26zM16 14L16 12 5.83 12 8.41 9.41 7 8 2 13 7 18 8.41 16.59 5.83 14 16 14zM16 6L16 8 26.17 8 23.59 10.59 25 12 30 7 25 2 23.59 3.41 26.17 6 16 6zM16 18L16 20 26.17 20 23.59 22.59 25 24 30 19 25 14 23.59 15.41 26.17 18 16 18z"></path></svg>`;
export default svgResultCarbonIcon;
