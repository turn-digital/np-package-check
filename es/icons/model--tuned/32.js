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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M32 25c0-1.3018-.8384-2.4014-2-2.8159v-4.1841h-2v4.1846c-1.1616.4141-2 1.5137-2 2.8154s.8384 2.4014 2 2.8154v2.1846h2v-2.1841c1.1616-.4146 2-1.5142 2-2.8159zm-3 1c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1zM24 23c0-1.3018-.8384-2.4014-2-2.8159v-2.1841h-2v2.1846c-1.1616.4141-2 1.5137-2 2.8154s.8384 2.4014 2 2.8154v4.1846h2v-4.1841c1.1616-.4146 2-1.5142 2-2.8159zm-3 1c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1z"></path><path d="m.7158,11.0454l12.96,14.9546,1.5117-1.3081L4.1902,12h5.2554s5.5544,8.8867,5.5544,8.8867l5.5544-8.8867h5.2554s-2.3315,2.6904-2.3315,2.6904l1.5115,1.3096,4.2944-4.9546-6.7842-9.0454H7.5S.7158,11.0454.7158,11.0454Zm19.8384-1.0454l-3.75-6h4.6958s4.5,6,4.5,6h-5.4458Zm-2.3584,0h-6.3916s3.1958-5.1133,3.1958-5.1133l3.1958,5.1133Zm-6.3914,2h6.3911s-3.1956,5.1133-3.1956,5.1133l-3.1956-5.1133Zm-7.8044-2l4.5-6h4.6958s-3.75,6-3.75,6h-5.4458Z"></path></svg>`;
export default svgResultCarbonIcon;