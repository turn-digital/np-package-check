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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,23.7285a6.0069,6.0069,0,0,1-6-6v-6.457l6-3,6,3v6.457A6.0069,6.0069,0,0,1,16,23.7285ZM12,12.5073v5.2212a4,4,0,0,0,8,0V12.5073l-4-2Z"></path><path d="M16,31a.9988.9988,0,0,1-.5039-.1357l-12-7A1.0008,1.0008,0,0,1,3,23V9a.9994.9994,0,0,1,.4961-.8638l12-7a1,1,0,0,1,1.0078,0l12,7L27.4961,9.8638,16,3.1577,5,9.5742V22.4258l11,6.417,11-6.417V15h2v8a1.0008,1.0008,0,0,1-.4961.8643l-12,7A.9988.9988,0,0,1,16,31Z"></path></svg>`;
export default svgResultCarbonIcon;
