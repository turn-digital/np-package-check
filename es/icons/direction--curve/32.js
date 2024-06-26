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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M17,4l-7,7,1.4141,1.4141L16,7.8281v6.7686a3.01,3.01,0,0,1-.6572,1.874l-2.2471,2.8086A5.0206,5.0206,0,0,0,12,22.4033V28h2V22.4033a3.01,3.01,0,0,1,.6572-1.874l2.2471-2.8086A5.0206,5.0206,0,0,0,18,14.5967V7.8281l4.5859,4.586L24,11Z"></path></svg>`;
export default svgResultCarbonIcon;
