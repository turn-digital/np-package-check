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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20.33,21.48l2.24-2.24a2.19,2.19,0,0,1,2.34-.48l2.73,1.09a2.18,2.18,0,0,1,1.36,2v5A2.17,2.17,0,0,1,26.72,29C7.59,27.81,3.73,11.61,3,5.41A2.17,2.17,0,0,1,5.17,3H10a2.16,2.16,0,0,1,2,1.36l1.09,2.73a2.16,2.16,0,0,1-.47,2.34l-2.24,2.24S11.67,20.4,20.33,21.48Z"></path></svg>`;
export default svgResultCarbonIcon;
