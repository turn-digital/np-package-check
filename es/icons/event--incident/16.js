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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M21.0176 26.7217L22.016 28.4541 24.9938 26.7322 24.9938 30 26.9907 30 26.9907 26.7316 30.0016 28.4727 31 26.7402 27.9898 24.9996 30.9902 23.2646 29.9918 21.5322 26.9907 23.2677 26.9907 20 24.9938 20 24.9938 23.2672 21.9984 21.5352 21 23.2676 23.9954 24.9996 21.0176 26.7217zM16 23c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5h0zM15 12H17V21H15z"></path><path d="m18,30H3c-.3494,0-.6736-.1824-.8547-.4811-.1814-.2986-.1936-.6703-.0325-.9802L15.1128,3.5387c.1721-.3311.5297-.5387.8872-.5387s.7151.2076.8872.5387l6.76,13-1.7744.9226-5.8728-11.2938L4.6472,28h13.3528v2Z"></path></svg>`;
export default svgResultCarbonIcon;