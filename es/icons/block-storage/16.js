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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M9,12V10H4a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V19H20v9H4V12"></path><path d="M22 12H14V4h8zM12 4v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H14A2 2 0 0012 4zM14 18v4H10V18h4M8 18v4a2 2 0 002 2h4a2 2 0 002-2V18a2 2 0 00-2-2H10A2 2 0 008 18zM28 17v2H26V17h2m-4-1v4a1 1 0 001 1h4a1 1 0 001-1V16a1 1 0 00-1-1H25A1 1 0 0024 16z"></path></svg>`;
export default svgResultCarbonIcon;
