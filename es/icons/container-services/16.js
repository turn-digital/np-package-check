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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27,22V17a2.0023,2.0023,0,0,0-2-2H17V10h3a2.0023,2.0023,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H12a2.0023,2.0023,0,0,0-2,2V8a2.0023,2.0023,0,0,0,2,2h3v5H7a2.0023,2.0023,0,0,0-2,2v5H2v8h8V22H7V17h8v5H12v8h8V22H17V17h8v5H22v8h8V22ZM12,4h8V8H12ZM8,28H4V24H8Zm10,0H14V24h4Zm10,0H24V24h4Z"></path></svg>`;
export default svgResultCarbonIcon;
