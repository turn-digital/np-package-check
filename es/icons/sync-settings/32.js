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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M15 24L15 22 11.4 22 22 11.4 22 15 24 15 24 8 17 8 17 10 20.6 10 10 20.6 10 17 8 17 8 24 15 24zM25 20v2h3c1.1 0 2-.9 2-2v-3h-2v3h-3zM28 10H30V14H28zM25 2v2h3v3h2v-3c0-1.1-.9-2-2-2h-3zM18 2H22V4H18z"></path><path stroke-width="0" d="M10 4v3h2v-3h3V2h-3c-1.1 0-2 .9-2 2zM12 10H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8h-2v8H4V12h8v-2z"></path></svg>`;
export default svgResultCarbonIcon;
