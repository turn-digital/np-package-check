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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M2 28H30V30H2zM13.48 5.15l5.69 8.14.8 1.15 1.35-.36 4.52-1.21a2.13 2.13 0 011.12 0A1.84 1.84 0 0128.23 14 1.87 1.87 0 0127 16.45l-18.71 5a1.78 1.78 0 01-1 0A1.87 1.87 0 016 20.12l-.25-.93L5 16.38l-.74-2.74 1.44-.39L8 16.35l.81 1.08 1.31-.35 2.8-.75 1.94-.52-.52-1.93L12.08 5.52l1.4-.37M14.16 3a1.06 1.06 0 00-.5 0l-3.09.83A1 1 0 009.89 5l2.5 9.36-2.81.75L6.85 11.5a1 1 0 00-.52-.36 1.06 1.06 0 00-.5 0L2.72 12A1 1 0 002 13.16L3 16.9l.75 2.8.25.94a3.87 3.87 0 002.74 2.74 3.91 3.91 0 002 0l18.7-5a3.84 3.84 0 000-7.44 4.27 4.27 0 00-2.16 0l-4.51 1.21L14.7 3.41A1 1 0 0014.16 3z"></path></svg>`;
export default svgResultCarbonIcon;
