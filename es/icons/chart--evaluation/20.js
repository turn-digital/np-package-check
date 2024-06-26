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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25.672 6.207H29.915V8.206H25.672z" transform="rotate(-45.02 27.793 7.207)"></path><path d="M16 20.5L11 15.539 12.59 13.969 16 17.349 23.41 10 25 11.579 16 20.5z"></path><path d="M4,28V25.4131L10.4141,19,9,17.585l-5,5V2H2V28a2,2,0,0,0,2,2H30V28Z"></path></svg>`;
export default svgResultCarbonIcon;
