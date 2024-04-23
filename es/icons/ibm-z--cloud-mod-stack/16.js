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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M18.496,27.386L16,28.842L5,22.426v-5.852l10.016-5.843C15.308,10.897,15.641,11,16,11c1.104,0,2-0.896,2-2s-0.896-2-2-2	s-2,0.896-2,2c0,0.003,0.001,0.005,0.001,0.008L3.496,15.136C3.189,15.315,3,15.645,3,16v7c0,0.355,0.189,0.685,0.496,0.864l12,7	C15.652,30.955,15.826,31,16,31s0.348-0.045,0.504-0.136l3-1.75L18.496,27.386z"></path><path d="M28.504,8.136l-3-1.75l-1.008,1.728L27,9.574v12.852l-4.593,2.679l-10.409-6.093C11.999,19.007,12,19.004,12,19	c0-1.104-0.896-2-2-2s-2,0.896-2,2s0.896,2,2,2c0.358,0,0.69-0.102,0.981-0.267l10.92,6.393c0.156,0.091,0.331,0.137,0.505,0.137	c0.174,0,0.348-0.045,0.504-0.136l5.594-3.263C28.811,23.685,29,23.355,29,23V9C29,8.645,28.811,8.315,28.504,8.136z"></path><path d="M23,17.277V5.5c0-0.355-0.189-0.685-0.496-0.864l-6-3.5C16.348,1.045,16.174,1,16,1s-0.348,0.045-0.504,0.136l-12,7	C3.189,8.315,3,8.645,3,9v2.999h2V9.574l11-6.417l5,2.917v11.203c-0.595,0.347-1,0.984-1,1.723c0,1.104,0.896,2,2,2s2-0.896,2-2	C24,18.262,23.595,17.624,23,17.277z"></path></svg>`;
export default svgResultCarbonIcon;