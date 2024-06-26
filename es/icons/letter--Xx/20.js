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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M15 9L13 9 11 15 9 9 7 9 9.75 16 7 23 9 23 11 17 13 23 15 23 12.24 16 15 9zM25 13L23 13 21 16.9 19 13 17 13 19.91 18 17 23 19 23 21 19.2 23 23 25 23 22.1 18 25 13z"></path></svg>`;
export default svgResultCarbonIcon;
