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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M31 30H29V27a3 3 0 00-3-3H22a3 3 0 00-3 3v3H17V27a5 5 0 015-5h4a5 5 0 015 5zM24 12a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 10zM15 22H13V19a3 3 0 00-3-3H6a3 3 0 00-3 3v3H1V19a5 5 0 015-5h4a5 5 0 015 5zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"></path></svg>`;
export default svgResultCarbonIcon;
