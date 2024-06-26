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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M12,30H9V28h3V15.5664L8.4854,13.4575l1.0292-1.7148,3.5147,2.1084A2.0115,2.0115,0,0,1,14,15.5664V28A2.0023,2.0023,0,0,1,12,30Z"></path><path d="M22,30H19a2.0024,2.0024,0,0,1-2-2V17h6a4.0008,4.0008,0,0,0,3.981-4.396A4.1489,4.1489,0,0,0,22.7853,9H21.2016L21.025,8.221C20.452,5.6961,18.0308,4,15,4A6.02,6.02,0,0,0,9.5585,7.4859L9.25,8.1531l-.863-.1143A2.771,2.771,0,0,0,8,8a4,4,0,1,0,0,8v2A6,6,0,1,1,8,6c.0264,0,.0525,0,.0786.001A8.0271,8.0271,0,0,1,15,2c3.6788,0,6.6923,1.9776,7.7516,5h.0337a6.1641,6.1641,0,0,1,6.1872,5.4141A6.0011,6.0011,0,0,1,23,19l-4,0v9h3Z"></path></svg>`;
export default svgResultCarbonIcon;
