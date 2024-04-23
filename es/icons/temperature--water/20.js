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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M14,9a4.9316,4.9316,0,0,0,4-1.9873,5.0192,5.0192,0,0,0,8,0A4.9316,4.9316,0,0,0,30,9V7a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,26,4a.9894.9894,0,0,0-.9468.6787A3.44,3.44,0,0,1,22,7a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,18,4a.971.971,0,0,0-.9468.6787A3.44,3.44,0,0,1,14,7H13V6A4,4,0,0,0,5,6V17.2617A7.0126,7.0126,0,1,0,13.8735,18H14a4.9316,4.9316,0,0,0,4-1.9873,5.0192,5.0192,0,0,0,8,0A4.9316,4.9316,0,0,0,30,18V16a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,26,13a.9894.9894,0,0,0-.9468.6787A3.44,3.44,0,0,1,22,16a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,18,13a.971.971,0,0,0-.9468.6787A3.44,3.44,0,0,1,14,16H13V9ZM7,6a2,2,0,0,1,4,0v6H7ZM9,28a4.9965,4.9965,0,0,1-2.499-9.3252L7,18.3857V14h4v4.3857l.499.2891A4.9965,4.9965,0,0,1,9,28Z"></path></svg>`;
export default svgResultCarbonIcon;
