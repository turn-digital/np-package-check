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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M6.76 6l.45.89L7.76 8H12v5H4V6H6.76m.62-2H3A1 1 0 002 5v9a1 1 0 001 1H13a1 1 0 001-1V7a1 1 0 00-1-1H9L8.28 4.55A1 1 0 007.38 4zM22.76 6l.45.89L23.76 8H28v5H20V6h2.76m.62-2H19a1 1 0 00-1 1v9a1 1 0 001 1H29a1 1 0 001-1V7a1 1 0 00-1-1H25l-.72-1.45a1 1 0 00-.9-.55zM6.76 19l.45.89L7.76 21H12v5H4V19H6.76m.62-2H3a1 1 0 00-1 1v9a1 1 0 001 1H13a1 1 0 001-1V20a1 1 0 00-1-1H9l-.72-1.45a1 1 0 00-.9-.55zM22.76 19l.45.89L23.76 21H28v5H20V19h2.76m.62-2H19a1 1 0 00-1 1v9a1 1 0 001 1H29a1 1 0 001-1V20a1 1 0 00-1-1H25l-.72-1.45a1 1 0 00-.9-.55z"></path></svg>`;
export default svgResultCarbonIcon;
