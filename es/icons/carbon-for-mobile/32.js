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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M32 14h-2v-5.9258l-5.5039-3.2104 1.0078-1.7275 6 3.5c.3071.1792.4961.5083.4961.8638v6.5zM20 22c-.1743 0-.3481-.0454-.5039-.1362l-6-3.5c-.3071-.1792-.4961-.5083-.4961-.8638v-7c0-.3555.189-.6846.4961-.8638l6-3.5c.3115-.1816.6963-.1816 1.0078 0l6 3.5c.3071.1792.4961.5083.4961.8638v7c0 .3555-.189.6846-.4961.8638l-6 3.5c-.1558.0908-.3296.1362-.5039.1362zm-5-5.0742l5 2.9165 5-2.9165v-5.8516l-5-2.9165-5 2.9165v5.8516z"></path><circle cx="12.5" cy="24.5" r="1.5"></circle><path d="m19,30H6c-1.1028,0-2-.8972-2-2V4c0-1.1028.8972-2,2-2h13v2H6v24h13v-4h2v4c0,1.1028-.8972,2-2,2Z"></path></svg>`;
export default svgResultCarbonIcon;
