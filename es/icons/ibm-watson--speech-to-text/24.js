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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M14 18H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2.4l1.7 3 1.7-1-2.3-4H4v-6h10v6h-3v2h3c1.1 0 2-.9 2-2v-6C16 18.9 15.1 18 14 18zM19 26h2c3.9 0 7-3.1 7-7v-2h-2v2c0 2.8-2.2 5-5 5h-2V26zM18 11H24V13H18zM18 7H30V9H18zM18 3H30V5H18zM4 14h2v-2c0-2.8 2.2-5 5-5h4V5h-4c-3.9 0-7 3.1-7 7V14z"></path></svg>`;
export default svgResultCarbonIcon;
