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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M21.49 13.1151l-9-5a1 1 0 00-1 0l-9 5A1.0078 1.0078 0 002 14v9.9951a1 1 0 00.52.87l9 5A1.0045 1.0045 0 0012 30a1.0559 1.0559 0 00.49-.1349l9-5A.9923.9923 0 0022 24V14A1.0079 1.0079 0 0021.49 13.1151zM11 27.2951l-7-3.89v-7.72l7 3.89zm1-9.45L5.06 14 12 10.1351l6.94 3.86zm8 5.56l-7 3.89v-7.72l7-3.89zM30 6L26 6 26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6z"></path></svg>`;
export default svgResultCarbonIcon;
