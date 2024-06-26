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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M19 10a3 3 0 113-3A3.0033 3.0033 0 0119 10zm0-4a1 1 0 101 1A1.0011 1.0011 0 0019 6zM19 19a3 3 0 113-3A3.0033 3.0033 0 0119 19zm0-4a1 1 0 101 1A1.0011 1.0011 0 0019 15zM27 19a3 3 0 113-3A3.0033 3.0033 0 0127 19zm0-4a1 1 0 101 1A1.0011 1.0011 0 0027 15zM19 28a3 3 0 113-3A3.0033 3.0033 0 0119 28zm0-4a1 1 0 101 1A1.0011 1.0011 0 0019 24zM12 2H14V30H12zM7 28a3 3 0 113-3A3.0033 3.0033 0 017 28zm0-4a1 1 0 101 1A1.0011 1.0011 0 007 24zM7 19a3 3 0 113-3A3.0033 3.0033 0 017 19zm0-4a1 1 0 101 1A1.0011 1.0011 0 007 15zM7 10a3 3 0 113-3A3.0033 3.0033 0 017 10zM7 6A1 1 0 108 7 1.0011 1.0011 0 007 6z"></path></svg>`;
export default svgResultCarbonIcon;
