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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM21 4L24 4 24 16 26 16 26 4 29 4 29 2 21 2 21 4zM20 2L18 2 16 8 14 2 12 2 14.752 9 12 16 14 16 16 10 18 16 20 16 17.245 9 20 2zM3 4L6 4 6 16 8 16 8 4 11 4 11 2 3 2 3 4z"></path></svg>`;
export default svgResultCarbonIcon;
