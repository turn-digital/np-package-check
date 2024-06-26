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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M18 25L15 25 15 22 13 22 13 25 10 25 10 27 13 27 13 30 15 30 15 27 18 27 18 25z"></path><path d="M22 30h-2v-5c0-2.8-2.2-5-5-5h-6c-2.8 0-5 2.2-5 5v5H2v-5c0-3.9 3.1-7 7-7h6c3.9 0 7 3.1 7 7v5zM28 5.2V3c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2.2l3 2.2V3l-3 2.2zm-2 3.8h-8V3h8v6zM15.5 12.5c-.9.9-2.1 1.5-3.5 1.5-2.8 0-5-2.2-5-5s2.2-5 5-5c.5 0 .9.1 1.3.2l.6-1.9c-.6-.2-1.2-.3-1.9-.3-3.9 0-7 3.1-7 7s3.1 7 7 7c1.9 0 3.7-.8 5-2l-1.5-1.5z"></path></svg>`;
export default svgResultCarbonIcon;
