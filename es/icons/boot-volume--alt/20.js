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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,30h-7c-1.1028,0-2-.8972-2-2v-2h2v2h7v-7h-2v-2h2c1.1028,0,2,.8972,2,2v7c0,1.1028-.8972,2-2,2Z"></path><path d="M12 24L14 24 13.9998 17.414 22.5823 26 24 24.5857 15.4139 15.9998 22 16 22 14 12 14 12 24z"></path><path d="M8,27H4c-1.104-.0013-1.9987-.896-2-2V5c.0013-1.104,.896-1.9987,2-2h7.5857c.5308-.0015,1.0401,.2095,1.4143,.5859l3.4143,3.4141h11.5857c1.104,.0013,1.9987,.896,2,2v7h-2v-7H15.5857l-4-4H4V25h4v2Z"></path></svg>`;
export default svgResultCarbonIcon;
