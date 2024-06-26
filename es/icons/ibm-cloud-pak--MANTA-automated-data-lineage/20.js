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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,11V5H24V7H14V4a2.0025,2.0025,0,0,0-2-2H4A2.0025,2.0025,0,0,0,2,4v8a2.0025,2.0025,0,0,0,2,2h8a2.0025,2.0025,0,0,0,2-2V9a3.0033,3.0033,0,0,1,3,3v9H11V19H5v6h6V23h6v2a2.0025,2.0025,0,0,0,2,2h5v2h6V23H24v2H19V18h5v2h6V14H24v2H19V12a4.9521,4.9521,0,0,0-1.0254-3H24v2ZM4,12V4h8v8ZM9,23H7V21H9Zm17,2h2v2H26Zm0-9h2v2H26Zm0-9h2V9H26Z"></path></svg>`;
export default svgResultCarbonIcon;
