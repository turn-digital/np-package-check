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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="m24,16c-1.3019,0-2.4016.8385-2.8157,2h-9.1843v-2h-6v6h6v-2h9.1843c.4141,1.1615,1.5137,2,2.8157,2,1.6543,0,3-1.3457,3-3s-1.3457-3-3-3Zm-14,4h-2v-2h2v2Zm14,0c-.5518,0-1-.4482-1-1s.4482-1,1-1,1,.4482,1,1-.4482,1-1,1Z"></path><path d="m25.8321,11.22c-.8432-4.6665-4.9267-8.22-9.8321-8.22S7.0109,6.5535,6.1678,11.22c-3.5296.8317-6.1678,4.0001-6.1678,7.78,0,4.4111,3.5889,8,8,8h4v-2h-4c-3.3086,0-6-2.6914-6-6s2.6914-6,6-6c0-4.4111,3.5889-8,8-8s8,3.5889,8,8c3.3086,0,6,2.6914,6,6s-2.6914,6-6,6h-8v2h8c4.4111,0,8-3.5889,8-8,0-3.7799-2.6382-6.9484-6.1679-7.78Z"></path></svg>`;
export default svgResultCarbonIcon;
