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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M10 15H22V17H10zM8.7 6.2852A2.9665 2.9665 0 009 5 3 3 0 106 8a2.96 2.96 0 001.2852-.3008L10 10.4141V13h2V9.5859zM6 6A1 1 0 117 5 1.0009 1.0009 0 016 6zM19 5a3 3 0 10-4 2.8154V13h2V7.8159A2.9957 2.9957 0 0019 5zM16 6a1 1 0 111-1A1.0009 1.0009 0 0116 6zM26 2a3.0033 3.0033 0 00-3 3 2.9665 2.9665 0 00.3 1.2852L20 9.5859V13h2V10.4141l2.7148-2.7149A2.96 2.96 0 0026 8a3 3 0 000-6zm0 4a1 1 0 111-1A1.0009 1.0009 0 0126 6zM12 19H10v2.5859L7.2854 24.3008A2.9609 2.9609 0 006 24a3 3 0 103 3 2.9665 2.9665 0 00-.3-1.2852L12 22.4141zM6 28a1 1 0 111-1A1.0009 1.0009 0 016 28zM17 24.1841V19H15v5.1841a3 3 0 102 0zM16 28a1 1 0 111-1A1.0009 1.0009 0 0116 28zM26 24a2.9609 2.9609 0 00-1.2854.3008L22 21.5859V19H20v3.4141l3.3 3.3007A2.9665 2.9665 0 0023 27a3 3 0 103-3zm0 4a1 1 0 111-1A1.0009 1.0009 0 0126 28z"></path></svg>`;
export default svgResultCarbonIcon;
