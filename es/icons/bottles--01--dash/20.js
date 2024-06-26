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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 9.3706V3c0-.5522-.4478-1-1-1h-3v2h2v6.7207s3 .5066 3 4.2793v13h-3v2h4c.5522 0 1-.4478 1-1V15c0-3.4517-1.9326-5.0239-3-5.6294zM19 9.3706V3c0-.5522-.4478-1-1-1h-3v2h2v6.7207s3 .5066 3 4.2793v13h-3v2h4c.5522 0 1-.4478 1-1V15c0-3.4517-1.9326-5.0239-3-5.6294zM13 28h-3v2h4c.5522 0 1-.4478 1-1v-4h-2v3zM5 25H3v4c0 .5522.4478 1 1 1h4v-2h-3v-3zM13 18H15V23H13zM3 18H5V23H3zM12 9.3706V3c0-.5522-.4478-1-1-1H7c-.5522 0-1 .4478-1 1v6.3706c-1.0674.6055-3 2.1777-3 5.6294v1h2v-1c0-3.7725 3-4.2793 3-4.2793V4h2v6.7207s3 .5068 3 4.2793v1h2v-1c0-3.4517-1.9326-5.0239-3-5.6294z"></path></svg>`;
export default svgResultCarbonIcon;
