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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M2 12v8a3 3 0 003 3h5V15H6v2H8v4H5a1 1 0 01-1-1V12a1 1 0 011-1h5V9H5A3 3 0 002 12zM30 11L30 9 22 9 22 23 24 23 24 17 29 17 29 15 24 15 24 11 30 11zM12 9L12 11 15 11 15 21 12 21 12 23 20 23 20 21 17 21 17 11 20 11 20 9 12 9z"></path></svg>`;
export default svgResultCarbonIcon;
