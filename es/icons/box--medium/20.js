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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V9H6V26H26V9h2V26A2.0021,2.0021,0,0,1,26,28Z"></path><path d="M18 9L16.485 14 16 15.977 15.535 14 14 9 12 9 12 23 14 23 14 15 13.842 13.004 14.421 15 16 19.626 17.579 15 18.159 13 18 15 18 23 20 23 20 9 18 9zM4 4H28V6H4z"></path></svg>`;
export default svgResultCarbonIcon;
