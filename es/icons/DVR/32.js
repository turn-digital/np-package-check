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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 15V11a2 2 0 00-2-2H22V23h2V17h1.48l2.34 6H30l-2.33-6H28A2 2 0 0030 15zm-6-4h4v4H24zM18 9L16 22 14 9 12 9 14.52 23 17.48 23 20 9 18 9zM6 23H2V9H6a4 4 0 014 4v6A4 4 0 016 23zM4 21H6a2 2 0 002-2V13a2 2 0 00-2-2H4z"></path></svg>`;
export default svgResultCarbonIcon;
