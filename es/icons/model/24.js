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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23.5,4H8.5L1.7158,13.0454,16,29.5269,30.2842,13.0454ZM27,12H21.5543l-3.75-6H22.5ZM10.3021,14l3.7536,10.23L5.19,14Zm2.13,0H19.568l-3.569,9.7212Zm.3725-2L16,6.8867,19.1957,12Zm8.8935,2H26.81L17.9427,24.2314ZM9.5,6h4.6957l-3.75,6H5Z"></path></svg>`;
export default svgResultCarbonIcon;
