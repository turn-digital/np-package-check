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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 23H24a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h6v2H24V21h6zM18 23H14a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h4a2.002 2.002 0 012 2V21A2.0023 2.0023 0 0118 23zM14 11V21h4V11zM6 23H2V9H6a4.0045 4.0045 0 014 4v6A4.0045 4.0045 0 016 23zM4 21H6a2.002 2.002 0 002-2V13a2.002 2.002 0 00-2-2H4z"></path></svg>`;
export default svgResultCarbonIcon;
