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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M31.8301 13.3662L30.8301 11.6338 28 13.2681 28 10 26 10 26 13.2676 23.1699 11.6338 22.1699 13.3662 25 15 22.1699 16.6338 23.1699 18.3662 26 16.7324 26 20 28 20 28 16.7319 30.8301 18.3662 31.8301 16.6338 29 15 31.8301 13.3662zM22 30h-2v-5c-.0033-2.7601-2.2399-4.9967-5-5h-6c-2.7601.0033-4.9967 2.2399-5 5v5h-2v-5c.0045-3.8641 3.1359-6.9955 7-7h6c3.8641.0045 6.9955 3.1359 7 7v5zM12 4c2.7614 0 5 2.2386 5 5s-2.2386 5-5 5-5-2.2386-5-5c.0031-2.7601 2.2399-4.9969 5-5m0-2c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"></path></svg>`;
export default svgResultCarbonIcon;
