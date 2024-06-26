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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26,10H23.2383A4.4867,4.4867,0,0,0,16,4.7065,4.4873,4.4873,0,0,0,8.7617,10H6a2.0025,2.0025,0,0,0-2,2v4a2.0025,2.0025,0,0,0,2,2V28a2.0025,2.0025,0,0,0,2,2H24a2.0025,2.0025,0,0,0,2-2V18a2.0025,2.0025,0,0,0,2-2V12A2.0025,2.0025,0,0,0,26,10ZM17,7.5A2.5,2.5,0,1,1,19.5,10H17ZM12.5,5A2.503,2.503,0,0,1,15,7.5V10H12.5a2.5,2.5,0,0,1,0-5ZM6,12h9v4H6Zm2,6h7V28H8ZM24.0012,28H17V18h7ZM17,16V12h9l.0012,4Z"></path></svg>`;
export default svgResultCarbonIcon;
