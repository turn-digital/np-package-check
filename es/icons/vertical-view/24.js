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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 30H4a2.0021 2.0021 0 01-2-2V4A2.0021 2.0021 0 014 2h8a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0112 30zM4 4V28h8V4zM28 30H20a2.0021 2.0021 0 01-2-2V4a2.0021 2.0021 0 012-2h8a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0128 30zM20 4V28h8V4z"></path></svg>`;
export default svgResultCarbonIcon;
