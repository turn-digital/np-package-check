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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M18,9H14a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2h4v3H13v2h5a2,2,0,0,0,2-2V11A2,2,0,0,0,18,9Zm0,7H14V11h4Z"></path></svg>`;
export default svgResultCarbonIcon;
