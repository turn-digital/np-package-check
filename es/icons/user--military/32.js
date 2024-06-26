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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25 13L23.407 16 20 16.414 22.5 18.667 22 22 25 20.125 28 22 27.5 18.667 30 16.414 26.5 16 25 13z"></path><path d="M21.414 13.414L25 9.834 25 9.834 28.587 13.416 30 12 25 7 20 12 21.414 13.414z"></path><path d="M21.414 8.414L25 4.834 25 4.834 28.587 8.416 30 7 25 2 20 7 21.414 8.414zM16 30H14V25a3.0033 3.0033 0 00-3-3H7a3.0033 3.0033 0 00-3 3v5H2V25a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM9 10a3 3 0 11-3 3 3 3 0 013-3M9 8a5 5 0 105 5A5 5 0 009 8z"></path></svg>`;
export default svgResultCarbonIcon;
