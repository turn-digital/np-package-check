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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21 28.6l-4.7-4.7c1.1-1.4 1.7-3.1 1.7-4.9 0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.8 0 3.5-.6 4.9-1.7l4.7 4.7L21 28.6zM10 25c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6S13.3 25 10 25zM22 12H30V14H22zM14 7H30V9H14zM14 2H30V4H14z"></path></svg>`;
export default svgResultCarbonIcon;
