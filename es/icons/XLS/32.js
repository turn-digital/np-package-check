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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 23H22V21h6V17H24a2.002 2.002 0 01-2-2V11a2.002 2.002 0 012-2h6v2H24v4h4a2.002 2.002 0 012 2v4A2.0023 2.0023 0 0128 23zM14 21L14 9 12 9 12 23 20 23 20 21 14 21zM10 9L8 9 6 15 4 9 2 9 4.752 16 2 23 4 23 6 17 8 23 10 23 7.245 16 10 9z"></path></svg>`;
export default svgResultCarbonIcon;
