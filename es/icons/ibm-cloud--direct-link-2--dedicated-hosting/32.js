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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M19,27H5V13h4v-2H5c-1.1,0-2,0.9-2,2v6H0v2h3v6c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4h-2V27z"></path><path d="M11 19H21V21H11zM11 15H21V17H11zM11 11H21V13H11z"></path><path d="M29,11V5c0-1.1-0.9-2-2-2H13c-1.1,0-2,0.9-2,2v4h2V5h14v14h-4v2h4c1.1,0,2-0.9,2-2v-6h3v-2H29z"></path></svg>`;
export default svgResultCarbonIcon;
