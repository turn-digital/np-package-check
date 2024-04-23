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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 26c-.2559 0-.512-.0977-.707-.2928l-3-3c-.1953-.1953-.293-.4512-.293-.7071s.0977-.5118.293-.7072l3-3c.1951-.1952.451-.2928.707-.2928s.512.0977.707.2928l3 3c.1953.1953.293.4512.293.7071s-.0977.5118-.293.7072l-3 3c-.1951.1952-.4512.2928-.707.2928zm-1.5857-4l1.5857 1.5858 1.5857-1.5858-1.5857-1.5858-1.5857 1.5858zM22 20c-.2559 0-.512-.0977-.707-.2928l-3-3c-.1953-.1953-.293-.4512-.293-.7071s.0977-.5118.293-.7072l3-3c.1951-.1952.451-.2928.707-.2928s.512.0977.707.2928l3 3c.1953.1953.293.4512.293.7071s-.0977.5118-.293.7072l-3 3c-.1951.1952-.4512.2928-.707.2928zm-1.5857-4l1.5857 1.5858 1.5857-1.5858-1.5857-1.5858-1.5857 1.5858zM16 14c-.2559 0-.512-.0977-.707-.2928l-3-3c-.1953-.1953-.293-.4512-.293-.7071s.0977-.5118.293-.7072l3-3c.1951-.1952.451-.2928.707-.2928s.512.0977.707.2928l3 3c.1953.1953.293.4512.293.7071s-.0977.5118-.293.7072l-3 3c-.1951.1952-.4512.2928-.707.2928zm-1.5857-4l1.5857 1.5858 1.5857-1.5858-1.5857-1.5858-1.5857 1.5858zM10 20c-.2559 0-.512-.0977-.707-.2928l-3-3c-.1953-.1953-.293-.4512-.293-.7071s.0977-.5118.293-.7072l3-3c.1951-.1952.451-.2928.707-.2928s.512.0977.707.2928l3 3c.1953.1953.293.4512.293.7071s-.0977.5118-.293.7072l-3 3c-.1951.1952-.4512.2928-.707.2928zm-1.5857-4l1.5857 1.5858 1.5857-1.5858-1.5857-1.5858-1.5857 1.5858z"></path><path d="m16,1c-.1741,0-.3481.0454-.5039.1362L3.4961,8.1362c-.3071.1792-.4961.5081-.4961.8638v14c0,.3557.189.6846.4961.8638l12,7c.1558.0908.3298.1362.5039.1362s.3481-.0454.5039-.1362l11-6.4166-1.0078-1.7275-10.4961,6.1227-11-6.4166v-12.8513L16,3.1577l11,6.4166v7.4257h2v-8c0-.3557-.189-.6846-.4961-.8638L16.5039,1.1362c-.1558-.0908-.3298-.1362-.5039-.1362Z"></path></svg>`;
export default svgResultCarbonIcon;
