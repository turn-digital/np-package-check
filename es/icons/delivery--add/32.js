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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M12 6L8 6 8 2 6 2 6 6 2 6 2 8 6 8 6 12 8 12 8 8 12 8 12 6z"></path><path d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H15V8h6V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a3.9806,3.9806,0,0,0-7.7158,0H4V14H2V24a1,1,0,0,0,1,1H5.1421a3.9806,3.9806,0,0,0,7.7158,0h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0027,2.0027,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"></path></svg>`;
export default svgResultCarbonIcon;
