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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20.31 6H4A2 2 0 002 8V24a2.85 2.85 0 000 .29zM29.46 8.11a1 1 0 00-1 .08L23 12.06V10.44l7-7L28.56 2 2 28.56 3.44 30l4-4H21a2 2 0 002-2V19.94l5.42 3.87A1 1 0 0030 23V9A1 1 0 0029.46 8.11z"></path></svg>`;
export default svgResultCarbonIcon;
