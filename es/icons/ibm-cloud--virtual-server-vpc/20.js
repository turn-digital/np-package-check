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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="8" cy="26" r="1"></circle><path d="M5 30h22c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0-6h22v4H5v-4zM23 20h-14c-3.31 0-6-2.69-6-6 0-3.05 2.29-5.58 5.25-5.95.88-3.5 4.08-6.05 7.75-6.05s6.87 2.55 7.75 6.05c2.96.37 5.25 2.9 5.25 5.95 0 3.31-2.69 6-6 6zm-14.05-10c-2.18.03-3.95 1.81-3.95 4 0 2.21 1.79 4 4 4h14c2.21 0 4-1.79 4-4 0-2.19-1.76-3.97-3.94-4l-.12.01-.88.02-.12-.88c-.43-2.94-2.98-5.15-5.94-5.15s-5.51 2.21-5.93 5.15l-.12.88-1-.03z"></path></svg>`;
export default svgResultCarbonIcon;
