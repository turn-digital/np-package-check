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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13,26H11a5.0057,5.0057,0,0,0-5-5V19A7.0078,7.0078,0,0,1,13,26Z"></path><path d="M18 26H16A10.0113 10.0113 0 006 16V14A12.0137 12.0137 0 0118 26zM26 13a7.0078 7.0078 0 01-7-7h2a5.0057 5.0057 0 005 5z"></path><path d="M26 18A12.0137 12.0137 0 0114 6h2A10.0113 10.0113 0 0026 16zM7.707 24.293a.9994.9994 0 00-1.414 0L2 28.5859 3.4143 30 7.707 25.707A.9994.9994 0 007.707 24.293zM28.5859 2L24.293 6.293a1 1 0 001.414 1.414L30 3.4141z"></path></svg>`;
export default svgResultCarbonIcon;
