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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 20H6a2 2 0 00-2 2v4a2 2 0 002 2H26a2 2 0 002-2V22A2 2 0 0026 20zm0 6H6V22H26zM17 7.828L19.586 10.414 21 9 16 4 11 9 12.414 10.414 15 7.828 15 14 4 14 4 16 28 16 28 14 17 14 17 7.828z"></path></svg>`;
export default svgResultCarbonIcon;
