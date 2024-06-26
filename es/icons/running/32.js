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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m21.707,20.293l-5-5c-.1951-.1953-.451-.293-.707-.293s-.512.0977-.707.293L2,28.5859l1.4143,1.4141,12.5857-12.5859,3.5857,3.5859-5.5857,5.5859,1.4143,1.4141,2.292-2.292,4.0007-4.001c.1953-.1953.293-.4512.293-.707s-.0977-.5117-.293-.707Z"></path><path d="m28.5859,9l-5.5859,5.5859-6.0012-6.0015c-.392-.3918-.9073-.5865-1.422-.5845-.5096.002-1.0185.1968-1.4063.5845l-6.1704,6.1753,1.4143,1.4141,6.1704-6.1748,6.7083,6.708c.1951.1953.4512.293.707.293s.512-.0977.707-.293l6.293-6.293-1.4141-1.4141Z"></path><path d="m22.5,9c-1.9299,0-3.5-1.5701-3.5-3.5s1.5701-3.5,3.5-3.5,3.5,1.5701,3.5,3.5-1.5701,3.5-3.5,3.5Zm0-5c-.8271,0-1.5.6729-1.5,1.5s.6729,1.5,1.5,1.5,1.5-.6729,1.5-1.5-.6729-1.5-1.5-1.5Z"></path></svg>`;
export default svgResultCarbonIcon;
