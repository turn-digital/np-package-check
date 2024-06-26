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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.707 7.293l-3-3a.9994.9994 0 00-1.414 0L16 13.5859V18h4.4141L29.707 8.707A.9994.9994 0 0029.707 7.293zM19.5859 16H18V14.4141l5-5L24.5859 11zM26 9.5859L24.4141 8 26 6.4141 27.5859 8zM10 14a4 4 0 114-4A4.0045 4.0045 0 0110 14zm0-6a2 2 0 101.998 2.0044A2.002 2.002 0 0010 8z"></path><path d="M27.0059,14.2354l-1.4141,1.414L28,18.0576,18.0579,28,4,13.9414V4h9.9417l4.4067,4.4067,1.4141-1.4145-4.407-4.4063A2,2,0,0,0,13.9414,2H4A2,2,0,0,0,2,4v9.9414a2,2,0,0,0,.5857,1.4141L16.6436,29.4146a2.001,2.001,0,0,0,2.8286,0l9.9424-9.9424a2.001,2.001,0,0,0,0-2.8286Z"></path></svg>`;
export default svgResultCarbonIcon;
