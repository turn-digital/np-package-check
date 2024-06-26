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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23 22L21 22 21 20 19 20 19 22 17 22 17 20 15 20 15 22 13 22 13 20 11 20 11 22 9 22 9 24 11 24 11 26 13 26 13 24 15 24 15 26 17 26 17 24 19 24 19 26 21 26 21 24 23 24 23 22z"></path><path d="M28,11H27V4a2.0025,2.0025,0,0,0-2-2H7A2.0025,2.0025,0,0,0,5,4v7H4a2.0025,2.0025,0,0,0-2,2v4a2.0025,2.0025,0,0,0,2,2H5v4a7.0078,7.0078,0,0,0,7,7h8a7.0078,7.0078,0,0,0,7-7V19h1a2.0025,2.0025,0,0,0,2-2V13A2.0025,2.0025,0,0,0,28,11ZM25,4V7.3818L22.4473,6.1055a1.0008,1.0008,0,0,0-.8946,0L18,7.8818,14.4473,6.1055a1.0008,1.0008,0,0,0-.8946,0L10,7.8818l-3-1.5V4Zm3,13H25v6a5.0057,5.0057,0,0,1-5,5H12a5.0057,5.0057,0,0,1-5-5V17H4V13H7V8.6182L9.5527,9.8945a1.0008,1.0008,0,0,0,.8946,0L14,8.1182l3.5527,1.7763a1.001,1.001,0,0,0,.8946,0L22,8.1182l3,1.5V13h3Z"></path><path d="M9 14H14V16H9zM18 14H23V16H18z"></path></svg>`;
export default svgResultCarbonIcon;
