/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22 24H10a2.0023 2.0023 0 01-2-2V10a2.0023 2.0023 0 012-2H22a2.0023 2.0023 0 012 2V22A2.0023 2.0023 0 0122 24zM10 10V22H22V10zM11 2L2 2 2 11 4 11 4 4 11 4 11 2zM2 21L2 30 11 30 11 28 4 28 4 21 2 21zM30 11L30 2 21 2 21 4 28 4 28 11 30 11zM21 30L30 30 30 21 28 21 28 28 21 28 21 30z"></path></svg>`;
export default svgResultCarbonIcon;
