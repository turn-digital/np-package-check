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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M15.1249,19h1.75v5.5h-1.75ZM17,27a1,1,0,1,0-1,1A1,1,0,0,0,17,27Z"></path><path d="M24.9084,28.94,16.8318,14.4878a.9531.9531,0,0,0-1.6636,0L7.0916,28.94A.7122.7122,0,0,0,7.7134,30H24.2867A.7121.7121,0,0,0,24.9084,28.94ZM15.125,19h1.75v5.5h-1.75ZM16,28a1,1,0,1,1,1-1A1,1,0,0,1,16,28Z"></path><path d="M24.8008,9.1362a8.9943,8.9943,0,0,0-17.6006,0,6.4926,6.4926,0,0,0,.9153,12.8443L9.2217,20H8.5a4.48,4.48,0,0,1-3.3693-7.4556l5.297,5.2964,1.013-1.8135-4.66-4.6606A4.402,4.402,0,0,1,8.144,11.019l.8155-.0639.0991-.812c.0237-.1944.0581-.3848.0972-.5733l3.78,3.7808,1.0138-1.815L9.936,7.522a7.0212,7.0212,0,0,1,1.9754-2.1968L25.8861,19.3A4.4594,4.4594,0,0,1,23.5,20h-.7239l1.107,1.98a6.4927,6.4927,0,0,0,.9177-12.8443Zm2.4994,8.75L13.7823,4.3682a6.9736,6.9736,0,0,1,9.16,5.7749l.0986.812.8154.0639A4.5171,4.5171,0,0,1,28,15.5,4.46,4.46,0,0,1,27.3,17.8862Z"></path></svg>`;
export default svgResultCarbonIcon;
