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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17,21H15a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h3v2H15v2h2a2,2,0,0,1,2,2v2A2,2,0,0,1,17,21Zm-2-4v2h2V17Z"></path></svg>`;
export default svgResultCarbonIcon;
