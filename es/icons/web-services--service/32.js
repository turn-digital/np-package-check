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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m23,18h-2v-7h-7v-2h8c.5522,0,1,.4478,1,1v8Z"></path><path d="m18,23h-8c-.5522,0-1-.4478-1-1v-8c0-.5522.4478-1,1-1h8c.5522,0,1,.4478,1,1v8c0,.5522-.4478,1-1,1Zm-7-2h6v-6h-6v6Z"></path><path d="m16,1c-.1741,0-.3481.0454-.5039.1362L3.4961,8.1362c-.3071.1792-.4961.5081-.4961.8638v14c0,.3557.189.6846.4961.8638l12,7c.1558.0908.3298.1362.5039.1362s.3481-.0454.5039-.1362l11-6.4166-1.0078-1.7275-10.4961,6.1227-11-6.4166v-12.8513L16,3.1577l11,6.4166v7.4257h2v-8c0-.3557-.189-.6846-.4961-.8638L16.5039,1.1362c-.1558-.0908-.3298-.1362-.5039-.1362Z"></path></svg>`;
export default svgResultCarbonIcon;
