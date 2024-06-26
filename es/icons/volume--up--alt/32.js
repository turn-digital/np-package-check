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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M32 15L28 15 28 11 26 11 26 15 22 15 22 17 26 17 26 21 28 21 28 17 32 17 32 15zM18 30a.997.997 0 01-.7109-.2969L9.666 22H3a.9993.9993 0 01-1-.9988V11a.9993.9993 0 01.9988-1H9.666l7.623-7.7031A1 1 0 0119 3V29A1.0007 1.0007 0 0118 30zM4 20h6a1.2008 1.2008 0 01.7939.2969L17 26.5684V5.4316l-6.2061 6.2715A1.2013 1.2013 0 0110 12H4z"></path></svg>`;
export default svgResultCarbonIcon;
