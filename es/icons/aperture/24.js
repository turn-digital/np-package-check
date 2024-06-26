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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM27.84,14.14,22,17.52V5.62A12,12,0,0,1,27.84,14.14ZM12,18.68V13.32L16,11l4,2.31v5.36L16,21Zm8-14V11L10.34,5.42A11.9,11.9,0,0,1,20,4.7Zm-11.52,2L14,9.85,4,15.62A12,12,0,0,1,8.48,6.66ZM4.16,17.85,10,14.47V26.38A12,12,0,0,1,4.16,17.85ZM12,27.3V21l9.67,5.58A11.92,11.92,0,0,1,16,28,12.05,12.05,0,0,1,12,27.3Zm11.52-2L18,22.14l10-5.77A12,12,0,0,1,23.52,25.34Z"></path></svg>`;
export default svgResultCarbonIcon;
