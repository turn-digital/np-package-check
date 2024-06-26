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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17 30a1 1 0 01-.8944-1.4474l2-4.0005a1 1 0 111.7888.8947l-2 4A.9981.9981 0 0117 30zM8 30a1 1 0 01-.8944-1.4474l2-4.0005a1 1 0 111.7888.8947l-2 4A.9981.9981 0 018 30z"></path><path d="M30,15.5a6.5323,6.5323,0,0,0-5.1992-6.3638,8.9943,8.9943,0,0,0-17.6006,0A6.4905,6.4905,0,0,0,5.7026,21.3584L4.106,24.5527a1,1,0,1,0,1.7885.8946L7.6174,22l6.7644,0L13.106,24.5527a1,1,0,1,0,1.7885.8946L16.6177,22h6.7641L22.106,24.5527a1,1,0,1,0,1.7885.8946l1.9444-3.89A6.5058,6.5058,0,0,0,30,15.5ZM23.5,20H8.5a4.4975,4.4975,0,0,1-.356-8.981l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4975,4.4975,0,0,1,23.5,20Z"></path></svg>`;
export default svgResultCarbonIcon;
