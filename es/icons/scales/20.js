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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20,16a5,5,0,0,0,10,0,1,1,0,0,0-.1055-.4473L25.896,7.5562a.8913.8913,0,0,0-.0454-.0816A1,1,0,0,0,25,7H18.8218A3.0155,3.0155,0,0,0,17,5.1841V2H15V5.1841A3.0155,3.0155,0,0,0,13.1782,7H7a1,1,0,0,0-.8945.5527l-4,8A1,1,0,0,0,2,16a5,5,0,0,0,10,0,1,1,0,0,0-.1055-.4473L8.6182,9h4.56A3.0147,3.0147,0,0,0,15,10.8154V28H6v2H26V28H17V10.8159A3.0155,3.0155,0,0,0,18.8218,9h4.56l-3.2763,6.5527A1,1,0,0,0,20,16ZM7,19a2.9958,2.9958,0,0,1-2.8152-2h5.63A2.9956,2.9956,0,0,1,7,19Zm2.3821-4H4.6179L7,10.2363ZM16,9a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,16,9Zm9,10a2.9958,2.9958,0,0,1-2.8152-2h5.63A2.9956,2.9956,0,0,1,25,19Zm0-8.7637L27.3821,15H22.6179Z"></path></svg>`;
export default svgResultCarbonIcon;
