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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 19c-2.2056 0-4 1.7944-4 4 0 .6836.1882 1.3174.4917 1.8809-1.8762 1.3726-4.146 2.1191-6.4917 2.1191-6.0654 0-11-4.9346-11-11h-2c0 7.168 5.8318 13 13 13 2.8455 0 5.5923-.936 7.8433-2.6416.6235.4019 1.3613.6416 2.1567.6416 2.2056 0 4-1.7944 4-4s-1.7944-4-4-4zm0 6c-1.1028 0-2-.8975-2-2s.8972-2 2-2 2 .8975 2 2-.8972 2-2 2zM16 3c-2.8455 0-5.5923.936-7.8433 2.6416-.6235-.4019-1.3613-.6416-2.1567-.6416-2.2056 0-4 1.7944-4 4s1.7944 4 4 4 4-1.7944 4-4c0-.6836-.1882-1.3174-.4917-1.8809 1.8762-1.3726 4.146-2.1191 6.4917-2.1191 6.0654 0 11 4.9346 11 11h2c0-7.168-5.8318-13-13-13zM6 11c-1.1028 0-2-.8975-2-2s.8972-2 2-2 2 .8975 2 2-.8972 2-2 2z"></path></svg>`;
export default svgResultCarbonIcon;
