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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="9" cy="7" r="1"></circle><path d="M27,22v-4c0-1.1046-.8954-2-2-2h-8v-4h9c1.1046,0,2-.8954,2-2V4c0-1.1046-.8954-2-2-2H6c-1.1046,0-2,.8954-2,2v6c0,1.1046,.8954,2,2,2H15v4H7c-1.1046,0-2,.8954-2,2v4h-1c-1.1046,0-2,.8954-2,2v4c0,1.1046,.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-1v-4H15v4h-1c-1.1046,0-2,.8954-2,2v4c0,1.1046,.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-1v-4h8v4h-1c-1.1046,0-2,.8954-2,2v4c0,1.1046,.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-1Zm-19,6H4v-4h4v4Zm10-4v4h-4v-4h4ZM6,10V4H26v6H6ZM28,28h-4v-4h4v4Z"></path></svg>`;
export default svgResultCarbonIcon;
