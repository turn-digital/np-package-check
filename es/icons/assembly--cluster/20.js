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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M21.3 4.9l-4.5-2.7C16.5 2.1 16.3 2 16 2s-.5.1-.7.2l-4.5 2.7C10.3 5.2 10 5.7 10 6.2v5.6c0 .5.3 1 .7 1.3l4.5 2.7c.2.1.5.2.7.2s.5-.1.7-.2l4.5-2.7c.4-.3.7-.7.7-1.3V6.2C22 5.7 21.7 5.2 21.3 4.9zM20 11.5l-4 2.4-4-2.4v-5l4-2.4 4 2.4V11.5zM29.3 18.9l-4.5-2.7C24.5 16.1 24.3 16 24 16s-.5.1-.7.2l-4.5 2.7c-.4.3-.7.7-.7 1.3v5.6c0 .5.3 1 .7 1.3l4.5 2.7c.2.1.5.2.7.2s.5-.1.7-.2l4.5-2.7c.4-.3.7-.7.7-1.3v-5.6C30 19.7 29.7 19.2 29.3 18.9zM28 25.5l-4 2.4-4-2.4v-5l4-2.4 4 2.4V25.5zM13.3 18.9l-4.5-2.7C8.5 16.1 8.3 16 8 16s-.5.1-.7.2l-4.5 2.7C2.3 19.2 2 19.7 2 20.2v5.6c0 .5.3 1 .7 1.3l4.5 2.7C7.5 29.9 7.7 30 8 30s.5-.1.7-.2l4.5-2.7c.4-.3.7-.7.7-1.3v-5.6C14 19.7 13.7 19.2 13.3 18.9zM12 25.5l-4 2.4-4-2.4v-5l4-2.4 4 2.4V25.5z"></path></svg>`;
export default svgResultCarbonIcon;
