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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M21 13H24V19H21z"></path><path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM8,21H6V11H8Zm9-8H12v2h3a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2H10V19h5V17H12a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5Zm9,6a2,2,0,0,1-2,2H21a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"></path></svg>`;
export default svgResultCarbonIcon;
