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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 23H24a2 2 0 01-2-2V11a2 2 0 012-2h6v2H24V21h4V17H26V15h4zM18 19L14.32 9 12 9 12 23 14 23 14 13 17.68 23 20 23 20 9 18 9 18 19zM4 23H2V9H8a2 2 0 012 2v5a2 2 0 01-2 2H4zm0-7H8V11H4z"></path></svg>`;
export default svgResultCarbonIcon;
