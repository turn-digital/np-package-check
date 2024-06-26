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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25 23h-.0215a1.0016 1.0016 0 01-.94-.7256L20.8711 11.19l-1.9346 5.1607A1.0005 1.0005 0 0118 17H14V15h3.3066l2.7569-7.3511a1.0005 1.0005 0 011.8984.0762l3.1113 10.8921 1.9786-5.9336A.9988.9988 0 0128 12h4v2H28.7207l-2.7725 8.3164A.9984.9984 0 0125 23zM15 30H13V23a3.0033 3.0033 0 00-3-3H6a3.0033 3.0033 0 00-3 3v7H1V23a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM8 8a3 3 0 11-3 3A3 3 0 018 8M8 6a5 5 0 105 5A5 5 0 008 6z"></path></svg>`;
export default svgResultCarbonIcon;
