/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28.8281 7.1338a4.0941 4.0941 0 00-5.6562 0L.3433 29.9619H9.5889a4.9682 4.9682 0 003.5356-1.4648L28.8281 12.79a3.9984 3.9984 0 000-5.6562zM12.2928 20.8406l2.086-2.0858 2.8293 2.8293L15.1224 23.67zM11.71 27.083a2.9824 2.9824 0 01-2.1215.8789H5.1714l5.7073-5.7072 2.83 2.83zM27.4141 11.376L18.6221 20.17l-2.8293-2.8292 8.7931-8.7928a2.0471 2.0471 0 012.8282 0 1.9993 1.9993 0 010 2.8281zM11 2H7a4.9843 4.9843 0 00-3.8633 8.1528A2.9586 2.9586 0 003 11a2.9945 2.9945 0 002 2.8154V14a2.0025 2.0025 0 01-2 2H2v2H3a4.0045 4.0045 0 004-4v-.1841A2.9959 2.9959 0 008.8157 12H11A5 5 0 0011 2zM6 12a1 1 0 111-1A1.0009 1.0009 0 016 12zm5-2H8.8157A2.974 2.974 0 004.394 8.4746 2.9908 2.9908 0 017 4h4a3 3 0 010 6z"></path></svg>`;
export default svgResultCarbonIcon;
