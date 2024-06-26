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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 16.5859V13a9.9217 9.9217 0 00-1.0833-4.5024L30 3.4141 28.5859 2 2 28.5859 3.4141 30l6-6H11v1a5 5 0 0010 0V24h7a1 1 0 001-1V20a1 1 0 00-.293-.707zM19 25a3 3 0 01-6 0V24h6zm8-3H11.4141L23.4119 10.0024A7.949 7.949 0 0124 13v4a1 1 0 00.293.707L27 20.4141zM7.707 17.707A1 1 0 008 17V13a8.0092 8.0092 0 018-8 7.9253 7.9253 0 014.9857 1.7681l1.4264-1.4263A9.934 9.934 0 0017 3.0508V1H15V3.0508A10.0136 10.0136 0 006 13v3.5859l-3 3L4.4141 21z"></path></svg>`;
export default svgResultCarbonIcon;
