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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23.5,21H23V19h.5a4.4975,4.4975,0,0,0,.3564-8.981l-.8154-.0639-.0986-.812a6.9938,6.9938,0,0,0-13.8838,0l-.0991.812-.8155.0639A4.4975,4.4975,0,0,0,8.5,19H9v2H8.5A6.4973,6.4973,0,0,1,7.2,8.1362a8.9943,8.9943,0,0,1,17.6006,0A6.4974,6.4974,0,0,1,23.5,21Z"></path><circle cx="9" cy="27" r="1"></circle><path d="M26,23H17V15.83l2.59,2.58L21,17l-5-5-5,5,1.41,1.41L15,15.83V23H6a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2H26a2.0023,2.0023,0,0,0,2-2V25A2.0023,2.0023,0,0,0,26,23Zm0,6H6V25H26Z"></path></svg>`;
export default svgResultCarbonIcon;
