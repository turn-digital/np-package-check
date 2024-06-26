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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="14" cy="14" r="2"></circle><path d="M20,30a.9967.9967,0,0,1-.707-.293L8.5859,19A2.0126,2.0126,0,0,1,8,17.5859V10a2.002,2.002,0,0,1,2-2h7.5859A1.9864,1.9864,0,0,1,19,8.5859L29.707,19.293a.9994.9994,0,0,1,0,1.414l-9,9A.9967.9967,0,0,1,20,30ZM10,10v7.5859l10,10L27.5859,20l-10-10Z"></path><path d="M12,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2v8H28V4H4V28h8Z"></path></svg>`;
export default svgResultCarbonIcon;
