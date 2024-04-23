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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28.5845,14.585l-3.12-1.8721A4.9951,4.9951,0,0,0,22.8921,12H7.7808L7.16,9.5151A1.9975,1.9975,0,0,0,5.2192,8H4a2.0023,2.0023,0,0,0-2,2v7a3.0033,3.0033,0,0,0,3,3h7v6a2.0023,2.0023,0,0,0,2,2h1.3071A2.0086,2.0086,0,0,0,17.18,26.7021L19.6929,20h7.3916a2.9152,2.9152,0,0,0,1.5-5.415ZM27.0845,18H18.3071l-3,8H14V18H5a1.0009,1.0009,0,0,1-1-1V10H5.2192l1,4H10v2h2V14h3v2h2V14h3v2h2V14h.8921a2.9977,2.9977,0,0,1,1.5434.4277l3.12,1.8721a.9154.9154,0,0,1-.4712,1.7Z"></path><path d="M14,4h1.3228l2.4,6h2.1545L17.18,3.2573A1.9906,1.9906,0,0,0,15.3228,2H14a2.0023,2.0023,0,0,0-2,2v6h2Z"></path></svg>`;
export default svgResultCarbonIcon;
