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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 9H24a2.002 2.002 0 00-2 2V23h2V18h4v5h2V11A2.0023 2.0023 0 0028 9zm-4 7V11h4v5zM16 23H12V9h4a4.0042 4.0042 0 014 4v6A4.0039 4.0039 0 0116 23zm-2-2h2a2.0027 2.0027 0 002-2V13a2.0023 2.0023 0 00-2-2H14zM10 23H4a2.0023 2.0023 0 01-2-2V11A2.002 2.002 0 014 9h6v2H4V21h6z"></path></svg>`;
export default svgResultCarbonIcon;
