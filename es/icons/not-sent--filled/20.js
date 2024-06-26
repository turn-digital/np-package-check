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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 28.59L3.41 2 2 3.41l8 8L2.66 14.06a1 1 0 000 1.87l8.59 3.43L14.59 16 16 17.41l-3.37 3.37 3.44 8.59A1 1 0 0017 30h0a1 1 0 00.92-.66L20.6 22l8 8zM22.49 16.83l3.45-9.49a1 1 0 00-1.28-1.28L15.17 9.51z"></path></svg>`;
export default svgResultCarbonIcon;
