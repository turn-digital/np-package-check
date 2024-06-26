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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,10H23V6a2.0023,2.0023,0,0,0-2-2H11A2.0023,2.0023,0,0,0,9,6v4H4a2.0023,2.0023,0,0,0-2,2V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V12A2.0023,2.0023,0,0,0,28,10ZM4,28V12H9v2H7v2H9v2H7v2H9v2H7v2H9v4Zm17,0H11V6H21Zm7,0H23V24h2V22H23V20h2V18H23V16h2V14H23V12h5Z"></path><path d="M14 8H18V10H14zM14 12H18V14H14zM14 16H18V18H14z"></path></svg>`;
export default svgResultCarbonIcon;
