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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20 24H16v2h4v3h8V21H20zm2-1h4v4H22zM4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM24 5a3.9962 3.9962 0 00-3.8579 3H14v2h6.1421a3.94 3.94 0 00.4248 1.019L14 17.5862 15.4138 19l6.5672-6.5669A3.9521 3.9521 0 0024 13a4 4 0 000-8zm0 6a2 2 0 112-2A2.0023 2.0023 0 0124 11zM9.6929 12.7505a5 5 0 01-.0005-7.5L11.0166 6.75a3 3 0 00-.0005 4.501z"></path><path d="M7.0474,15.751a9,9,0,0,1,0-13.501l1.3232,1.5a7,7,0,0,0,0,10.501Z"></path></svg>`;
export default svgResultCarbonIcon;
