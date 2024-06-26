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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m29,8c0-.5522-.4478-1-1-1h-4c-.5522,0-1,.4478-1,1v7h-2V3c0-.5522-.4478-1-1-1h-4c-.5522,0-1,.4478-1,1v12h-2V5c0-.5522-.4478-1-1-1h-4c-.5522,0-1,.4478-1,1v10H3v12c0,.5522.4478,1,1,1h4c.5522,0,1-.4478,1-1v-10h2v5c0,.5522.4478,1,1,1h4c.5522,0,1-.4478,1-1v-5h2v12c0,.5522.4478,1,1,1h4c.5522,0,1-.4478,1-1v-12h4v-9ZM7,26h-2v-9h2v9Zm8-5h-2v-4h2v4Zm2-6V4h2v11h-2Zm10,0h-2v-6h2v6Z"></path></svg>`;
export default svgResultCarbonIcon;
