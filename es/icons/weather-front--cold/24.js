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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28.1655 2a13.0289 13.0289 0 00-12.542 9.5791l-1.1767 4.3154A11.0237 11.0237 0 013.8345 24H2v2H3.8345c.2975 0 .5918-.0171.8853-.0371l7.9291 2.9736A1 1 0 0014 28V21.0923a12.9311 12.9311 0 00.9121-1.313l6.3628-1.8179a1 1 0 00.5059-1.5864L17.7843 11.38a10.9268 10.9268 0 011.1516-2.3472l5.7477 1.916A1 1 0 0026 10V4.2251A10.8956 10.8956 0 0128.1655 4H30V2zM8.3354 25.1826A13.047 13.047 0 0012 23.0943v3.4624zm7.74-7.8154c.1107-.3105.2136-.625.3013-.9463l.732-2.6846L19.28 16.4512zM24 8.6123l-3.7411-1.247A11.0712 11.0712 0 0124 4.8306zM10 4L10 8.586 3.414 2 2 3.414 8.586 10 4 10 4 12 12 12 12 4 10 4z"></path></svg>`;
export default svgResultCarbonIcon;
