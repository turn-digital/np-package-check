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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM28 12H22a2.0023 2.0023 0 01-2-2V4a2.0023 2.0023 0 012-2h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0128 12zM22 4v6h6V4z"></path><path d="M24,26H16V24h8V17H8a2.0021,2.0021,0,0,1-2-2V8A2.0021,2.0021,0,0,1,8,6H18V8H8v7H24a2.0021,2.0021,0,0,1,2,2v7A2.0021,2.0021,0,0,1,24,26Z"></path></svg>`;
export default svgResultCarbonIcon;
