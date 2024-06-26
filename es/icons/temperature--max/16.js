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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20 10H27V12H20zM20 16H30V18H20zM20 22H27V24H20zM10 20.1839V7H8V20.1839a3 3 0 102 0z"></path><path d="M30,4H12.9744A4.9829,4.9829,0,0,0,4,7V18.1108a7,7,0,1,0,10,0V7a5.0019,5.0019,0,0,0-.1011-1H30ZM9,28a4.9933,4.9933,0,0,1-3.332-8.7183L6,18.9834V7a3,3,0,0,1,6,0V18.9834l.332.2983A4.9933,4.9933,0,0,1,9,28Z"></path></svg>`;
export default svgResultCarbonIcon;
