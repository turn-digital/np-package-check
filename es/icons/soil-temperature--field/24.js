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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M11 16V11h1a4.0045 4.0045 0 004-4V4H13a3.9779 3.9779 0 00-2.7468 1.1067A6.0034 6.0034 0 005 2H2V5a6.0066 6.0066 0 006 6H9v5H2v2H16V16zM13 6h1V7a2.002 2.002 0 01-2 2H11V8A2.002 2.002 0 0113 6zM8 9A4.0045 4.0045 0 014 5V4H5A4.0045 4.0045 0 019 8V9zM2 21H16V23H2zM2 26H16V28H2zM25 30a4.9863 4.9863 0 01-3-8.98V15a3 3 0 016 0v6.02A4.9863 4.9863 0 0125 30zm0-16a1.0011 1.0011 0 00-1 1v7.13l-.4971.2893A2.9676 2.9676 0 0022 25a3 3 0 006 0 2.9676 2.9676 0 00-1.5029-2.5811L26 22.13V15A1.0011 1.0011 0 0025 14z"></path></svg>`;
export default svgResultCarbonIcon;
