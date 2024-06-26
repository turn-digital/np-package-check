/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13.71 12.29L7.41 6 13 6 13 4 4 4 4 13 6 13 6 7.41 12.29 13.71 13.71 12.29zM28 30H12a2 2 0 01-2-2V18h2V28H28V12H18V10H28a2 2 0 012 2V28A2 2 0 0128 30z"></path><path d="M22,15H17v2h5v2H18a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h6V17A2,2,0,0,0,22,15Zm0,8H18V21h4Z"></path></svg>`;
export default svgResultCarbonIcon;
