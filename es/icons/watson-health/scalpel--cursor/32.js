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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28.8281 7.1338a4.0941 4.0941 0 00-5.6562 0L.3433 29.9619H9.5889a4.9682 4.9682 0 003.5356-1.4648L28.8281 12.79a3.9984 3.9984 0 000-5.6562zM12.2928 20.8406l2.086-2.0858 2.8293 2.8293L15.1224 23.67zM11.71 27.083a2.9824 2.9824 0 01-2.1215.8789H5.1714l5.7073-5.7072 2.83 2.83zM27.4141 11.376L18.6221 20.17l-2.8293-2.8292 8.7931-8.7928a2.0471 2.0471 0 012.8282 0 1.9993 1.9993 0 010 2.8281zM13 4L4 4 4 13 6 13 6 6 13 6 13 4z"></path></svg>`;
export default svgResultCarbonIcon;
