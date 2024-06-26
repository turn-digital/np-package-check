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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17 11H11a3 3 0 00-3 3v4h2V14a1 1 0 011-1h6a1 1 0 011 1v1h2V14A3 3 0 0017 11zM10 6a4 4 0 104-4A4 4 0 0010 6zm6 0a2 2 0 11-2-2A2 2 0 0116 6zM22 27H16a2.0021 2.0021 0 01-2-2V19a2.0021 2.0021 0 012-2h6a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0122 27zm-6-8v6h6V19zM8 30H4a2.0021 2.0021 0 01-2-2V4A2.0021 2.0021 0 014 2H8V4H4V28H8zM28 30H24V28h4V4H24V2h4a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0128 30z"></path></svg>`;
export default svgResultCarbonIcon;
