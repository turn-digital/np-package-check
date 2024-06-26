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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23,10.4141l3-3-1.4141-1.4141-3.293,3.293c-.1875,.1875-.293,.4419-.293,.707v4h-7.0742l1.1436,16h8.8613l1.1436-16h-2.0742v-3.5859Zm-.9307,17.5859h-5.1387l-.8564-12h6.8516l-.8564,12Z"></path><path d="M16,7.0513v-3.0513c0-.5522-.4478-1-1-1h-6c-.5522,0-1,.4478-1,1v3.0513c-1.2771,1.1411-2,2.7358-2,4.4487V29c0,.5522,.4478,1,1,1h5v-2h-4V11.5c0-2.356,2-3.48,2-3.48v-3.02h4v3.02s2,1.124,2,3.48v.5h2v-.5c0-1.7129-.7229-3.3076-2-4.4487Z"></path></svg>`;
export default svgResultCarbonIcon;
