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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,18a3.9955,3.9955,0,0,0-3.858,3H18a3.0033,3.0033,0,0,1-3-3V14a4.9514,4.9514,0,0,0-1.0256-3H22.142a4,4,0,1,0,0-2H9.858a4,4,0,1,0,0,2H10a3.0033,3.0033,0,0,1,3,3v4a5.0059,5.0059,0,0,0,5,5h4.142A3.9935,3.9935,0,1,0,26,18ZM26,8a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,8ZM6,12a2,2,0,1,1,2-2A2.002,2.002,0,0,1,6,12ZM26,24a2,2,0,1,1,2-2A2.0027,2.0027,0,0,1,26,24Z"></path></svg>`;
export default svgResultCarbonIcon;