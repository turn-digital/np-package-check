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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23.59 19.41L26 22 21 22 21 24 26 24 23.59 26.59 25 28 30 23 25 18 23.59 19.41zM13 6A9 9 0 005.52 20l1.66-1.11A7 7 0 1113 22H2v2H13A9 9 0 0013 6z"></path></svg>`;
export default svgResultCarbonIcon;
