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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M10 12H12V14H10zM6 12H8V14H6zM2 12H4V14H2zM26 30H24V27H20a5.0055 5.0055 0 01-5-5V20.7207l-2.3162-.772a1 1 0 01-.5412-1.4631L15 13.7229V11a9.01 9.01 0 019-9h5V4H24a7.0078 7.0078 0 00-7 7v3a.9991.9991 0 01-.1426.5144l-2.3586 3.9312 1.8174.6057A1 1 0 0117 20v2a3.0033 3.0033 0 003 3h5a1 1 0 011 1z"></path><path d="M19 12H23V14H19z"></path></svg>`;
export default svgResultCarbonIcon;
