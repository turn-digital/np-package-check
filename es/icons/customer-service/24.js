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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 30h-2v-5c-.0033-2.7601-2.2399-4.9967-5-5h-6c-2.7601.0033-4.9967 2.2399-5 5v5h-2v-5c.0045-3.8641 3.1359-6.9955 7-7h6c3.8641.0045 6.9955 3.1359 7 7v5zM22 6v4c0 1.1025-.8972 2-2 2h-1c-.5522 0-1 .4478-1 1s.4478 1 1 1h1c2.2056 0 4-1.7944 4-4v-4h-2zM16 16c-3.8599 0-7-3.1401-7-7S12.1401 2 16 2c1.9885 0 3.8901.8503 5.2173 2.3329l-1.4902 1.334c-.9482-1.0593-2.3066-1.6669-3.7271-1.6669-2.7571 0-5 2.243-5 5s2.2429 5 5 5v2z"></path></svg>`;
export default svgResultCarbonIcon;
