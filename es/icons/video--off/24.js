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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.46 8.11a1 1 0 00-1 .08L23 12.06V10.44l7-7L28.56 2 2 28.56 3.44 30l4-4H21a2 2 0 002-2V19.94l5.42 3.87A1 1 0 0030 23V9A1 1 0 0029.46 8.11zM28 21.06l-5.42-3.87A1 1 0 0021 18v6H9.44L21 12.44V14a1 1 0 001.58.81L28 10.94zM4 24V8H20V6H4A2 2 0 002 8V24z"></path></svg>`;
export default svgResultCarbonIcon;
