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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="16" cy="14" r="2"></circle><path d="M29.8682,10.5039l-4-7a.9992.9992,0,0,0-1.3828-.3613L19.7231,6H12.2769L7.5146,3.1426a.9992.9992,0,0,0-1.3828.3613l-4,7a1,1,0,0,0,.3536,1.3535l4.7758,2.8657L11,21.2656V27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V21.2656l3.7388-6.5425,4.7758-2.8657A1,1,0,0,0,29.8682,10.5039ZM18.8484,21H13.1516L8.5757,12.9922,11.4287,8h9.1426l2.853,4.9922Z"></path></svg>`;
export default svgResultCarbonIcon;
