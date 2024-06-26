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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22.5,26A3.5,3.5,0,1,1,26,22.5,3.5041,3.5041,0,0,1,22.5,26Zm0-5A1.5,1.5,0,1,0,24,22.5,1.5017,1.5017,0,0,0,22.5,21Z"></path><path d="M22.5,31A8.5,8.5,0,1,1,31,22.5,8.51,8.51,0,0,1,22.5,31Zm0-15A6.5,6.5,0,1,0,29,22.5,6.5074,6.5074,0,0,0,22.5,16Z"></path><path d="M25,5H22V4a2.0058,2.0058,0,0,0-2-2H12a2.0058,2.0058,0,0,0-2,2V5H7A2.0058,2.0058,0,0,0,5,7V28a2.0058,2.0058,0,0,0,2,2h5V28H7V7h3v3H22V7h3v5h2V7A2.0058,2.0058,0,0,0,25,5ZM20,8H12V4h8Z"></path></svg>`;
export default svgResultCarbonIcon;
