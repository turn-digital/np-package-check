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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,7a1.9919,1.9919,0,0,0-1.7227,1H22A6,6,0,0,0,10,8H5.7227a2,2,0,1,0,0,2H10v4H8a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V16a2,2,0,0,0-2-2H22V10h4.2773A1.9966,1.9966,0,1,0,28,7ZM12,8a4,4,0,0,1,8,0v6H12V10h5V8Zm12,8V28H8V16Z"></path></svg>`;
export default svgResultCarbonIcon;
