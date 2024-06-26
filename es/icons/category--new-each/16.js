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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29 10H24v2h5v6H22v2h3v2.142a4 4 0 102 0V20h2a2.0027 2.0027 0 002-2V12A2.0023 2.0023 0 0029 10zM28 26a2 2 0 11-2-2A2.0027 2.0027 0 0128 26zM19 6H14V8h5v6H12v2h3v6.142a4 4 0 102 0V16h2a2.0023 2.0023 0 002-2V8A2.0023 2.0023 0 0019 6zM18 26a2 2 0 11-2-2A2.0027 2.0027 0 0118 26zM9 2H3A2.002 2.002 0 001 4v6a2.002 2.002 0 002 2H5V22.142a4 4 0 102 0V12H9a2.002 2.002 0 002-2V4A2.002 2.002 0 009 2zM8 26a2 2 0 11-2-2A2.0023 2.0023 0 018 26zM3 10V4H9l.0015 6z"></path></svg>`;
export default svgResultCarbonIcon;
