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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24 21H21a2 2 0 01-2-2V13a2 2 0 012-2h3a2 2 0 012 2v6A2 2 0 0124 21zm-3-8v6h3V13zM15 21H10V19h5V17H12a2 2 0 01-2-2V13a2 2 0 012-2h5v2H12v2h3a2 2 0 012 2v2A2 2 0 0115 21zM6 11H8V21H6z"></path><path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,24V8H28V24Z"></path></svg>`;
export default svgResultCarbonIcon;
