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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M18 15L14 15 14 11 12 11 12 15 8 15 8 17 12 17 12 21 14 21 14 17 18 17 18 15z"></path><path d="M21,26H4a2.0023,2.0023,0,0,1-2-2V8A2.0023,2.0023,0,0,1,4,6H21a2.0023,2.0023,0,0,1,2,2v4.0566l5.4189-3.87A.9995.9995,0,0,1,30,9V23a.9995.9995,0,0,1-1.5811.8135L23,19.9434V24A2.0023,2.0023,0,0,1,21,26ZM4,8V24.001L21,24V18a.9995.9995,0,0,1,1.5811-.8135L28,21.0566V10.9434l-5.4189,3.87A.9995.9995,0,0,1,21,14V8Z"></path></svg>`;
export default svgResultCarbonIcon;
