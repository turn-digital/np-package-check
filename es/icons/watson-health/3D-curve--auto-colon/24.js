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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M9.5,8H20.1a5,5,0,1,0,0-2H9.5a5.5,5.5,0,0,0,0,11h11a3.5,3.5,0,0,1,0,7H11.9a5,5,0,1,0,0,2h8.6a5.5,5.5,0,0,0,0-11H9.5a3.5,3.5,0,0,1,0-7ZM25,4a3,3,0,1,1-3,3A3,3,0,0,1,25,4ZM7,28a3,3,0,1,1,3-3A3,3,0,0,1,7,28Z"></path></svg>`;
export default svgResultCarbonIcon;
