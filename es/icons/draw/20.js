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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M19.14,28a3.42,3.42,0,0,1-2.42-5.85L21.86,17a1.42,1.42,0,1,0-2-2L13,21.85a3.5,3.5,0,0,1-4.85,0,3.43,3.43,0,0,1,0-4.84l8.58-8.58a1.42,1.42,0,1,0-2-2L6.41,14.7,5,13.3,13.29,5a3.43,3.43,0,0,1,4.84,4.85L9.56,18.42a1.42,1.42,0,0,0,0,2,1.45,1.45,0,0,0,2,0l6.86-6.86a3.43,3.43,0,1,1,4.85,4.84l-5.15,5.15a1.42,1.42,0,0,0,2,2l4.44-4.43L26,22.56,21.56,27A3.38,3.38,0,0,1,19.14,28Z"></path></svg>`;
export default svgResultCarbonIcon;
