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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="11" cy="8" r="1"></circle><circle cx="11" cy="16" r="1"></circle><circle cx="11" cy="24" r="1"></circle><path d="M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2H18V27H8V21H26V5A2,2,0,0,0,24,3Zm0,16H8V13H24Zm0-8H8V5H24Z"></path><path d="M29 24.415L27.586 23 25 25.587 22.414 23 21 24.415 23.586 27 21 29.586 22.414 31 25 28.414 27.586 31 29 29.586 26.414 27 29 24.415z"></path></svg>`;
export default svgResultCarbonIcon;
