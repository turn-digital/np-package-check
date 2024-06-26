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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M12 24H21V26H12zM13 28H19V30H13z"></path><path d="M8.7832 18.9746l1.4177-1.418A6.9206 6.9206 0 018 12 7.99 7.99 0 0121.5273 6.2305l1.4136-1.4136A9.9884 9.9884 0 006 12 8.9411 8.9411 0 008.7832 18.9746zM30 3.4141L28.5859 2 2 28.5859 3.4141 30 23.6606 9.7534A7.7069 7.7069 0 0124 12a7.2032 7.2032 0 01-2.8223 6.1426C20.1069 19.1348 19 20.1611 19 22h2c0-.9194.5264-1.45 1.5352-2.3857A9.193 9.193 0 0026 12a9.8739 9.8739 0 00-.7764-3.81z"></path></svg>`;
export default svgResultCarbonIcon;
