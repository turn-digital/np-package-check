/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M21 28.414L16 23.413 17.413 22 21 25.586 28.585 18 30 19.415 21 28.414zM12 15.59L9.41 13 8 14.41 12 18.41 19 11.41 17.59 10 12 15.59z"></path><path d="M11.8193,25.8022a11.992,11.992,0,1,1,13.9829-9.6215l-1.9668-.3614A10.001,10.001,0,1,0,12.1807,23.835Z"></path></svg>`;
export default svgResultCarbonIcon;
