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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M12,4v8H4V4H12 M12,3H4C3.4,3,3,3.4,3,4v8c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V4C13,3.4,12.6,3,12,3z"></path></svg>`;
export default svgResultCarbonIcon;
