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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28.3 20L27.391 28.611 26 20 24 20 22.609 28.611 21.7 20 20 20 21.36 30 23.64 30 25 21.626 26.36 30 28.64 30 30 20 28.3 20z"></path><path d="M25.707,9.293l-7-7A1,1,0,0,0,18,2H8A2.002,2.002,0,0,0,6,4V28a2.0023,2.0023,0,0,0,2,2h8V28H8V4h8v6a2.002,2.002,0,0,0,2,2h6v4h2V10A1,1,0,0,0,25.707,9.293ZM18,4.4141,23.5859,10H18Z"></path></svg>`;
export default svgResultCarbonIcon;