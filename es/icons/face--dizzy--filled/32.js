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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM9,16.41,7.59,15l2-2-2-2L9,9.59l2,2,2-2L14.41,11l-2,2,2,2L13,16.41l-2-2ZM16,25a3,3,0,1,1,3-3A3,3,0,0,1,16,25Zm8.41-10L23,16.41l-2-2-2,2L17.59,15l2-2-2-2L19,9.59l2,2,2-2L24.41,11l-2,2Z"></path></svg>`;
export default svgResultCarbonIcon;
