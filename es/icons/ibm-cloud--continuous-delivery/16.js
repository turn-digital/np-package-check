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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23,1l-6,6,1.4146,1.4023,3.5854-3.584V21H10V10h-2v11c0,1.1025,.8972,2,2,2h12c1.1028,0,2-.8975,2-2V4.8154l3.5859,3.5869,1.4141-1.4023L23,1Z"></path><path d="M18.5 19h-5c-.8271 0-1.5-.6729-1.5-1.5v-5c0-.8271.6729-1.5 1.5-1.5h5c.8271 0 1.5.6729 1.5 1.5v5c0 .8271-.6729 1.5-1.5 1.5zm-4.5-2h4v-4h-4v4zM16 31v-2c7.1682 0 13-5.8318 13-13 0-1.2648-.1812-2.5145-.5383-3.7147l1.917-.5706c.4124 1.3855.6213 2.8273.6213 4.2853 0 8.271-6.729 15-15 15zM1.6213 20.2853c-.4124-1.3855-.6213-2.8273-.6213-4.2853C1 7.729 7.729 1 16 1V3c-7.1682 0-13 5.8318-13 13 0 1.2648.1812 2.5145.5383 3.7147l-1.917.5706z"></path></svg>`;
export default svgResultCarbonIcon;
