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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26.5859,17,22,21.5859v0h0l-5-5a2.002,2.002,0,0,0-2.8286,0L9.585,21.1709A2.0031,2.0031,0,0,0,9.585,24l4.0009,4H6v2H16a1,1,0,0,0,.707-1.707L11,22.585,15.5852,18l5.7078,5.707a.9995.9995,0,0,0,1.414,0L28,18.4141Z"></path><path d="M21.5,17A3.5,3.5,0,1,1,25,13.5,3.5042,3.5042,0,0,1,21.5,17Zm0-5A1.5,1.5,0,1,0,23,13.5,1.5017,1.5017,0,0,0,21.5,12Z"></path><path d="M4,10.5977l12-6.462,12.5264,6.7452.9472-1.7618-13-7a1.0045,1.0045,0,0,0-.9472,0l-13,7A1,1,0,0,0,2,10V30H4Z"></path></svg>`;
export default svgResultCarbonIcon;