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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M11,11v6.4678a5.0216,5.0216,0,0,0,2.8613,4.52L16,23l2.1387-1.0127A5.0216,5.0216,0,0,0,21,17.4678V11Zm8,6.4678a3.012,3.012,0,0,1-1.7168,2.7109L16,20.7861l-1.2832-.6074A3.012,3.012,0,0,1,13,17.4678V13h6Z"></path><path d="M30.4141,17.4141a1.9995,1.9995,0,0,0,0-2.8282L24.6272,8.7993l2.9006-2.8628a2.0018,2.0018,0,1,0-1.4416-1.3872L23.2129,7.3848,17.4141,1.5859a1.9995,1.9995,0,0,0-2.8282,0L8.7993,7.3726,5.9368,4.4717A2.002,2.002,0,1,0,4.55,5.9136l2.835,2.8735L1.5859,14.5859a1.9995,1.9995,0,0,0,0,2.8282l5.7989,5.7988L4.55,26.0864a1.9977,1.9977,0,1,0,1.387,1.4419l2.8625-2.9009,5.7866,5.7867a1.9995,1.9995,0,0,0,2.8282,0l5.7988-5.7989,2.8733,2.8355a1.998,1.998,0,1,0,1.4416-1.3872l-2.9006-2.8628ZM16,29,3,16,16,3,29,16Z"></path></svg>`;
export default svgResultCarbonIcon;