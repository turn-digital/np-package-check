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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M27 11H26V10a2 2 0 00-2-2H20v2h4v3h3v6H24v3H19v2h5a2 2 0 002-2V21h1a2 2 0 002-2V13A2 2 0 0027 11zM11 22H6V10h6V8H6a2 2 0 00-2 2V22a2 2 0 002 2h5z"></path><path d="M14.81 23.58L13.19 22.42 17.06 17 9.37 17 16.22 8.38 17.78 9.62 13.51 15 20.94 15 14.81 23.58z"></path></svg>`;
export default svgResultCarbonIcon;
