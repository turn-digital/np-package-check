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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 23L13.83 23 16.41 20.41 15 19 10 24 15 29 16.41 27.59 13.83 25 22 25 22 23zM11 13L19.17 13 16.59 10.41 18 9 23 14 18 19 16.59 17.59 19.17 15 11 15 11 13z"></path><path d="M24.5,25H24V23h.5a5.4961,5.4961,0,0,0,.377-10.9795l-.8365-.0566-.09-.834a7.9979,7.9979,0,0,0-15.9014,0l-.09.834-.8365.0566A5.4961,5.4961,0,0,0,7.5,23H8v2H7.5A7.4964,7.4964,0,0,1,6.1782,10.124a9.9992,9.9992,0,0,1,19.6436,0A7.4964,7.4964,0,0,1,24.5,25Z"></path></svg>`;
export default svgResultCarbonIcon;
