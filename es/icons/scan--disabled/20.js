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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29.3826 2.0762a.9993.9993 0 00-1.09.2168l-26 26A1 1 0 003 30h8V28H5.4143l4-4H22a2.0021 2.0021 0 002-2V9.4146l4-4V11h2V3A1 1 0 0029.3826 2.0762zM22 22H11.4143L22 11.4146zM10 17.7554V10h7.7554l2-2H10a2.0025 2.0025 0 00-2 2v9.7554zM11 2L2 2 2 11 4 11 4 4 11 4 11 2zM21 30L30 30 30 21 28 21 28 28 21 28 21 30zM4 23.755L4 21 2 21 2 25.754 4 23.755zM25.755 2L21 2 21 4 23.755 4 25.755 2z"></path></svg>`;
export default svgResultCarbonIcon;
