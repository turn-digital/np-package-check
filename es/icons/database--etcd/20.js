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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20.9443 20.9417v-6.6h-1.77V11.9966h.92c.8735 0 1.1494-.4138 1.1494-1.2417V8.7083h2.6445v3.2883h2.46V14.342h-2.46v7.3125h2.2764V24H24.0488A2.778 2.778 0 0120.9443 20.9417zM6.6846 24V7.95H17.2627v2.69H9.72v3.8862h6.669v2.6905H9.72V21.31h7.543V24z"></path></svg>`;
export default svgResultCarbonIcon;
