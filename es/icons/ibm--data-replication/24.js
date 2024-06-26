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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M20 20v2h5.22a11.0163 11.0163 0 01-11.97 4.6533l-.4986 1.937A13 13 0 0026 24.293V28h2V20zM25 3a4.0045 4.0045 0 00-4 4 3.954 3.954 0 00.5669 2.019L9.019 21.5669A3.9521 3.9521 0 007 21a4 4 0 104 4 3.954 3.954 0 00-.5669-2.019L22.981 10.4331A3.9518 3.9518 0 0025 11a4 4 0 000-8zM7 27a2 2 0 112-2A2.002 2.002 0 017 27zM25 9a2 2 0 112-2A2.002 2.002 0 0125 9zM16 3A13.04 13.04 0 006 7.707V4H4v8h8V10H6.78a11.0163 11.0163 0 0111.97-4.6533l.4986-1.937A13.0358 13.0358 0 0016 3z"></path></svg>`;
export default svgResultCarbonIcon;
