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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22 11L25 11 25 23 27 23 27 11 30 11 30 9 22 9 22 11zM14 23H12V9h6a2.002 2.002 0 012 2v5a2.002 2.002 0 01-2 2H14zm0-7h4V10.9985H14zM4 23H2V9H8a2.002 2.002 0 012 2v5a2.002 2.002 0 01-2 2H4zm0-7H8V10.9985H4z"></path></svg>`;
export default svgResultCarbonIcon;
