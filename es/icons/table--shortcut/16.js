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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M5 18L5 20 10.586 20 3 27.586 4.414 29 12 21.414 12 27 14 27 14 18 5 18z"></path><path d="M27,3H5A2,2,0,0,0,3,5V15H5V11H15v4h2V11H27v7H17v2H27v7H17v2H27a2,2,0,0,0,2-2V5A2,2,0,0,0,27,3Zm0,6H5V5H27Z"></path></svg>`;
export default svgResultCarbonIcon;
