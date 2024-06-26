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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M13,30a6.0067,6.0067,0,0,1-6-6H9a4,4,0,0,0,8,0h2A6.0067,6.0067,0,0,1,13,30Z"></path><path d="M21,2H16.5606a4,4,0,0,0-2.7088,1.0566L4.6513,11.5229A2.0018,2.0018,0,0,0,4.77,14.5781a2.0743,2.0743,0,0,0,2.6578-.1728L11,11.1431V24a2,2,0,0,0,4,0V17a2,2,0,0,0,4,0V16a2,2,0,0,0,4,0V15a2,2,0,0,0,4,0V8A6,6,0,0,0,21,2Z"></path></svg>`;
export default svgResultCarbonIcon;
