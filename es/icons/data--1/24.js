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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15 6H28V8H15zM15 24H28V26H15zM4 15H17V17H4zM7 11a4 4 0 114-4A4 4 0 017 11zM7 5A2 2 0 109 7 2 2 0 007 5zM7 29a4 4 0 114-4A4 4 0 017 29zm0-6a2 2 0 102 2A2 2 0 007 23zM25 20a4 4 0 114-4A4 4 0 0125 20zm0-6a2 2 0 102 2A2 2 0 0025 14z"></path></svg>`;
export default svgResultCarbonIcon;
