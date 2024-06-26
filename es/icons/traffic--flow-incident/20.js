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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 9.42L24.59 8 22.005 10.585 22 10.58 21.995 10.585 19.42 8.01 18 9.42 20.58 12 18 14.58 19.41 16 21.995 13.415 22 13.42 22.005 13.415 24.58 15.99 26 14.58 23.42 12 26 9.42zM14 17.42L12.59 16 10.005 18.585 10 18.58 9.995 18.585 7.42 16.01 6 17.42 8.58 20 6 22.58 7.41 24 9.995 21.415 10 21.42 10.005 21.415 12.58 23.99 14 22.58 11.42 20 14 17.42zM2 2H4V30H2zM28 2H30V30H28zM15 2H17V6H15zM15 10H17V14H15zM15 18H17V22H15zM15 26H17V30H15z"></path></svg>`;
export default svgResultCarbonIcon;
