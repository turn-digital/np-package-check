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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z"></path><path d="M17.5 13A3.5 3.5 0 1121 9.5 3.5041 3.5041 0 0117.5 13zm0-5A1.5 1.5 0 1019 9.5 1.5017 1.5017 0 0017.5 8zM14.5 26A3.5 3.5 0 1118 22.5 3.5041 3.5041 0 0114.5 26zm0-5A1.5 1.5 0 1016 22.5 1.5017 1.5017 0 0014.5 21zM9.5 18A3.5 3.5 0 1113 14.5 3.5041 3.5041 0 019.5 18zm0-5A1.5 1.5 0 1011 14.5 1.5017 1.5017 0 009.5 13zM22.5 21A3.5 3.5 0 1126 17.5 3.5041 3.5041 0 0122.5 21zm0-5A1.5 1.5 0 1024 17.5 1.5017 1.5017 0 0022.5 16z"></path></svg>`;
export default svgResultCarbonIcon;
