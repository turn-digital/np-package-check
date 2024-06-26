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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 22h-5v-2h5v-3h-3c-1.1028 0-2-.8972-2-2v-3c0-1.1028.8972-2 2-2h5v2h-5v3h3c1.1028 0 2 .8972 2 2v3c0 1.1028-.8972 2-2 2zM21 22h-3c-1.1028 0-2-.8972-2-2V12c0-1.1028.8972-2 2-2h3c1.1028 0 2 .8972 2 2v8c0 1.1028-.8972 2-2 2zm-3-10v8h3V12h-3zM11.9458 10L7.9458 22 10.0542 22 14.0542 10 11.9458 10zM6 22L0 22 0 19.6973 3.7981 14 0 14 0 12 6 12 6 14.3027 2.2019 20 6 20 6 22z"></path></svg>`;
export default svgResultCarbonIcon;
