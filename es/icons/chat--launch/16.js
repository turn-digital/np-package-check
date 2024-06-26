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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22 4L22 6 26.586 6 20 12.586 21.414 14 28 7.414 28 12 30 12 30 4 22 4zM28 16v4a1.9965 1.9965 0 01-2 2H20l-4 7 1.7358 1 3.4288-6H26a3.9992 3.9992 0 004-4V16zM4 20V8A1.9965 1.9965 0 016 6H18V4H6A3.9986 3.9986 0 002 8V20a3.9992 3.9992 0 004 4h9V22H6A1.9965 1.9965 0 014 20z"></path></svg>`;
export default svgResultCarbonIcon;
