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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 30H4a2.0023 2.0023 0 01-2-2V24a2.0023 2.0023 0 012-2h8a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0112 30zM4 24v4h8V24zM28 20H12a2.0023 2.0023 0 01-2-2V14a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0128 20zM12 14v4H28V14zM16 10H4A2.0023 2.0023 0 012 8V4A2.0023 2.0023 0 014 2H16a2.0023 2.0023 0 012 2V8A2.0023 2.0023 0 0116 10zM4 4V8H16V4z"></path></svg>`;
export default svgResultCarbonIcon;
