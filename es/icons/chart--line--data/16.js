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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M10.06,17.88A4.25,4.25,0,0,0,11,18a4,4,0,0,0,2.23-.68l3.22,2.87a3.88,3.88,0,0,0-.2,3.17A4,4,0,1,0,22.62,19l2.54-5.09a3.78,3.78,0,0,0,2.91-.53A4,4,0,1,0,23.38,13l-2.54,5.09A3.86,3.86,0,0,0,20,18a4,4,0,0,0-2.23.68l-3.22-2.87a3.88,3.88,0,0,0,.2-3.17A4,4,0,1,0,8.3,16.93L4,25V2H2V28a2,2,0,0,0,2,2H30V28H4.67ZM26,8a2,2,0,1,1-2,2A2,2,0,0,1,26,8ZM22,22a2,2,0,1,1-2-2A2,2,0,0,1,22,22ZM11,12a2,2,0,1,1-2,2A2,2,0,0,1,11,12Z"></path></svg>`;
export default svgResultCarbonIcon;
