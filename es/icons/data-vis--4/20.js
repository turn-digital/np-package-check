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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27,3H5A2.002,2.002,0,0,0,3,5V27a2.0023,2.0023,0,0,0,2,2H27a2.0027,2.0027,0,0,0,2-2V5A2.0023,2.0023,0,0,0,27,3Zm0,6H17V5H27ZM15,27H11V23h4Zm0-6H11V17h4ZM9,21H5V17H9Zm2-6V11H21v4Zm0-6V5h4V9Zm12,2h4l0,4H23ZM9,5V15H5V5ZM5,23H9v4H5Zm12,4V17H27.001l.001,10Z"></path></svg>`;
export default svgResultCarbonIcon;
