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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M19.05 13.7326L18.05 12 7.928 17.8457 6.9312 17.27a2.9524 2.9524 0 00.6672-.769A3 3 0 103.5 17.5986l2.428 1.4019L3.5 20.4023a3.0342 3.0342 0 103.4407.3223l.987-.5693L14.5914 24l1-1.7294-5.6634-3.27zM4.0344 15.26a1 1 0 11.4658.6069A.9929.9929 0 014.0344 15.26zM4.9988 22a1 1 0 11-.8645 1.5A1 1 0 014.9988 22zM17 26H21V28H17zM10 26H14V28H10z"></path><path d="M28,28H24V26h4V4H7V8H5V4A2.0023,2.0023,0,0,1,7,2H28a2.0023,2.0023,0,0,1,2,2V26A2.0023,2.0023,0,0,1,28,28Z"></path></svg>`;
export default svgResultCarbonIcon;
