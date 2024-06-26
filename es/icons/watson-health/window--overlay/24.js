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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15 6H17V9H15zM25 17H28V19H25zM15 27H17V30H15zM4 17H7V19H4z"></path><path d="M7.55 9.03H9.55V12.03H7.55z" transform="rotate(-45 8.558 10.545)"></path><path d="M21.96 9.54H24.96V11.54H21.96z" transform="rotate(-45 23.466 10.54)"></path><path d="M22.46 23.94H24.46V26.94H22.46z" transform="rotate(-45 23.459 25.443)"></path><path d="M7.04 24.45H10.04V26.45H7.04z" transform="rotate(-45 8.55 25.448)"></path><path d="M4 2H28V4H4zM16 24a6 6 0 10-6-6A6 6 0 0016 24zm0-10v8a4 4 0 010-8z"></path></svg>`;
export default svgResultCarbonIcon;
