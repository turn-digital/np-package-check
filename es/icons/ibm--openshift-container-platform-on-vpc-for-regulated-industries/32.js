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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="19" cy="27" r="1"></circle><path d="M29 31h-13c-1.1028 0-2-.8972-2-2v-4c0-1.1028.8972-2 2-2h13c1.1028 0 2 .8972 2 2v4c0 1.1028-.8972 2-2 2zm-13-6v4h13v-4h-13zM29 21h-13c-1.1028 0-2-.8972-2-2v-4c0-1.1028.8972-2 2-2h13c1.1028 0 2 .8972 2 2v4c0 1.1028-.8972 2-2 2zm-13-6v4h13v-4h-13z"></path><path d="m12,27.2998c-4.6531-1.6523-8-6.0869-8-11.2998,0-6.6167,5.3833-12,12-12,4.8311,0,8.9937,2.876,10.8945,7h2.1665c-2.0188-5.2544-7.1045-9-13.061-9-7.7197,0-14,6.2803-14,14,0,6.3291,4.2246,11.6846,10,13.4102v-2.1104Z"></path></svg>`;
export default svgResultCarbonIcon;
