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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M32 21H26V17a2.002 2.002 0 012-2h2V13H26V11h4a2.0023 2.0023 0 012 2v2a2.0023 2.0023 0 01-2 2H28v2h4zM24 21H20a2.0023 2.0023 0 01-2-2V13a2.002 2.002 0 012-2h4v2H20v6h2V17H21l0-2h3zM14 11H9V21h2V18h3a2.0027 2.0027 0 002-2V13A2.0023 2.0023 0 0014 11zm-3 5V13h3l.001 3zM7 11L5 11 3.5 15 2 11 0 11 0 21 2 21 2 14 3.5 18 5 14 5 21 7 21 7 11z"></path></svg>`;
export default svgResultCarbonIcon;
