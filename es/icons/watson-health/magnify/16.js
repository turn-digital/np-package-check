/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M12,21H4V4H22v8h2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V21a2,2,0,0,0,2,2h8Z"></path><path d="M30,28.58l-3.11-3.11a6,6,0,1,0-1.42,1.42L28.58,30ZM22,26a4,4,0,1,1,4-4A4,4,0,0,1,22,26Z"></path></svg>`;
export default svgResultCarbonIcon;
