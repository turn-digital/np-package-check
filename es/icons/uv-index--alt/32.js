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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13 30H9a2.0027 2.0027 0 01-2-2V20H9v8h4V20h2v8A2.0027 2.0027 0 0113 30zM25 20L23.25 20 21 29.031 18.792 20 17 20 19.5 30 22.5 30 25 20zM15 2H17V7H15z"></path><path d="M21.668 6.854H26.625999999999998V8.854H21.668z" transform="rotate(-45 24.147 7.853)"></path><path d="M25 15H30V17H25zM2 15H7V17H2z"></path><path d="M6.854 5.375H8.854V10.333H6.854z" transform="rotate(-45 7.854 7.853)"></path><path d="M22,17H20V16a4,4,0,0,0-8,0v1H10V16a6,6,0,0,1,12,0Z"></path></svg>`;
export default svgResultCarbonIcon;
