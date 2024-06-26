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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z"></path><path d="M13 7H15V14H13zM8 7H10V14H8zM22 14H20a2.0021 2.0021 0 01-2-2V9a2.0021 2.0021 0 012-2h2a2.0021 2.0021 0 012 2v3A2.0021 2.0021 0 0122 14zM20 9v3h2V9zM22 18H24V25H22zM8 18H10V25H8zM17 25H15a2.0021 2.0021 0 01-2-2V20a2.0021 2.0021 0 012-2h2a2.0021 2.0021 0 012 2v3A2.0021 2.0021 0 0117 25zm-2-5v3h2V20z"></path></svg>`;
export default svgResultCarbonIcon;
