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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M17.84 24V11.9966H20.783v2h.1149a3.3115 3.3115 0 013.3572-2.2764c2.46 0 3.84 1.7017 3.84 4.6909V24H25.1519V16.7107c0-1.7017-.5748-2.5754-1.9776-2.5754-1.2187 0-2.3913.6438-2.3913 1.9314V24zM4.2236 24V7.95H14.8015v2.69H7.259v3.8862h6.6687v2.6905H7.259V21.31h7.5425V24z"></path></svg>`;
export default svgResultCarbonIcon;
