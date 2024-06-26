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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29.92,16.61l-3-7A1,1,0,0,0,26,9H23V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V24a1,1,0,0,0,1,1H5.14a4,4,0,0,0,7.72,0h6.28a4,4,0,0,0,7.72,0H29a1,1,0,0,0,1-1V17A1,1,0,0,0,29.92,16.61ZM23,11h2.34l2.14,5H23ZM9,26a2,2,0,1,1,2-2A2,2,0,0,1,9,26Zm10.14-3H12.86a4,4,0,0,0-7.72,0H4V8H21V20.56A4,4,0,0,0,19.14,23ZM23,26a2,2,0,1,1,2-2A2,2,0,0,1,23,26Zm5-3H26.86A4,4,0,0,0,23,20V18h5Z"></path></svg>`;
export default svgResultCarbonIcon;
