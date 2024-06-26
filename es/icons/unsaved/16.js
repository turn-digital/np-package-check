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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 19.4L28.6 18 25 21.6 21.4 18 20 19.4 23.6 23 20 26.6 21.4 28 25 24.4 28.6 28 30 26.6 26.4 23z"></path><path d="M16,26l-4,0v-8l4,0v-2l-4,0c-1.1,0-2,0.9-2,2v8H6V6h4v4c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6.4l4,4l0,5.6h2l0-6	c0-0.3-0.1-0.5-0.3-0.7l-5-5C22.5,4.1,22.3,4,22,4H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2l10,0V26z M12,6h8v4h-8V6z"></path></svg>`;
export default svgResultCarbonIcon;
