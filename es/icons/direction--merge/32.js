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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M17.8784,15.4648A2.9821,2.9821,0,0,1,17,13.3433V7.8281l4.5859,4.586L23,11,16,4,9,11l1.4141,1.4141L15,7.8281v5.5152a2.9805,2.9805,0,0,1-.8784,2.1211l-2.6572,2.6567A4.9682,4.9682,0,0,0,10,21.6567V28h2V21.6567a2.9805,2.9805,0,0,1,.8784-2.1211l2.6572-2.6567A5.0021,5.0021,0,0,0,16,16.3135a5.0021,5.0021,0,0,0,.4644.5654l2.6572,2.6563A2.9821,2.9821,0,0,1,20,21.6567V28h2V21.6567a4.9682,4.9682,0,0,0-1.4644-3.5356Z"></path></svg>`;
export default svgResultCarbonIcon;
