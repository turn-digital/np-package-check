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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16 28h-3c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h3V28zM28 30h2.2l-4.6-11h-2.2l-4.6 11H21l.8-2h5.3L28 30zM22.7 26l1.8-4.4 1.8 4.4H22.7zM28 15h-2v-4c0-2.8-2.2-5-5-5h-4V4h4c3.9 0 7 3.1 7 7V15zM14 5V3H9V1H7v2H2v2h8.2C10 5.9 9.4 7.5 8 9 7.4 8.3 6.9 7.6 6.6 7H4.3c.4 1 1.1 2.2 2.1 3.3C5.6 11 4.4 11.6 3 12.1L3.7 14c1.8-.7 3.2-1.5 4.3-2.3 1.1.9 2.5 1.7 4.3 2.3l.7-1.9c-1.4-.5-2.6-1.2-3.5-1.8 1.9-2 2.5-4.1 2.7-5.3H14z"></path></svg>`;
export default svgResultCarbonIcon;
