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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m28,2v5.7222l-7.5317,6.9521L12.3818,6.5879c-.3918-.3911-.9111-.5918-1.4302-.5879-.4644.0034-.9285.1714-1.301.4976l-5.6506,4.9443V2h-2v26c0,1.1025.8972,2,2,2h24c1.1028,0,2-.8975,2-2V2h-2Zm0,8.4438v11.7622l-6.1165-6.1162,6.1165-5.646Zm-17.0322-2.4414l8.0298,8.0298-3.2141,2.9668-3.4148-3.415c-.3711-.3706-.8564-.5674-1.3479-.584s-.9885.1475-1.3833.4932l-5.6375,4.9326v-6.3262l6.9678-6.0972Zm-6.9678,19.9976v-4.9165l6.9546-6.085,3.4146,3.4146c.3809.3809.8755.5771,1.374.5869s1.0007-.166,1.3967-.5312l3.2729-3.0215,7.5872,7.5869v2.9658H4Z"></path></svg>`;
export default svgResultCarbonIcon;
