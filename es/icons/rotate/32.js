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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M17.91 26.82l.35 2a12.9 12.9 0 004.24-1.54l-1-1.73A10.88 10.88 0 0117.91 26.82zM24.42 23.07L26 24.35a13 13 0 002.24-3.91l-1.87-.68A11 11 0 0124.42 23.07zM9.5 27.25a12.9 12.9 0 004.24 1.54l.35-2a10.88 10.88 0 01-3.59-1.3zM5.67 19.76l-1.87.68A13 13 0 006 24.35l.32-.26 1.22-1h0a11 11 0 01-1.91-3.31zM29 16a12.85 12.85 0 00-.8-4.44l-1.87.68A11.18 11.18 0 0127 16zM26 7.65a13 13 0 00-20 0V4H4v8h8V10H6.81A11 11 0 0124.42 8.93z"></path></svg>`;
export default svgResultCarbonIcon;
