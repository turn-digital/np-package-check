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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,15H16V6a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,6v9H2v2H16v9a2.0023,2.0023,0,0,0,2,2h8a2.0023,2.0023,0,0,0,2-2V17h2ZM6,6h8v9H6ZM26,26H18V17h8Z"></path></svg>`;
export default svgResultCarbonIcon;
