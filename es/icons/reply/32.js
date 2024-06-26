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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28.88,30a1,1,0,0,1-.88-.5A15.19,15.19,0,0,0,15,22v6a1,1,0,0,1-.62.92,1,1,0,0,1-1.09-.21l-12-12a1,1,0,0,1,0-1.42l12-12a1,1,0,0,1,1.09-.21A1,1,0,0,1,15,4v6.11a17.19,17.19,0,0,1,15,17,16.34,16.34,0,0,1-.13,2,1,1,0,0,1-.79.86ZM14.5,20A17.62,17.62,0,0,1,28,26,15.31,15.31,0,0,0,13.91,12,1,1,0,0,1,13,11V6.41L3.41,16,13,25.59V21a1,1,0,0,1,1-1h.54Z"></path></svg>`;
export default svgResultCarbonIcon;
