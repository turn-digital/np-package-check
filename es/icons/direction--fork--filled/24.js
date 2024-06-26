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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M8 14L8 9.414 15 16.414 15 26 17 26 17 16.414 24 9.414 24 14 26 14 26 6 18 6 18 8 22.586 8 16 14.586 9.414 8 14 8 14 6 6 6 6 14 8 14z" data-icon-path="inner-path"></path><path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM26,14H24V9.4141l-7,7V26H15V16.4141l-7-7V14H6V6h8V8H9.4141L16,14.5859,22.5859,8H18V6h8Z"></path></svg>`;
export default svgResultCarbonIcon;
