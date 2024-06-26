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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M8 30H4a2 2 0 01-2-2V24a2 2 0 012-2H8a2 2 0 012 2v4A2 2 0 018 30zM4 24v4H8V24zM18 30H14a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0118 30zm-4-6v4h4V24zM28 30H24a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0128 30zm-4-6v4h4V24zM8 20H4a2 2 0 01-2-2V14a2 2 0 012-2H8a2 2 0 012 2v4A2 2 0 018 20zM4 14v4H8V14zM18 20H14a2 2 0 01-2-2V14a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0118 20zm-4-6v4h4V14zM28 20H24a2 2 0 01-2-2V14a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0128 20zm-4-6v4h4V14zM8 10H4A2 2 0 012 8V4A2 2 0 014 2H8a2 2 0 012 2V8A2 2 0 018 10zM4 4V8H8V4zM18 10H14a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2V8A2 2 0 0118 10zM14 4V8h4V4zM28 10H24a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2V8A2 2 0 0128 10zM24 4V8h4V4z"></path></svg>`;
export default svgResultCarbonIcon;
