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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22.1213 9.8787a3 3 0 00-4.2426 0l-.4645.4644 1.4142 1.4142.4645-.4645a1 1 0 011.4142 1.4144L17.4142 16l1.4143 1.4142 3.2928-3.2929A3 3 0 0022.1213 9.8787zM12.7071 20.7072a1 1 0 01-1.4142-1.4144L14.5858 16l-1.4142-1.4142L9.8787 17.8787a3 3 0 104.2426 4.2426l.4645-.4644-1.4142-1.4143zM14.1213 9.8787a3 3 0 00-4.2426 4.2426l.4645.4645 1.4142-1.4142-.4645-.4645a1 1 0 011.4142-1.4143L16 14.5858l1.4142-1.4143z"></path><path d="M22.1213,17.8787l-.4645-.4645-1.4141,1.4142.4644.4645a1,1,0,0,1-1.4142,1.4143L16,17.4142l-1.4142,1.4142,3.2929,3.2929a3,3,0,0,0,4.2426-4.2426Z"></path><path d="M16,31a.9988.9988,0,0,1-.5039-.1357l-12-7A1.0008,1.0008,0,0,1,3,23V9a.9994.9994,0,0,1,.4961-.8638l12-7a1,1,0,0,1,1.0078,0l12,7L27.4961,9.8638,16,3.1577,5,9.5742V22.4258l11,6.417,11-6.417V15h2v8a1.0008,1.0008,0,0,1-.4961.8643l-12,7A.9988.9988,0,0,1,16,31Z"></path></svg>`;
export default svgResultCarbonIcon;
