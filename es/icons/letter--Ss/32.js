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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 23H17V21h5V19H19a2 2 0 01-2-2V15a2 2 0 012-2h5v2H19v2h3a2 2 0 012 2v2A2 2 0 0122 23zM13 23H7V21h6V17H9a2 2 0 01-2-2V11A2 2 0 019 9h6v2H9v4h4a2 2 0 012 2v4A2 2 0 0113 23z"></path></svg>`;
export default svgResultCarbonIcon;
