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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17,28V17h1a2.0023,2.0023,0,0,0,2-2V11a2.0023,2.0023,0,0,0-2-2H14a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2h1V28H2v2H30V28ZM14,11h4l.0015,4H14Z"></path><path d="M9.3325 18.2168a7.0007 7.0007 0 010-10.4341l1.334 1.49a5 5 0 000 7.4537zM22.667 18.2168l-1.334-1.49a4.9995 4.9995 0 000-7.4537l1.334-1.49a7 7 0 010 10.4341z"></path><path d="M6.3994 21.8008a11.0019 11.0019 0 010-17.6006L7.6 5.8a9.0009 9.0009 0 000 14.4014zM25.6006 21.8008l-1.2012-1.6a9.001 9.001 0 000-14.4019l1.2012-1.6a11.002 11.002 0 010 17.6011z"></path></svg>`;
export default svgResultCarbonIcon;
