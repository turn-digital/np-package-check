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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M14 13H30V15H14zM15 28H30V30H15zM25.85 27H28L23.64 17H21.36L17 27h2.15l.8-2h5.1zm-5.1-4l1.75-4.37L24.25 23zM25.85 12H28L23.64 2H21.36L17 12h2.15l.8-2h5.1zm-5.1-4L22.5 3.63 24.25 8zM6 15.83L8.58 18.41 10 17 6 13 2 17 3.41 18.42 6 15.83zM6 27.17L3.42 24.59 2 26 6 30 10 26 8.59 24.58 6 27.17z"></path></svg>`;
export default svgResultCarbonIcon;
