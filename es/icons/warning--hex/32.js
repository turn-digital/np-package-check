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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 21a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 21zM15 8H17V18H15z"></path><path d="M23,29H9a1,1,0,0,1-.8638-.4961l-7-12a1,1,0,0,1,0-1.0078l7-12A1,1,0,0,1,9,3H23a1,1,0,0,1,.8638.4961l7,12a1,1,0,0,1,0,1.0078l-7,12A1,1,0,0,1,23,29ZM9.5742,27H22.4258l6.4165-11L22.4258,5H9.5742L3.1577,16Z"></path></svg>`;
export default svgResultCarbonIcon;
