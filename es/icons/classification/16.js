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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="15" cy="19" r="1"></circle><path d="M27.7,9.3l-7-7A.9087.9087,0,0,0,20,2H10A2.0058,2.0058,0,0,0,8,4V14H6a2.0023,2.0023,0,0,0-2,2v6a2.0023,2.0023,0,0,0,2,2H8v4a2.0058,2.0058,0,0,0,2,2H26a2.0058,2.0058,0,0,0,2-2V10A.9092.9092,0,0,0,27.7,9.3ZM20,4.4,25.6,10H20ZM6,16h9.5972L19,19l-3.3926,3H6ZM26,28H10V24h5.6089a2.0076,2.0076,0,0,0,1.3135-.4927l3.3833-2.9917a2.0015,2.0015,0,0,0,.01-3.0229l-3.4033-3.0083A1.9961,1.9961,0,0,0,15.6089,14H10V4h8v6a2.0058,2.0058,0,0,0,2,2h6Z"></path></svg>`;
export default svgResultCarbonIcon;
