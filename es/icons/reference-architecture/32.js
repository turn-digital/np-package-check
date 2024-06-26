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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="18" cy="26" r="1"></circle><path d="m28,20c1.1028,0,2-.8975,2-2v-4c0-1.1025-.8972-2-2-2h-1v-5c0-1.1025-.8972-2-2-2h-5v-1c0-1.1025-.8972-2-2-2h-4c-1.1028,0-2,.8975-2,2v1h-5c-1.1028,0-2,.8975-2,2v5.1421c-1.7202.4473-3,1.9995-3,3.8579s1.2798,3.4106,3,3.8579v5.1421c0,1.1025.8972,2,2,2h7v1c0,1.1025.8972,2,2,2h12c1.1028,0,2-.8975,2-2v-4c0-1.1025-.8972-2-2-2h-1v-2h1Zm0-2h-4v-4h4v4ZM14,4h4v4h-4v-4Zm-2,3v1c0,1.1025.8972,2,2,2h4c1.1028,0,2-.8975,2-2v-1h5v5h-1c-1.1028,0-2,.8975-2,2v1h-12.1421c-.3638-1.3989-1.4592-2.4941-2.8579-2.8579v-5.1421h5Zm-8,9c0-1.1025.8972-2,2-2s2,.8975,2,2-.8972,2-2,2-2-.8975-2-2Zm24,12h-12v-4h12v4Zm-3-6h-9c-1.1028,0-2,.8975-2,2v1h-7v-5.1421c1.3987-.3638,2.4941-1.459,2.8579-2.8579h12.1421v1c0,1.1025.8972,2,2,2h1v2Z"></path></svg>`;
export default svgResultCarbonIcon;
