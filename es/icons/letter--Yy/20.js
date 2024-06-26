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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M15 9L13 9 11 16 9 9 7 9 10 18 10 23 12 23 12 18 12 18 15 9zM23 13l-2 7.52L19.08 13H17l3.15 9.87L19.53 25H17v2h2.26a2 2 0 001.91-1.42L25 13z"></path></svg>`;
export default svgResultCarbonIcon;
