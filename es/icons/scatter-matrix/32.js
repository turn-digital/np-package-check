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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="9.5" cy="9.5" r="2.5"></circle><circle cx="9.5" cy="22.5" r="2.5"></circle><circle cx="22.5" cy="22.5" r="2.5"></circle><path d="M28,2H4A2.0023,2.0023,0,0,0,2,4V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2Zm0,13H17V4H28ZM15,4V15H4V4ZM4,17H15V28H4ZM17,28V17H28V28Z"></path></svg>`;
export default svgResultCarbonIcon;
