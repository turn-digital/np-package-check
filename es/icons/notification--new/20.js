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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,16.5859V14H24v3a1,1,0,0,0,.293.707L27,20.4141V22H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13A7.9854,7.9854,0,0,1,20,6.0825V3.8467a9.896,9.896,0,0,0-3-.7959V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.293,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v1a5,5,0,0,0,10,0V24h7a1,1,0,0,0,1-1V20a1,1,0,0,0-.293-.707ZM19,25a3,3,0,0,1-6,0V24h6Z"></path><circle cx="26" cy="8" r="4"></circle></svg>`;
export default svgResultCarbonIcon;
