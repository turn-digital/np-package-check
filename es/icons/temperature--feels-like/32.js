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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26 30H22a2.0059 2.0059 0 01-2-2V21a2.0059 2.0059 0 01-2-2V13a2.9465 2.9465 0 013-3h6a2.9465 2.9465 0 013 3v6a2.0059 2.0059 0 01-2 2v7A2.0059 2.0059 0 0126 30zM21 12a.9448.9448 0 00-1 1v6h2v9h4V19h2V13a.9448.9448 0 00-1-1zM24 9a4 4 0 114-4h0A4.0118 4.0118 0 0124 9zm0-6a2 2 0 102 2h0a2.0059 2.0059 0 00-2-2zM10 20.1839V12H8v8.1839a3 3 0 102 0z"></path><path d="M9,30A6.9931,6.9931,0,0,1,4,18.1108V7A5,5,0,0,1,14,7V18.1108A6.9931,6.9931,0,0,1,9,30ZM9,4A3.0033,3.0033,0,0,0,6,7V18.9834l-.332.2983a5,5,0,1,0,6.664,0L12,18.9834V7A3.0033,3.0033,0,0,0,9,4Z"></path></svg>`;
export default svgResultCarbonIcon;
