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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="25" cy="7" r="2"></circle><path d="M12,23a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,12,23Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,12,19Z"></path><circle cx="12" cy="14" r="1"></circle><circle cx="17.909" cy="5.705" r="1"></circle><circle cx="9.787" cy="9.907" r="1"></circle><circle cx="12.495" cy="8.506" r="1"></circle><circle cx="15.201" cy="7.105" r="1"></circle><circle cx="4.696" cy="13.187" r="1"></circle><circle cx="2.133" cy="21.631" r="1"></circle><circle cx="3.079" cy="24.516" r="1"></circle><circle cx="4.848" cy="26.982" r="1"></circle><circle cx="7.272" cy="28.81" r="1"></circle><circle cx="2.098" cy="18.596" r="1"></circle><circle cx="2.979" cy="15.691" r="1"></circle><circle cx="7.081" cy="11.308" r="1"></circle><circle cx="20.616" cy="4.304" r="1"></circle><circle cx="23.323" cy="2.903" r="1"></circle><circle cx="28.988" cy="8.89" r="1"></circle><circle cx="27.587" cy="11.596" r="1"></circle><circle cx="26.186" cy="14.303" r="1"></circle><circle cx="24.784" cy="17.01" r="1"></circle><circle cx="23.383" cy="19.717" r="1"></circle><circle cx="21.982" cy="22.424" r="1"></circle><circle cx="18.637" cy="27.464" r="1"></circle><circle cx="16.092" cy="29.122" r="1"></circle><circle cx="13.166" cy="29.932" r="1"></circle><circle cx="10.133" cy="29.825" r="1"></circle><circle cx="20.572" cy="25.125" r="1"></circle><circle cx="28.893" cy="3.24" r="1"></circle><circle cx="26.188" cy="2.004" r="1"></circle><circle cx="12" cy="26" r="1"></circle><circle cx="6" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle><circle cx="6.804" cy="17" r="1"></circle><circle cx="17.196" cy="23" r="1"></circle><circle cx="9" cy="25.196" r="1"></circle><circle cx="15" cy="14.804" r="1"></circle><circle cx="9" cy="14.804" r="1"></circle><circle cx="15" cy="25.196" r="1"></circle><circle cx="6.804" cy="23" r="1"></circle><circle cx="17.196" cy="17" r="1"></circle><circle cx="30" cy="6.026" r="1"></circle></svg>`;
export default svgResultCarbonIcon;
