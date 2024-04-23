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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="m31,17c0-1.6543-1.3457-3-3-3s-3,1.3457-3,3c0,1.3018.8384,2.4014,2,2.8154v2.6104l-11,6.4165-10.0154-5.8423,22.5193-13.1362c.3071-.1792.4961-.5083.4961-.8638s-.189-.6846-.4961-.8638L16.5039,1.1362c-.1558-.0908-.3298-.1362-.5039-.1362s-.3481.0454-.5039.1362L3.4961,8.1362c-.3071.1792-.4961.5083-.4961.8638v3.1846c-1.1616.4141-2,1.5137-2,2.8154,0,1.6543,1.3457,3,3,3s3-1.3457,3-3c0-1.3018-.8384-2.4014-2-2.8159v-2.6099l11-6.4165,10.0154,5.8423L3.4961,22.1362c-.3071.1792-.4961.5083-.4961.8638s.189.6846.4961.8638l12,7c.1558.0908.3298.1362.5039.1362s.3481-.0454.5039-.1362l12-7c.3071-.1792.4961-.5083.4961-.8638v-3.1841c1.1616-.4146,2-1.5142,2-2.8159Zm-27-1c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Zm24,2c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z"></path></svg>`;
export default svgResultCarbonIcon;
