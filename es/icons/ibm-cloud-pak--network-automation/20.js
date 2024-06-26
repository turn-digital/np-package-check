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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22.3638,21.364,20.95,19.95a6.9993,6.9993,0,0,0,0-9.899L22.3638,8.636a9,9,0,0,1,0,12.728Z"></path><path d="M19.5356 18.5354l-1.414-1.4141a3.0039 3.0039 0 000-4.2426l1.414-1.4141A5.0048 5.0048 0 0119.5356 18.5354zM17 26H15V15a1 1 0 011-1h0a1 1 0 011 1zM12.4644 18.5354a5.0048 5.0048 0 010-7.0708l1.414 1.4141a3.0039 3.0039 0 000 4.2426z"></path><path d="M9.6362,21.364a9,9,0,0,1,0-12.728L11.05,10.0505a6.9993,6.9993,0,0,0,0,9.899Z"></path><path d="M16,31a.9988.9988,0,0,1-.5039-.1357l-12-7A1.0008,1.0008,0,0,1,3,23V9a.9994.9994,0,0,1,.4961-.8638l12-7a1,1,0,0,1,1.0078,0l12,7L27.4961,9.8638,16,3.1577,5,9.5742V22.4258l11,6.417,11-6.417V15h2v8a1.0008,1.0008,0,0,1-.4961.8643l-12,7A.9988.9988,0,0,1,16,31Z"></path></svg>`;
export default svgResultCarbonIcon;
