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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30 11.0005v-8a1 1 0 00-1-1H19a1 1 0 00-1 1v8A6.0039 6.0039 0 0023 16.91V28H19v2H29V28H25V16.91A6.0039 6.0039 0 0030 11.0005zm-10 0V4h8v7.0005a4 4 0 11-8 0zM12 2v9.02a3.9644 3.9644 0 01-3.96 3.96A4.0052 4.0052 0 014 11.02V2H2v9.02a5.9888 5.9888 0 005 5.8652V30H9V16.8953A5.9646 5.9646 0 0014 11.02V2z"></path><path d="M7 2H9V11.98H7z"></path></svg>`;
export default svgResultCarbonIcon;
