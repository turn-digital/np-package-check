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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30.3335 30H26V28h4V26H28a2.002 2.002 0 01-2-2V21.6665A1.6684 1.6684 0 0127.6665 20H32v2H28v2h2a2.002 2.002 0 012 2v2.3335A1.6684 1.6684 0 0130.3335 30zM22.3335 20h-2.667A1.6665 1.6665 0 0018 21.6665V30h2V26h2v4h2V21.6665A1.6665 1.6665 0 0022.3335 20zM20 24V22h2v2zM12.5 24L11 20 9 20 9 30 11 30 11 23 12.5 27 14 23 14 30 16 30 16 20 14 20 12.5 24zM1 22v6.5A1.4727 1.4727 0 002.5 30H7V28H3V22H7V20H3A2.0059 2.0059 0 001 22zM13 8L11 8 11 11 8 11 8 13 11 13 11 16 13 16 13 13 16 13 16 11 13 11 13 8z"></path><path d="M6,6H26V18h2V6a2.0059,2.0059,0,0,0-2-2H6A2.0059,2.0059,0,0,0,4,6V18H6Z"></path></svg>`;
export default svgResultCarbonIcon;
