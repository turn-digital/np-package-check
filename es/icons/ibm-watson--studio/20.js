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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25 21c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S27.8 21 25 21zM25 13c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S26.7 13 25 13zM14 11V6c0-1.1-.9-2-2-2h-2v2h2v5c0 2.1 1.1 3.9 2.7 5-1.6 1.1-2.7 2.9-2.7 5v5h-2v2h2c1.1 0 2-.9 2-2v-5c0-2.2 1.8-4 4-4v-2C15.8 15 14 13.2 14 11zM2 30v-6h6v6H2zM4 26v2h2v-2H4zM2 19v-6h6v6H2zM4 15v2h2v-2H4zM2 8V2h6v6H2zM4 4v2h2V4H4z"></path></svg>`;
export default svgResultCarbonIcon;
