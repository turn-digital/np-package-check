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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 15L17 15 17 2 15 2 15 15 2 15 2 17 15 17 15 30 17 30 17 17 30 17 30 15z"></path><path d="M5 30a3 3 0 113-3A3.0033 3.0033 0 015 30zm0-4a1 1 0 101 1A1.001 1.001 0 005 26zM8 8a3 3 0 113-3A3.0033 3.0033 0 018 8zM8 4A1 1 0 109 5 1.001 1.001 0 008 4zM22 13a3 3 0 113-3A3.0033 3.0033 0 0122 13zm0-4a1 1 0 101 1A1.001 1.001 0 0022 9z"></path><circle cx="11" cy="11" r="2"></circle><circle cx="11" cy="21" r="2"></circle><circle cx="21" cy="21" r="2"></circle><circle cx="22" cy="28" r="2"></circle><circle cx="28" cy="24" r="2"></circle><circle cx="4" cy="11" r="2"></circle><circle cx="28" cy="4" r="2"></circle></svg>`;
export default svgResultCarbonIcon;
