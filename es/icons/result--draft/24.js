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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.7 19.3l-3-3c-.4-.4-1-.4-1.4 0L16 25.6V30h4.4l9.3-9.3C30.1 20.3 30.1 19.7 29.7 19.3zM19.6 28H18v-1.6l5-5 1.6 1.6L19.6 28zM26 21.6L24.4 20l1.6-1.6 1.6 1.6L26 21.6zM10 23H12V25H10zM14 18H18V20H14zM10 18H12V20H10zM14 13H22V15H14zM10 13H12V15H10z"></path><path d="M7,28V7h3v3h12V7h3v6h2V7c0-1.1-0.9-2-2-2h-3V4c0-1.1-0.9-2-2-2h-8c-1.1,0-2,0.9-2,2v1H7C5.9,5,5,5.9,5,7v21	c0,1.1,0.9,2,2,2h5v-2H7z M12,4h8v4h-8V4z"></path></svg>`;
export default svgResultCarbonIcon;
