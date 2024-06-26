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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M19 21H21V24H19zM19 0H21V3H19zM8 11H11V13H8zM29 11H32V13H29z"></path><path d="M11.59 3.07H13.57V6.07H11.59z" transform="rotate(-45 12.586 4.577)"></path><path d="M26.44 17.92H28.42V20.92H26.44z" transform="rotate(-45 27.43 19.408)"></path><path d="M11.09 18.42H14.09V20.400000000000002H11.09z" transform="rotate(-45 12.592 19.414)"></path><path d="M25.93 3.58H28.93V5.5600000000000005H25.93z" transform="rotate(-45 27.423 4.57)"></path><path d="M20 5a7 7 0 107 7A7 7 0 0020 5zm0 12A5 5 0 0120 7zM5 18H0V32H5a3 3 0 003-3V27a3 3 0 00-.78-2A3 3 0 008 23V21A3 3 0 005 18zM2 20H5a1 1 0 011 1v2a1 1 0 01-1 1H2zm4 9a1 1 0 01-1 1H2V26H5a1 1 0 011 1zM2 2L9 2 9 0 0 0 0 9 2 9 2 2z"></path></svg>`;
export default svgResultCarbonIcon;
