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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22 26.59L19.41 24 18 25.41 22 29.41 30 21.41 28.59 20 22 26.59z"></path><circle cx="16" cy="16" r="2"></circle><path d="M16,22a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,16,22Zm0-10a4,4,0,1,0,4,4A4.0045,4.0045,0,0,0,16,12Z"></path><path d="M28,16A12,12,0,1,0,16,28V26A10,10,0,1,1,26,16Z"></path></svg>`;
export default svgResultCarbonIcon;
