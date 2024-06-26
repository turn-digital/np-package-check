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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26 14c1.1028 0 2 .8972 2 2s-.8972 2-2 2-2-.8972-2-2 .8972-2 2-2m0-2c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7909-4-4-4h0zM15 11l-1.4143 1.4141 2.5859 2.5859H7.8157c-.4141-1.1611-1.5137-2-2.8157-2-1.6543 0-3 1.3457-3 3s1.3457 3 3 3c1.302 0 2.4016-.8389 2.8157-2h8.356l-2.5859 2.5859 1.4143 1.4141 5-5-5-5zm-10 6c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1z"></path></svg>`;
export default svgResultCarbonIcon;
