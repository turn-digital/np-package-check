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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path fill="none" d="M20,19H18V17H14v2H12V17a2.0021,2.0021,0,0,1,2-2h4a2.0021,2.0021,0,0,1,2,2Zm-1-8a3,3,0,1,0-3,3A3.0033,3.0033,0,0,0,19,11Zm-2,0a1,1,0,1,1-1-1A1.0011,1.0011,0,0,1,17,11Z"></path><circle cx="16" cy="11" r="1"></circle><path d="M16,2A11.0134,11.0134,0,0,0,5,13a10.8885,10.8885,0,0,0,2.2163,6.6s.3.3945.3482.4517L16,30l8.439-9.9526c.0444-.0533.3447-.4478.3447-.4478l.0015-.0024A10.8846,10.8846,0,0,0,27,13,11.0134,11.0134,0,0,0,16,2Zm0,6a3,3,0,1,1-3,3A3.0033,3.0033,0,0,1,16,8Zm4,11H18V17H14v2H12V17a2.0023,2.0023,0,0,1,2-2h4a2.0023,2.0023,0,0,1,2,2Z"></path></svg>`;
export default svgResultCarbonIcon;
