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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="11" cy="11" r="3"></circle><path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM20,18l-1.4141-1.4141L23.1719,12h-7.273A5.0145,5.0145,0,0,1,12,15.8989V26H10V15.8989A5,5,0,1,1,15.8989,10h7.273l-4.586-4.5859L20,4l7,7Z"></path><path fill="none" d="M20,4,18.5859,5.4141,23.1719,10h-7.273A5,5,0,1,0,10,15.8989V26h2V15.8989A5.0145,5.0145,0,0,0,15.8989,12h7.273l-4.586,4.5859L20,18l7-7ZM11,14a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,11,14Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
