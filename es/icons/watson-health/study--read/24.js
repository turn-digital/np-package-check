/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21 29.414L16 24.413 17.413 23 21 26.586 28.585 19 30 20.415 21 29.414zM20 14L20 12 15 12 15 10 18 10 18 8 15 8 15 6 13 6 13 8 10 8 10 10 13 10 13 12 8 12 8 14 13 14 13 16 8 16 8 18 13 18 13 20 10 20 10 22 15 22 15 18 18 18 18 16 15 16 15 14 20 14z"></path><path d="M13,24H4V4H24V16h2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V24a2,2,0,0,0,2,2h9Z"></path></svg>`;
export default svgResultCarbonIcon;
