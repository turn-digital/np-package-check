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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26.5 12H19a4 4 0 010-8h.0835A4.7864 4.7864 0 0123 2a4.9816 4.9816 0 014.6543 3.2034A3.4667 3.4667 0 0130 8.5 3.5041 3.5041 0 0126.5 12zM19 6a2 2 0 000 4h7.5A1.5017 1.5017 0 0028 8.5a1.4855 1.4855 0 00-1.2778-1.4739L26.061 6.927l-.1616-.6487a2.9568 2.9568 0 00-5.4873-.7121L20.1143 6zM23 14l-5 5 1.4141 1.4141L22 17.8325V24H16v2h6a2.0025 2.0025 0 002-2V17.8325l2.5874 2.583L28 19zM2 20H12V22H2zM2 24H12V26H2zM2 28H12V30H2z"></path></svg>`;
export default svgResultCarbonIcon;
