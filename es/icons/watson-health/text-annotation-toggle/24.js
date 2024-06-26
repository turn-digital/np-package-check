/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.537 13.76L26.24 10.463a1.5862 1.5862 0 00-2.24 0L10 24.4674V30h5.5326L29.537 16a1.5862 1.5862 0 000-2.24zM14.7042 28H12V25.2958l9.4409-9.4409 2.7042 2.7042zM25.5591 17.145L22.855 14.4409l2.2672-2.2672 2.7042 2.7042zM11 17L13 17 13 10 16 10 16 8 8 8 8 10 11 10 11 17z"></path><path d="M8,20H4V4H20V8h2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2H8Z"></path></svg>`;
export default svgResultCarbonIcon;
