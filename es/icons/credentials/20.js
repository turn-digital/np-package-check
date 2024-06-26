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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16 22a4 4 0 10-4-4A4 4 0 0016 22zm0-6a2 2 0 11-2 2A2 2 0 0116 16zM14 6H18V8H14z"></path><path d="M24,2H8A2.002,2.002,0,0,0,6,4V28a2.0023,2.0023,0,0,0,2,2H24a2.0027,2.0027,0,0,0,2-2V4A2.0023,2.0023,0,0,0,24,2ZM20,28H12V26a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Zm2,0V26a3,3,0,0,0-3-3H13a3,3,0,0,0-3,3v2H8V4H24V28Z"></path></svg>`;
export default svgResultCarbonIcon;
