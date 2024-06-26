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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23.9,10c-0.6-0.6-1.5-1-2.4-1s-1.8,0.4-2.4,1l-1.4-1.4c1-1,2.4-1.6,3.8-1.6s2.9,0.6,3.8,1.6L23.9,10z"></path><circle cx="24" cy="5" r="1"></circle><circle cx="19" cy="5" r="1"></circle><path d="M15 0l13 0c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-3.5l-1.7 3L21 16l2.3-4H28V2H15v10h5v2h-5c-1.1 0-2-.9-2-2V2C13 .9 13.9 0 15 0zM20 19v6c0 .6-.4 1-1 1h-5v2h5c1.7 0 3-1.3 3-3v-6H20zM15.4 20.4c-.8 1-2.1 1.6-3.4 1.6s-2.6-.6-3.4-1.6L7 21.6c1.2 1.4 3 2.4 5 2.4s3.8-.9 5-2.4L15.4 20.4z"></path><circle cx="15.5" cy="17.5" r="1.5"></circle><circle cx="8.5" cy="17.5" r="1.5"></circle><path d="M10.1,26H5c-0.6,0-1-0.4-1-1V14c0-0.6,0.4-1,1-1h5v-2H5c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h4l2.3,4l1.7-1L10.1,26z"></path></svg>`;
export default svgResultCarbonIcon;
