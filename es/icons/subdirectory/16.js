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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m9,20l1.4141,1.4141-2.5859,2.5859h18.1719s0-20,0-20h2v20c0,1.1025-.897,2-2,2H7.8281s2.5859,2.5859,2.5859,2.5859l-1.4141,1.4141-5-5,5-5Z"></path></svg>`;
export default svgResultCarbonIcon;
