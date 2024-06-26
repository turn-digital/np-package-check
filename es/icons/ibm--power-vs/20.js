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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16 25c-2 0-4-.7-5.6-2l1.3-1.6c1.3 1 2.8 1.5 4.4 1.5 3.9 0 7-3.1 7-7 0-.3 0-.7-.1-1l2-.3C25 15.1 25 15.6 25 16 25 21 21 25 16 25zM7.1 17.3C7 16.9 7 16.4 7 16c0-5 4-9 9-9 2 0 4 .7 5.6 2l-1.3 1.6C19.1 9.5 17.6 9 16 9c-3.9 0-7 3.1-7 7 0 .3 0 .7.1 1L7.1 17.3z"></path><circle cx="23" cy="27" r="1"></circle><circle cx="9" cy="20" r="1"></circle><circle cx="23" cy="12" r="1"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="9" cy="5" r="1"></circle><path d="M16 30C8.3 30 2 23.7 2 16c0-3.7 1.5-7.3 4.1-9.9l1.4 1.4C5.2 9.8 4 12.8 4 16c0 6.6 5.4 12 12 12 1.4 0 2.8-.2 4.1-.7l.7 1.9C19.3 29.7 17.6 30 16 30zM25.9 25.9l-1.4-1.4c2.3-2.3 3.5-5.3 3.5-8.5 0-6.6-5.4-12-12-12-1.4 0-2.8.2-4.1.7l-.7-1.9C12.7 2.3 14.4 2 16 2c7.7 0 14 6.3 14 14C30 19.7 28.5 23.3 25.9 25.9z"></path></svg>`;
export default svgResultCarbonIcon;
