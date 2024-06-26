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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24.7976,2,20.3555,8.6641A2.9941,2.9941,0,0,1,17.8594,10H12a3.0033,3.0033,0,0,0-3,3v6a2.0023,2.0023,0,0,0,2,2v7a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V16H17V28H13V19H11V13a1.0009,1.0009,0,0,1,1-1h5.8594a4.9881,4.9881,0,0,0,4.16-2.2266l4.4422-6.664Z"></path><path d="M11,5a4,4,0,1,1,4,4A4.0042,4.0042,0,0,1,11,5Zm2,0a2,2,0,1,0,2-2A2.0023,2.0023,0,0,0,13,5Z"></path></svg>`;
export default svgResultCarbonIcon;
