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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M14 20H16V28H14z"></path><path d="M9,4a7.0078,7.0078,0,0,1,7,7v3H14V11a5,5,0,1,0-5,5H26.1719l-4.586-4.5859L23,10l7,7-7,7-1.4141-1.4141L26.1719,18H9A7,7,0,0,1,9,4Z"></path></svg>`;
export default svgResultCarbonIcon;
