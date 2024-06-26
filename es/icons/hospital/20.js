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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M21 10L17 10 17 6 15 6 15 10 11 10 11 12 15 12 15 16 17 16 17 12 21 12 21 10z"></path><path d="M28,10H26V4a2.0023,2.0023,0,0,0-2-2H8A2.0023,2.0023,0,0,0,6,4v6H4a2.0023,2.0023,0,0,0-2,2V30H30V12A2.0023,2.0023,0,0,0,28,10ZM14,28V22h4v6Zm6,0V21a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v7H4V12H8V4H24v8h4V28Z"></path></svg>`;
export default svgResultCarbonIcon;
