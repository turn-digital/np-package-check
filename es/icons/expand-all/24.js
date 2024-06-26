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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12,10H26a2.0025,2.0025,0,0,0,2-2V4a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2V5H6V2H4V25a2.0025,2.0025,0,0,0,2,2h4v1a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V24a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2v1H6V17h4v1a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V14a2.0025,2.0025,0,0,0-2-2H12a2.0025,2.0025,0,0,0-2,2v1H6V7h4V8A2.0025,2.0025,0,0,0,12,10Zm0-6H26l.0012,4H12Zm0,20H26l.0012,4H12Zm0-10H26l.0012,4H12Z"></path></svg>`;
export default svgResultCarbonIcon;
