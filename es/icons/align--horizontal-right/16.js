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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M4 24V20a2.0023 2.0023 0 012-2H21a2.0023 2.0023 0 012 2v4a2.0023 2.0023 0 01-2 2H6A2.0023 2.0023 0 014 24zm2 0H21V20L6 19.9988zM12 12V8a2.0023 2.0023 0 012-2h7a2.0023 2.0023 0 012 2v4a2.0023 2.0023 0 01-2 2H14A2.0023 2.0023 0 0112 12zm2 0h7V8l-7-.0012z"></path><path d="M26 2H28V30H26z" transform="rotate(-180 27 16)"></path></svg>`;
export default svgResultCarbonIcon;
