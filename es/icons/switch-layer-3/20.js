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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22 4L22 6 24.586 6 19.586 11 21 12.414 26 7.414 26 10 28 10 28 4 22 4zM10 4L10 6 7.414 6 12.414 11 11 12.414 6 7.414 6 10 4 10 4 4 10 4zM20 5L16 1 12 5 13.414 6.414 15 4.829 15 11 17 11 17 4.829 18.586 6.414 20 5zM22 28L22 26 24.586 26 19.586 21 21 19.586 26 24.586 26 22 28 22 28 28 22 28zM10 28L10 26 7.414 26 12.414 21 11 19.586 6 24.586 6 22 4 22 4 28 10 28zM20 27L16 31 12 27 13.414 25.586 15 27.171 15 21 17 21 17 27.171 18.586 25.586 20 27zM5 12L1 16 5 20 6.414 18.586 4.829 17 11 17 11 15 4.829 15 6.414 13.414 5 12zM27 12L31 16 27 20 25.586 18.586 27.171 17 21 17 21 15 27.171 15 25.586 13.414 27 12z"></path></svg>`;
export default svgResultCarbonIcon;
