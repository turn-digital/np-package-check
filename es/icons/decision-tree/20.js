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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,12V4H22V7H18a2.0023,2.0023,0,0,0-2,2v6H10V12H2v8h8V17h6v6a2.0023,2.0023,0,0,0,2,2h4v3h8V20H22v3H18V9h4v3ZM8,18H4V14H8Zm16,4h4v4H24ZM24,6h4v4H24Z"></path></svg>`;
export default svgResultCarbonIcon;
