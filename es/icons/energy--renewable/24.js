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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29,14H28V10H26v4H24V10H22v4H21a1,1,0,0,0-1,1v4a5.0079,5.0079,0,0,0,4,4.8989V27a1.0008,1.0008,0,0,1-1,1H5a1,1,0,0,1,0-2h5a3,3,0,0,0,0-6H5a1,1,0,0,1,0-2h5a3.0033,3.0033,0,0,0,3-3V11h1a4.0045,4.0045,0,0,0,4-4V4H15a3.979,3.979,0,0,0-2.7468,1.1064A6.0041,6.0041,0,0,0,7,2H4V5a6.0066,6.0066,0,0,0,6,6h1v4a1.0008,1.0008,0,0,1-1,1H5a3,3,0,0,0,0,6h5a1,1,0,0,1,0,2H5a3,3,0,0,0,0,6H23a3.0033,3.0033,0,0,0,3-3V23.8989A5.0079,5.0079,0,0,0,30,19V15A1,1,0,0,0,29,14ZM13,8a2.002,2.002,0,0,1,2-2h1V7a2.002,2.002,0,0,1-2,2H13ZM10,9A4.0045,4.0045,0,0,1,6,5V4H7a4.0045,4.0045,0,0,1,4,4V9ZM28,19a3,3,0,0,1-6,0V16h6Z"></path></svg>`;
export default svgResultCarbonIcon;
