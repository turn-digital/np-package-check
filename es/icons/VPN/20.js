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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M14 23H12V9h6a2 2 0 012 2v5a2 2 0 01-2 2H14zm0-7h4V11H14zM28 19L24.32 9 22 9 22 23 24 23 24 13 27.68 23 30 23 30 9 28 9 28 19zM8 9L6 22 4 9 2 9 4.52 23 7.48 23 10 9 8 9z"></path></svg>`;
export default svgResultCarbonIcon;
