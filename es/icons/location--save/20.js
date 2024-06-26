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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M18 30h2V28a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1v2h2V28a3.0033 3.0033 0 00-3-3H21a3.0033 3.0033 0 00-3 3zM24 24a4 4 0 114-4A4.0042 4.0042 0 0124 24zm0-6a2 2 0 102 2A2.0023 2.0023 0 0024 18zM25.3418 10.06l-22-8A1 1 0 002.06 3.3415l8 22A1.001 1.001 0 0010.9839 26H11a1 1 0 00.9287-.6289L15.77 15.7692l9.6016-3.8408a1 1 0 00-.0293-1.8687zM14.6284 14.0709v0l-.3979.1591-.1591.3979 0 0-3.0269 7.5678L4.6719 4.6715l17.5244 6.3726z"></path></svg>`;
export default svgResultCarbonIcon;
