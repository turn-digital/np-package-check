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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M8.586 19.414L13.165 24 8.586 28.586 10 30 16 24 10 18 8.586 19.414z"></path><path d="M2.586 19.414L7.165 24 2.586 28.586 4 30 10 24 4 18 2.586 19.414zM12 14L12 12 17 12 17 10 14 10 14 8 17 8 17 6 19 6 19 8 22 8 22 10 19 10 19 12 24 12 24 14 19 14 19 16 24 16 24 18 19 18 19 20 22 20 22 22 17 22 17 18 14 18 14 16 17 16 17 14 12 14z"></path><path d="M19,24h9V4H8V16H6V4A2,2,0,0,1,8,2H28a2,2,0,0,1,2,2V24a2,2,0,0,1-2,2H19Z"></path></svg>`;
export default svgResultCarbonIcon;
