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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23.499,9.085,16.707,2.293A1,1,0,0,0,16,2H6A2.0058,2.0058,0,0,0,4,4V28a2.0058,2.0058,0,0,0,2,2h8V28H6V4h8v6a2.0023,2.0023,0,0,0,2,2h6.292a1.7075,1.7075,0,0,0,1.207-2.915ZM16,10V4.4141L21.5854,10Z"></path><path d="M28,21H22V18a2,2,0,0,1,4,0h2a4,4,0,0,0-8,0v3a2.0025,2.0025,0,0,0-2,2v5a2.0025,2.0025,0,0,0,2,2h8a2.0025,2.0025,0,0,0,2-2V23A2.0025,2.0025,0,0,0,28,21Zm-8,7V23h8v5Z"></path></svg>`;
export default svgResultCarbonIcon;
