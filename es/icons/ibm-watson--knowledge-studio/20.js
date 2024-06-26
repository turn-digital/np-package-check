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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20 25H27V27H20zM22 29H25V31H22zM27 23h-2c0-1.1.4-2 1.2-2.8l.5-.5c.8-.8 1.3-2 1.3-3.2 0-2.5-2-4.5-4.5-4.5S19 14 19 16.5c0 1.2.5 2.3 1.3 3.2l.5.5C21.6 21 22 21.9 22 23h-2c0-.5-.2-1-.6-1.4l-.5-.5c-1.2-1.2-1.9-2.9-1.9-4.6 0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5c0 1.7-.7 3.4-1.9 4.6l-.5.5C27.2 22 27 22.5 27 23zM6 22H14V24H6z"></path><circle cx="12" cy="19" r="1"></circle><path d="M6 18H9V20H6zM6 14H13V16H6zM10 10H17V12H10z"></path><circle cx="7" cy="11" r="1"></circle><path d="M16 6H20V8H16z"></path><circle cx="13" cy="7" r="1"></circle><path d="M6 6H10V8H6z"></path><path d="M18,28H4V4l18,0v4h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2,2.9,2,4v24c0,1.1,0.9,2,2,2h14V28z"></path></svg>`;
export default svgResultCarbonIcon;
