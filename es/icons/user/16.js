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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M8 2c1.4 0 2.5 1.1 2.5 2.5S9.4 7 8 7 5.5 5.9 5.5 4.5 6.6 2 8 2M8 1C6.1 1 4.5 2.6 4.5 4.5S6.1 8 8 8s3.5-1.6 3.5-3.5S9.9 1 8 1zM13 15h-1v-2.5c0-1.4-1.1-2.5-2.5-2.5h-3C5.1 10 4 11.1 4 12.5V15H3v-2.5C3 10.6 4.6 9 6.5 9h3c1.9 0 3.5 1.6 3.5 3.5V15z"></path></svg>`;
export default svgResultCarbonIcon;
