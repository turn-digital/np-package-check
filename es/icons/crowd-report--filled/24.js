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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M16.832,19.5547l-1.664-1.1094L17.4648,15H20V10H12v5h2v2H12a2.0021,2.0021,0,0,1-2-2V10a2.0021,2.0021,0,0,1,2-2h8a2.0021,2.0021,0,0,1,2,2v5a2.0021,2.0021,0,0,1-2,2H18.5352Z"></path><path d="M16,2A11.0134,11.0134,0,0,0,5,13a10.8885,10.8885,0,0,0,2.2163,6.6s.3.3945.3482.4517L16,30l8.439-9.9526c.0444-.0533.3447-.4478.3447-.4478l.0015-.0024A10.8846,10.8846,0,0,0,27,13,11.0134,11.0134,0,0,0,16,2Zm6,13a2.0023,2.0023,0,0,1-2,2H18.5352L16.832,19.5547l-1.664-1.1094L17.4648,15H20V10H12v5h2v2H12a2.0023,2.0023,0,0,1-2-2V10a2.0023,2.0023,0,0,1,2-2h8a2.0023,2.0023,0,0,1,2,2Z"></path></svg>`;
export default svgResultCarbonIcon;
