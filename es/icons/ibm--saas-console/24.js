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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="30" cy="20" r="1"></circle><circle cx="2" cy="20" r="1"></circle><path d="m24,26c-2.2165,0-4.1514-1.2112-5.1903-3.0034l-1.7326,1.0002c1.3834,2.3906,3.9622,4.0032,6.9229,4.0032s5.5395-1.6125,6.9229-4.0032l-1.7326-1.0002c-1.0389,1.7922-2.9738,3.0034-5.1903,3.0034Z"></path><path d="m24,14c2.1357,0,4.127,1.1494,5.1973,3l1.7314-1.001c-1.4263-2.4668-4.0815-3.999-6.9287-3.999s-5.5024,1.5322-6.938,4.0151l-3.8647,6.9849c-1.0703,1.8506-3.0615,3-5.1973,3s-4.127-1.1494-5.1973-3l-1.7314,1.001c1.4263,2.4668,4.0815,3.999,6.9287,3.999s5.5024-1.5322,6.938-4.0151l3.8647-6.9849c1.0703-1.8506,3.0615-3,5.1973-3Z"></path><path d="M8 14c2.2165 0 4.1514 1.2112 5.1903 3.0034l1.7326-1.0002c-1.3834-2.3906-3.9622-4.0032-6.9229-4.0032s-5.5395 1.6125-6.9229 4.0032l1.7326 1.0002c1.0389-1.7922 2.9738-3.0034 5.1903-3.0034zM16 6c2.7571 0 5.2571 1.1216 7.0678 2.9321l1.4135-1.4133c-2.1729-2.1731-5.1729-3.5188-8.4813-3.5188s-6.3083 1.3457-8.4813 3.5188l1.4135 1.4133c1.8107-1.8105 4.3107-2.9321 7.0678-2.9321z"></path></svg>`;
export default svgResultCarbonIcon;
