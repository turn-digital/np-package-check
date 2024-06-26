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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30 23H24a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h6v2H24V21h6zM20 12a3.0033 3.0033 0 00-3-3H12V23h5a3.0033 3.0033 0 003-3V18a2.977 2.977 0 00-.78-2A2.9768 2.9768 0 0020 14zm-6-1h3a1.0013 1.0013 0 011 1v2a1.0013 1.0013 0 01-1 1H14zm4 9a1.0009 1.0009 0 01-1 1H14V17h3a1.0009 1.0009 0 011 1zM8 9H4a2.002 2.002 0 00-2 2V23H4V18H8v5h2V11A2.002 2.002 0 008 9zM4 16V11H8v5z"></path></svg>`;
export default svgResultCarbonIcon;
