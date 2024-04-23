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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M31.3579 22h-8.397v-2.3287l3.6545-3.1277c1.3259-1.1389 1.7849-1.8019 1.7849-2.8047v-.238c0-.9009-.7991-1.3599-1.564-1.3599-1.1218 0-1.6658.7649-1.9038 1.6658l-2.2268-.8499c.5271-1.6488 1.9038-3.0256 4.3687-3.0256 2.5667 0 4.0457 1.5128 4.0457 3.5696 0 2.0398-1.4619 3.2806-3.1619 4.6235l-2.2097 1.7339h5.6094v2.1417zM12.8291 9.4212h2.5159v5.1505h.085c.2549-.986 1.2407-1.6998 2.3967-1.6998 2.2607 0 3.4336 1.6318 3.4336 4.6575s-1.1729 4.6746-3.4336 4.6746c-1.156 0-2.1418-.731-2.3967-1.6998h-.085v1.4958h-2.5159V9.4212zm5.8135 8.8901v-1.5469c0-1.1218-.697-1.8528-1.6489-1.8528s-1.6487.4929-1.6487 1.3088v2.6348c0 .8159.6968 1.3088 1.6487 1.3088s1.6489-.731 1.6489-1.8528zM1.1163 10.1351H5.5867c3.1448 0 5.2185 1.9889 5.2185 5.9325s-2.0737 5.9324-5.2185 5.9324H1.1163V10.1351zm4.4704 9.5687c1.53 0 2.4819-.8329 2.4819-2.7197v-1.8358c0-1.8868-.9519-2.7197-2.4819-2.7197h-1.8867v7.2753h1.8867z"></path></svg>`;
export default svgResultCarbonIcon;
