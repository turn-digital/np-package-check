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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 6L8 6 8 2 6 2 6 6 2 6 2 8 6 8 6 12 8 12 8 8 12 8 12 6zM16 6H20V8H16zM24 6V8h4v4h2V8a2 2 0 00-2-2zM6 16H8V20H6zM8 28V24H6v4a2 2 0 002 2h4V28zM28 16H30V20H28zM16 28H20V30H16zM28 24v4H24v2h4a2 2 0 002-2V24z"></path></svg>`;
export default svgResultCarbonIcon;
