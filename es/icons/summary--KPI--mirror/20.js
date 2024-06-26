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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24.3 27.5l5.7-5.1L28.7 21 23 26l-7.7-7.4c-.7-.7-1.9-.7-2.7 0L9 22l-5.6-6L2 17.4l5.6 6c.8.8 2 .8 2.8.1L14 20l7.7 7.4C22.4 28.2 23.6 28.2 24.3 27.5zM28 12L28 4 26 4 26 5 24 5 24 7 26 7 26 12 24 12 24 14 30 14 30 12zM22 14h-6v-4c0-1.1.9-2 2-2h2V6h-4V4h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2v2h4V14zM12 4H8v2h4v2H9v2h3v2H8v2h4c1.1 0 2-.9 2-2V6C14 4.9 13.1 4 12 4zM6 11L2 11 4 8z"></path></svg>`;
export default svgResultCarbonIcon;
