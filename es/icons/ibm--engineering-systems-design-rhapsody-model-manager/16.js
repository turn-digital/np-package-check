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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M27 30h-8c-2.2061 0-4-1.7939-4-4 0-1.8887 1.3164-3.4766 3.0801-3.8936.4219-2.332 2.4678-4.1064 4.9199-4.1064s4.498 1.7744 4.9199 4.1064c1.7637.417 3.0801 2.0049 3.0801 3.8936 0 2.2061-1.7939 4-4 4zm-8-2h8c1.1025 0 2-.8975 2-2s-.8975-2-2-2h-1v-1c0-1.6543-1.3457-3-3-3s-3 1.3457-3 3v1h-1c-1.1025 0-2 .8975-2 2s.8975 2 2 2zM12 27h-2c-3.8599 0-7-3.1401-7-7v-2h2v2c0 2.7568 2.2432 5 5 5h2v2zM27 15v-4c0-3.8599-3.1401-7-7-7h-7v2h7c2.7568 0 5 2.2432 5 5v4h2zM10 8V4c0-1.1046-.8954-2-2-2H2v13h2v-5h1.48l2.34 5h2.18l-2.33-5h.33c1.1046 0 2-.8954 2-2zM4 4h4v4h-4V4z"></path></svg>`;
export default svgResultCarbonIcon;
