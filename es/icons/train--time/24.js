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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M25.496 10.088L22.874 7.466 22.874 3 25.124 3 25.124 6.534 27.088 8.498 25.496 10.088z"></path><path d="M24,1a6,6,0,1,0,6,6A6.0066,6.0066,0,0,0,24,1Zm1.4971,9.0884L22.875,7.4658V3h2.25V6.5342l1.9639,1.9634Z"></path><path d="M6,16V10h9V8H6.1843A2.9948,2.9948,0,0,1,9,6h6V4H9A5.0057,5.0057,0,0,0,4,9V21a4.99,4.99,0,0,0,3.582,4.77L5.7693,30H7.9451l1.7143-4h8.6812l1.7143,4h2.1758L20.418,25.77A4.99,4.99,0,0,0,24,21V16Zm16,4H19v2h2.8157A2.9948,2.9948,0,0,1,19,24H9a2.9948,2.9948,0,0,1-2.8157-2H9V20H6V18H22Z"></path></svg>`;
export default svgResultCarbonIcon;
