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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M11.4141,15l-8-8L2,8.4141,8.5859,15H2v1a14,14,0,0,0,28,0V15ZM16,28A12.0166,12.0166,0,0,1,4.0415,17h23.917A12.0166,12.0166,0,0,1,16,28Z"></path><path d="M22,8a5.0049,5.0049,0,0,0-1.5708.2554A8.0242,8.0242,0,0,0,14,5,7.9364,7.9364,0,0,0,9.0938,6.68L4.4141,2,3,3.4141,9.05,9.4648l.707-.7075A5.96,5.96,0,0,1,14,7a6.02,6.02,0,0,1,4.6875,2.2642,5.06,5.06,0,0,0-.59.61A2.9892,2.9892,0,0,1,15.7544,11H12v2h3.7544a4.98,4.98,0,0,0,3.9033-1.8745A3,3,0,0,1,25,13h2A5.0059,5.0059,0,0,0,22,8Z"></path></svg>`;
export default svgResultCarbonIcon;
