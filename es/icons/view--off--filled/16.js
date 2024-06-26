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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30.94 15.66a16.4 16.4 0 00-5.73-7.45L30 3.41 28.59 2 2 28.59 3.41 30l5.1-5.09A15.38 15.38 0 0016 27 16.69 16.69 0 0030.94 16.34 1 1 0 0030.94 15.66zM16 22.5a6.46 6.46 0 01-3.83-1.26L14 19.43A4 4 0 0019.43 14l1.81-1.81A6.49 6.49 0 0116 22.5zM4.53 21.81l5-5A6.84 6.84 0 019.5 16 6.51 6.51 0 0116 9.5a6.84 6.84 0 01.79.05l3.78-3.77A14.39 14.39 0 0016 5 16.69 16.69 0 001.06 15.66a1 1 0 000 .68A15.86 15.86 0 004.53 21.81z"></path></svg>`;
export default svgResultCarbonIcon;
