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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20 20H14V17a2 2 0 014 0h2a4 4 0 00-8 0v3a2.0025 2.0025 0 00-2 2v6a2.0025 2.0025 0 002 2h8a2.0025 2.0025 0 002-2V22A2.0025 2.0025 0 0020 20zm0 8H12V22h8zM16 8a8.9709 8.9709 0 00-6.3608 2.6392l1.4133 1.4135a6.9887 6.9887 0 019.895 0l1.4135-1.4135A8.9717 8.9717 0 0016 8z"></path><path d="M6.105,7.105,7.5188,8.5186a11.9808,11.9808,0,0,1,16.9624,0L25.8949,7.105a13.9782,13.9782,0,0,0-19.79,0Z"></path></svg>`;
export default svgResultCarbonIcon;
