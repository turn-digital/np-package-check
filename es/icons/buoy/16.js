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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,22a3.4376,3.4376,0,0,1-3.0513-2.3164,1,1,0,0,0-1.8955-.0049A3.44,3.44,0,0,1,20,22a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,16,19a.9894.9894,0,0,0-.9468.6787A3.44,3.44,0,0,1,12,22a3.4376,3.4376,0,0,1-3.0513-2.3164A1.007,1.007,0,0,0,8,19a.971.971,0,0,0-.9468.6787A3.44,3.44,0,0,1,4,22H2v2H4a4.9316,4.9316,0,0,0,4-1.9873,5.5965,5.5965,0,0,0,1,.9912,7,7,0,0,0,14,0,5.5965,5.5965,0,0,0,1-.9912A4.9316,4.9316,0,0,0,28,24h2V22ZM16,28a5.0021,5.0021,0,0,1-4.9075-4.0854A5.2252,5.2252,0,0,0,12,24a4.9316,4.9316,0,0,0,4-1.9873A4.9316,4.9316,0,0,0,20,24a5.2252,5.2252,0,0,0,.9075-.0854A5.0021,5.0021,0,0,1,16,28Z"></path><path d="M20.07,7.8345A2.0116,2.0116,0,0,0,18.0771,6H17V2H15V6H13.9175a1.9949,1.9949,0,0,0-1.9859,1.7715L10.2805,19h2.021l.7346-5h5.9212l.7351,5h2.021ZM13.33,12l.5877-4,4.167.0625L18.6633,12Z"></path></svg>`;
export default svgResultCarbonIcon;
