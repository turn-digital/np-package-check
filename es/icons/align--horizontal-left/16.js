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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26 26H11a2.0023 2.0023 0 01-2-2V20a2.0023 2.0023 0 012-2H26a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0126 26zm0-6.0012L11 20v4H26zM18 14H11a2.0023 2.0023 0 01-2-2V8a2.0023 2.0023 0 012-2h7a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0118 14zm0-6.0012L11 8v4h7zM4 2H6V30H4z"></path></svg>`;
export default svgResultCarbonIcon;
