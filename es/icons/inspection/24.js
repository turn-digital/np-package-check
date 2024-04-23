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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15 17.18L12.41 14.59 11 16 15 20 22 13 20.59 11.59 15 17.18z"></path><path d="M30,15H27.9492A12.0071,12.0071,0,0,0,17,4.0508V2H15V4.0508A12.0071,12.0071,0,0,0,4.0508,15H2v2H4.0508A12.0071,12.0071,0,0,0,15,27.9492V30h2V27.9492A12.0071,12.0071,0,0,0,27.9492,17H30ZM17,25.9492V23H15v2.9492A10.0166,10.0166,0,0,1,6.0508,17H9V15H6.0508A10.0166,10.0166,0,0,1,15,6.0508V9h2V6.0508A10.0166,10.0166,0,0,1,25.9492,15H23v2h2.949A10.0165,10.0165,0,0,1,17,25.9492Z"></path></svg>`;
export default svgResultCarbonIcon;
