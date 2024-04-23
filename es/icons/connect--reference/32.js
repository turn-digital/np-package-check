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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z"></path><path d="M23,16c-1.5696,0-3.0124,.5159-4.1813,1.3919l-4.2173-4.2174c.876-1.1689,1.3986-2.6048,1.3986-4.1745,0-3.8599-3.1406-7-7-7S2,5.1401,2,9s3.1406,7,7,7c1.5696,0,3.0184-.5355,4.1873-1.4114l4.2173,4.2174c-.8759,1.1689-1.4046,2.6243-1.4046,4.194,0,3.8599,3.1406,7,7,7s7-3.1401,7-7-3.1406-7-7-7ZM4,9c0-2.7568,2.2432-5,5-5s5,2.2432,5,5-2.2432,5-5,5-5-2.2432-5-5Z"></path></svg>`;
export default svgResultCarbonIcon;
