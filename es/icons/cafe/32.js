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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M2 28H30V30H2zM24.5 11H8a2.002 2.002 0 00-2 2v8a5.0059 5.0059 0 005 5h8a5.0059 5.0059 0 005-5V20h.5a4.5 4.5 0 000-9zM22 21a3.0033 3.0033 0 01-3 3H11a3.0033 3.0033 0 01-3-3V13H22zm2.5-3H24V13h.5a2.5 2.5 0 010 5zM19 9H17V8.854a1.9883 1.9883 0 00-1.1055-1.7886L13.2109 5.7236A3.9788 3.9788 0 0111 2.146V1h2V2.146a1.9892 1.9892 0 001.1055 1.7886l2.6836 1.3418A3.9792 3.9792 0 0119 8.854z"></path></svg>`;
export default svgResultCarbonIcon;
