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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24 24v6h6v-6h-6zm4 4h-2v-2h2v2zM2 30h6v-6H2v6zm2-4h2v2h-2v-2z"></path><path d="M26 15h-9v-6.1631c1.4407-.4336 2.5-1.7571 2.5-3.3369 0-1.9297-1.5703-3.5-3.5-3.5s-3.5 1.5703-3.5 3.5c0 1.5798 1.0593 2.9033 2.5 3.3369v6.1631H6c-1.1025 0-2 .8972-2 2v5h2v-5h9v7h-2v6h6v-6h-2v-7h9v5h2v-5c0-1.1028-.8975-2-2-2zM14.5 5.5c0-.8271.6729-1.5 1.5-1.5s1.5.6729 1.5 1.5-.6729 1.5-1.5 1.5-1.5-.6729-1.5-1.5zm2.5 22.5h-2v-2h2v2zM26.5 9c1.9297 0 3.5-1.5703 3.5-3.5s-1.5703-3.5-3.5-3.5-3.5 1.5703-3.5 3.5 1.5703 3.5 3.5 3.5zm0-5c.8271 0 1.5.6729 1.5 1.5s-.6729 1.5-1.5 1.5-1.5-.6729-1.5-1.5.6729-1.5 1.5-1.5zM5.5 9c1.9297 0 3.5-1.5703 3.5-3.5s-1.5703-3.5-3.5-3.5-3.5 1.5703-3.5 3.5 1.5703 3.5 3.5 3.5zm0-5c.8271 0 1.5.6729 1.5 1.5s-.6729 1.5-1.5 1.5-1.5-.6729-1.5-1.5.6729-1.5 1.5-1.5z"></path></svg>`;
export default svgResultCarbonIcon;
