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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 30H18a2.0021 2.0021 0 01-2-2V18a2.0021 2.0021 0 012-2h2v2H18V28H28V18H26V16h2a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0128 30zM14 16H4a2.0021 2.0021 0 01-2-2V4A2.0021 2.0021 0 014 2H14a2.0021 2.0021 0 012 2V6H14V4H4V14H14V12h2v2A2.0021 2.0021 0 0114 16z"></path><path d="M26,9a2.9926,2.9926,0,0,0-5.8157-1H9v2H20.1843A2.9939,2.9939,0,0,0,22,11.8154V23h2V11.8159A2.9958,2.9958,0,0,0,26,9Zm-3,1a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,23,10Z"></path></svg>`;
export default svgResultCarbonIcon;
