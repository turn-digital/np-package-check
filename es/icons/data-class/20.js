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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,16a3.9612,3.9612,0,0,0-2.02.5657l-2.8586-2.8585,2.293-2.293a2,2,0,0,0,0-2.8284l-6-6a2,2,0,0,0-2.8284,0l-6,6a2,2,0,0,0,0,2.8284l2.293,2.293L8.02,16.5657A4.043,4.043,0,1,0,9.4343,17.98l2.8585-2.8586,2.293,2.293A1.9773,1.9773,0,0,0,15,17.7233V22H12v8h8V22H17V17.7233a1.9773,1.9773,0,0,0,.4142-.3091l2.293-2.293L22.5657,17.98A3.9885,3.9885,0,1,0,26,16ZM8,20a2,2,0,1,1-2-2A2.0023,2.0023,0,0,1,8,20Zm10,4v4H14V24h4Zm-2-8-6-6,6-6,6,6Zm10,6a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,26,22Z"></path></svg>`;
export default svgResultCarbonIcon;