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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="m23.5,16v2c3.0327,0,5.5,2.4673,5.5,5.5s-2.4673,5.5-5.5,5.5-5.5-2.4673-5.5-5.5h-2c0,4.1422,3.3578,7.5,7.5,7.5s7.5-3.3578,7.5-7.5-3.3578-7.5-7.5-7.5Z"></path><path d="M23.5 26c1.3807 0 2.5-1.1193 2.5-2.5s-1.1193-2.5-2.5-2.5c-.3217 0-.6268.066-.9093.1766l-4.8837-4.8837-1.4141 1.4141 4.8837 4.8837c-.1107.2825-.1766.5876-.1766.9093 0 1.3807 1.1193 2.5 2.5 2.5zM29 13h-2v-3.4257l-11-6.4166-3 1.7499v8.0924h-2V4.3333c0-.3557.189-.6846.4961-.8638l4-2.3333c.1558-.0908.3298-.1362.5039-.1362s.3481.0454.5039.1362l12 7c.3071.1792.4961.5081.4961.8638v4zM7 6H9V16H7z"></path><path d="m13.9998,29.991l-10.5037-6.1272c-.3071-.1792-.4961-.5081-.4961-.8638v-14h2v13.4257l10.0076,5.8378-1.0078,1.7275Z"></path></svg>`;
export default svgResultCarbonIcon;
