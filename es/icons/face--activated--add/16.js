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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 4L26 4 26 0 24 0 24 4 20 4 20 6 24 6 24 10 26 10 26 6 30 6 30 4zM11.5 11A2.5 2.5 0 1014 13.5 2.48 2.48 0 0011.5 11zM20.5 11A2.5 2.5 0 1023 13.5 2.48 2.48 0 0020.5 11zM9 20a8.13 8.13 0 0014 0z"></path><path d="M27.82,14A12,12,0,1,1,16,4V2A14,14,0,1,0,30,16a14.71,14.71,0,0,0-.16-2Z"></path></svg>`;
export default svgResultCarbonIcon;
