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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="9" cy="26" r="1"></circle><path d="m26,22h-5v2h5v4H6v-4h9c1.1,0,2-.9,2-2h0v-9.17l2.59,2.59,1.41-1.42-5-5-5,5,1.41,1.41,2.59-2.58v9.17H6c-1.1,0-2,.9-2,2v4c0,1.1.9,2,2,2h20c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2Z"></path><path d="m23.75,8.05c-.88-3.5-4.08-6.05-7.75-6.05s-6.87,2.55-7.75,6.05c-2.96.37-5.25,2.9-5.25,5.95,0,3.31,2.69,6,6,6h2v-2h-2c-2.21,0-4-1.79-4-4,0-2.19,1.77-3.97,3.95-4l.99.02.12-.88c.43-2.93,2.98-5.14,5.94-5.14s5.51,2.21,5.93,5.15l.12.88.88-.02.13-.01c2.18.03,3.94,1.81,3.94,4,0,2.21-1.79,4-4,4h-2v2h2c3.31,0,6-2.69,6-6,0-3.05-2.29-5.58-5.25-5.95Z"></path></svg>`;
export default svgResultCarbonIcon;
