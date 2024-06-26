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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M12.5 7.5l-1.4-1.4 3.5-3.5c.8-.8 2.1-.8 2.8 0l3.5 3.5-1.4 1.4-3.5-3.5-3.5 3.5zM19.5 24.5l1.4 1.4-3.5 3.5c-.8.8-2.1.8-2.8 0l-3.5-3.5 1.4-1.4 3.5 3.5 3.5-3.5zM24.5 12.5l1.4-1.4 3.5 3.5c.8.8.8 2.1 0 2.8l-3.5 3.5-1.4-1.4 3.5-3.5-3.5-3.5zM7.5 19.5l-1.4 1.4-3.5-3.5c-.8-.8-.8-2.1 0-2.8l3.5-3.5 1.4 1.4-3.5 3.5 3.5 3.5z"></path><path d="m26,24c-.2,0-.3,0-.5.1l-6.1-6.1c.8-1.2.8-2.8,0-4l6.1-6.1c.2.1.3.1.5.1,1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2c0,.2,0,.3.1.5l-6.1,6.1c-1.2-.8-2.8-.8-4,0l-6.1-6.1c.1-.2.1-.3.1-.5,0-1.1-.9-2-2-2s-2,.9-2,2,.9,2,2,2c.2,0,.3,0,.5-.1l6.1,6.1c-.8,1.2-.8,2.8,0,4l-6.1,6.1c-.2-.1-.3-.1-.5-.1-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2c0-.2,0-.3-.1-.5l6.1-6.1c1.2.8,2.8.8,4,0l6.1,6.1c0,.2-.1.3-.1.5,0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2Zm-10-6c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"></path></svg>`;
export default svgResultCarbonIcon;
