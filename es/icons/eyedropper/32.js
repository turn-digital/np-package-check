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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M2 27H5V30H2zM29.71 7.29l-5-5a1 1 0 00-1.41 0h0L20 5.59l-1.29-1.3L17.29 5.71 18.59 7 8.29 17.29A1 1 0 008 18v1.59l-2.71 2.7a1 1 0 000 1.41h0l3 3a1 1 0 001.41 0h0L12.41 24H14a1 1 0 00.71-.29L25 13.41l1.29 1.3 1.42-1.42L26.41 12l3.3-3.29a1 1 0 000-1.41zM13.59 22h-2L9 24.59 7.41 23 10 20.41v-2l10-10L23.59 12zM25 10.59L21.41 7 24 4.41 27.59 8z"></path></svg>`;
export default svgResultCarbonIcon;
