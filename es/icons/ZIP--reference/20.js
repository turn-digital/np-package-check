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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM28 2H22V16h2V11h4a2 2 0 002-2V4A2 2 0 0028 2zm0 7H24V4h4zM12 4L15 4 15 14 12 14 12 16 20 16 20 14 17 14 17 4 20 4 20 2 12 2 12 4zM2 4L8 4 2 14 2 16 10 16 10 14 4 14 10 4 10 2 2 2 2 4z"></path></svg>`;
export default svgResultCarbonIcon;
