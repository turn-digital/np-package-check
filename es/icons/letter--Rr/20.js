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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16 15V11a2 2 0 00-2-2H8V23h2V17h1.48l2.34 6H16l-2.33-6H14A2 2 0 0016 15zm-6-4h4v4H10zM24 13L18 13 18 23 20 23 20 15 24 15 24 13z"></path></svg>`;
export default svgResultCarbonIcon;
