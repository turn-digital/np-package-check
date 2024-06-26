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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20 18h-6c-1.6569 0-3 1.3431-3 3v2h2v-2c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1v2h2v-2c0-1.6569-1.3431-3-3-3zM17 17c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4-4 1.7909-4 4 1.7909 4 4 4zm0-6c1.1046 0 2 .8954 2 2s-.8954 2-2 2-2-.8954-2-2 .8954-2 2-2z"></path><path d="M17 30c-7.7197 0-14-6.2804-14-14h2c0 6.6168 5.3831 12 12 12 5.2263 0 9.8162-3.3385 11.4214-8.3074l1.9033.6147c-1.873 5.7975-7.2278 9.6926-13.3247 9.6926zM31 16h-2c0-6.6168-5.3833-12-12-12V2c7.7197 0 14 6.2804 14 14zM6 14l-2.1387-1.0127c-1.7383-.8223-2.8613-2.5967-2.8613-4.5195V2H11v6.4678c0 1.9229-1.123 3.6973-2.8613 4.5195l-2.1387 1.0127zM3 4v4.4678c0 1.1533.6738 2.2178 1.7168 2.7109l1.2832.6074 1.2832-.6074c1.043-.4932 1.7168-1.5576 1.7168-2.7109V4H3z"></path></svg>`;
export default svgResultCarbonIcon;
