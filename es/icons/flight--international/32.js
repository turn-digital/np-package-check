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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,28a5.3257,5.3257,0,0,1-.6714-.044A21.7855,21.7855,0,0,1,12.0332,17H29.95c.0236-.3315.05-.6626.05-1A14,14,0,1,0,16,30ZM27.9492,15H21.9631A24.3247,24.3247,0,0,0,19.21,4.4492,12.0123,12.0123,0,0,1,27.9492,15ZM16.6714,4.0439A21.7855,21.7855,0,0,1,19.9668,15H12.0332A21.7855,21.7855,0,0,1,15.3286,4.0439,5.159,5.159,0,0,1,16.6714,4.0439ZM12.79,4.4492A24.3275,24.3275,0,0,0,10.0369,15H4.0508A12.0126,12.0126,0,0,1,12.79,4.4492ZM4.0508,17h5.9861A24.3275,24.3275,0,0,0,12.79,27.5508,12.0126,12.0126,0,0,1,4.0508,17Z"></path><path fill-rule="evenodd" d="M25,25l5,2V25l-5-2.5V20a1,1,0,0,0-2,0v2.5L18,25v2l5-2v3.5L21,30v1l3-1,3,1V30l-2-1.5Z"></path></svg>`;
export default svgResultCarbonIcon;
