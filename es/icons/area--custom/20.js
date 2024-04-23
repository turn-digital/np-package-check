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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,6a3.9916,3.9916,0,0,0-7.9773-.2241L9.5864,8.2627A3.99,3.99,0,1,0,5,13.8579v8.2842A3.9915,3.9915,0,1,0,9.8579,27h8.2842a3.9912,3.9912,0,1,0,5.595-4.5864l2.487-12.4361A3.9945,3.9945,0,0,0,30,6ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM4,10a2,2,0,1,1,2,2A2.0023,2.0023,0,0,1,4,10ZM6,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,28Zm12.1421-3H9.8579A3.9942,3.9942,0,0,0,7,22.1421V13.8579a3.9871,3.9871,0,0,0,2.9773-3.6338L22.4136,7.7373a4.0053,4.0053,0,0,0,1.8493,1.8491l-2.487,12.4361A3.9874,3.9874,0,0,0,18.1421,25ZM22,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,22,28Z"></path></svg>`;
export default svgResultCarbonIcon;
