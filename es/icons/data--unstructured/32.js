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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M6 24a2 2 0 11-2 2 2 2 0 012-2m0-2a4 4 0 104 4A4 4 0 006 22zM16 4a2 2 0 11-2 2 2 2 0 012-2m0-2a4 4 0 104 4A4 4 0 0016 2zM26 4a2 2 0 11-2 2 2 2 0 012-2m0-2a4 4 0 104 4A4 4 0 0026 2zM18 24v4H14V24h4m2-2H12v8h8z"></path><path d="M27,22.14V17a2,2,0,0,0-2-2H7V10h3V2H2v8H5v5a2,2,0,0,0,2,2H25v5.14a4,4,0,1,0,2,0ZM4,4H8V8H4ZM26,28a2,2,0,1,1,2-2A2,2,0,0,1,26,28Z"></path></svg>`;
export default svgResultCarbonIcon;
