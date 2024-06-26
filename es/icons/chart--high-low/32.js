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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M15 8L12 8 12 6 10 6 10 20 7 20 7 22 10 22 10 24 12 24 12 10 15 10 15 8zM27 10L24 10 24 6 22 6 22 18 19 18 19 20 22 20 22 24 24 24 24 12 27 12 27 10z"></path><path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"></path></svg>`;
export default svgResultCarbonIcon;
