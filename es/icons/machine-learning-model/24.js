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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M27 24a2.9609 2.9609 0 00-1.2854.3008L21.4141 20H18v2h2.5859l3.7146 3.7148A2.9665 2.9665 0 0024 27a3 3 0 103-3zm0 4a1 1 0 111-1A1.0009 1.0009 0 0127 28zM27 13a2.9948 2.9948 0 00-2.8157 2H18v2h6.1843A2.9947 2.9947 0 1027 13zm0 4a1 1 0 111-1A1.0009 1.0009 0 0127 17zM27 2a3.0033 3.0033 0 00-3 3 2.9657 2.9657 0 00.3481 1.373L20.5957 10H18v2h3.4043l4.3989-4.2524A2.9987 2.9987 0 1027 2zm0 4a1 1 0 111-1A1.0009 1.0009 0 0127 6z"></path><path d="M18,6h2V4H18a3.9756,3.9756,0,0,0-3,1.3823A3.9756,3.9756,0,0,0,12,4H11a9.01,9.01,0,0,0-9,9v6a9.01,9.01,0,0,0,9,9h1a3.9756,3.9756,0,0,0,3-1.3823A3.9756,3.9756,0,0,0,18,28h2V26H18a2.0023,2.0023,0,0,1-2-2V8A2.0023,2.0023,0,0,1,18,6ZM12,26H11a7.0047,7.0047,0,0,1-6.92-6H6V18H4V14H7a3.0033,3.0033,0,0,0,3-3V9H8v2a1.0009,1.0009,0,0,1-1,1H4.08A7.0047,7.0047,0,0,1,11,6h1a2.0023,2.0023,0,0,1,2,2v4H12v2h2v4H12a3.0033,3.0033,0,0,0-3,3v2h2V21a1.0009,1.0009,0,0,1,1-1h2v4A2.0023,2.0023,0,0,1,12,26Z"></path></svg>`;
export default svgResultCarbonIcon;
