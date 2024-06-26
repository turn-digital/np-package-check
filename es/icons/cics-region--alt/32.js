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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M31 13v-2h-4c-1.1028 0-2 .8975-2 2v2c0 1.1025.8972 2 2 2h2v2h-4v2h4c1.1028 0 2-.8975 2-2v-2c0-1.1025-.8972-2-2-2h-2v-2h4zM17 13v6c0 1.1025.8972 2 2 2h4v-2h-4v-6h4v-2h-4c-1.1028 0-2 .8975-2 2zM9 13L11 13 11 19 9 19 9 21 15 21 15 19 13 19 13 13 15 13 15 11 9 11 9 13zM1 13v6c0 1.1025.8972 2 2 2H7v-2H3v-6H7v-2H3c-1.1028 0-2 .8975-2 2z"></path></svg>`;
export default svgResultCarbonIcon;
