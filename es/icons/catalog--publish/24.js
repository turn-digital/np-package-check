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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M20 20L21.4 21.4 18.8 24 28 24 28 26 18.8 26 21.4 28.6 20 30 15 25zM14 15H22V17H14zM14 8H22V10H14z"></path><path d="M13,28H8v-4h2v-2H8v-5h2v-2H8v-5h2V8H8V4h18v16h2V4c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4v4H4v2h2v5H4v2h2v5H4v2h2v4	c0,1.1,0.9,2,2,2h5V28z"></path></svg>`;
export default svgResultCarbonIcon;
